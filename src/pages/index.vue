<script setup></script>
<template>
  <div class="container">
    <ul class="menu">
      <li class="item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="item">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="item">
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
    </ul>

    <div class="bottom">
      <div class="imgWrap">
        <img src="@/assets/salmon_steak-02.webp" alt="" />
      </div>
      <div class="slogan">
        <p>All You</p>
        <p>Need Is Here</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/style/main.scss";
.container {
  padding: 36px;
  background: rgb(12, 64, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 48px;
    @include rwd(760) {
      gap: 12px;
    }
    .item {
      a {
        padding: 8px 12px;
      }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .imgWrap {
      max-width: 350px;
      @include rwd(760) {
        width: 200px;
        height: 200px;
      }
      img {
        object-fit: cover;
      }
    }
    .slogan {
      padding-bottom: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 36px;
      flex: 1;
      @include rwd(760) {
        gap: 12px;
      }
      p {
        white-space: nowrap;
        @include fontStyle(56, 700);
        @include rwd(760) {
          @include fontStyle(24, 700);
        }
      }
    }
  }
}
</style>
