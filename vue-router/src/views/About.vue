<template>
  <div>
    About
    <p>{{msg}}</p>
    <input type="text" v-model="msg">
  </div>
</template>


<script>
  export default {
    /*路由的另一种传值方式: 通过router-view方式来传*/
    /*接收<router-view>传递过来的属性*/
    props:{
      msg: String
    },
  }
</script>

<style>

</style>
