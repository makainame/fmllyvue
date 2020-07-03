<template>
  <div class="wrapper">
    <!-- 顶部 -->
    <div class="div_top">约课记录</div>
    <!-- 二级导航 -->
    <div class="div_head">
         <ul>
           <li @click="toogle(index)" :style="{borderBottom:activeIndex==index?'1px solid orange':''}" v-for="(item,index) in arr" :key="index">{{ item }}</li>
         </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      arr:["待上课","已上课","已取消"],
      activeIndex:0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    toogle(index){
      this.activeIndex=index
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.div_top {
  width: 100%;
  height: 69px;
  // background-color: green;
  text-align: center;
  font-size:20px;
  color:#666;
  line-height:69px;
}
.div_head{
  width:100%;
  height:53px;
  // background-color: red;
}
.div_head>ul{
    width:100%;
  height:53px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:16px;
  color:#7a7a7a;
}
.div_head>ul>li{
  height:52px;
  line-height:52px;
}
</style>
