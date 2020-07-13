<template>
  <div class="wrap">
    
            <router-view ></router-view>
  <van-tabbar  route z-index="888">
  <van-tabbar-item replace to="sy" icon="home-o">
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
  <van-tabbar-item  @click="change" icon="user-circle-o
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
  methods: {
    change(){
        let toke= localStorage.getItem("adminToken")
        if(toke){
          this.$router.push("/home/smsmain")
          
        }else{
           this.$router.push("/home/wd")
        }
        
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  
}
.wrap{
  height:100%;
}


</style>
