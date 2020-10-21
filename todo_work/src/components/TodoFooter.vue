<template>
  <div class="todo-footer">
    <label>
      <!-- 这个理解很重要, 为什么要定义成计算属性(使用get和set方法),
        因为我要根据其他属性来监视这个属性的状态, 根据这个属性的变化也会影响到其他属性的变化-->
      <!--      <input type="checkbox" v-model="isAllCheck"/>-->

      <!--      设置一个占位-->
      <slot name="checkAll"></slot>
    </label>
    <span>
<!--          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}-->
      <slot name="count"></slot>
        </span>
<!--    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>-->
    <slot name="delete"></slot>
  </div>
</template>


<script>
  export default {
    props: {
    },
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
