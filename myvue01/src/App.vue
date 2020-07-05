
<template>
  <div id="app">
     <router-view />
  <van-tabbar route >
  <van-tabbar-item replace to="/" icon="home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/kc" icon="description
">
    课程
  </van-tabbar-item>
  <van-tabbar-item replace to="/yk" icon="coupon-o">
    约课记录
  </van-tabbar-item>
  <van-tabbar-item replace to="/lx" icon="records">
    练习
  </van-tabbar-item>
  <van-tabbar-item replace to="/wd" icon="user-circle-o
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
  list-style: none;
}
#app{
  height:100%;
  position: relative;
}
html,body{
  height:100%
}


</style>
