<template>
  <div class="kc" >
    <van-nav-bar class title="特色课">
      <template #right>
        <van-icon name="search" size="18" @click="go_ss()"/>
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <div class="fl">

     
      <van-dropdown-item  title="分类" ref="item">
         <p>{{classNan}}</p>
        <ul>
          <li v-for="(item,index) in classBan" :key="index" @click="activeIndex1=index" :style="{background:activeIndex1==index?'red':''}">
            {{item.name}}
          </li>
        </ul>
        <hr>
        <p>{{classCon}}</p>
        <ol>
            <li v-for="(item,index) in classXue" :key="index"  @click="activeIndex2=index" :style="{background:activeIndex2==index?'red':''}">
            {{item.name}}
          </li>
        </ol>
        <hr>
        <div class="but">
          <van-button color="#7232dd" size="small" @click="Reset">重置</van-button>

          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="small" @click="submit">确定</van-button>
        </div>
         

      </van-dropdown-item>
    
       </div>
       <div class="sortClass">
           <van-dropdown-item  title="排序" >
             <ul>
               <li v-for="(item,index) in list" :key="index"  @click="sortFn(index)" :style="{color:active==index?'red':''}">
                 {{item}}
               </li>
             </ul>
        <!-- <p >综合排序</p> -->
         <!-- <p>最新</p>
          <p>最热</p>
           <p>最新</p>
            <p>价格从低到高</p>
            <p>价格从高到低</p> -->
      </van-dropdown-item>
       </div>
        <div class="sx">
   <van-dropdown-item  title="筛选" >
            <ul>
              <li v-for="(item,index) in shaix" :key="index" @click="but(index,item.id)" :style="{color:hove==index?'black':''}">
                {{item.name}}
              </li>
            </ul>
      </van-dropdown-item>
        </div>
   
    </van-dropdown-menu>
    <!-- 列表渲染 -->
    <van-list
  :immediate-check="isflase"
   v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell  >
<ul class="qdf_ul">
      <li class="qdf_li" v-for="(item,index) in axioslist" :key="index" @click="qdf_tzxqy()">
        <p class="qdf_title">
          <font>{{item.title}}</font>
          </p>
          <div class="qdf_time">
            <p class="qdf_after">{{item.end_play_date| ttime(item.end_play_date) }}</p>
            <p>共{{item.total_periods}}课时</p>
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



  </van-cell>
</van-list>



    
 
  </div>
</template>

<script>

export default {
  name:"kc",
  components: {
   scroll,
  },
  props: {},
  filters:{
  totext(val){
       if(val==0){
              return "免费"
           }
    },
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
  data() {
    return {
      couerseInfo:{
           page: 1, /* 页数 */
            limit: 10,/* 数量 */
            course_type: 0,/* 筛选类型 */
            classify_id: '',/* 页数 */
            order_by: '',/* 排序*/
            attr_val_id: "",/* 分类*/
            is_vip: 0/* 是否是Vip */
      },/* 特色请求接口 */
        activeIndex1:-1,
        activeIndex2:-1,
         classBan:'',
         classXue:'',
         classNan:'',
         classCon:'',
         axioslist:'',
          list:["综合排序","最新","最热","价格从高到低","价格从低到高"],
             shaix:[
        {
          name:"全部",
          id:0
        },
        {
          name:"大班课",
          id:2
        },
         {
          name:"小班课",
          id:3
        },
        {
          name:"公开课",
          id:4
        },
         {
          name:"点播课",
          id:5
        },
        {
          name:"面授课",
          id:6
        },
         {
          name:"音频课",
          id:7
        },
        {
          name:"图文课",
          id:8
        },
        {
          name:"会员课",
          id:9
        },
      ],
          active:0,
          isflase:false,
          loading: false,
          finished: false,
          hove:-1,
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    go_ss(){
      this.$router.push("/qdfss")
    },
    qdf_tzxqy(){
        this.$router.push("/qdfxqy")
    },
     async  axiosFn() {
           let {data:res}= await this.$http.get('https://www.365msmk.com/api/app/courseClassify?')
           if(res.code!=200){
                this.$toast(res.msg)
                return false
           }
                this.classBan=res.data.attrclassify[0].child
                this.classXue=res.data.attrclassify[1].child
                this.classNan=res.data.attrclassify[0].name
                this.classCon=res.data.attrclassify[1].name
                console.log(res)
                console.log(this.classBan)
    },
    async axiosuserFn(){
              let {data:res}= await this.$http.get(`/api/app/courseBasis`,{
                params:this.couerseInfo
              })
              if(res.code!=200){
                    this.$toast(res.msg)
                    return false
              }
              console.log(res)
              if(this.couerseInfo.page!=1){
                this.axioslist=this.axioslist.concat(res.data.list)
              }else{
                  this.axioslist=res.data.list
              }
               if(this.axioslist.length>=20){
                 console.log(this.finished)
                   this.finished = true;
               }
                this.loading = true;
                console.log(res.data.list)
                console.log(this.axioslist.length)
    },
    submit(){
         let arr=[]

        if(this.activeIndex1!=-1){
             let Ban= this.classBan[this.activeIndex1].id
             console.log(Ban)
             arr.push(Ban)
        }
          if(this.activeIndex2!=-1){
             let Xue= this.classXue[this.activeIndex2].id
             arr.push(Xue)
        }
        
        
        this.couerseInfo.attr_val_id=arr.join(",")
        this.$refs.item.toggle();
          this.axiosuserFn()
        console.log( this.couerseInfo.attr_val_id)
    },
    onLoad(){
          setTimeout(()=>{
             this.couerseInfo.page++
              this.axiosuserFn()
              
          },3000)
    },
    Reset(){
          this.couerseInfo.attr_val_id=""
            this.axiosuserFn()
             this.$refs.item.toggle();
    },
    sortFn(index){
        //  document.querySelector('p').style="color:red"
          this.couerseInfo.order_by=index
          this.axiosuserFn()
          this.active=index
    },
    but(index,id){
    
         this.hove=index
           this.couerseInfo.order_by=id
          this.axiosuserFn()
            console.log(id)
    }
  },
  created() {
    this.axiosFn()
    this.axiosuserFn()
  },
  mounted() {}
};
</script>
<style lang="scss"  scoped>
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