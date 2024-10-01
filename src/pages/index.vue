<script setup>
import { analytics } from '../../firebase/firebaseInit';
import { logEvent } from 'firebase/analytics';

const shakeImg = ref(null);
const handleShake = () => {
	logEvent(analytics, 'user_action', { action_type: 'button_click' });
	if (shakeImg.value) {
		shakeImg.value.classList.add('apply-shake');
		setTimeout(() => {
			shakeImg.value.classList.remove('apply-shake');
		}, 500);
	}
};
</script>

<template>
	<div class="container">
		<ul class="menu">
			<li class="item">
				<RouterLink to="/about">About</RouterLink>
			</li>
			<li class="item">
				<RouterLink to="/blog">Blog</RouterLink>
			</li>
			<li class="item">
				<RouterLink to="/portfolio">Portfolio</RouterLink>
			</li>
		</ul>

		<div class="imgWrap">
			<img
				ref="shakeImg"
				src="@/assets/salmon_package.webp"
				@click="handleShake()" />
		</div>

		<div class="bottom">
			<div class="slogan">
				<p>All You Need</p>
				<p>Is Here</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
.container {
	height: 100dvh;
	padding: 36px;
	justify-content: space-between;
	position: relative;
	z-index: 2000;
	overflow: hidden;
	.menu {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 48px;
		@include rwd($rwd-level-two) {
			gap: 12px;
		}
		.item {
			a {
				@include fontStyle(20, 400, #fff);
				padding: 8px 12px;
				position: relative;
				&:hover {
					text-shadow: 1px 0px 20px #c4c4c4c4;
				}
			}
		}
	}

	.imgWrap {
		width: 400px;
		padding-bottom: 400px;
		@include rwd($rwd-level-two) {
			width: 300px;
			padding-bottom: 300px;
		}
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: center;
		position: relative;
		cursor: pointer;

		img {
			width: 100%;
			height: 100%;
			vertical-align: middle;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;

			cursor: pointer;
		}
	}
	.bottom {
		width: 100%;
		.slogan {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 16px;
			p {
				white-space: nowrap;
				@include fontStyle(40, 700);
				@include rwd($rwd-level-two) {
					@include fontStyle(24, 700);
				}
			}
		}
	}
}
</style>
