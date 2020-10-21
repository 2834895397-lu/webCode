<template>
  <mt-button type="default" size="small" @click.native="handleClick" plain="true">default</mt-button>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  methods:{
    handleClick(){
      Toast('提示信息')
    }
  }


}
</script>

<style>
</style>
