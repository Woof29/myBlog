import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vant from 'vant';
import '@/style/main.scss';
import App from './App.vue';
import router from './router/router';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Vant);
app.mount('#app');
