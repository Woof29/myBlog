<script setup>
import YouTubePlayer from '../components/YouTubePlayer.vue';
import { db } from '../../firebase/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { Vue3Lottie } from 'vue3-lottie';
import wholeFishLottie from '@/assets/whole_fish.json';

const playerWidth =
  document.body.clientWidth > 768 ? 800 : document.body.clientWidth * 0.75;
const playerHeight =
  document.body.clientWidth >= 768 ? playerWidth / 2 : playerWidth / 1.6;
const route = useRoute();
const id = ref(route.params.id);
const type = ref(route.fullPath.split('/')[1]);
const post = ref(null);
const timestamp = ref('');
const isLoading = ref(false);

const getPost = async () => {
  isLoading.value = true;
  try {
    const q = doc(db, type.value, id.value);
    const querySnapshot = await getDoc(q);
    if (querySnapshot.exists()) {
      post.value = querySnapshot.data();
      const sec = post.value.createdAt.seconds * 1000;
      const d = new Date(sec);
      timestamp.value = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    }
    isLoading.value = false;
  } catch (error) {
    console.error('Response error:', error);
  }
};

onMounted(() => {
  getPost();
});
</script>

<template>
  <div class="wrap">
    <template v-if="!isLoading">
      <div class="title">
        <span>{{ post?.title }}</span>
      </div>

      <time class="timestamp">{{ timestamp }}</time>

      <YouTubePlayer
        v-if="post?.topic === 'video'"
        :width="playerWidth"
        :height="playerHeight"
        :src="post?.link"
      />
      <div class="quill-content">
        <div class="ql-editor" v-html="post?.draftContent"></div>
      </div>
    </template>

    <div v-else-if="isLoading" class="loadingWrap">
      <Vue3Lottie :animationData="wholeFishLottie" />
      <span>loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/_variables.scss';
@import '@/style/_method.scss';
@import 'quill/dist/quill.core.css';
@import 'quill/dist/quill.snow.css';
.wrap {
  max-width: 800px;
  min-height: auto;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 32px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .title {
    @include fontStyle(24, 700, #fff);
    position: relative;
    &::after {
      content: '';
      width: 30px;
      height: 2px;
      background: #fff;
      position: absolute;
      @include pos(bl, -16px, 50%);
      transform: translateX(-50%);
    }
  }
  .quill-content {
    :deep(.ql-editor) {
      padding: 0;
    }
    @include rwd($rwd-level-three) {
      width: 300px;
    }
  }
  .timestamp {
    @include fontStyle(12, 40);
  }
}
</style>
