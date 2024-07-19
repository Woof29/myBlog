<script setup>
import NavigationBar from '../components/Layout/NavigationBar.vue';
</script>
<template>
  <main>
    <div class="container">
      <div class="dashboard">
        <div class="aboutCard avatar">
          <div class="cardPic">
            <img src="@/assets/salmon_avatar.webp" />
          </div>
          <div class="name">
            <strong>KEVIN CHEN</strong>
            <span>陳 昀瑱</span>
          </div>
        </div>

        <div class="aboutCard experience">
          <span class="title">WORK EXPERIENCE</span>
          <ul>
            <span>YangFan Tech Ltd., 2022 - now</span>
            <li>
              負責持續維護與優化應用程式的整體功能和使用者介面，確保系統穩定性及高效運行。
            </li>
            <li>
              與UI/UX設計師密切合作，深入分析並提升使用者體驗，確保設計與實作的一致性。
            </li>
            <li>
              主導並實現多樣化的影音功能，包括瀑布流短影音展示，及用戶評論回覆系統，滿足不同的客戶需求。
            </li>
            <li>
              與後端工程師協作，進行API的開發與整合，確保前後端資料交換的準確與流暢。
            </li>
          </ul>
          <ul>
            <span>SKY EYE LEAGUE Ltd., 2021 - 2022</span>
            <li>將公司作品記錄成影音。</li>
            <li>影音企劃發想。</li>
            <li>現場拍攝以及後製剪輯。</li>
          </ul>
        </div>

        <div class="aboutCard intro">
          <span class="title">ABOUT ME</span>
          <p>
            大學畢業後，我懷抱著理想和熱情，開始了創業之路。雖然這段經歷充滿挑戰，讓我經歷了不少挫折，但也因此積累了豐富的經驗，並且不斷學習和成長。起初，我從事影像製作行業，經歷了多間公司的磨練。在這個過程中，我獲得了一個邊工作邊學習前端技能的機會，並就此踏上了前端工程師的職業道路。
            如今的我，依然保有創業時的熱情和創意，但變得更加成熟穩重，且懂得如何有效地與他人合作。我相信，這些經驗使我能夠在未來的工作一展長才，並為團隊帶來更多的價值。
          </p>
        </div>
        <div class="aboutCard skill">
          <span class="title">SKILL</span>
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
}
.dashboard {
  width: 100%;
  height: 100dvh;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  .aboutCard {
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    @include glassmorphism(60);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .title {
      @include fontStyle(24, 700, #fff);
    }
  }
}
.experience,
.intro {
  width: 60%;
  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: inside;
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

.avatar,
.skill {
  width: calc(100% / 3);
  .name {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    span {
      @include fontStyle(20, 400, #fff);
    }
    strong {
      @include fontStyle(24, 700, #fff);
    }
  }
  .cardPic {
    width: 60%;
    padding-bottom: 60%;
  }
}
</style>
