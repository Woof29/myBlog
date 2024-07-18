<script setup></script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">
          <div class="home icon"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">
          <div class="about icon"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/blog">
          <div class="blog icon"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/portfolio">
          <div class="portfolio icon"></div>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
nav {
  width: 76px;
  min-height: 100vh;
  background: #0f0f0f;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 0;
  z-index: 99;
  @include rwd($rwd-level-two) {
    width: 100%;
    height: auto;
    min-height: auto;
  }
  ul {
    width: 100%;
    height: 100vh;
    padding: 32px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    @include rwd($rwd-level-two) {
      height: auto;
      padding: 8px;
      flex-direction: row;
      gap: unset;
      justify-content: space-around;
    }
    li {
      a {
        width: 50px;
        height: 50px;
        padding: 8px 12px;
        display: block;
        position: relative;
        transition: all 0.3s ease-out;
        &:hover {
          border-radius: 8px;
          background: rgb(255, 255, 255, 0.1);
        }
        .icon {
          width: 100%;
          height: 100%;
          &.home {
            background: url('@/assets/icon/home_passive.svg') no-repeat center;
          }
          &.about {
            background: url('@/assets/icon/about_passive.svg') no-repeat center;
          }
          &.portfolio {
            background: url('@/assets/icon/portfolio_passive.svg') no-repeat
              center;
          }
          &.blog {
            background: url('@/assets/icon/blog_passive.svg') no-repeat center;
          }
        }
        &.router-link-active {
          .icon {
            width: 100%;
            height: 100%;
            &.home {
              background: url('@/assets/icon/home_active.svg') no-repeat center;
            }
            &.about {
              background: url('@/assets/icon/about_active.svg') no-repeat center;
            }
            &.portfolio {
              background: url('@/assets/icon/portfolio_active.svg') no-repeat
                center;
            }
            &.blog {
              background: url('@/assets/icon/blog_active.svg') no-repeat center;
            }
          }
        }
      }
    }
  }
}
</style>
