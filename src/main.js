import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp();
app.config.productionTip = false;

app.use(Antd);

createApp(App).use(router).mount('#app')
