<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2023-03-21 22:47:36 -->
<!-- @desc xss -->

<template>
    <div class="">
        <input type="text" v-model="inputValue">
        <button>搜索</button>
        <div>
            您搜索的关键词是：{{ inputValue }}
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        const inputValue = ref('');
        
        return {
            inputValue,
        }
    }

})

</script>

<style lang='less' scoped>

</style>