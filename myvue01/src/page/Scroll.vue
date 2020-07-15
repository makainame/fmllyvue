<template>
  <div class="wrapper">
 <div class="header"  :class="navBarFixed == true ? 'navBarWrap' :''">
        <van-nav-bar  >
     <template #right>
    <van-icon name="cluster" size="18" />
    </template>
    <template #title>
     <span v-for="(item,index) in arr"  :key="index" :style="{color:active1==index?'red':''}" @click="but(index,item.comm)">
       {{item.name}}
     </span>
    </template>
    <template #left>
    <van-icon name="arrow-left" size="18"  @click="leftFn"/>
    </template>
    </van-nav-bar>
      </div>
       
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
         navBarFixed:false,
         arr:[
           {
             name:"课程介绍",
             comm:"comment1"
           },
            {
              name:"课程大纲",
              comm:"comment2"

            },
            {
              name:"课程评价",
              comm:"comment3"
            }
         ],
         active1:0
    };
  },
  watch: {},
  computed: {},
 methods: {
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
           this.$store.state.isHove=false
        } else {
          this.navBarFixed = false
           this.$store.state.isHove=true
        }
        console.log(scrollTop)
     },
     but(index,comm){
        this.active1=index
          // console.log(comm)
          // this.$refs.comm.scrollIntoView()
            document.querySelector(`.${comm}`).scrollIntoView()
     },
      leftFn(){
          this.$router.go(-1)
      }
},

created() {
       this.$emit('childByValue', this.arr)
},
 mounted () {
      // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
    }




};
</script>
<style lang="scss" scoped>
.navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
    // left: 45%;
  }
.header{
  width: 100%;
  height: 40px;
  background: chocolate;
  z-index: 9999;
 
  

}

</style>