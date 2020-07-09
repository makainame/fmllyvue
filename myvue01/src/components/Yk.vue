<template>
  <div id="great">
    <!-- 顶部 -->
    <div class="div_top">约课记录</div>
    <!-- 导航标题部分 -->
    <div class="div_head">
      <ul>
        <li
          @click="toogle(index)"
          :style="{color:activeIndex==index?'#fb5500':'',borderBottom:activeIndex==index?'2px solid #fb5500':''}"
          v-for="(item,index) in arr"
          :key="index"
        >{{ item.name }}</li>
      </ul>
    </div>
    <!-- 标题提示部分 -->
    <div class="sl_nav_con" v-show="this.activeIndex==0">
      <div class="sl_nav_div" v-for="(item,index) in list" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.name }}</p>
        <button @click="yueke" v-show="!item.btnactive">{{ item.btn }}</button>
      </div>
    </div>
    <div class="sl_nav_con" v-show="!this.activeIndex==0">
      <div class="sl_nav_div" v-for="(item,index) in list" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.name }}</p>
        <!-- 控制立即约课按钮的显示隐藏 -->
        <button @click="yueke" v-show="item.btnactive">{{ item.btn }}</button>
      </div>
    </div>
    
  </div>
  
</template>

<script>

export default {
  components: {
  },
  props: {},
  data() {
    return {
      arr: [
        {
          c_id: 1,
          name: "待上课"
        },
        {
          c_id: 2,
          name: "已上课"
        },
        {
          c_id: 3,
          name: "已取消"
        }
      ],
      arrcon: [
        {
          _id: 1,
          pic: require("../../public/img/sl01.png"),
          name: "还没有待上课记录哦",
          btn: "立即约课",
          btnactive: false //控制立即约课按钮的显示隐藏
        },
        {
          _id: 2,
          pic: require("../../public/img/sl01.png"),
          name: "还没有上课记录哦",
          btn: "立即约课",
          btnactive: true //控制立即约课按钮的显示隐藏
        },
        {
          _id: 3,
          pic: require("../../public/img/sl01.png"),
          name: "还没有取消上课记录哦",
          btnactive: false //控制立即约课按钮的显示隐藏
        }
      ],
      activeIndex:0,
      id: "",
      list: [
        {
          _id: 1,
          pic: require("../../public/img/sl01.png"),
          name: "还没有待上课记录哦",
          btn: "立即约课",
          btnactive: false //控制立即约课按钮的显示隐藏
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 点击切换样式以及对应的内容的过滤
    toogle(index) {
      this.activeIndex = index;
      console.log(this.arr[index].c_id);
      this.id = this.arr[index].c_id;
      console.log(this.id);
      let newarr = this.arrcon.filter(v => {
        return v._id === this.id;
      });
      console.log(newarr);
      this.list = newarr;
      console.log(this.list);
      this.btnactive = true; //控制立即约课按钮的显示隐藏
    },
    // 点击立即约课
    yueke() {
      this.$router.push({
        path: "/oto"
      });
    }
  },
  created() {
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
html,body{
  height:100%;
}
#great{
  height:100%;
}
.div_top {
  width: 100%;
  height: 69px;
  text-align: center;
  font-size: 20px;
  color: #666;
  line-height: 69px;
}
.div_head {
  width: 100%;
  height: 53px;
}
.div_head > ul {
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: #7a7a7a;
}
.div_head > ul > li {
  height: 52px;
  line-height: 52px;
}
.sl_nav_con {
  width: 100%;
  height: 80%;
  background-color: #f0f2f5;
}
.sl_nav_div {
  width: 100%;
  height: 100%;
  text-align: center;
}
.sl_nav_div > img {
  width: 180px;
  height: 150px;
  margin-top: 25%;
}
.sl_nav_div > p {
  font-size: 14px;
  color: #b7b7b7;
}
.sl_nav_div > button {
  width: 90px;
  height: 28px;
  background-color: #fb5500;
  border: none;
  outline: none;
  font-size: 14px;
  color: #fff;
  margin-top: 30px;
}
</style>
