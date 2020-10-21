// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*只导入一部分组件*/
import { Button, Cell } from 'mint-ui'
//注册成全局标签(全局)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
