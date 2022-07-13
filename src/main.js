import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 중간에 위치해서 연결해주는 것을 미들웨어라고 함
createApp(App).use(router).mount('#app');
