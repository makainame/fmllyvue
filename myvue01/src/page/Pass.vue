<template>
  <div class="pass">
    <van-nav-bar title="密码登录"  left-arrow @click-left="onClickLeft" />
    <div class="imgas">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <br><br>
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
    <br>
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <br>
      <button class='btn'>登录</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
.btn{
    width:350px;
    height:40px;
    color:#ffffff;
    background:orange;
    border:none;
    border-radius:20px;
    line-height:40px;
    text-align: center;
    font-size:16px;
    font-weight:normal;
    margin-left:10px;
}
</style>