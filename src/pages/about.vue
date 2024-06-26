<script setup>
import NavigationBar from "../components/Layout/NavigationBar.vue";
</script>
<template>
  <main>
    <div class="container">
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
