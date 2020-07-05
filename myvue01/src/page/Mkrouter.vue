<template>
  <div class="wrapper">
       
       <div class="ly"><span>给我们留言</span><span><van-icon name="arrow-down" /></span></div>
       <h5>留言成功</h5>
       <p>我们会尽快联系你</p>
       <button v-jump="route">关闭</button>
       <a v-jump="path">再次留言</a>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        path:"/deles",
        route:"/"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{
    font-size: 20px;
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
h5{
    text-align: center;
    line-height: 40px;
}
p{
    text-align: center;
    font-size: 16px;
}
button{
    width: 200px;
    height: 30px;
    background: #3388ff;
    color: #fff;
    font-size: 14px;
    border: none;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
}
a{
    font-size: 14px;
    text-decoration:underline;
    text-align: center;
    display: block;
    line-height: 40px;
}
</style>