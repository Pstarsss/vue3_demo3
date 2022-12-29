<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="">
        <div class="px-title">node 操作命令行</div>
        <div>nrm ls 查看npm下载源</div>
        <div>
            path.resolve: 
            process.cwd(): 返回当前终端所在的工作目录。  
            运行构建&& 独立构建
            <img src="./img/commjs.png">
            构建的两种方式：独立构建和运行时构建 vue.common.js - 独立构建 - 包含模板编译和支持 template 选项。它也依赖于浏览器的接口的存在，所以你不能使用它来为服务器端渲染。 模板编译器的职责是将模板字符串编译为纯 JavaScript 的渲染函数。如果你想要在组件中使用 template 选项，你就需要编译器。 Vuex 存储也一样需要独立构建。 vue.js - 运行时构建 - 不包含模板编译也不支持 template 选项。你可以用 render 函数，只能作用于单文件组件中，因为单文件组件的模板是在构建中预编译到 render 函数里的。 运行时构建比独立构建轻量 30%， 只有 18.01 kb min+gizp 大小。 默认 NPM 包导出的是 运行时 构建。为了使用独立构建，在 webpack 配置中添加下面的别名： resolve: { alias: { 'vue$': 'vue/dist/vue.common.js' } } 对于Browserify，可以添加一个别名到 package.json 中： "browser": { "vue": "vue/dist/vue.common" }, 不要 直接去 导入 这样是不好的 import vue/dist/vue.common
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        onMounted(function () {
        });
    }

})

</script>