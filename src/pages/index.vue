<script setup></script>
<template>
  <div class="container">
    <ul class="menu">
      <li class="item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="item">
        <router-link to="/about">Blog</router-link>
      </li>
      <li class="item">
        <router-link to="/about">Portfolio</router-link>
      </li>
    </ul>
    <!-- <div class="boxList">
      <div class="BLcard" v-for="(item, index) in 9" :key="index">
        <div class="cardPic">
          <img src="https://fakeimg.pl/300x200/200" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import "@/style/main.scss";
.container {
  background: rgb(12, 64, 255);
}
</style>
