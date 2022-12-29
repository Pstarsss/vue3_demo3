<template>
    <input class="text" type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addInfo" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name:'Header',

    setup(props, {emit}) {
        let title = ref('');

        function addInfo():void {
            if (title) {
               emit('addInfo', title.value.trim());
               title.value = '';
            }
        }

        return {
            title,
            addInfo
        }
    }
})
</script>

<style scoped lang="less">
    .text {
        display: block;
        width: 100%;
        outline: none;
        border: 0;
        background: transparent;
        border: 1px solid #ccc;
        padding: 5px 0;
        box-sizing: border-box;
        text-indent: 10px;
    }
</style>