<script setup>
import { useModalStore } from '../store/useModalStore';
import { storeToRefs } from 'pinia';

const modalStore = useModalStore();
const { handleCloseModal } = modalStore;
const { isVisible, modalComp, modalProps } = storeToRefs(modalStore);
</script>

<template>
  <van-popup v-model:show="isVisible" @click-overlay="handleCloseModal">
    <div class="modalContent" @click.stop>
      <component :is="modalComp" v-bind="modalProps" />
    </div>
  </van-popup>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
.modalContent {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
