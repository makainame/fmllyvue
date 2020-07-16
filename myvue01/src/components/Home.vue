<template>
  <div class="wrap">
   
 <router-view ></router-view>
  <div class="bottom">
  <van-tabbar  route z-index="888" inactive-color="#000"  active-color="#07c160"  v-model="active">
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
  <van-tabbar-item  @click="change" icon="friends">
    我的
  </van-tabbar-item>
</van-tabbar>

    </div>
 
 
  </div>
</template>

<script>
  import '../util/meiqia'
export default {
  components: {
    
  },
  props: {},
  data() {
    return {
       active: 0,
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
