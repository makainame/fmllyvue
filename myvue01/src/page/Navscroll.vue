<template>
  <div class="huadong">
    <div class="bt">
      <nav>
        <span
          @click="qh(index)"
          v-for="(item, index) in Arrayname"
          :class="{ active: show == index + 1 }"
          :key="index"
        >
          {{ item.name }}
          {{item.num}}
        </span>
      </nav>
    </div>
    <!-- 下面布局开始 -->

    <div data-v-5071d81f="" data-v-2c3f554b="" class="my-study-list">
      <div data-v-5071d81f=""  class="item" v-for="(item,index) in Arraylist" :key="index" >
        <p data-v-5071d81f="" class="title">{{item.title}}</p>
        <p>{{item.start_play_date|ttime(item.end_play_date)}}</p>
        
        <div data-v-5071d81f="" class="time">
          <!----><span data-v-5071d81f="">共{{item.now_course_num}}课时</span>
        </div>
        <div data-v-5071d81f="" class="info">
          <div data-v-5071d81f="" class="info1">
            <div
              data-v-322f88a2=""
              data-v-5071d81f=""
              class="my-progress"
              style="width: 24vw; height: 1.06667vw;"
            >
              <span data-v-322f88a2="" style="width: 0%;"></span>
            </div>
            <span data-v-5071d81f="" class="rate">已学习{{item.today_course_num}}%</span>
          </div>
          <div data-v-5071d81f="" class="info2"></div>
        </div>
        <!----><!---->
      </div>
     
    </div>
    <!-- 结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      show: 1,
      Arraylist:'',
     Arrayname:'',
     Type:'',
      list: [
        {
          name: "直播课",
        },
        {
          name: "点播课",
        },
        {
          name: "音频课",
        },
        {
          name: "图文课",
        },
        {
          name: "面授课",
        },
        {
          name: "会议课",
        },
      ],
    };
  },
  filters:{
    //时间过滤
    ttime(t1,t2) {
                function getime(numstr) {
                    let t = new Date(numstr - 0),
                        tarr = [
                            t.getFullYear(),
                            t.getMonth() + 1,
                            t.getDate(),
                            t.getHours(),
                            t.getMinutes(),
                            t.getSeconds()
                        ].map(function(m) {
                            return ("" + m).padStart(2, "0");
                        }),
                        str = tarr[1] + "月" + tarr[2] + "日 " + tarr[3] + ":" + tarr[4];
                    return str;
                }
                return getime(t1) + " ~ " + getime(t2);
            }
  //时间过滤结束
  },
  methods: {
    qh: function(index) {
      this.index = index;
        // console.log(this.Arrayname[index].type)
         this.axiosFn(this.Arrayname[index].type) 
      if (this.index == index) {
        this.show = index + 1;
      }
    },
  async  axiosFn(type){
   
        let {data:res}= await this.$http.get(`/api/app/myStudy/${type}`)
         console.log(res)
         this.Arraylist=res.data.courseList
         this.Arrayname=res.data.typeNum
         
         console.log(this.Arrayname)
         console.log(this.Arraylist)
         
  },
   
    
  },
  mounted(){
         this.axiosFn(2) 
  }
};
</script>
<style lang="scss">
// @function px1rem($px) {
//   $rem: 75px;
//   @return ($px / $rem) + rem;
// }
.huadong {
  font-size: 0.4rem;
  width: 100%;
}
.bt {
  width: 100%;
  height: 40px;
  //   background-color:;
}
//要滑动必要css
nav {
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: middle;
  -ms-flex-align: middle;
  align-items: middle;
  overflow: auto;
}
span {
  height: 40px;
  line-height: 40px;
  display: inline-block;
  width: 65px;
  font-weight: bolder;
  text-align: center;
  margin-left: 10px;
  -ms-flex-negative: 0; //先把导航栏样式写好,然后加上下面这两句,导航栏可以实现滑动了
  flex-shrink: 0;
  color: #ccc;
}
.active {
  color: red;
}

// 开始
.my-study-list[data-v-5071d81f] {
    padding: .26667rem .4rem;
    padding: 2.66667vw 4vw;
}
.my-study-list .item[data-v-5071d81f] {
    background-color: #fff;
    border-radius: .13333rem;
    border-radius: 1.33333vw;
    padding: .6rem .37333rem;
    padding: 6vw 3.73333vw;
    margin-bottom: .4rem;
    margin-bottom: 4vw;
    position: relative;
    box-shadow: 0 0 0.2rem rgba(0,0,0,.1);
    box-shadow: 0 0 2vw rgba(0,0,0,.1);
}
.my-study-list .item .title[data-v-5071d81f] {
    font-size: .42667rem;
    font-size: 4.26667vw;
    font-family: PingFangSC-Medium;
    font-weight: 400;
    color: #333;
    vertical-align: top;
}
.my-study-list .item .time[data-v-5071d81f] {
    margin-bottom: .8rem;
    margin-bottom: 8vw;
    font-size: .32rem;
    font-size: 3.2vw;
    font-weight: 400;
    color: #666;
    margin-top: .26667rem;
    margin-top: 2.66667vw;
}
.my-study-list .item .info[data-v-5071d81f] {
    display: flex;
    justify-content: space-between;
}
.my-study-list .item .info .info1[data-v-5071d81f] {
    display: flex;
}

.my-progress span[data-v-322f88a2] {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: #eb6100;
}
.my-study-list .item .info .info1 .rate[data-v-5071d81f] {
    font-size: .32rem;
    font-size: 3.2vw;
    color: #8c8c8c;
}
.my-study-list .item .info .info2[data-v-5071d81f] {
    font-size: .32rem;
    font-size: 3.2vw;
    color: #eb6100;
}



</style>
