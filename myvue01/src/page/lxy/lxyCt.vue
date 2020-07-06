<template>
   <div class='ct'>
        <div class="lxy_bt">
           <van-icon name="arrow-left" size="24" color="#595959" @click="lxy_fh" />
           <p>错题练习</p>
            <van-icon name="search" size="24" color="#595959" />
       </div>
       <div class="lxy_nav">
           <van-dropdown-menu  active-color="#eb6100">
            <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
           <p>
              <van-icon name="apps-o" />
               巩固全部错题
           </p>
           <p @click="showPopup">
              <van-icon name="qr-invalid" />
             移除错题
           </p>
       </div>
       <div class="lxy_img">
            <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
            <p>暂无错题记录</p>
        </div>
        <van-dialog v-model="show" title="" show-cancel-button>
            <div class="lxy_ycct">
                是否做对题目后自动移除该错题
            </div>
            
        </van-dialog>
   </div>
</template>

<script>
export default {
   data() {
   //这里存放数据
       return {
            show: false,
             value1: 0,
            option1: [
                { text: '类型不限', value: 0 },
                { text: '全部', value: 1 },
                { text: '套卷练习', value: 2 },
                { text: '仿真练习', value: 3 },
                { text: '专题专练', value: 4 },
            ],
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
       showPopup() {
        this.show = true;
        },
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
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    font-size: 14px;
}
.ct{
    width: 100%;
    height: 100%;
    .lxy_bt{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
      p{
          width: 86%;
          text-align: center;
          font-size: 18px;
          color: #595959;
      }
    }
    .lxy_nav{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        p:nth-of-type(1){
             font-size: 15px;
        }
         p:nth-of-type(2){
             font-size: 15px;
             color: #999;
        }
         p:nth-of-type(3){
             font-size: 15px;
             color: #999;
        }
    }
    .lxy_img{
        width: 100%;
        height: 200px;
        text-align: center;
        img{
            width: 40%;
        }
        p{
            color: #595959;
            font-size: 16px;
            margin-top: 10px;
        }
    }
    .lxy_ycct{
        width: 100%;
        height: 70px;
        text-align: center;
        line-height: 70px;
    }
}
</style>