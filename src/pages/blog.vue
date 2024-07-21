<script setup>
import NavigationBar from '../components/Layout/NavigationBar.vue';
import { db } from '../../firebase/firebaseInit';
import { collection, query, where, getDocs } from 'firebase/firestore';

const { activeBT, setActiveBT } = inject('blogState');
const scrollPosition = ref(0);

const blogList = ref([]);
const getList = async (topic) => {
	try {
		const q = query(collection(db, 'blog'), where('topic', '==', topic));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			blogList.value.push({ ...doc.data(), id: doc.id });
		});
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

onMounted(() => {
	getList(activeBT.value);
	window.scrollTo(0, scrollPosition.value);
});

onBeforeRouteLeave((to, from, next) => {
	// 保存滾動位置
	scrollPosition.value = window.scrollY;
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
			</div>
		</div>
		<NavigationBar />
	</main>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
</style>
import { RouterLink } from 'vue-router';
