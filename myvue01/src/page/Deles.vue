<template>
  <div class="wrap">
    <div class="ly"><span>给我们留言</span><span>选项</span></div>
    <div class="cont">
      <p>
        您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
      </p>
    </div>
    <div class="action">
      <p>手机</p>
      <input type="text" placeholder="请输入" />
    </div>
    <div class="active">
      <p>留言内容</p>
      <input type="text" placeholder="请输入" />
    </div>
    <div class="bottom">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.wrap{
  width: 100%;
  height: 100%;
  font-size: 0.3rem;
  background-color: #ccc !important;
}
.bottom{
    width: 100%;
    height: 400px;
    background: #ccc;
}
.ly {
  width: 100%;
  height: 50px;
  background: #3388ff;
  font-size: 0.4rem;
  color: #fff;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.cont {
  width: 100%;
  height: 40px;
  background: #ccc;
  font-size: 0.3rem;
}
.action p {
  width: 100%;
  height: 40px;
  background: #ccc;
  font-size: 0.3rem;
  line-height: 40px;
}
.action input {
  width: 100%;
  height: 40px;
  border: none;
}
.active p {
  width: 100%;
  height: 40px;
  background: #ccc;
  font-size: 0.3rem;
  line-height: 40px;
}
.active input {
  width: 100%;
  height: 80px;
  border: none;
}
.bottom button{
    width: 340px;
    height: 30px;
    background: #3388ff;
    color: #fff;
    margin: 20px  auto; 
    border: none;
}
.bottom{
    width: 340px;
    margin: 0 auto;
}
</style>
