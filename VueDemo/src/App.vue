<template>
  <div>
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addComment="addComment"/>
        <!--组件之间的传值: 属性可以自己定义一个, 但是最好是跟传过去的数据同名-->
        <List :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
  </div>
</template>

<script>
  //1. 引入组件
  import Add from './components/Add'
  import List from './components/List'

  export default {
    //2. 映射组件标签
    components: {//数据在哪个组件, 更新数据的行为(方法)就应该定义在哪个组件中
      Add: Add,
      List: List
    },
    data(){
      return{
        comments: [
          {
            name: 'BOB',
            content: 'Vue 还不错'
          },
          {
            name: 'Cat',
            content: 'Vue So Easy'
          },
          {
            name: 'BZ',
            content: 'Vue So So'
          }
        ]
      }
    },
    methods:{
      //添加评论
      addComment(comment){
        //添加到最前面
        this.comments.unshift(comment)
      },
      //删除指定下标的评论
      deleteComment(index){
        /*删除下标为index的评论*/
        this.comments.splice(index, 1)

      }
    }
  }

</script>

<style>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
