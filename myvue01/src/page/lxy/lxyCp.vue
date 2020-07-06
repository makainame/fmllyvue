<template>
   <div class='cp'>
       <div class="lxy_bt">
           <van-icon name="arrow-left" size="24" color="#595959" @click="lxy_fh" />
           <p>测评记录</p>
            <van-icon name="search" size="24" color="#595959" />
       </div>
        <van-dropdown-menu active-color="#eb6100">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <div class="lxy_img">
            <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
            <p>该时段您没有留下测评记录哦！</p>
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
                { text: '类型不限', value: 0 },
                { text: '套卷练习', value: 1 },
                { text: '仿真练习', value: 2 },
                { text: '专题专练', value: 3 },
            ],
            option2: [
                { text: '时间', value: 'a' },
                { text: '全部', value: 'b' },
                { text: '今天', value: 'c' },
                { text: '7天', value: 'd' },
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
.cp{
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