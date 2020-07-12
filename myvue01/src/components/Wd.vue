<template>
  <div
    class="user"
    :style="{ overflow: $store.state.index == 1 ? 'hidden' : '' }"
  >
    <div class="imgas">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
    </div>
    <br /><br />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <br>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        colon:true
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <br />
      <div class="bz">
        <span><router-link to='/pwd' style='color:#ccc'>找回密码</router-link></span>
        <span> <router-link to='/zc' style='color:#ccc'>注册/验证码登录</router-link></span>
      </div>
      <br>
       <button class='btn' @click="btn">登录</button>
    </van-form>
    
  </div>
</template>
<script>

export default {
   name:"wd",
  components: {
  
  },
  data() {
    return {
      password: "",
      phone: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push({path:'/smsmain'})
    },
    async btn() {
      alert(1111)
      let { data: res } = await this.$http.post("/api/app/login", {
        mobile: this.phone,
        password: this.password,
        type: 1,
      });
 window.localStorage.setItem("adminToken", res.data.remember_token);
      // console.log(res)
      if (res.code == 200) {
        this.$toast.success(res.msg);
        this.$router.push({
          path: "/smsmain",
        });
      } else {
        this.$toast.fail(res.msg);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.imgas {
  margin-top: 50px;
  margin-left: 50px;
  display: inline-block;
  img {
    width: 236px;
    height: 52px;
  }
}
.bz {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  align-items: center;
  color: #cccc;
}
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
