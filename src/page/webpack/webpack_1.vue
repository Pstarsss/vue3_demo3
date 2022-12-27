<template>
    <div class="px-wrapper">
        <div class="px-title">
            阅读《webpack实战：入门、进阶与调优》的收集
            <a 
                href="https://weread.qq.com/web/reader/8fc322d07185cc948fc5aa8kecc32f3013eccbc87e4b62e"
                target="_blank"
            >阅读路径</a>
            <a 
                href="https://github.com/yuhaoju/webpack-config-handbook"
                target="_blank"
            >书籍代码地址</a>
        </div>

        <section>
            <ul>
                <li>part1</li>
                <li>
                    Webpack是一个开源的JavaScript模块打包工具，其最核心的功能是解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合并为一个JS文件（有时会有多个，这里讨论的只是最基本的情况）。这个过程就叫作模块打包。
                </li>

                <li>
                    webpack衍生背景
                    开发一个简单的Web应用，其实只需要浏览器和一个简单的编辑器就可以了。
                    最早的Web应用就是这么开发的，因为需求很简单。当应用的规模大了之后，
                    就必须借助一定的工具，否则人工维护代码的成本将逐渐变得难以承受。
                    学会使用工具可以让开发效率成倍地提升，所谓“工欲善其事，必先利其器”就是这个意思。
                </li>

                <li>
                    何为模块
                    开发者奖程序分解为功能离散的chunk， 那么这写拆分出来的chunk 称之为，模块。
                    打个比方：把程序比作一个城市，那么城市里面有不同的职位部门，程序里面的模块好比这些职位部门，都有着特定的功能互不干扰，并且协同工作，才能保证程序的正常允许。
                </li>
            </ul>
        </section>
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

<style lang="less" scoped>

    .px-wrapper {
        padding: 10px 30px;
    }

    ul {
        li {
            padding: 20px;
            list-style: auto;
        }
    }

</style>