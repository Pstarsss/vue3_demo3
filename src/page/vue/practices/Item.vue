<template>
    <li class="item">
        <label>
            <input type="checkbox" v-model="todo.isCompleted" @click="updateState">
            <span class="todo-title">{{todo.title}}</span>
        </label>
        <button class="btn btn-danger"  @click="dele">删除</button>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import bus from '@/common/util/bus'
import {Todos} from './constant/practice';
export default defineComponent({
    name:'Item',

    props: {
        todo: {
            type: Object as () => Todos,
            required: true
        },

        index: {
            type: Number,
            required: true
        }
    },

    setup(props, {emit}) {
        
        const dele = ():void => {
            if (window.confirm('您确定要删除吗')) {
                bus.$emit('dele', props.index);
            } 
        }
        
        const updateState = ():void => {
            bus.$emit('changeTodo', {
                index : props.index,
                isCompleted : !props.todo?.isCompleted
            });
        }

        return {
            dele,
            updateState
        }
    
    }
})
</script>

<style lang="less" scoped>
    .item {
        min-height: 30px;
        list-style: none;
        border: 1px solid #ccc;
        margin: 5px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
           .btn {
               display:block;
           }
        }

        .btn {
            display: none; 
            margin-right: 6px;   
        }

        label {
            display: flex;
            align-items: center;
            padding-left: 5px;
            .todo-title {
                font-size: 12px;
                text-indent: 4px;
            }
        }
    }
</style>