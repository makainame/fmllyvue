<template>
  <div class="wrapper">
     <router-view />
     
  <van-tabbar route active-color="#FC5500" inactive-color="#000">
  <van-tabbar-item replace to="sy" icon="wap-home">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="kc" icon="column
">
    课程
  </van-tabbar-item>
  <van-tabbar-item replace to="yk" icon="coupon">
    约课记录
  </van-tabbar-item>
  <van-tabbar-item replace to="lx" icon="comment">
    练习
  </van-tabbar-item>
  <van-tabbar-item replace to="wd" icon="manager
">
    我的
  </van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>

export default {
  components: {
    
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  
}
.wrapper{
  height:100%;
}


</style>
