<template>
  <div class="wrapper">
      <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" /> -->
      <van-calendar v-model="isShowC" @confirm="onConfirm" position="top"/>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
      isShow:{
            type:Boolean,
            default:false
      }
      
  },
  data() {
    return {
        data:'',
        // show:false
    };
  },
  watch: {},
  computed: {
      isShowC :{
          get() {
              return this.isShow
          },
          set(val) {
              this.$emit("changeFn",val)
          }
          
      }

  },
  methods: {
      
        formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.isShowC = false;
      this.date = this.formatDate(date);
    }
  },
  created() {
        // console.log(this.show)
        // console.log(1)
        //  this.$emit("changeFn",this.isShow)
  },
  mounted() {
    //   console.log(this.isShow)
        //   this.show=this.isShow
    //   this.$emit("chengeFn",this.show)
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>