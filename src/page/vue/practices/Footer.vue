<template>
    <div class="footer">
        <div class="count">
            <label>
                <input type="checkbox" v-model="allState" @click="tickAll">
            </label>
            <span><span>已完成{{ completedCount }}</span> / 全部{{ allCount }}</span>
        </div>
        <button class="btn btn-danger" @click="clearAllTasks">清除已完成的全部任务</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name:'Footer',

    props: {
        completedCount: {
            type: Number,
            default: 0
        },
        allCount: {
            type: Number,
            default: 2
        },
        allState: {
            type: Boolean,
            default: false
        }
    },

    setup(props, context) {
        const allState = ref(props.allState);

        function tickAll() {
            context.emit('tickAll', !props.allState)
        }

        function clearAllTasks() {
            context.emit('clearAllTasks')
        }

        return {
            allState,
            tickAll,
            clearAllTasks
        }
    }
})
</script>
<style lang="less" scoped>
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .count {
            padding-left: 5px;
        }
        .btn {

        }
    }
</style>