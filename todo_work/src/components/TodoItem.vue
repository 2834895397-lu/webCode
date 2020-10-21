<template>
  <!--如果是over和out事件的话, 则子元素相当于空的, 也就是移进去子元素时会触发out, 从子元素移到父元素时会触发over-->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>


<script>
  import PubSub from 'pubsub-js'
  export default {
    props: {
      todo: Object,
      index: Number,
    },
    data() {
      return {
        bgColor: 'white',//默认的背景颜色
        isShow: false//按钮默认是否显示
      }

    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = '#aaaaaa';
          this.isShow = true
        } else {
          this.bgColor = 'white';
          this.isShow = false
        }


      },
      deleteItem(index) {
        if (window.confirm('确认删除' + this.todo.title + '吗?')) {
          // this.deleteTodo(index)

          //发布消息, 第一个参数为消息的名字, 第二个参数为消息
          PubSub.publish('deleteTodo', index)

        }

      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
