import { createApp } from "vue";

import store from './common/store/store.js';

import App from "./App.vue";
import ElementPlus from "element-plus";
import components from "./common/Components/index.js";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(components);
app.use(store);

app.mount("#app");