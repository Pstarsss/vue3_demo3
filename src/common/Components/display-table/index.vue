<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="px-table">
        <a-config-provider>
            <div class="example">
                <a-table :data-source="dataSource" :columns="[]" />
            </div>
        </a-config-provider>
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted, defineProps } from 'vue';

export default defineComponent({

    name: 'displayTable',

    setup() {
        const props = defineProps<{
            records: {
                type: Array<Object>,
                default: []
            },

            options: {
                type: Object,
                default: {}
            }
        }>();

/*
    options处理： columns && rowKey属性 
    对columns的title && row 设置插槽属性。
    records: 数据 watct处理。 
*/

        return {
            columns: []
        }
    }
})

</script>

<style lang='less' scoped>
    .px-table {

    }
</style>