<template>
  <div class="wrapper">
    <div class="head" >
 <van-nav-bar
  title="设置"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>  
 </div>
   
 <div class="pass">
       <span class="spa" >设置密码</span> <van-icon name="arrow" color="#3388ff" class="zc" @click="password"/>  
  <van-button type="primary" size="large" @click="remove" class="but"  color="linear-gradient(to right, #4bb0ff, #6149f6)">退出登陆</van-button>
</div>
 
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    remove(){
        localStorage.removeItem("adminToken")
        this.$router.push("/home/wd")
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    password(){
         this.$router.push("/smspwd")
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pass{
  width: 100%;
  height: 150px;
  background:#fff;
  font-size: 16px;
  padding-top: 20px;
  margin-top: 10px;
  .but{
    margin-top: 40px;
  }
  .spa{
      float: left;
      color: #ccc;
  }
  .zc{
    //  display: inline;
     float: right;
  }
  
}

</style>