<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length ===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!--组件之间的传值, 把值传给子组件Item-->
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment"></Item>
    </ul>
  </div>
</template>


<script>
  import Item from './Item'

  export default {
    //  声明接收属性(指定属性名和属性值的类型), 这个属性就会成为组件对象的属性
    props: {
      comments: Object,
      deleteComment: Function
    },
    components: {
      Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }


</style>
