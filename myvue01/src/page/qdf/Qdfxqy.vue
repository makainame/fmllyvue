<template>
  <div id="qdfxqy">
    <div class="qdf_det">
      <div data-v-0b37a264 class="qdf_header">
        <header class="qdf_he" data-v-0b37a264>
          <span data-v-0b37a264 class="qdf_back" @click="qdf_fh()">
            <img
              data-v-0b37a264
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
            />
          </span>
          <div class="h-title">
            <h3>课程详情</h3>
          </div>
          <p class="right-tabs">
            <span class="cao">
              <img
                @click="showPopup"
                src="data:image/png;base64,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"
                alt
              />

              <van-popup v-model="show" class="qdf_ewm"></van-popup>
            </span>
          </p>
        </header>
      </div>
      <!-- 下面内容布局1 -->
      <div class="qdf_body">
        <div class="qdf_info">
          <p class="qdf_title">李老师9号地理大课堂开课啦</p>
          <i class="qdf_collect">
            <van-icon name="star-o" />
          </i>
          <p class="qdf_free">免费</p>
          <div>
            <p class="info-com">共7课时 | 20人已报名</p>
            <p class="info-com">开课时间：2020.03.09 18:30 - 2020.03.15 15:00</p>
          </div>
          <!-- 下面内容布局1结束 -->
        </div>
        <!-- 内容布局2开始 -->
        <div class="qdf_teachers">
          <p class="qdf_t">教学团队</p>
          <ul>
            <li @click="qdf_tzjsxq()">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" />
              <span>李青</span>
            </li>
          </ul>
        </div>
        <!-- 内容布局2结束-->
        <!-- 内容布局3开始 -->
        <div id="tro" class="qdf_tro">
          <p class="qdf_cd">课程介绍</p>
          <div class="qdf_details"></div>
        </div>
        <!-- 内容布局3结束 -->
        <!-- 内容布局4开始 -->
        <div data-v-0b37a264 id="list" class="qdf_com-style">
          <p data-v-0b37a264 class="qdf_cd-title">课程大纲</p>
          <div data-v-8247b44a data-v-0b37a264 class="qdf_charpter">
            <ul>
              <li data-v-8247b44a class="period" v-for="item of neirong" :key="item.index">
                <div data-v-8247b44a class="charp-title">
                  <!---->
                  <span data-v-8247b44a class="huifang">{{item.news}}</span>
                  <!---->
                  {{item.title}}
                </div>
                <p data-v-8247b44a class="charp-time">
                  {{item.name}}
                  <span data-v-8247b44a>{{item.time}}</span>
                </p>
              </li>
            </ul>
          </div>
          <!---->
        </div>
        <!-- 内容布局4结束 -->
        <!-- 内容布局5开始 -->
        <div data-v-0b37a264 id="com" class="qdf_cd-comment">
          <p data-v-0b37a264 class="qdf_tt">课程评论</p>
          <div data-v-ea5a5206 data-v-0b37a264 class="qdf_com-item-page">
            <div data-v-75d58a0a data-v-ea5a5206 role="feed" class="qdf_van-list">
              <ul data-v-ea5a5206></ul>
              <div class="qdf_van-list"></div>
            </div>
            <div data-v-0fa74510 data-v-ea5a5206 class="qdf_empty">
              <img data-v-0fa74510 src="../../assets/微信图片_20200705145758.png" />
              <p data-v-0fa74510>暂无评论</p>
            </div>
          </div>
        </div>
        <!-- 内容布局5结束 -->
      </div>
      <!-- 立即报名布局开始 -->
      <button  @click="qdf_tzxx()" class="course-btn van-button van-button--default van-button--normal">
        <span  class="van-button__text">立即学习</span>
      </button>
      <!-- 立即报名布局结束 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      neirong: [
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        },
        {
          news: "回放",
          title: "第一讲第一课时",
          name: "李青",
          time: "03月16日 18:30 ~ 03月22日 15:00"
        }
      ]
    };
  },
  created() {},
  methods: {
    qdf_fh() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    qdf_tzjsxq(){
      this.$router.push("/qdfjsxq")
    },
   qdf_tzxx(){
      this.$router.push("/qdfxx")
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.qdf_ewm {
  width: 4rem;
  height: 4rem;
  background: url("../../assets/微信图片_20200705165531.png") no-repeat;
  background-size: 100%;
}
.qdf_tu {
  width: 4rem;
  height: 4rem;
}
#qdfxqy {
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
}
.qdf_det {
  width: 100%;
  overflow: hidden;
}
.qdf_header {
  height: 1.17333rem;
  height: 11.73333vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  border-bottom: 1px solid #f0f2f5;
}
.qdf_he {
  height: 1.17333rem;
  height: 11.73333vw;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 9;
  background: #fff;
  display: flex;
}
.qdf_back {
  width: 0.66667rem;
  width: 6.66667vw;
  height: 100%;
  padding-left: 0.26667rem;
  padding-left: 2.66667vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qdf_back img {
  width: 0.24rem;
  width: 2.4vw;
  height: 0.42667rem;
  height: 4.26667vw;
}
.h-title {
  flex: 2;
}
.h-title h3 {
  text-align: center;
  font-size: 0.48rem;
  font-size: 4.8vw;
  color: #595959;
}
.right-tabs {
  width: 0.8rem;
  width: 8vw;
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}
.right-tabs span.cao {
  width: 0.53333rem;
  width: 5.33333vw;
  height: 0.58667rem;
  height: 5.86667vw;
  padding: 0.13333rem;
  padding: 1.33333vw;
  img {
    width: 0.4rem;
    width: 4vw;
    height: 0.45333rem;
    height: 4.53333vw;
    margin-top: 0.06667rem;
    margin-top: 0.66667vw;
    display: block;
  }
}
.qdf_body {
  background: #f0f2f5;
  padding-bottom: 1.33333rem;
  padding-bottom: 13.33333vw;
  box-sizing: border-box;
  min-height: 92vh;
}
.qdf_info {
  padding: 0.4rem;
  padding: 4vw;
  background: #fff;
  position: relative;
}
.qdf_title {
  font-size: 0.42667rem;
  font-size: 4.26667vw;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  color: #333;
  padding-right: 1.06667rem;
  padding-right: 10.66667vw;
  line-height: 0.61333rem;
  line-height: 6.13333vw;
}
.qdf_collect {
  position: absolute;
  right: 0.26667rem;
  right: 2.66667vw;
  top: 0.13333rem;
  top: 1.33333vw;
  width: 0.66667rem;
  width: 6.66667vw;
  height: 0.66667rem;
  height: 6.66667vw;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFzUlEQ…bMWnvQ87z3+5pW+wInzV9HR0et53ljmfl4FEXb0ul0n1X/X3aekNJzvTGgAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 0.48rem 0.48rem;
  background-size: 4.8vw 4.8vw;
}
.qdf_free {
  font-size: 0.45333rem;
  font-size: 4.53333vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #ee1f1f;
  line-height: 0.85333rem;
  line-height: 8.53333vw;
}
.info-com {
  font-size: 0.4rem;
  font-size: 4vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  line-height: 0.8rem;
  line-height: 8vw;
}
.qdf_teachers {
  margin-top: 0.4rem;
  margin-top: 4vw;
  background: #fff;
  padding: 0.13333rem 0.26667rem;
  padding: 1.33333vw 2.66667vw;
}
.qdf_t {
  font-size: 0.4rem;
  font-size: 4vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #262626;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.qdf_teachers ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0.26667rem 0;
  padding: 2.66667vw 0;
}
.qdf_teachers ul li {
  padding: 0.26667rem 0;
  padding: 2.66667vw 0;
  width: 20%;
  height: 2.4rem;
  height: 24vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  img {
    width: 1.04rem;
    width: 10.4vw;
    height: 1.04rem;
    height: 10.4vw;
    border-radius: 50%;
  }
  span {
    padding: 0.21333rem 0.08rem 0;
    padding: 2.13333vw 0.8vw 0;
    padding-top: 0.21333rem;
    padding-top: 2.13333vw;
    font-size: 0.32rem;
    font-size: 3.2vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #595959;
  }
}
.qdf_tro {
  margin-top: 0.4rem;
  margin-top: 4vw;
  background: #fff;
  padding: 0.13333rem 0.26667rem;
  padding: 1.33333vw 2.66667vw;
}
.qdf_cd {
  font-size: 0.4rem;
  font-size: 4vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #262626;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.qdf_details {
  font-size: 0.37333rem;
  font-size: 3.73333vw;
  padding: 0.4rem 0.13333rem;
  padding: 4vw 1.33333vw;
}
.qdf_com-style {
  margin-top: 0.4rem;
  margin-top: 4vw;
  background: #fff;
  padding: 0.13333rem 0.26667rem;
  padding: 1.33333vw 2.66667vw;
}
.qdf_cd-title {
  font-size: 0.4rem;
  font-size: 4vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #262626;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.qdf_charpter {
  padding: 0 0.4rem 0.26667rem;
  padding: 0 4vw 2.66667vw;
}
.period {
  padding: 0.26667rem 0 0 0;
  padding: 2.66667vw 0 0 0;
}
.charp-title {
  position: relative;
  padding-left: 0.4rem;
  padding-left: 4vw;
  line-height: 0.8rem;
  line-height: 8vw;
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #595959;
}
.huifang {
  background: #ea7a2f;
  display: inline-block;
  margin-right: 0.13333rem;
  margin-right: 1.33333vw;
  padding: 0 0.13333rem;
  padding: 0 1.33333vw;
  height: 0.48rem;
  height: 4.8vw;
  border-radius: 0.05333rem;
  border-radius: 0.53333vw;
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.85);
  line-height: 0.48rem;
  line-height: 4.8vw;
  text-align: center;
}
.charp-time {
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #8c8c8c;
  padding-bottom: 0.13333rem;
  padding-bottom: 1.33333vw;
  padding-left: 0.66667rem;
  padding-left: 6.66667vw;
  span {
    padding-left: 0.26667rem;
    padding-left: 2.66667vw;
  }
}
.qdf_cd-comment {
  margin-top: 0.4rem;
  margin-top: 4vw;
  background: #fff;
  padding: 0.13333rem 0.26667rem;
  padding: 1.33333vw 2.66667vw;
}
.qdf_tt {
  font-size: 0.4rem;
  font-size: 4vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #262626;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.qdf_van-list {
  height: 0;
  pointer-events: none;
}
.qdf_empty {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4rem;
    width: 40vw;
    height: 4rem;
    height: 40vw;
  }
  p {
    font-size: 0.4rem;
    font-size: 4vw;
    color: #8c8c8c;
    margin-top: 0.53333rem;
    margin-top: 5.33333vw;
  }
}
//立即报名布局开始
.course-btn,
.course-two-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.17333rem;
  height: 11.73333vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  text-align: center;
  background: red;
}

//立即报名布局结束
</style>