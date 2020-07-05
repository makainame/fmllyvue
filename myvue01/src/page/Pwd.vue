<template>
  <div class="pwd">
    <van-nav-bar
      title="找回密码"
    
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号">
      <template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>
    <br>
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码"></van-field>
    <br>
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <br>
     <button class='btn'>确定</button>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  props: {},
  data() {
    return {
      tel: "",
      sms: "",
      password: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
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