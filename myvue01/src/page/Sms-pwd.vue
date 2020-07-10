<template>
  <div class="sws-pwd">
      <van-nav-bar
  title="设置密码"
  
  right-text="跳过"
  left-arrow
  @click-left='goLogin'
/>
<van-field v-model="password" type="password" placeholder="请设置登录密码" error-message />
<van-field  type="password" placeholder="请再次输入密码" error-message />
<button class='btn'>提交</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        password:''
    };
  },
  watch: {},
  computed: {},
  methods: {
      goLogin(){
          this.$router.go(-1)
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