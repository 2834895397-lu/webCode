<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--在父组件给子组件TodoHeader绑定addTodo事件监听, 子组件通过$emit()来出发事件-->
      <!--      <TodoHeader @addTodo="addTodo"/>-->

      <TodoHeader ref="header"/>
      <!--组件之间的传值-->
      <TodoList :todos="todos"/>

      <!--给子组件的插槽插标签, 插槽里面的数据在哪里插进去就在哪里定义数据和相关的计算-->
      <Todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll">
        <span slot="count">已完成{{completeSize}}  / 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
      </Todo-footer>

    </div>
  </div>
</template>

<script>
  /*
  * 绑定事件监听  ----  订阅消息
  * 触发事件     ----   发布消息
  *
  * */
  import TodoFooter from "./components/TodoFooter";
  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import PubSub from 'pubsub-js';
  import StorageUtil from "./util/StorageUtil";

  export default {
    components: {
      TodoList,
      TodoHeader,
      TodoFooter
    },
    data() {
      return {
        //从localStorage中读取todos, localStorage一键值对的方式来存取数据的, 我们要的是数组, 所以要转换成json
        //如果没有取到todos_key则取[]
        todos: StorageUtil.readTodos()
      };
    },
    computed:{
      completeSize() {
        /*统计已经完成的数量, reduce函数会返回一个统计值preTotal, preTotal的初始值设置为0, 也就是方法体的最后一个*/
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      isAllCheck: {
        get() {
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        /*改变之后的value, 也就是是否勾选的状态, boolean类型, 是当前chkbox的最新的值*/
        set(value) {
          this.selectAllTodos(value)
        }
      }
    },

    //  监视着todos的改变, 当todos以改变马上将他写入localStorage
    watch: {
      todos: {
        deep: true,//深度监视, 可以监视内部数据的变动
        handler: function (value) {
          //将todos最新的值的json数据, 保存到localStorage中  stringify: 字符串化
          StorageUtil.saveTodos(value)


        }
      }

    },

    mounted() {//执行异步代码, 例如绑定事件监听
      //给<TodoHeader/>绑定事件监听, 指定事件名和回调函数, 子组件通过$emit()来出发事件
      //跟<TodoHeader @addTodo="addTodo"/>作用一样,  给TodoHeader组件绑定事件监听
      this.$refs.header.$on('addTodo', this.addTodo);

      //订阅消息, 回调函数第一个参数是固定的, 必须这么写, 第二个参数为接收的消息  subscribe: 订阅
      //如果直接写function的时候使用this的话, 则this指向的是PubSub对象, 所以回调函数用箭头函数, 当回调函数没有this时, 使用外部的this
      //使用消息订阅的好处就是当两个组件之间进行通信的时候没有任何关联要求
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)

      })

    },


    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)

      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      /*删除所有选中的任务*/
      deleteCompleteTodos() {
        /*返回满足条件的对象*/
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选/全不选
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
