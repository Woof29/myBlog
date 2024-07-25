<script setup>
import { RouterLink, onBeforeRouteLeave } from 'vue-router';
import NavigationBar from '../components/Layout/NavigationBar.vue';
import { db } from '../../firebase/firebaseInit';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Vue3Lottie } from 'vue3-lottie';
import wholeFishLottie from '@/assets/whole_fish.json';

const { activeBT, setActiveBT } = inject('blogState');
const { scrollPosition, setScrollPosition } = inject('scrollState');

const isLoading = ref(false);

const blogList = ref([]);
const getList = async (topic) => {
	isLoading.value = true;
	try {
		const q = query(collection(db, 'blog'), where('topic', '==', topic));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			blogList.value.push({ ...doc.data(), id: doc.id });
		});
		isLoading.value = false;
		// console.log(blogList.value);
	} catch (error) {
		console.error('Response error:', error);
	}
};

const switchTopic = (v) => {
	blogList.value = [];
	setActiveBT(v);
	getList(v);
};

onMounted(async () => {
	await getList(activePT.value);
	window.scrollTo(0, scrollPosition.value);
});

onBeforeRouteLeave((to, from, next) => {
	// 保存滾動位置
	setScrollPosition(window.scrollY);
	next();
});
</script>

<template>
	<main>
		<div class="container">
			<div class="masthead">
				<div class="title">
					<span>Blog</span>
				</div>

				<ul class="tabList">
					<li
						:class="{ active: activeBT === 'tech' }"
						@click="switchTopic('tech')">
						<span>Tech</span>
					</li>
					<li
						:class="{ active: activeBT === 'photo' }"
						@click="switchTopic('photo')">
						<span>Photography</span>
					</li>
					<li
						:class="{ active: activeBT === 'travel' }"
						@click="switchTopic('travel')">
						<span>Travel</span>
					</li>
					<li
						:class="{ active: activeBT === 'note' }"
						@click="switchTopic('note')">
						<span>Note</span>
					</li>
				</ul>
			</div>
			<div class="boxList">
				<template v-if="blogList.length > 0">
					<RouterLink
						:to="{ name: 'blogDetail', params: { id: item.id } }"
						class="BLcard"
						v-for="(item, index) in blogList"
						:key="index">
						<div class="cardPic">
							<img :src="item.coverUrl" />
						</div>
						<div class="cardTitle">
							<span class="title">{{ item.title }}</span>
						</div>
						<div class="cardContent">
							<p>{{ item.preview }}</p>
						</div>
					</RouterLink>
				</template>

				<div v-else-if="isLoading" class="loadingWrap">
					<Vue3Lottie :animationData="wholeFishLottie" />
				</div>

				<div class="noData" v-else-if="!isLoading && blogList.length <= 0">
					<div class="cardPic">
						<img src="@/assets/noData.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<NavigationBar />
	</main>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
</style>
import { RouterLink } from 'vue-router';
