import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from '@/router';
import App from './App'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount('#app');
