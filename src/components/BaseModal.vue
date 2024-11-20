<script setup>
import { useModalStore } from '../store/useModalStore';
const modalStore = useModalStore();
const { handleCloseModal } = modalStore;

const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
  handleCloseModal();
};

defineProps({
  top: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '',
  },
  bottom: {
    type: [String, Object],
    default: '',
  },
});
</script>

<template>
  <div class="normalModal">
    <div class="top">
      <span class="title">
        {{ top }}
      </span>
      <span class="closeBtn" @click="closeModal"></span>
    </div>

    <div class="content">
      <span class="stayTuned">
        {{ body }}
      </span>
    </div>

    <div class="bottom">
      {{ bottom }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/main.scss';
.normalModal {
  min-width: 230px;
  padding: 8px;
  margin: auto;
  border: 1px solid $primary-color;
  border-radius: 16px;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    .title {
      @include fontStyle(14, 400, $primary-color);
      flex: 1;
      margin: auto;
      text-align: center;
      position: absolute;
      top: 3px;
      left: 0;
      right: 0;
    }
    .closeBtn {
      @include closeBtnStyle(24);
      position: relative;
      margin: 0;
    }
  }

  .content {
    width: calc(100% - 5px);
    display: flex;
    flex-direction: column;
    gap: 8px;
    @at-root .textList {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      .item {
        padding-left: 16px;
        position: relative;
        @include fontStyle(14, 400, #8f8f8f);
        &::before {
          content: '';
          height: 8px;
          width: 8px;
          background-color: #8f8f8f;
          border-radius: 50%;
          display: inline-block;
          position: absolute;
          top: 4px;
          left: 0;
        }
      }
    }
    @at-root .stayTuned {
      max-width: 360px;
      padding: 0 24px;
      margin-bottom: 10px;
      text-align: center;
      @include fontStyle(14, 400, #8f8f8f);
    }
  }

  .bottom {
    width: 100%;
    padding: 0 24px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .modalButton {
      @include fontStyle(13, 700);
    }
  }
}
</style>
