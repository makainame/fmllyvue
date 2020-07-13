<template>
  <div class="otoplan">
      <div class="headblue">
        <!-- 蓝色头部信息 -->
        <p style="margin-right:36%;margin-left:10px;"><van-icon name="arrow-left" @click="gooto"/></p>
        <p>讲师详情</p>
      </div>
      <!-- 蓝色老师详细信息 -->
        <!-- <div class="headbluefff" >
            <div><img width=40 height=40 :src="teachList.avatar" alt=""></div>
            <div>
              <p class="teachername">{{ teachList.teacher_name }} <span style="color:#EB6100;">{{ teachList.level_name }}</span></p>
              <p class="teacherage">{{ teachList.sex |sexF }} {{ teachList.teach_age }}年教龄</p>
            </div>
            <div><button>关注</button></div>
        </div> -->
        <div class="box">
            <div class="headbluefff">
                <div><img width=40 height=40 :src="teachList.avatar" alt=""></div>
                <div>
                <p class="teachername">{{ teachList.teacher_name }} <span style="color:#EB6100;">{{ teachList.level_name }}</span></p>
                <p class="teacherage">{{ teachList.sex |sexF }} {{ teachList.teach_age }}年教龄</p>
                </div>
                <div>
                    <button  @click="buut">{{gz | totext}}</button>
                  
                    </div>
            </div>
            <div class="btndiv">
                <p v-for="(u,i) in teachList.tag_content" :key="i">{{ u }}</p>
            </div>
        </div>
        <!-- 主讲老师分类 -->
        <div class="fenlei">
            <van-tabs v-model="active" title-active-color="#EB6100">
                <!-- 讲师介绍课程内容 -->
               <van-tab title="讲师介绍">
                    <div class="one" v-for="(item,index) in xiangarr" :key="index">
                        <p>{{ item.attr_name }}</p>
                        <p v-for="(item,index) in item.attr_value" :key="index">{{ item.attr_value_name }}</p>
                    </div>
                    <div class="three">
                        <p>老师简介</p>
                        <p style="line-height:30px;">{{ xiangxi.intro }}</p>
                    </div>
               </van-tab>
               <!-- 主讲课程内容 -->
               <van-tab title="主讲课程">
                    <div v-for="(item,index) in zhujiang" :key="index" class="kecheng">
                        <div style="font-size:18px;color:#333333;">{{ item.title }}</div>
                        <p></p>
                        <div v-for="(s,w) in item.teachers_list" :key="w" class="sl_img">
                            <img width=30 height=30 style="border-radius:50px;margin-right:10px;" :src="s.teacher_avatar" alt="">
                            <span>{{ s.teacher_name }}</span>
                        </div>
                        <div class="baoming">
                            <p style="color:#8C8C8C;">{{ item.sales_num }}人已报名</p>
                            <p style="color:red;margin-right:30px;">{{ item.price | price }}</p>
                        </div>
                    </div>
               </van-tab>
               <!-- 学员评价 -->
               <van-tab title="学员评价">
                   <div class="ping">
                       <img width=180 height=180 src="../../public/img/b8ee2847cb3c788c16694bd2679f7c9.png" alt="">
                       <p>暂无评论</p>
                   </div>
               </van-tab>
            </van-tabs>
        </div>

      <div class="denglu">
        <van-button block color="#FC5500">立即预约</van-button>
    </div>
  </div>
