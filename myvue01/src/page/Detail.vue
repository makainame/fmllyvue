<template>
  <div class="detail">
      <van-nav-bar title="课程详情"  left-arrow @click-left='toGo'>
  <template #right>
    <van-icon name="cluster" size="18" />
  </template>
</van-nav-bar>
  <button class='btn'>立即报名</button>
  这是详情页面
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
      toGo(){
          this.$router.go(-1)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.btn{
    width:100%;
    height:40px;
    background:orange;
    border:none;
    color:#ffffff;
    line-height:40px;
    position:fixed;
    bottom:10px;
    font-size:16px;
    font-weight:normal;
    text-align: center;
}
</style>