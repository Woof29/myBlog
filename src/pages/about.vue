<script setup>
import NavigationBar from "../components/Layout/NavigationBar.vue";
import YouTubePlayer from "../components/YouTubePlayer.vue";
</script>
<template>
  <main>
    <div class="container">
      <YouTubePlayer
        :width="500"
        :height="300"
        src="https://www.youtube.com/watch?v=uRzs2kS3Blg"
      />
      <div class="boxList">
        <div class="BLcard" v-for="(item, index) in 5" :key="index">
          <div class="cardPic">
            <img src="https://fakeimg.pl/300x200/800" />
          </div>
        </div>
      </div>
    </div>
    <NavigationBar />
  </main>
</template>
<style lang="scss" scoped>
@import "@/style/main.scss";
</style>
