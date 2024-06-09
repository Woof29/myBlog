<script setup></script>
<template>
	<div class="container">
		<div class="boxList">
			<div class="BLcard" v-for="(item, index) in 9" :key="index">
				<div class="cardPic">
					<img src="https://fakeimg.pl/300x200/200" />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/style/main.scss';
</style>
