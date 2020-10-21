<template>
  <ul>
    <li>id: {{messageDetail.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.centent}}</li>
  </ul>
</template>


<script>
  const allMessageDetail = [
    {
      id: 1,
      title: 'message01',
      centent: 'message01 content....'
    },
    {
      id: 2,
      title: 'message02',
      centent: 'message02 content....'
    },
    {
      id: 4,
      title: 'message04',
      centent: 'message04 content....'
    },
  ];
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },
    mounted() {
      const allMessageDetail = [
        {
          id: 1,
          title: 'message01',
          centent: 'message01 content....'
        },
        {
          id: 2,
          title: 'message02',
          centent: 'message02 content....'
        },
        {
          id: 4,
          title: 'message04',
          centent: 'message04 content....'
        },
      ];
      this.allMessageDetail = allMessageDetail;
      /*得到的id有可能是文本, 所以要把它转换为int类型才能比较*/
      const id = this.$route.params.id*1

      this.messageDetail = this.allMessageDetail.find(detail => detail.id === id)
    },
    watch:{
      $route: function (value) {//路由路径发(params)生了变化
        const id = value.params.id*1;
        this.messageDetail = allMessageDetail.find(detail => detail.id === id)


      }
    }

  }
</script>

<style>

</style>
