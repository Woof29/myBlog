import { createApp } from "vue";
import "@/style/main.scss";
import App from "./App.vue";
import router from "./router/router";
import Vue from "vue";
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

const app = createApp(App);
app.use(router);
app.mount("#app");
