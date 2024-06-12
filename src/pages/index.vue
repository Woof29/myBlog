<script setup></script>
<template>
  <div class="container">
    <router-link to="/about">about</router-link>
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
@import "@/style/main.scss";
.container {
  background: #10802cab;
}
</style>
