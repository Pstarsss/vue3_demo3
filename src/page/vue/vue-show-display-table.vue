<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 18:45:57 -->
<!-- @desc vue-show-display-table -->

<template>
    <div class="">
        <!-- <px-table></px-table> -->
        
        <!-- 打开摄像头？?  不行-->

        <label for="environment">Capture environment</label>
        <br>
        <input 
            type="file"
            id="environment"
            capture="environment"
            accept="video/*"
        >

        <br>
        <label for="user">Capture user</label>
        <br>
        <input 
            type="file"
            id="user"
            capture="user"
            accept="image/*"
        >
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({

    name: '',

    setup() {

    }
})

</script>

<style lang='less' scoped>

</style>