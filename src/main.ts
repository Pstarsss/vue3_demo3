import { createApp } from "vue";

import store from './common/store/store';
import { Router } from './common/route/index';
import App from "./App.vue";

import ElementPlus from "element-plus";
import { message } from 'ant-design-vue';

import components from "./common/components/index";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(ElementPlus);
app.use(components);
app.use(store);
app.use(Router);

app.mount("#app");