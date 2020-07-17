<template>
  <div class="wrapper">
    <div class="header">
      <van-nav-bar title="我的课程">
        <template #right>
          <van-icon name="calender-o" size="18" @click="RlFn" />
        </template>
        <template #left>
          <van-icon name="arrow-left" size="18" @click="$router.go(-1)"/>
        </template>
      </van-nav-bar>
    </div>
     <!-- 导航组件 -->
     <navscroll></navscroll>
      <!-- 日历组件 -->
     <calendar :isShow="show" @changeFn="fn"></calendar>
    </div>
</template>

<script>
import calendar from'../page/Calendar'
import navscroll from'../page/Navscroll'
export default {
  components: {
      navscroll,
      calendar
  },
  props: {},
  
  data() {
    return {
      typenum:[],
      active:-1,
       show:null
    };
  },
  watch: {},
  computed: {},
  methods: {
    async  ajaxFn () {
           let {data:res}= await this.$http.get(`/api/app/myStudy/2`,{
                
           })
             console.log(res)
             if(res.code!=200){
                this.$toast(res.msg)
                return false
             }
             this.typenum=res.data.typeNum
             console.log(this.typenum)
         
    },
    nav_title(index){
       
           this.active=index
    },
    RlFn(){
     
          this.show=!this.show
          // console.log(this.show)
    },
    fn(res){
            this.show=res
    }
  },
  created() {
      this.type=localStorage.getItem("histype")
      console.log(this.type)
      this.ajaxFn ()
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
 
.nav_ul{
     font-size: 0.5rem;
     width: 100%;
     height: 0.8rem;
     background: #8c8c8c;
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     line-height: 0.8rem;
     li{
          width: 2rem;
           text-align: center;
     }
}



</style>
