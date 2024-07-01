<script setup>
import { RouterLink } from "vue-router";
import NavigationBar from "../components/Layout/NavigationBar.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="masthead">
        <div class="title">
          <span>Portfolio</span>
        </div>

        <ul class="tabList">
          <li class="active">
            <span>Web</span>
          </li>
          <li>
            <span>Video</span>
          </li>
          <li>
            <span>Photography</span>
          </li>
          <li>
            <span>Graphic</span>
          </li>
        </ul>
      </div>
      <div class="boxList">
        <RouterLink
          to="/portfolio/portfolioDetail"
          class="BLcard"
          v-for="(item, index) in 9"
          :key="index"
        >
          <div class="cardPic">
            <img src="https://fakeimg.pl/300x200/660" />
          </div>
          <div class="cardTitle">
            <span class="title">測試測試</span>
          </div>
          <div class="cardContent">
            <p>
              業父多燈、行兩要因比者土？應受我他建影轉假界吃學他本打可星希開，一連雙住先歡子頭學始變：康文的。多書能求產包並嗎些最裡中？他黃品之車去錢般容口你的方地文子，投動分內有些請中德人方選時活之車是童的筆的；交術行人特細這候看火己細主子又做年子手象為人它特一岸小好三了考建他國商非條沒稱進任都十能問好中之響身動書相一友功，的們看學土，率衣知要得市實一愛給牛年世東官：機定度回作小活女器部認。
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
    <NavigationBar />
  </main>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
</style>
