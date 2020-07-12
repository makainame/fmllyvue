<template>
  <div class="smsmain">
    <div class="user-header">
      <img src="../assets/C-_Users_lenovo_Desktop_E-学生个人中心-已登录_01.gif" alt />
    </div>
    <div class="user-xf">
      <img src="../assets/E-学生个人中心-已登录-恢复的_04.gif" alt class="img_first" />
      <span>小文师弟</span>
      <img src="../assets/E-学生个人中心-已登录-恢复的_03.gif" alt />
      <img src="../assets/E-学生个人中心-已登录-恢复的_11_03.gif" alt class="img_tree" />
      <ul>
        <li>
          <p class="xf_tit">10</p>
          <p>我的课程</p>
          <span>-已购课程学习-</span>
        </li>
        <li>
          <p class="xf_tit">5</p>
          <p>我的预约</p>
          <span>-一对一老师预约-</span>
        </li>
        <li>
          <p class="xf_tit">0</p>
          <p>我的课程</p>
          <span>-查看剩余学习币-</span>
        </li>
      </ul>
    </div>
    
    <div class="sms-act">
      <img src="../assets/E-学生个人中心-已登录-恢复的_07.gif" alt="">
      <div class="inner-con">
        <p>邀请好友注册APP，享多重好礼</p>
        <span>限时特惠，多邀多得</span>
      </div>
      <img src="../assets/E-学生个人中心-已登录-恢复的_09.gif" alt="">
    </div>
    <!-- 展示 -->
    <div class="sms-menu">
      <div class="inner-one">

        <h3>课程相关</h3>
        <van-grid :border="false" >
          <van-grid-item icon="column" text="我的作业" style='color:#ff944c;'/>
          <van-grid-item icon="map-marked" text="关注的老师" style='color:#ff944c;'/>
          <van-grid-item icon="star" text="我的收藏" style='color:#ff944c;'/>
          <van-grid-item icon="share" text="我的下载" style='color:#ff944c;'/>
        </van-grid>
      </div>
       <div class="inner-two">
        <h3>订单相关</h3>
        <van-grid :border="false" >
          <van-grid-item icon="wechat" text="我的订单" style='color:#fb5500;'/>
          <van-grid-item icon="diamond" text="会员订单" style='color:#fb5500;'/>
          <van-grid-item icon="coupon" text="约课订单" style='color:#fb5500;'/>
        </van-grid>
      </div>
       <div class="inner-tree">
        <h3>我的账户</h3>
        <van-grid :border="false" >
          <van-grid-item icon="balance-list" text="优惠券" style='color:#ffaf00;'/>
          <van-grid-item icon="label" text="学习卡" style='color:#ffaf00;'/>
          <van-grid-item icon="vip-card" text="会员" style='color:#ffaf00;'/>
        </van-grid>
      </div>
       <div class="inner-four">
        <h3>自助服务</h3>
        <van-grid :border="false" color="#fb5500">
          <van-grid-item icon="bell" dot text="我的消息" style='color:#ff9a2b'/>
          <van-grid-item icon="invition" text="意见反馈"  style='color:#ff9a2b'/>
           <van-grid-item icon="audio" text="在线客服"  style='color:#ff9a2b'/>
          <van-grid-item icon="friends" text="关于我们"  style='color:#ff9a2b'/>
          <van-grid-item icon="wap-home" text="首页" style='color:#d0d0d0'/>
           <van-grid-item icon="comment" text="课程" style='color:#d0d0d0'/>
          <van-grid-item icon="coupon" text="约课记录" style='color:#d0d0d0'/>
          <van-grid-item icon="wap-home" text="个人"  style='color:#ff9a2b'/>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"smsmain",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
*{
    margin:0;
  padding:0;
}
.sms-main {
  background: #fafafa;

}
.user-header {
  width: 100%;

  height: 150px;
  background: #fb5500;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  img {
    width: 100%;
    display: flex;
  }
}
.user-xf {
  width: 90%;
  // height: 200px;
  border-radius: 10px;
  margin-left: 17px;
  background: #ffffff;
  font-size: 12px;
  padding-left: 20px;
  // padding-top: 20px;
  box-sizing: border-box;
  position:relative;
  top: -50px;
  border: solid #dddd 1px;
  // position: relative;
  .img_first {
    widows: 60px;
    // width:60px;
    height: 60px;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
  .img_tree {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    // align-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
    li {
      // width:130px;
      height: 80px;
      text-align: center;
      .xf_tit {
        font-size: 18px;
        font-weight: bold;
        color: orange;
      }
      span {
        font-size: 12px;
        color: #cccccc;
      }
    }
  }
}

.sms-menu{
  width:100%;
  margin-bottom:50px;
  .inner-one{
    width:100%;
 
    border-bottom:1px solid #ccc;
    h3{
      font-size:18px;
      // font-weight:normal;
      margin-left:20px;
    }
  }
  .inner-two{
    width:100%;
   
    border-bottom:1px solid #ccc;
    h3{
      font-size:18px;
      // font-weight:normal;
      margin-left:20px;
    }
  }
  .inner-tree{
    width:100%;
   
    border-bottom:1px solid #ccc;
    h3{
      font-size:18px;
      // font-weight:normal;
      margin-left:20px;
    }
  }
   .inner-four{
    width:100%;
   
    border-bottom:1px solid #ccc;
    h3{
      font-size:18px;
      // font-weight:normal;
      margin-left:20px;
    }
  }
}
.sms-act{
  width:100%;
  height:60px;
  // background:;
   background: linear-gradient(to right, #ff944c, #fb5a00);
    border-radius:50px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-top:-25px;
    margin-bottom:15px;
  .inner-con{
       width:250px;
      
      text-align: center;
     
       p{
         font-size:16px;
         color:#ffffff;
       }
       span{
         font-size:12px;
         color:#ffffff;
       }
  }
  img{
    width:40px;
    height:40px;
  }
}
</style>