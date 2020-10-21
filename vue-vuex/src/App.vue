<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="incrementIfOdd()">increment of odd</button>
    <button @click="incrementAsync()">increment of async</button>
  </div>
</template>

<script>
  export default {
    computed: {
      evenOrOdd() {
        //$store为vuex里面的共享库
        //不需要调用, 只需要读取属性值, 注意在js里面写要加this, 在模板({{}})里面写就不用
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      //增加
      increment() {
        //通知vuex去增加
        //  随便指定一定名称, 根据这个名称触发store中对应的action
        this.$store.dispatch('increment')


      },
      //减少
      decrement() {
        this.$store.dispatch('decrement')
      },
      //如果是奇数才增加
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      //过一秒才增加
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      },
    }
  }
</script>

<style>
</style>
