<template>
   <div class='tj'>
       <div class="lxy_bt">
           <van-icon name="arrow-left" size="24" color="#595959" @click="lxy_fh" />
           <p>套卷练习</p>
            <van-icon name="search" size="24" color="#595959" />
       </div>
       <van-dropdown-menu active-color="#eb6100">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <div class="lxy_img">
            <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
            <p>请稍候，套卷正在赶来的路上啦</p>
        </div>
   </div>
</template>

<script>
export default {
   data() {
   //这里存放数据
       return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '套卷分类', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '套卷状态', value: 'a' },
                { text: '全部', value: 'b' },
                { text: '已做', value: 'c' },
                { text: '未做', value: 'd' },
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
.tj{
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
}
</style>