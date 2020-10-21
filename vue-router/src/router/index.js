import Vue from 'vue'
import Router from 'vue-router'
import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Message from "../views/Message";
import MessageDetail from "../views/MessageDetail";

Vue.use(Router);

export default new Router({
  //n个路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',//path最左边的斜杠永远代表根路径, 所以子路由建议不写斜杠了, 或者写了斜杠就写全称路径
          component: News
        },
        {
          path: 'message',//简化写法
          component: Message,
          children:[
            {
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          //子路由默认显示哪个组件
          path: '/',
          redirect: '/home/news'

        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
