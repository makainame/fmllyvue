<template>
  <div class="wrapper">
    <!-- 顶部 -->
    <div class="div_top">约课记录</div>
    <!-- 导航标题部分 -->
    <div class="div_head">
         <ul>
           <li @click="toogle(index)" :style="{color:activeIndex==index?'#fb5500':''}" v-for="(item,index) in arr" :key="index">{{ item.name }}</li>
         </ul>
    </div>
    <!-- 标题提示部分 -->
    <div class="sl_nav_con" v-show="this.activeIndex==0">
        <div class="sl_nav_div" v-for="(item,index) in arrcon" :key="index">
          <img width=100% height=80% :src="item.pic" alt="">
        </div>
    </div>
    <div class="sl_nav_con" v-show="!this.activeIndex==0">
        <div class="sl_nav_div" v-for="(item,index) in list" :key="index">
          <img width=100% height=80% :src="item.pic" alt="">
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
      // "待上课","已上课","已取消"
      arr:[
        {
          c_id:1,
          name:"待上课"
        },
         {
          c_id:2,
          name:"已上课"
        },
         {
          c_id:3,
          name:"已取消"
        }
      ],
      arrcon:[
        {
          _id:1,
          pic:require('../../public/img/01.png'),
          name:"长得三"
        },
        {
          _id:2,
          pic:require('../../public/img/02.png'),
          name:"长得埃及海军"
        },
        {
          _id:3,
          pic:require('../../public/img/03.png'),
          name:"长得三奥凯航空就"
        }
      ],
      activeIndex:0,
      id:'',
      list:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    toogle(index){
      
      console.log(this.arr[index].c_id)
      this.id=this.arr[index].c_id;
      console.log(this.id)
      let newarr=this.arrcon.filter((v)=>{
        return v._id===this.id
      })
      console.log(newarr)
      this.list=newarr;
      console.log(this.list)
      this.activeIndex=index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{
  height:100%;
}
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
.sl_nav_con{
  width:100%;
  height:80%;
  // background-color: orange;
}
.sl_nav_div{
  width:100%;
  height:100%;
}
.sl_nav_div>img{
  width:100%;
  height:100%;
}
</style>
