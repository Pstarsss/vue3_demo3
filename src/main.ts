import { createApp } from "vue";

import Store from './common/store';

import App from "./App.vue";
import ElementPlus from "element-plus";
import Components from "./common/Components/index.js";
import "element-plus/lib/theme-chalk/index.css";

createApp(App)
    .use(ElementPlus)
    .use(Components)
    .use(Store)
    .mount("#app");