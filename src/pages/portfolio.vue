<script setup>
import NavigationBar from '../components/Layout/NavigationBar.vue';
</script>

<template>
	<main>
		<div class="container">
			<div class="title">
				<span>Portfolio</span>
			</div>

			<ul class="tabList">
				<li class="active">
					<span>Web</span>
				</li>
				<li>
					<span>Video</span>
				</li>
				<li>
					<span>Photography</span>
				</li>
				<li>
					<span>Graphic</span>
				</li>
			</ul>

			<div class="boxList">
				<div class="BLcard" v-for="(item, index) in 5" :key="index">
					<div class="cardPic">
						<img src="https://fakeimg.pl/300x200/660" />
					</div>
				</div>
			</div>
		</div>
		<NavigationBar />
	</main>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
.container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* align-items: flex-start; */
	gap: 16px;
}
.title {
	width: 100%;
	/* padding: 8px 16px; */
	span {
		@include fontStyle(32, 700, #fff);
	}
}
.tabList {
	width: 100%;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 32px;
	/* overflow-x: auto; */
	/* overflow-y: hidden; */
	&::-webkit-scrollbar {
		display: none;
	}
	li {
		padding-bottom: 2px;
		position: relative;
		@include fontStyle(16, 400, #4d4d4d);
		&.active {
			@include fontStyle(16, 700, #fff);
			&::before {
				content: '';
				width: 100%;
				height: 2px;
				background: #fff;
				position: absolute;
				@include pos(bl, 0);
			}
		}
	}
}
</style>
