import { createApp } from "vue";

import Antd from 'ant-design-vue/es';

import store from './common/store/store';
import { Router } from './common/route/index';
import App from "./App.vue";


const app = createApp(App);

app.use(Antd);
app.use(store);
app.use(Router);

app.mount("#app");