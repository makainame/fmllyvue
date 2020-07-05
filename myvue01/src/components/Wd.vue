<template>
  <div class="user">
    <div class="imgas">
      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
    </div>
        <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        colon:true
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="bz">
        <span>找回密码</span>
        <span>注册/验证码登录</span>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
     <xf></xf>
  </div>
</template>
<script>
import xf from'../page/Xf'
export default {
  components:{
    xf,
  },
   data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>
<style lang="scss" scoped>

  .imgas{
   
    margin-top:100px;
    margin-left:50px;
    display:inline-block;
    img{
       width:236px;
    height:52px;
    }
  }
  .bz{
    width:100%;
    height:30px;
    line-height:30px;
    display:flex;
  justify-content: space-between;
 font-size:14px;
 align-items: center;
 color:#cccc;
  }
</style>