/*
 * @Author: xingpan 
 * @Date: 2021-10-14 15:14:50 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-07 10:39:18
 */

import { 
    DatePicker, 
    ConfigProvider, 
    Popconfirm, 
    Button, 
    Layout,
    Menu,
    Icon,
    Breadcrumb 
} from "ant-design-vue";

export default {
    install(Vue) {
        [
            DatePicker, 
            ConfigProvider, 
            Popconfirm,
            Button,
            Layout,
            Menu,
            Icon,
            Breadcrumb
        ].forEach(plugin => Vue.use(plugin));
    }
}