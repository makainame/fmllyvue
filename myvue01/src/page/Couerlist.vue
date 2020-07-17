<template>
  <div class="wrapper">
      <ul class="qdf_ul">
      <li class="qdf_li" v-for="(item,index) in contentlist" :key="index" @click="qdf_tzxqy(item.id,item.course_type)">
        <p class="qdf_title">
          <font>{{item.title}}</font>
          </p>
          <div class="qdf_time">
            <p class="qdf_after">{{item.end_play_date| ttime(item.end_play_date) }}</p>
            <p>共{{item.total_periods}}课时</p>
              <img src="../assets/微信图片_20200716180913.png"   alt="" v-if="item.has_buy==1" class="image">
          </div>
          <div class="qdf_teacher">
        <div class="qdf_teacher_item" v-for="(item,index) in item.teachers_list" :key="index">
<img :src="item.teacher_avatar" alt="">
<font>{{item.teacher_name}}</font>
        </div>
          </div>
          <p class="qdf_info">
            <span class="qdf_person">
              {{item.sales_num}}人已报名
            </span>
            <font class="qdf_free">{{item.price |totext}}</font>
          </p>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  components: {},
  props:["contentlist"],
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
      qdf_tzxqy(id,type){
        this.$router.push({
            path:"/detail",
            query:{
                 id:id,
                 type:type
            }
        })
      }
  },
  created() {},
  mounted() {
     
  }
};
</script>
<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
}
.kc{
   padding-bottom: 50px;
  .qdf_ul {
    padding: .4rem;
    padding: 4vw;
    background: #F0F2F5;
   
}
.qdf_li {
    background: #fff;
    border-radius: .13333rem;
    border-radius: 1.33333vw;
    padding: 0 .37333rem;
    padding: 0 3.73333vw;
    margin-bottom: .4rem;
    margin-bottom: 4vw;
    position: relative;
}
.qdf_title {
    padding-top: .4rem;
    padding-top: 4vw;
}
.qdf_title font {
    font-size: .42667rem;
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
    padding-left: .53333rem;
    padding-left: 5.33333vw;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAGdElEQ…7D7bIT6T8ppX5D8qmltjcNVN9Rf6pC343nMmv03YDqJvO/L6pVWKmfOusAAAAASUVORK5CYII=) no-repeat 0;
    background-size: .37333rem .37333rem;
    background-size: 3.73333vw 3.73333vw;
    
}
.qdf_time p {
    height: .8rem;
    height: 8vw;
    line-height: .8rem;
    line-height: 8vw;
    display: inline-block;
    font-size: .32rem;
    font-size: 3.2vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666;
    padding-right: .45333rem;
    padding-right: 4.53333vw;
    position: relative;
}
.qdf_time{
      .image{
        width: 80px;
        height: 80px;
         position: absolute;
         top: 15px;
         right: 20px;

         
      }
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
.qdf_teacher_item img{
    width: .72rem;
    width: 7.2vw;
    height: .72rem;
    height: 7.2vw;
    border-radius: 50%;
}
.qdf_teacher_item font {
    font-size: .32rem;
    font-size: 3.2vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0,0,0,.45);
    margin-left: .22667rem;
    margin-left: 2.26667vw;
    margin-right: .46667rem;
    margin-right: 4.66667vw;
}
.qdf_info {
    border-top: 1px solid #f5f5f5;
    height: 1.17333rem;
    height: 11.73333vw;
    line-height: 1.17333rem;
    line-height: 11.73333vw;
    display: flex;
    font-size: .34667rem;
    font-size: 3.46667vw;
    font-family: PingFangSC-Regular;
}
.qdf_person{
    flex: 1;
}
.qdf_free{
    color: #44a426;
    font-size: .42667rem;
    font-size: 4.26667vw;
}
.fl{
  font-size: 0.4rem;
   p{
     font-size: 0.5rem;
     margin: 0.2rem;
     
   }
   ul{
     display: flex;
     justify-content: space-around;
     text-align: center;
   }
   ul>li{
       width: 1.8rem;
       height: 0.8rem;
       line-height: 0.8rem;
       background: cornflowerblue;
       margin: 0.2rem 0.2rem;
       color: #fff;
   }
   ol{
     display: flex;
     justify-content: space-around;
     text-align: center;
   }
   ol>li{
       width: 1.8rem;
       height: 0.8rem;
       line-height: 0.8rem;
       background: cornflowerblue;
       margin: 0.2rem 0.2rem;
        color: #fff;
   }
}
.but{
  display: flex;
  justify-content: space-around;
  margin: 0.5rem;
}
.sortClass{
    font-size: 0.4rem;
    ul li{
       text-align: center;
       padding: 0.4rem;
       border-bottom: 0.01rem solid #ccc;
    }
}
.sx ul{
   font-size: 0.4rem;
        display: flex;
        justify-content: space-around;
         flex-wrap: wrap;
        li{
          
           width: 2rem;
           height: 0.6rem;
           text-align: center;
           line-height: 0.6rem;
           background: coral;
           color: #fff;
           margin: 0.2rem;
        }
}
}
</style>