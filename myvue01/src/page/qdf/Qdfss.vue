<template>
    <div id="qdfss">
      <div  class="qdf_info">
        <header  class="qdf_header">
          <span >
            <img
              @click="qdf_fh()"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
              alt
            />
          </span>
          <span >
            <input  placeholder="请输入内容" @keyup.enter="qdf_fh2()" v-model="text" class="input" style="width:200px" @click="inp"/>
          </span>
          <span @click="qdf_fh1()" v-if="show"  class="span">取消</span>
          <span @click="qdf_fh2()" v-else style="color:black" class="span">搜索</span>
        </header>
             
     <ul class="qdf_ul">
      <li class="qdf_li" v-for="item of arr" :key="item.index" @click="qdf_tzxqy(item.id)">
        <p class="qdf_title">
          <font>{{item.title}}</font>
          </p>
          <div class="qdf_time">
            <p class="qdf_after">{{item.time}}</p>
            <p>共{{item.total_periods}}课时</p>
          </div>
          <div class="qdf_teacher">
        <div class="qdf_teacher_item"  v-for="(items,index) in item.teachers_list" :key="index">
<img :src="items.teacher_avatar" alt="">
<font>{{items.teacher_name}}</font>
        </div>
          </div>
          <p class="qdf_info">
            <span class="qdf_person" style="font-size:16px">
              {{item.sales_num}}人已报名
            </span>
            <font class="qdf_free">{{item.con}}</font>
          </p>
      </li>
    </ul>


        <section  class="qdf_search" v-if="isShow">
          <header  class="qdf_his-header">
            <p >
              <span >历史搜索</span>
              <span  @click="deles">
                <i><van-icon   name="delete" /></i>
              </span>
            </p>
            
          </header>
      <div class="list">
               <ul>
                 <li v-for="(item,index) in arrlist" :key="index" @click="loca(item)">
                   {{item}}
                 </li>
               </ul>
          </div>
        </section>
         
     
      </div>
      
    </div>
 
</template>

<script>
export default {
  data() {
    return {
      show:true,
      isShow:true,
      text:"",
      arr:'',
      arrlist:[]
    };
  },
   watch: {
    
   },
  created() {
     let his=JSON.parse(localStorage.getItem("history"))
       if(his){
           this.arrlist=his
       }
  },
  methods: {
      qdf_fh(){
          this.$router.go(-1)
      },
      inp() {
         this.show=false
         
      },
      qdf_fh1(){
        this.$router.go(-1)
      },
      loca(item){
           this.text=item
            this.arrlist=""
      },
      deles(){
  
          localStorage.removeItem("history")
          this.arrlist=""
          this.text=""
      },
      qdf_tzxqy(id){
         this.$router.push({
           path:"/qdfxqy",
           query:{
              id:id
           }
         })
      },

     async qdf_fh2(){
          let {data:res}= await this.$http.get(`/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=${this.text}`)
              
            this.arr=res.data.list
           
            console.log(res.data.list)
            console.log(this.arr)
              console.log(res)
               if(res.code==200){
                   this.$toast.success(res.msg)
                     this.isShow=false
               }else{
                   this.$toast.fail(res.msg);
               }
              //  存储历史记录
                let arr=[]
           let his=JSON.parse(localStorage.getItem("history"))
           if(his){
               arr=his
           }
           if(arr.length>0){
            
            let bool = arr.some((item)=>{
              return item == this.text
            })
            console.log(bool)
            if(!bool){
               if(arr.length>=5){
                   arr.pop()
               }
                  arr.unshift(this.text)
            }
           }
         
             
           console.log(arr)
           this.arrlist=his
           localStorage.setItem("history",JSON.stringify(arr))
              console.log(this.arrlist)
      },
      

  },
  mounted() {}
};
</script>

<style socped  lang="scss">
#qdfss{
    background: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    margin-top: 20px;
}
.qdf_info {
    padding-bottom: 1.06667rem;
    padding-bottom: 10.66667vw;
}
.qdf_header {
    height: 1.25333rem;
    height: 12.53333vw;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
}
.qdf_header span:first-child {
    flex: 1;
    margin-right:0.2rem;
}
.qdf_header span:first-child img {
    width: .24rem;
    width: 2.4vw;
    height: .42667rem;
    height: 4.26667vw;
    padding-left: .4rem;
    padding-left: 4vw;
}
.qdf_header span:nth-child(2) {
    flex: 6;
}
.qdf_header span:nth-child(2) input {
  
    height: .8rem;
    height: 8vw;
    padding-left: .74667rem;
    padding-left: 7.46667vw;
    border: none;
    background: #e4e7ed;
    border-radius: .4rem;
    border-radius: 4vw;
    font-size: .4rem;
    font-size: 4vw;
    width: 73%;
}
.qdf_header span:nth-child(3) {
    flex: 1;
    font-size: .37333rem;
    font-size: 3.73333vw;
    color: #d2d2d1;
    margin-left:0.3rem;
}
.qdf_search {
    margin: .4rem .45333rem;
    margin: 4vw 4.53333vw;
}
.qdf_his-header {
    height: 1.06667rem;
    height: 10.66667vw;
}
.qdf_his-header p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.qdf_his-header p span:first-child {
    font-size: .4rem;
    font-size: 4vw;
    color: #333;
    font-weight: 700;
}
.list ul{
  font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
}
.list ul li{
    // flex: 1;
    background: #ccc;
    width: 50px;
    height: 30px;
    line-height: 30px;
    border-radius: 40px;
}
.qdf_placeholder {
    height: 0;
    pointer-events: none;
}
 .qdf_ul {
    padding: .4rem;
    padding: 4vw;
    background: #F0F2F5;
}
.qdf_teacher_item img{
    width: .72rem;
    width: 7.2vw;
    height: .72rem;
    height: 7.2vw;
    border-radius: 50%;
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


.qdf_free{
    color: #44a426;
    font-size: .42667rem;
    font-size: 4.26667vw;
}
.span{
  float: right;
  margin-top: 2px;
}
</style>

























