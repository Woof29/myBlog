<script setup>
const router = useRouter();
const goBack = () => {
  router.go(-1);
};

const activePT = ref('web');
const activeBT = ref('tech');
const scrollPosition = ref(0);
const windowWidth = window.innerWidth;

const setActivePT = (tab) => {
  activePT.value = tab;
};
const setActiveBT = (tab) => {
  activeBT.value = tab;
};

const setScrollPosition = (v) => {
  scrollPosition.value = v;
};

provide('portfolioState', {
  activePT,
  setActivePT,
});
provide('blogState', {
  activeBT,
  setActiveBT,
});
provide('scrollState', {
  scrollPosition,
  setScrollPosition,
});

const starryNight = ref(null);

class StarrySky {
  constructor(container) {
    this.container = container;
    this.stars = [];
    this.shootingStars = [];
    this.resizeHandler = this.adjustStarCount.bind(this);
    this.shootingStarInterval = null;
  }

  createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 2 + 2}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationName = 'twinkle';
    star.style.animationIterationCount = 'infinite';
    this.container.appendChild(star);
    this.stars.push(star);
  }

  createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    shootingStar.style.right = '0';
    shootingStar.style.top = `${Math.random() * 50}%`;
    shootingStar.style.animationDuration = '1s';
    shootingStar.style.animationName = 'shoot';
    shootingStar.style.animationTimingFunction = 'linear';
    this.container.appendChild(shootingStar);
    this.shootingStars.push(shootingStar);
    setTimeout(() => {
      shootingStar.remove();
      this.shootingStars = this.shootingStars.filter((s) => s !== shootingStar);
    }, 1000);
  }

  initStars(count) {
    for (let i = 0; i < count; i++) {
      this.createStar();
    }
  }

  adjustStarCount() {
    const starCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    if (this.stars.length > starCount) {
      for (let i = starCount; i < this.stars.length; i++) {
        this.stars[i].remove();
      }
      this.stars = this.stars.slice(0, starCount);
    } else if (this.stars.length < starCount) {
      for (let i = this.stars.length; i < starCount; i++) {
        this.createStar();
      }
    }
  }

  startShootingStars() {
    this.shootingStarInterval = setInterval(
      () => this.createShootingStar(),
      10000
    );
  }

  stopShootingStars() {
    clearInterval(this.shootingStarInterval);
  }

  start() {
    this.initStars(120);
    window.addEventListener('resize', this.resizeHandler);
    this.adjustStarCount();
    this.startShootingStars();
  }

  stop() {
    window.removeEventListener('resize', this.resizeHandler);
    this.stopShootingStars();
    this.stars.forEach((star) => star.remove());
    this.shootingStars.forEach((star) => star.remove());
    this.stars = [];
    this.shootingStars = [];
  }
}

let starrySky = null;

onMounted(() => {
  starrySky = new StarrySky(starryNight.value);
  starrySky.start();
});

onUnmounted(() => {
  if (starrySky) {
    starrySky.stop();
  }
});
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>

  <router-view v-slot="{ Component }" name="modal">
    <transition :name="windowWidth < 768 ? 'Slide-in' : ''">
      <div v-if="Component" class="modalBG" @click.prevent="goBack">
        <div class="modalContainer" @click.stop>
          <div class="top">
            <div class="closeBtn" @click.prevent="goBack"></div>
          </div>

          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </div>
      </div>
    </transition>
  </router-view>

  <div ref="starryNight" class="starry-night"></div>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
</style>
