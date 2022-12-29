<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 16:29:04 -->
<!-- @desc index -->

<template>
    <div class="">
        终端快捷指令别名：
        alias glp='git log --format="%Cblue%ci %Cred%h %Creset%s %Cgreen%an %Creset%<(8,ltrunc)%b"'
        alias glpcp='glp --cherry-pick --right-only --no-merges'
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