/*
 * @Author: xingpan 
 * @Date: 2021-10-14 15:14:50 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-14 16:41:34
 */

import { DatePicker } from "ant-design-vue";

export default {
    install(Vue) {
        [DatePicker].forEach(plugin => Vue.use(plugin));
    }
}