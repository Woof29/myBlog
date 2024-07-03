<script setup>
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <router-view v-slot="{ Component }" name="modal">
    <div v-if="Component" class="modalBG" @click.prevent="goBack">
      <div class="modalContainer" @click.stop>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </div>
    </div>
  </router-view>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
.modalBG {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}
.modalContainer {
  width: calc(100% - 80px);
  height: calc(100vh - 100px);
  padding: 24px;
  border-radius: 24px;
  background: #101010;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
