<script setup>
const shakeImg = ref(null);
const handleShake = () => {
  shakeImg.value.classList.add("apply-shake");
  setTimeout(() => {
    shakeImg.value.classList.remove("apply-shake");
  }, 500);
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
        @click="handleShake()"
      />
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
@import "@/style/main.scss";
.container {
  padding: 36px;
  justify-content: space-between;
  position: relative;
  z-index: 2000;
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
        position: relative;
        &::after {
          content: "";
          width: 0;
          height: 1px;
          background: #fff;
          position: absolute;
          @include pos(bl, 6px, 12px);
          transition: width 0.3s ease-in;
        }
        &:hover {
          color: #fff;
          &::after {
            width: calc(100% - 22px);
          }
        }
      }
    }
  }

  .imgWrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 500px;
      height: 500px;
      @include rwd($rwd-level-one) {
        width: 300px;
        height: 300px;
      }
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
        @include rwd($rwd-level-one) {
          @include fontStyle(24, 700);
        }
      }
    }
  }
}
</style>
