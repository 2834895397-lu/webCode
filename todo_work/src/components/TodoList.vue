<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>

  </ul>
</template>


<script>
  import TodoItem from "./TodoItem";

  export default {
    /*接收父组件传过来的值*/
    props: {
      todos: Array,
    },
    components: {
      TodoItem
    },
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    list-style: none;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
