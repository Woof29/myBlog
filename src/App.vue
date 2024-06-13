<script setup></script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'default'" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped></style>
