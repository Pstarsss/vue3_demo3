<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="">
        <a-config-provider>
            <div class="example">
                <a-table :data-source="dataSource" :columns="columns" />
            </div>
        </a-config-provider>
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted } from 'vue';

export default defineComponent({

    name: 'displayTable',

    props: {
        records: {
            type: Array,
            default: []
        }
    },
    
    setup() {
        return {
            columns: {}
        }
    }
})

</script>

<style lang='less' scoped>

</style>