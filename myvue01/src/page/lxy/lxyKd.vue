<template>
   <div class='kd'>
       <div class="lxy_bt">
           <van-icon name="arrow-left" size="24" color="#595959" @click="lxy_fh" />
           <p>题库选择</p>
       </div>
       <div class="lxy_inp">
            <input type="text" placeholder="请输入题库名称关键字">
            <van-icon name="search" />
       </div>
       <div class="lxy_lb">
           <div class="lxy_left">
               <ul>
                   <li @click="lxy_hs(item.id,index)" :style="{background:i ==index?'#fff':'#F7F8FA'}" v-for="(item,index) in lxy_nav" :key="index">
                       {{ item.title }}
                   </li>
               </ul>
           </div>
           <div class="lxy_right">
                <div class="all" v-show="sel === 1">洛必达法则</div>
                <div class="all" v-show="sel === 2">两个重要</div>
                <div class="all" v-show="sel === 3">
                    <p>高中生物</p>
                    <p>初中生物</p>
                </div>
                <div class="all" v-show="sel === 4">
                    <p>化学实验</p>
                    <p>初中化学</p>
                    <p>高中化学</p>
                </div>
                <div class="all" v-show="sel === 5">
                    <p>初中数学</p>
                    <p>小学数学</p>
                    <p>高中数学</p>
                </div>
                <div class="all" v-show="sel === 6">
                    <p>初中物理</p>
                    <p>高中物理</p>
                </div>
                <div class="all" v-show="sel === 7">
                    <p>小学英语</p>
                    <p>初中英语</p>
                    <p>高中英语</p>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
   data() {
   //这里存放数据
       return {
           sel:1,
           i:0,
           lxy_nav:[
               {
                   id:1,
                   title:"求导题库"
               },
               {
                   id:2,
                   title:"极限题库"
               },
               {
                   id:3,
                   title:"生物"
               },
               {
                   id:4,
                   title:"化学"
               },
               {    
                   id:5,
                   title:"数学"
               },
               {
                   id:6,
                   title:"物理"
               },
               {
                   id:7,
                   title:"英语"
               },
           ]
       };
   },
   //import引入的组件需要注入到对象中才能使用
   components: {

   },
   //监听属性 类似于data概念
   computed: {

   },
   //监控data中的数据变化
   watch: {

   },
   //方法集合
   methods: {
        //返回上一个页面
       lxy_fh(){
           this.$router.go(-1)
       },
       //侧边栏的换色和切换
       lxy_hs(id,index){
           this.i = index
           this.sel = id
       }
   },
   //生命周期 - 创建完成（可以访问当前this实例）
   created() {

   },
   //生命周期 - 挂载完成（可以访问DOM元素）
   mounted() {

   },
   beforeCreate() {}, //生命周期 - 创建之前
   beforeMount() {}, //生命周期 - 挂载之前
   beforeUpdate() {}, //生命周期 - 更新之前
   updated() {}, //生命周期 - 更新之后
   beforeDestroy() {}, //生命周期 - 销毁之前
   destroyed() {}, //生命周期 - 销毁完成
   activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    font-size: 14px;
}
.kd{
    width: 100%;
    height: 100%;
    .lxy_bt{
        width: 100%;
        height: 8%;
        display: flex;
        align-items: center;
      p{
          width: 86%;
          text-align: center;
          font-size: 18px;
          color: #595959;
      }
    }
    .lxy_inp{
        width: 92%;
        height: 9%;
        display: flex;
        padding-left: 8%;
        border-bottom: 2px solid #F7F8FA;
        position: relative;
         >input{
            width: 92%;
            height: 46px;
            border-radius: 30px;
            background-color: #F7F8FA;
            border: none;
            text-indent: 20px;
        }
        .van-icon{
            height: 20px;
            position: relative;
            right: 24px;
            top: 18px;
        }
    }
    .lxy_lb{
        width: 100%;
        height: 82%;
        display: flex;
        .lxy_left{
            width: 24%;
            height: 100%;
            background: #F7F8FA;
            ul{
                width: 100%;
                height: 100%;
                li{
                   padding: 17px 22px;
                    color: #595959;
                    font-size: 14px;
                }
            }
        }
        .lxy_right{
            height: 100%;
            width: 76%;
            .all{
                margin-top: 20px;
                text-indent: 20px;
                color: #595959;
            }
        }
    }
   
}
</style>