<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <!--工作流程: 先到router_link, 然后把路径和值传给router, 找到对应的component之后再渲染回来-->
        <router-link :to="'/home/message/detail/'+ message.id">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>

    <!--路由的回退功能-->
    <button @click="$router.back()">回退</button>

    <hr>
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        messages: []
      }
    },
    methods: {
      pushShow(id) {
        //通过按钮的点击事件的方式来动态加载路由并且渲染到<router-view>中
        //压路由栈
        this.$router.push('/home/message/detail/' + id)
      },
      replaceShow(id) {
        //替换路由栈
        this.$router.replace('/home/message/detail/' + id)
      }
    },
    /*通过路由来挂在上去只会执行一次这个函数, 所以要使用监视来监视路由传递的值来动态调用这个方法*/
    mounted() {
      //模拟ajax请求从后台获取数据
      const messages = [
        {
          id: 1,
          title: 'message01'
        },
        {
          id: 2,
          title: 'message02'
        },
        {
          id: 4,
          title: 'message04'
        },
      ];
      this.messages = messages;
    },

  }
</script>

<style>

</style>
