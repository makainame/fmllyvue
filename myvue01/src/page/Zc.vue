<template>
  <div class="zc">
    <van-nav-bar title="注册登录" left-arrow @click-left="onClickLeft" />
    <div class="imgas">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <br />
    <br />
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" show-error-message>
      <template #button>
        <van-button size="small" type="primary" @click="Sms">发送验证码</van-button>
      </template>
    </van-field>
    <br />
    <van-field
      v-model="sms"
      center
      clearable
      show-error-message
      label="短信验证码"
      placeholder="请输入短信验证码"
    ></van-field>
    <br />
    <div class="bz">
      <span>未注册的手机号会被自动注册</span>
      <span>
        <router-link to="/pass">用密码登录</router-link>
      </span>
    </div>

    <button class="btn" @click="Login">登录</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tel: "",
      phone: "",
      sms: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    Sms() {
      this.$http
        .post("/api/app/smsCode", { mobile: this.tel, sms_type: "login" })
        .then(res => {
          console.log(res);
          this.$Toast(res.data.msg)
        });
    },
    Login() {
      this.$http
        .post("/api/app/login", {
          mobile: this.tel,
          sms_code: this.sms,
          type: 2,
          client: 1
        })
        .then(res => {
          console.log(res.data)
          if (res.data.code == 200) {
            window.localStorage.setItem(
              "adminToken",
              res.data.data.remember_token
            );
            window.localStorage.setItem("userid", res.data.data.id);

            if (res.data.data.is_new == 1) {
              //路由跳转设置密码
              console.log("首次登陆");
              this.$router.push({
                path: "/smspwd"
              });
            } else if (res.data.data.is_new == 2) {
              console.log("第二次登陆");
              this.$router.push({
                path: "/smsmain"
              });
            }
          }
          console.log(res);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.imgas {
  margin-top: 100px;
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