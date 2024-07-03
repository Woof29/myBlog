<script setup>
import YouTubePlayer from "../components/YouTubePlayer.vue";

const playerWidth =
  document.body.clientWidth > 768 ? 800 : document.body.clientWidth * 0.75;
const playerHeight =
  document.body.clientWidth >= 768 ? playerWidth / 2 : playerWidth / 1.6;
</script>

<template>
  <div class="wrap">
    <div class="title">
      <span>測試測試</span>
    </div>

    <YouTubePlayer
      :width="playerWidth"
      :height="playerHeight"
      src="https://www.youtube.com/watch?v=uRzs2kS3Blg"
    />

    <div class="description">
      <p>
        業父多燈、行兩要因比者土？應受我他建影轉假界吃學他本打可星希開，一連雙住先歡子頭學始變：康文的。多書能求產包並嗎些最裡中？他黃品之車去錢般容口你的方地文子，投動分內有些請中德人方選時活之車是童的筆的；交術行人特細這候看火己細主子又做年子手象為人它特一岸小好三了考建他國商非條沒稱進任都十能問好中之響身動書相一友功，的們看學土，率衣知要得市實一愛給牛年世東官：機定度回作小活女器部認。
      </p>
    </div>

    <div class="timestamp">2024-10-12</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
.wrap {
  max-width: 800px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  .title {
    @include fontStyle(24, 700, #fff);
  }
  .description {
    @include fontStyle(16, 400, #fff);
  }
}
</style>
