/*
 * @Author: xingpan 
 * @Date: 2021-10-14 15:14:50 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-11-01 18:33:55
 */

import { DatePicker, ConfigProvider, Popconfirm, Button, message } from "ant-design-vue";

export default {
    install(Vue) {
        [
            DatePicker, 
            ConfigProvider, 
            Popconfirm,
            Button
        ].forEach(plugin => Vue.use(plugin));
    }
}