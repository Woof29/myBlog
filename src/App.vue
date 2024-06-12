<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'default'" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
</style>
