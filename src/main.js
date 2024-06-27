import { createApp } from 'vue';
import '@/style/main.scss';
import App from './App.vue';
import router from './router/router';
import Vue2Editor from 'vue2-editor';

const app = createApp(App);
app.use(Vue2Editor);
app.use(router);
app.mount('#app');
