<script setup>
import NavigationBar from '../components/Layout/NavigationBar.vue';
</script>
<template>
  <main>
    <div class="container">
      <div class="dashboard">
        <div class="aboutCard avatar">
          <div class="info">
            <div class="cardPic">
              <img src="@/assets/salmon_avatar.webp" />
            </div>
            <div class="name">
              <strong>輪切 鮭魚</strong>
              <span>KEVIN CHEN</span>
            </div>
          </div>
          <div class="intro">
            <p>
              歡迎來到鮭魚星系，這裡記錄了跟我有關的文字以及影像，由我自己開發以及維護。<br />
              鮭魚星系主體為鮭魚星，有許多小型天體圍繞著鮭魚星，星系中有小型隕石，因此不定時會出現流星，看到時流星時，請記得許下你的願望。<br />另外如果有任何合作可能，請讓我知道！
            </p>
          </div>
        </div>

        <div class="aboutCard experience">
          <span class="title">WORK EXPERIENCE</span>
          <ul>
            <span>Streaming Services Application, 2022 - now</span>
            <li>使⽤ MVVM / MVC 設計模式，開發及維護 Vue3 專案</li>
            <li>負責持續維護與優化整體功能和使用者介面，確保系統穩定性</li>
            <li>
              與 UI / UX 設計師合作，分析並提升使用者體驗，確保產品的一致性
            </li>
            <li>熟悉使用 Video JS 創建符合各種應用場景的影音播放需求</li>
            <li>
              實現多樣化的影音功能，包括瀑布流短影音展示，及用戶評論回覆系統
            </li>
            <li>
              與後端工程師協作，進行API整合，確保前後端資料交換的準確與流暢
            </li>
          </ul>
          <ul>
            <span>I-CHING - Online Divination, 2023 - now</span>
            <li>使用 MVC 設計模式，開發及維護 React 專案</li>
            <li>獨立規劃應用流程，並反覆驗證確保使用者體驗順暢</li>
            <li>使用 i18n，實現多語系切換</li>
            <li>串接 Firestore API，遠端請求占卜結果</li>
            <li>
              串接 Open AI API，將占卜結果交給 AI，請 AI 替使用者解釋卦象的意思
            </li>
            <li>
              串接 Cloud
              Function，將含有敏感訊息的函式放置後端，並由後端發送遠端請求
            </li>
          </ul>

          <ul>
            <span>Salmon System - My Blog, 2024</span>
            <li>
              使⽤ MVVM / MVC 設計模式，開發、維護且結合 Vue3 以及 React 專案
            </li>
            <li>串接 Firestore Storage API，遠端存取圖片和文字</li>
            <li>使用 Quill 技術棧，實現富文本功能，搭建自己的Medium</li>
            <li>使用 YouTube Player 技術棧，創建影音播放實例</li>
          </ul>
        </div>

        <div class="aboutCard contact">
          <span class="title">CONTACT ME</span>
          <div class="wrap">
            <span>Email : kevin8003129@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
    <NavigationBar />
  </main>
</template>
<style lang="scss" scoped>
@import '@/style/main.scss';
.container {
  padding: 80px 24px calc(80px + constant(safe-area-inset-bottom)) 100px;
  padding: 80px 24px calc(80px + env(safe-area-inset-bottom)) 100px;
  align-items: center;
  justify-content: center;
  @include rwd($rwd-level-two) {
    padding: 36px 16px calc(80px + constant(safe-area-inset-bottom));
    padding: 36px 16px calc(80px + env(safe-area-inset-bottom));
  }
}
.dashboard {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
}
.aboutCard {
  width: 100%;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  @include glassmorphism(60);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @include rwd($rwd-level-two) {
    width: 100%;
  }
  .title {
    @include fontStyle(24, 700, #fff);
  }
  ul {
    width: 80%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: inside;
    @include rwd($rwd-level-two) {
      width: 100%;
    }
    span {
      display: block;
      margin-bottom: 4px;
      @include fontStyle(18, 700, #fff);
    }
    li {
      @include fontStyle(14, 400, #fff);
    }
  }
}

.avatar {
  .info {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    @include rwd($rwd-level-two) {
      width: 200px;
    }
    &::after {
      content: '';
      width: 40px;
      height: 2px;
      background: #fff;
      position: absolute;
      @include pos(bl, -16px, 50%);
      transform: translateX(-50%);
    }
    .name {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      @include rwd($rwd-level-two) {
        flex-direction: column;
        gap: 0;
      }
      span {
        @include fontStyle(20, 400, #fff);
        @include rwd($rwd-level-two) {
          font-size: 16px;
        }
      }
      strong {
        @include fontStyle(24, 700, #fff);
        @include rwd($rwd-level-two) {
          font-size: 20px;
        }
      }
    }
  }
  .intro {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      padding: 0 8px;
      @include fontStyle(14, 400, #fff);
    }
    span {
      @include fontStyle(14, 400, #fff);
    }
  }
  .cardPic {
    width: 100%;
    padding-bottom: 100%;
  }
}

.contact {
  .title {
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
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include fontStyle(14, 400, #fff);
  }
}
</style>
