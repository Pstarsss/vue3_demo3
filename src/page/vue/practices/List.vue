<template>
    <ul class="todo-main">
        <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" />
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'
import {Todos} from './constant/practice';

export default defineComponent({
    name:'List',

    components: {
        Item
    },

    props: {
        todos: Object as () => Todos
    }
})
</script>
<style lang="less" scoped>
    .todo-main{
        margin: 0;
        padding: 0;
        margin: 10px 0;
    }
</style>