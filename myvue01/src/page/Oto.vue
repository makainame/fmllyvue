<template>
  <div class="oto">
    <!-- 顶部头部标题 -->
    <div class="sl_head">
      <p class="p1">
        <van-icon @click="fanhui" name="arrow-left" />
      </p>
      <p>一对一辅导</p>
      <p class="p1">
        <van-icon name="search" />
      </p>
    </div>
    <div class="sl_kong"></div>
    <!-- 切换的导航标题 -->
    <div>
      <van-tabs @click="tooglecon" v-model="active" title-active-color="#fb5500">
        <!-- 选择老师条件或上课时间标题 -->
        <van-tab title="选择上课时间" >
          <!-- 默认没有日期和时段内容，点击显示条件时显示，默认显示信息列表 -->
          <div v-show="this.selectshow">
            <van-calendar
              title="日期"
              :poppable="false"
              :show-confirm="false"
              :style="{ height: '250px' }"
            />
          </div>
          <!-- 时段 -->
          <div class="sl_time" v-show="this.selectshow">
            <p>时段</p>
            <div class="sl_time_con">
              <div class="left">
                <button @click="chuxian">开始时间</button>
                <van-icon name="clock-o" />
              </div>
              <div class="right">
                <button @click="chuxian">结束时间</button>
                <van-icon name="clock-o" />
              </div>
            </div>
          
          <!-- 底部重置 -->
              <!-- 底部 -->
          <div class="sl_foot">
              <button>重置</button>
              <button>确定</button>
          </div>


            <!-- 点击开始结束时间出现的遮罩层 -->
            <van-popup v-model="show" position="bottom" :style="{ height: '43%' }">
             <van-datetime-picker
              v-model="currentTime"
              type="time"
              title="选择时间"
              :min-hour="10"
              :max-hour="20"
            />
            </van-popup>
          </div>

            <!-- 默认的老师信息列表 -->
            <div class="teacher" v-show="teac">
              <ul>
                <li v-for="(item,index) in teacharr" :key="index">
                  <div>
                    <img width=40 height=40 :src="item.img" alt="">
                  </div>
                  <div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.sex }}</span>
                  </div>
                  <div>
                    <button class="btn" @click="yuyue">预约</button>
                  </div>
                </li>
              </ul>
            </div>


        </van-tab>
        <van-tab title="选择老师条件">内容 2</van-tab>
      </van-tabs>
    </div>


  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      active: 2,   //vant的两课标题页面切换
      show:false,  //vant的点击出现的日期遮罩层，默认不显示
      currentTime: '00',   //vant 的日历时间
      selectshow:false,  //控制页面点击选择时间才会出现的日历页面
      teac:true,    //默认显示的是老师信息列表
      teacharr:[
        {
          img: require("../../public/img/te_03.jpg"),
          title:"杨德胜",
          sex:"男 30年教龄"
        },
        {
          img: require("../../public/img/te_06.jpg"),
          title:"李凡",
          sex:"男 10年教龄"
        },
        {
          img: require("../../public/img/te_08.jpg"),
          title:"齐豫",
          sex:"女 8年教龄"
        },
        {
          img: require("../../public/img/te_10.jpg"),
          title:"森一老师",
          sex:"男 8年教龄"
        },
        {
          img: require("../../public/img/te_12.jpg"),
          title:"宋老师",
          sex:"男 30年教龄"
        },
        {
          img: require("../../public/img/te_03.jpg"),
          title:"T1老师",
          sex:"男 30年教龄"
        },
        {
          img: require("../../public/img/te_06.jpg"),
          title:"李凡",
          sex:"男 10年教龄"
        },
        {
          img: require("../../public/img/te_08.jpg"),
          title:"齐豫",
          sex:"女 8年教龄"
        },
        {
          img: require("../../public/img/te_10.jpg"),
          title:"森一老师",
          sex:"男 8年教龄"
        },
      ]
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    // 点击选择上课时间出现日历
    tooglecon() {
      this.teac=false,
      this.selectshow=true 
    },
    // 点击返回到约课页面
    fanhui() {
      this.$router.go(-1)
    },
    // 点击时段出现选择时间
    chuxian(){
      this.show=true
    },
    yuyue(){
      this.$router.push({
        path:'/otoplan'
      })
    }
  }
};
</script>

<style scoped>
.oto {
  height: 100%;
  background-color: #f0f2f5;
}
.sl_head {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #595959;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
  position: fixed;
  left:0;
  top:0;
  z-index: 1;
}
.sl_kong{
   width: 100%;
  height: 50px;
}
.sl_head > p:nth-of-type(2) {
  margin: 0 30%;
}
.p1 {
  font-size: 22px;
  font-weight: 600;
}
.sl_time {
  font-size: 12px;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 10px;
  padding-top: 20px;
}
.sl_time > p {
  margin-bottom: 20px;
  margin-left: 20px;
  color: #757575;
}
.sl_time_con {
  display: flex;
  justify-content: center;
}
.sl_time > .sl_time_con > div {
  border: 1px solid #bfbfbf;
  width: 40%;
  height: 32px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sl_time > .sl_time_con > div > button {
  width: 70%;
  height: 28px;
  border: none;
  outline: none;
  background-color: #ebebe4;
  color: #757575;
  text-align: left;
}
.sl_time > .sl_time_con > div:nth-child(1) {
  margin-right: 20px;
}
.sl_time > .sl_time_con > div:nth-child(2) {
  margin-left: 20px;
}
.teacher{
  height:100%;
  background: #f0f2f5;
}
.teacher>ul{
  width:100%;
}
.teacher>ul>li{
  width:94%;
  display: flex;
  align-items: center;
  font-size:12px;
  justify-content: center;
  height:80px;
  background-color: #fff;
  margin-top:10px;
  border-radius:10px;
  margin-left:3%;
}
.teacher>ul>li>div:nth-of-type(2){
  width:70%;
  margin-left:14px;

}
.teacher>ul>li>div:nth-of-type(1){
  margin-left:10px;
}
.teacher>ul>li>div:nth-of-type(2) p{
  font-size:16px;
  color:#666;
}
.teacher>ul>li>div:nth-of-type(2) span{
  font-size:12px;
  color:#B7B7B7;
}
.btn{
  width:70px;
  height:30px;
  border-radius:20px;
  color:#EB6100;
  background-color: #EBEEFE;
  border:none;
  outline:none;
  margin-right:10px;
}
/* 底部重置确定 */
.sl_foot{
  width:100%;
  height:50px;
  font-size:18px;
  position: fixed;
  bottom:0;
  left:0;
}
.sl_foot>button{
  width:50%;
  height:50px;
  border:none;
  outline:none;

}
.sl_foot>button:nth-of-type(1){
  background-color: #fff;
  color:#EB6100;
}
.sl_foot>button:nth-of-type(2){
  background-color: #EB6100;
  color:#fff;
}
</style>