<script setup>
import { RouterLink, onBeforeRouteLeave } from 'vue-router';
import NavigationBar from '../components/Layout/NavigationBar.vue';
import { db } from '../../firebase/firebaseInit';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Vue3Lottie } from 'vue3-lottie';
import wholeFishLottie from '@/assets/whole_fish.json';

const { activePT, setActivePT } = inject('portfolioState');
const { scrollPosition, setScrollPosition } = inject('scrollState');

const isLoading = ref(false);

const portfolioList = ref([]);
const getList = async (topic) => {
	isLoading.value = true;
	try {
		const q = query(collection(db, 'portfolio'), where('topic', '==', topic));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			portfolioList.value.push({ ...doc.data(), id: doc.id });
		});
		isLoading.value = false;
		// console.log(portfolioList.value);
	} catch (error) {
		console.error('Response error:', error);
	}
};

const switchTopic = (v) => {
	portfolioList.value = [];
	setActivePT(v);
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
					<span>Portfolio</span>
				</div>

				<ul class="tabList">
					<li
						:class="{ active: activePT === 'web' }"
						@click="switchTopic('web')">
						<span>Web</span>
					</li>
					<li
						:class="{ active: activePT === 'video' }"
						@click="switchTopic('video')">
						<span>Video</span>
					</li>
					<li
						:class="{ active: activePT === 'photo' }"
						@click="switchTopic('photo')">
						<span>Photography</span>
					</li>
					<li
						:class="{ active: activePT === 'graphic' }"
						@click="switchTopic('graphic')">
						<span>Graphic</span>
					</li>
				</ul>
			</div>

			<div class="boxList">
				<template v-if="portfolioList?.length > 0">
					<RouterLink
						:to="{ name: 'portfolioDetail', params: { id: item.id } }"
						class="BLcard"
						v-for="(item, index) in portfolioList"
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
					<span>loading...</span>
				</div>

				<div
					class="noData"
					v-else-if="!isLoading && portfolioList?.length <= 0">
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
