import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'; // 根据你的后端地址修改

createApp(App)
  .use(router)
  .mount('#app');

