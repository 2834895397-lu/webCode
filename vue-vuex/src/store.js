/*
* vuex核心管理对象模块
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义状态对象
const state = {
  //初始化状态
  count: 0

};
//包含多个更新state函数的对象, action通过commit来触发
const mutation = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }

};
//包含多个更新state函数的对象, 组件通过dispatch来出发
const actions = {
  //增加的action
  increment({commit}) {
    //提交增加的mutation
    commit('INCREMENT');
  },
  //减少的action
  decrement({commit}) {
    //提交增加的mutation
    commit('DECREMENT');
  },
  //带条件的action
  incrementIfOdd({commit, state}) {
    if (state.count % 2 === 1) {
      //提交增加的action
      commit('INCREMENT')
    }
  },

  //异步的action
  incrementAsync({commit}) {
    setTimeout(() => {
      //提交增加的action
      commit('INCREMENT')
    }, 1000)
  }
};
//包含多个getter计算属性函数的对象
const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default Vuex.Store({
  state,//定义状态对象
  mutation,//包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters, //包含多个getter计算属性函数的对象
})



