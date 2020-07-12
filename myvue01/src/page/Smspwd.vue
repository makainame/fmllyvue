<template>
  <div class="sws-pwd">
      <van-nav-bar
  title="设置密码"
  right-text="跳过"
  left-arrow
  @click-left='goLogin'
  @click-right="path"
/>
<van-field v-model="password"  type="password" placeholder="请设置登录密码" error-message />
<van-field v-model="passwordnew" type="password" placeholder="请再次输入密码" error-message />
<button class='btn' @click="btn">提交</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        password:'',
        passwordnew:'',
        phone:'',
        yzm:'',
      

    };
  },
  watch: {},
  computed: {},
  methods: {
      path(){
           this.$router.push("/sz")
      },
      goLogin(){
          this.$router.go(-1)
      },
     btn()  {
         let phone=JSON.parse(localStorage.getItem("shouji"))
               this.phone=phone
         let yz =JSON.parse(localStorage.getItem("yzm"))
               this.yzm=yz
         if(this.password==this.passwordnew){
               this.$http.post("/api/app/password",{password:this.password,type:1,mobile:this.phone,sms_type:"login",sms_code:this.yzm,type:2,client:1}).then((res)=>{
                 if(res.data.code==200){
                         this.$toast.success(res.data.msg)
                         this.$router.push("/home/wd")
                 }else{
                      this.$toast.fail(res.data.msg)
                 }
         
        })
         }
      
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.btn {
  width: 350px;
  height: 40px;
  color: #ffffff;
  background: orange;
  border: none;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin-left: 10px;
}
</style>