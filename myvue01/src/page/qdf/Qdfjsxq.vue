<template>
  <div id="qdfjsxq">
    <div class="qdf_teacher-page">
      <div  class="header">
        <header class="qdf_header" >
          <span  class="back">
            <img
             @click="qdf_tzfh()"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
            />
          </span>
          <h3 >讲师详情</h3>
        </header>
      </div>
      <!-- 第二部分布局开始 -->
      <div  class="teacher-info">
        <div  class="ti-base">
          <img
           
            alt
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          />
          <div >
            <p >
              <span >李青</span>
              <font >M13</font>
            </p>
            <p >
              女
              <font >7年教龄</font>
            </p>
          </div>
          <button >关注</button>
        </div>
        <div  class="ti-label">
          <span >深入浅出</span>
          <span >言简意赅</span>
          <span >幽默风趣</span>
          <span >亲和力强</span>
        </div>
      </div>
      <!-- 第二部分布局结束 -->
      <!-- 第三部分布局开始 -->
      <div class="qdf_com-box">
        <van-tabs v-model="activeName">
          <van-tab title="讲师介绍" name="a">
            <ul class="teacher-tro">
              <li>
                <span>教学年龄</span>
                <font>7年</font>
              </li>
              <li>
                <span>授课价格</span>
                <font>200学习币</font>
              </li>
              <li>
                <span>老师简介</span>
                <font>
                  教学最大的特点就是通俗易懂，幽默风趣，因此也深受同学们的喜爱
                  毕业于华东师范大学，地理研究生硕士，专业知识毋庸置疑；在职地理老师，外带学生30%A+，40%A，差的学生也在B。；因为能教出成绩也受家长们的信任。教学成果颇多，辅导的学生成绩明显提升。
                </font>
              </li>
            </ul>
          </van-tab>
          <van-tab title="主讲课程" name="b">
            <ul class="qdf_ul">
              <li class="qdf_li" v-for="item of qdf_nav" :key="item.index" @click="qdf_tzxqy()">
                <p class="qdf_title">
                  <font>{{item.news}}</font>
                </p>
                <div class="qdf_time">
                  <p class="qdf_after">{{item.time}}</p>
                  <p>共{{item.shi}}课时</p>
                </div>
                <div class="qdf_teacher">
                  <div class="qdf_teacher_item">
                    <img :src="item.img" alt />
                    <font>{{item.name}}</font>
                  </div>
                </div>
                <p class="qdf_info">
                  <span class="qdf_person">{{item.num}}人已报名</span>
                  <font class="qdf_free">{{item.con}}</font>
                </p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="学员评价" name="c">
            <!-- 学员评价布局开始 -->
            <div class="qdf_pj">
              <div class="qdf_items">
                <div >
                  <i class></i>
                  <div class="evaluate-label">
                    <span >深入浅出(1)</span>
                    <span >言简意赅(2)</span>
                    <span >幽默风趣(2)</span>
                    <span>亲和力强(2)</span>
                    <span >讲解专业(2)</span>
                    <span >思路清晰(5)</span>
                    <span >逻辑清楚(3)</span>
                    <span >效率高(3)</span>
                    <span >耐心仔细(2)</span>
                    <span >有责任心(2)</span>
                    <span >分析到位(3)</span>
                    <span >才貌双全(1)</span>
                  </div>
                </div>
                <ul>
                  <li v-for="item of qdf_pj" :key="item.index">
                    <p>
                      <span class="qdf_t"><img :src="item.img" alt=""></span>
                      <span><van-rate v-model="value" /></span>
                    </p>
                    <p>
                      <span class="qdf_cy">{{item.cy}}</span>
                    </p>
                    <p class="qdf_pp">{{item.cont}}</p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 学员评价布局结束 -->
          </van-tab>
        </van-tabs>
      </div>
      <!-- 第三部分布局结束 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
      value:5,
      qdf_nav: [
        {
          news: "李老师16号到22号地理大课堂开课啦",
          time: "03月16日 18:30 ~ 03月22日 15:00",
          shi: "8",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "20",
          con: "免费"
        },
        {
          news: "李老师9号地理大课堂开课啦",
          time: "03月09日 18:30 ~ 03月15日 15:00",
          shi: "7",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "20",
          con: "免费"
        },
        {
          news: "李老师女神节地理大课堂开课啦",
          time: "03月08日 08:30 ~ 03月08日 15:00",
          shi: "3",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "11",
          con: "免费"
        },
        {
          news: "李青29号1号地理大课堂开始啦",
          time: "02月29日 10:00 ~ 03月01日 15:00",
          shi: "5",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "13",
          con: "免费"
        },
        {
          news: "22号李老师大课堂开课啦",
          time: "02月22日 10:00 ~ 02月23日 20:00",
          shi: "3",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "6",
          con: "免费"
        }
      ],
      qdf_pj:[
        {
          cy:"幽默风趣 多才多艺  唱歌好听 讲课仔细 活泼开朗" ,
         img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          cont:"老师声音很好听"
         },
         {
          cy:"幽默风趣 多才多艺  唱歌好听 讲课仔细 活泼开朗" ,
         img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          cont:"老师声音很好听"
         },
         {
          cy:"幽默风趣 多才多艺  唱歌好听 讲课仔细 活泼开朗" ,
         img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          cont:"老师声音很好听"
         },
         {
          cy:"幽默风趣 多才多艺  唱歌好听 讲课仔细 活泼开朗" ,
         img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          cont:"老师声音很好听"
         },
         {
          cy:"幽默风趣 多才多艺  唱歌好听 讲课仔细 活泼开朗" ,
         img:"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          cont:"老师声音很好听"
         },
      ]
    };
  },
  created() {},
  methods: {
    qdf_tzfh(){
      this.$router.go(-1)
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
#qdfjsxq {
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  height: 100%;
}
.qdf_teacher-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding-bottom: 1.6rem;
  padding-bottom: 16vw;
  box-sizing: border-box;
}
.header {
  height: 2.66667rem;
  height: 26.66667vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
.qdf_header {
  height: 1.17333rem;
  height: 11.73333vw;
  width: 100%;
  box-sizing: border-box;
  display: flex;
}
.qdf_header .back {
  width: 0.66667rem;
  width: 6.66667vw;
  height: 100%;
  padding-left: 0.26667rem;
  padding-left: 2.66667vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back img {
  width: 0.24rem;
  width: 2.4vw;
  height: 0.42667rem;
  height: 4.26667vw;
}
.qdf_header h3 {
  flex: 2;
  text-align: center;
  font-size: 0.48rem;
  font-size: 4.8vw;
  color: #fff;
}
.teacher-info {
  margin: -1.52rem auto 0;
  margin: -15.2vw auto 0;
  width: 9.46667rem;
  width: 94.66667vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  background: #fff;
  border-radius: 0.10667rem;
  border-radius: 1.06667vw;
  box-sizing: border-box;
}
.teacher-info .ti-base {
  height: 2.02667rem;
  height: 20.26667vw;
  display: flex;
  align-items: center;
}
.teacher-info .ti-base img {
  width: 1.06667rem;
  width: 10.66667vw;
  height: 1.06667rem;
  height: 10.66667vw;
  margin-right: 0.32rem;
  margin-right: 3.2vw;
  border-radius: 50%;
  flex: none;
}
.teacher-info .ti-base div {
  flex: 1;
}
.teacher-info .ti-base div p:first-child {
  padding-bottom: 0.08rem;
  padding-bottom: 0.8vw;
}
.teacher-info .ti-base div p:first-child span {
  font-size: 0.4rem;
  font-size: 4vw;
  color: #595959;
  line-height: 0.56rem;
  line-height: 5.6vw;
  padding-right: 0.13333rem;
  padding-right: 1.33333vw;
}
.teacher-info .ti-base div p:first-child font {
  font-size: 0.29333rem;
  font-size: 2.93333vw;
  color: #ea7a2f;
}
.teacher-info .ti-base div p {
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.teacher-info .ti-base div p:nth-child(2) {
  font-size: 0.32rem;
  font-size: 3.2vw;
  color: #b7b7b7;
  line-height: 0.45333rem;
  line-height: 4.53333vw;
}
.teacher-info .ti-base div p {
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.teacher-info .ti-base button {
  width: 1.65333rem;
  width: 16.53333vw;
  height: 0.74667rem;
  height: 7.46667vw;
  background: #ebeefe;
  border-radius: 0.41333rem;
  border-radius: 4.13333vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #4169ff;
  color: #eb6100;
  border: 0;
}
button,
input,
textarea {
  color: inherit;
  font: inherit;
}
button {
  -webkit-appearance: button;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: buttonface;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  border-image: initial;
}
.teacher-info .ti-label {
  padding-bottom: 0.4rem;
  padding-bottom: 4vw;
}
.teacher-info .ti-label span {
  display: inline-block;
  width: 1.92rem;
  width: 19.2vw;
  height: 0.64rem;
  height: 6.4vw;
  line-height: 0.64rem;
  line-height: 6.4vw;
  background: #ffe4d3;
  border-radius: 0.32rem;
  border-radius: 3.2vw;
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ea7a2f;
  margin-right: 0.26667rem;
  margin-right: 2.66667vw;
  margin-bottom: 0.26667rem;
  margin-bottom: 2.66667vw;
  text-align: center;
  overflow: hidden;
}
.teacher-info .ti-label span:nth-child(4n) {
  margin-right: 0;
}
.qdf_com-box {
  margin-top: 0.26667rem;
  margin-top: 2.66667vw;
  background: #fff;
}
.teacher-tro {
  padding: 0 0.4rem;
  padding: 0 4vw;
}
.teacher-tro li {
  display: flex;
  line-height: 1.06667rem;
  line-height: 10.66667vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #8c8c8c;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.teacher-tro li span {
  margin-left: 0.13333rem;
  margin-left: 1.33333vw;
  margin-right: 0.53333rem;
  margin-right: 5.33333vw;
}
.teacher-tro li font {
  padding-top: 0.13333rem;
  padding-top: 1.33333vw;
  line-height: 0.8rem;
  line-height: 8vw;
  flex: 1;
}
//主讲课程布局开始
.qdf_ul {
  padding: 0.4rem;
  padding: 4vw;
  background: #f0f2f5;
}
.qdf_li {
  background: #fff;
  border-radius: 0.13333rem;
  border-radius: 1.33333vw;
  padding: 0 0.37333rem;
  padding: 0 3.73333vw;
  margin-bottom: 0.4rem;
  margin-bottom: 4vw;
  position: relative;
}
.qdf_title {
  padding-top: 0.4rem;
  padding-top: 4vw;
}
.qdf_title font {
  font-size: 0.42667rem;
  font-size: 4.26667vw;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  color: #333;
}
.qdf_time {
  display: flex;
  align-items: center;
}
.qdf_after {
  padding-left: 0.53333rem;
  padding-left: 5.33333vw;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAGdElEQ…7D7bIT6T8ppX5D8qmltjcNVN9Rf6pC343nMmv03YDqJvO/L6pVWKmfOusAAAAASUVORK5CYII=)
    no-repeat 0;
  background-size: 0.37333rem 0.37333rem;
  background-size: 3.73333vw 3.73333vw;
}
.qdf_time p {
  height: 0.8rem;
  height: 8vw;
  line-height: 0.8rem;
  line-height: 8vw;
  display: inline-block;
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #666;
  padding-right: 0.45333rem;
  padding-right: 4.53333vw;
  position: relative;
}
.qdf_teacher {
  height: 1.73333rem;
  height: 17.33333vw;
  display: flex;
}
.qdf_teacher_item {
  display: flex;
  height: 100%;
  align-items: center;
}
.qdf_teacher_item img {
  width: 0.72rem;
  width: 7.2vw;
  height: 0.72rem;
  height: 7.2vw;
  border-radius: 50%;
}
.qdf_teacher_item font {
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  margin-left: 0.22667rem;
  margin-left: 2.26667vw;
  margin-right: 0.46667rem;
  margin-right: 4.66667vw;
}
.qdf_info {
  border-top: 1px solid #f5f5f5;
  height: 1.17333rem;
  height: 11.73333vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  display: flex;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
}
.qdf_person {
  flex: 1;
}
.qdf_free {
  color: #44a426;
  font-size: 0.42667rem;
  font-size: 4.26667vw;
}
//主讲课程布局结束

//学员评价布局开始
.qdf_pj {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
}
.qdf_items {
  margin: 0 0.26667rem;
  margin: 0 2.66667vw;
  padding: 0.4rem 0;
  padding: 4vw 0;
  position: relative;
}
.qdf_items i{
    position: absolute;
    right: .26667rem;
    right: 2.66667vw;
    top: .45333rem;
    top: 4.53333vw;
    width: .48rem;
    width: 4.8vw;
    height: .48rem;
    height: 4.8vw;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABOElEQ…kEc113sWfDYaRmrzb+1Q7kqleEYKtc2nFSqzwj5tj/8rC9AQYhrzswjcIUAAAAAElFTkSuQmCC) no-repeat;
    background-size: 100% 100%;
}
.qdf_items .evaluate-label{
    padding: 0 .53333rem .13333rem .26667rem;
    padding: 0 5.33333vw 1.33333vw 2.66667vw;
    height: .8rem;
    height: 8vw;
    overflow: hidden;
}
.qdf_items .evaluate-label span {
    font-size: .32rem;
    font-size: 3.2vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #ea7a2f;
    display: inline-block;
    width: 2.4rem;
    width: 24vw;
    height: .66667rem;
    height: 6.66667vw;
    border: 1px solid #ea7a2f;
    border-radius: .05333rem;
    border-radius: .53333vw;
    margin-right: .33333rem;
    margin-right: 3.33333vw;
    margin-bottom: .21333rem;
    margin-bottom: 2.13333vw;
    line-height: .66667rem;
    line-height: 6.66667vw;
    text-align: center;
    border-radius: .08rem;
    border-radius: .8vw;
    overflow: hidden;
}
.qdf_t {
  img{
  width:0.8rem;
  margin-right:0.5rem;
  }
}
.qdf_cy{
  font-size: 0.34rem;
  margin-left:1rem;
  margin-right:1rem;
}
.qdf_pp{
  font-size:0.34rem;
   margin-left:1rem;
}
//学员评价布局结束
</style>