</template>
<script>
import axios from'axios'
export default {
  name: "",
  data() {
    return {
        teachList:{},
        active: 3,
        xiangxi:{},
        xiangarr:[],
        zhujiang:[],
         gz:''
    };
  },
  props: {},
  components: {},
  filters:{
     sexF(val){
         switch(val){
             case 0:
                 return "男";
            case 1:
                return "女"
         }
     },
     price(val){
         switch(val){
             case 0:
             return "免费"
         }
     },
     totext(val){
      
           if(val==1){
                 return "已关注"
                 
           }else if(val==2){
                 return "关注"
                  
           }
           return val
       }
  },
  mounted() {
    
             
  },
  created(){
//   讲师详情头部
    axios.get(`https://www.365msmk.com/api/app/teacher/${this.$route.query.id}`).then((res)=>{
        console.log(res)
        // res.data = {
        //     "code":200,
        //     "msg":"操作成功",
        //     "data":{
        //         "teacher":{
        //             "id":191,
        //             "avatar":"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
        //             "level_name":"M20",
        //             "teacher_name":"文卫星",
        //             "sex":0,
        //             "age":61,
        //             "teach_age":44,
        //             "tag_content":null
        //         },
        //         "flag":2
        //     }
        // }
        this.teachList=res.data.data.teacher;
        console.log(this.teachList)
    })
    // 讲师详情内容之讲师介绍
    axios.get(`https://www.365msmk.com/api/app/teacher/info/${this.$route.query.id}`).then((res)=>{
        console.log(res)
        this.xiangxi=res.data.data;
        this.xiangarr=res.data.data.attr;
        console.log(this.xiangarr)
    })
    // 讲师详情内容之主讲课程
    axios.post("https://www.365msmk.com/api/app/teacher/mainCourse").then((res)=>{
        console.log(res)
        this.zhujiang=res.data.data.list
        console.log(this.zhujiang)
    })
    axios.get(`https://www.365msmk.com/api/app/teacher/${this.$route.query.id}`).then((res)=>{
                   console.log(res)
           
                this.gz=res.data.data.flag
                // console.log(res.data)
                console.log(this.gz)
    })
  },
  methods: {
    gooto(){
      this.$router.go(-1)
    },
    async buut(){
              
              let {data:res}= await this.$http.get(`/api/app/teacher/collect/${this.$route.query.id}`)
              console.log(res)
           
                this.gz=res.data.flag
                // console.log(res.data)
                console.log(this.gz)
    },
    
  },
  
};
</script>
<style scoped>
.otoplan{
    height:100%;
    background-color: #F0F2F5;
}
.headblue{
  width:100%;
  height:100px;
  background: linear-gradient(#5EAAF8, #5286E8);
  color:#fff;
  font-size:20px;
  display: flex;
  /* justify-content: center; */
  position: relative;
}
.headblue>p{
  margin-top:10px;
}

.denglu{
  width:100%;
  position: fixed;
  bottom:0;
  left:0
}
.box{
  background-color: #fff;
  border-radius:5px;
  width:94%;
  /* height:80px; */
  position: absolute;
  top:50px;
  left:10px;
  font-size:14px;
}
.headbluefff{
    display: flex;
    align-items: center;
}
.btndiv{
    display: flex;
    color:#EA7A2F;
    justify-content: space-around;
    /* border:1px solid #ccc; */
}
.btndiv>p{
    background-color: #FFE4D3;
    padding:4px 10px;
    border-radius:20px;
    font-size:12px;
}
.headbluefff>div:nth-of-type(2){
  width:60%;
}
.headbluefff>div>img{
  margin:0 10px;
}
.headbluefff>div>button{
  width:80px;
  height:30px;
  border:none;
  outline:none;
  border-radius:20px;
  margin-right:10px;
  color:#EB6100;
  border:1px solid #EB6100;
  background-color: #fff;
} 
.teachername{
  color:#595959;
}
.teacherage{
  color:#B7B7B7;
  font-size:12px;
}
.fenlei{
    margin-top:80px;
    width:100%;
    background-color: #fff;
}
.fenlei>div{
    font-size:14px;
    color:#8C8C8C;
    margin-top:10px;
}
/* .fenlei>div{
    display: flex;
} */
.three{
    display: flex;
    width:100%;
    height:400px;
    /* background-color: green; */
}
.three>p:nth-of-type(1){
    width:30%;
    text-align: center;
}
.three>p:nth-of-type(2){
    width:70%;
    margin-right:10px;
}
.one{
    display: flex;
}
.one>p:nth-of-type(1){
    width:30%;
    text-align: center;
}
.one>p:nth-of-type(2){
    /* width:70%; */
    margin-right:10px;
}
.kecheng{
    width:100%;
    height:200px;
    border-top:1px solid #ccc;
    padding:30px 30px 30px 20px;
    box-sizing: border-box;
    position: relative;
}
.baoming{
    display: flex;
    justify-content: space-between;
    border-top:1px solid #F5F5F5;
    position: absolute;
    bottom:0;
    left:0;
    padding-left:30px;
    box-sizing: border-box;
    width:100%;
}
.sl_img{
    display: flex;
    align-items: center;
    margin-top:20px;
}
.ping{
    height:100%;
    background-color: #fff;
    text-align: center;
    padding-bottom:10px;
}
.ping>p{
    color:#8C8C8C;
    /* margin-bottom:30px; */
    font-size:16px;
}


</style>