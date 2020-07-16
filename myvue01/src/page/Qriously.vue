<template>
  <div>
      <van-popup v-model="$store.state.isDetail">
    <qriously :value="url" :size="200" ></qriously>
     <p>扫一扫立即关注</p>
      </van-popup>
  </div>
</template>
<script>
  export default {
    data() {
        return {
            url: 'http://192.168.43.220:8080/#/detail'
         }
     },
     methods:{
        
     }
  }
</script>
<style lang="scss" scoped>
  p{
    text-align: center;
    color: crimson;
    height: 0.6rem;
    line-height: 0.6rem;
  }
</style>

