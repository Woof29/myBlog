<script setup></script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>

  <router-view v-slot="{ Component }" name="modal">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
