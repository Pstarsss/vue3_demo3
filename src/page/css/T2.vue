<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
  <div class="T2">
    <a-button type="primary" @click="changeLocale"> changeLocale </a-button>

    <div>
        overflow-wrap :
        是用来说明当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行
        overflow-wrap: break-word; 一般使用该属性去过长的单词换行展示.
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

export default {
    name: "T2",

    setup() {
        const changeLocale = inject("changeLocale");
        const messageInfo = inject("$messageInfo");

        onMounted(() => {
            messageInfo("洒大地撒的撒的");
        });

        return {
            changeLocale,
        };
    },
};
</script>
