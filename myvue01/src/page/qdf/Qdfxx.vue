<template>
  <div class="qdfxx">

<van-nav-bar
  title="李老师16号到22号地理大课堂开讲了"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  
/>
<van-icon name="aim" />
    <van-cell :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
export default {
data(){
    return{
      date: '',
      show: false,
    }
},
created() {
    
},
methods: {
    methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
   onClickLeft() {
      this.$router.go(-1);
    },
  },
},
mounted() {
    
},
}
</script>

<style scoped lang="scss">
.qdfxx{
 
    background: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    height:100%;
}
</style>