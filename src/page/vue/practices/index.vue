<template>
    <div class="card">
        <Header @addInfo="addInfo" />
        <List :todos="todos" />
        <Footer 
            :completedCount="completedCount" 
            :allCount="todos.length" 
            :allState="allState" 
            @tickAll="tickAll"  
            @clearAllTasks="clearAllTasks" 
        />
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, provide, onMounted, onUnmounted, computed } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import List from './List.vue';

import bus from 'px-admin/common/util/bus';
import {Todos} from './constant/practice'

export default defineComponent({
    name:'IndexPractice',
    components: {
        Header,
        Footer,
        List
    },
    setup() {
        const tempState = reactive <{todos: Todos []}>({
            todos: [
                {id:1, title:'宝马', isCompleted:true},
                {id:2, title:'奔驰', isCompleted:false},
                {id:3, title:'玛莎', isCompleted:true},
            ]
        });
        
        function addInfo(message: string) {
            tempState.todos.unshift({
                id: Date.now(),
                title: message,
                isCompleted: false
            })
        };

        function tickAll(allState:boolean) {
            tempState.todos.forEach(i => i.isCompleted = allState);
        };

        function clearAllTasks() {
            tempState.todos = [];
        };

        const completedCount = computed(() => tempState.todos.filter(i => i.isCompleted).length);
        const allState = computed(() => tempState.todos.every(i => i.isCompleted));

        onUnmounted(() => {
            bus.$off('dele');
            bus.$off('changeTodo');
        });

        onMounted(() => {
            bus.$on('dele', (index: number) => {
                tempState.todos.splice(index, 1);
            });

            bus.$on('changeTodo', ({index, isCompleted}) => {
                tempState.todos[index].isCompleted = isCompleted;
            });
        });

        return {
            ...toRefs(tempState),
            addInfo,
            completedCount,
            allState,
            tickAll,
            clearAllTasks
        }
    }
})
</script>

<style lang="less"  scoped >
   .card{
       display: block;
       box-sizing: border-box;
       border: 1px solid #ccc;
       width: 600px;
       margin: 0 auto;
       padding: 10px;
   } 
</style>