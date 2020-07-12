<template>
  <div class="wrapper">
     
     <div class="xf" id="moveDiv" v-jump="path"
	      @mousedown.stop="down()" @touchstart.stop="down()"
	      @mousemove.stop="move()" @touchmove.stop="move()"
	      @mouseup.stop="end()" @touchend.stop="end()"
	    >
	     <van-icon  name="envelop-o" color="#ffffff" class="xfs" size="30" />
	    </div>

  </div>
</template>

<script>
import {mapMutations} from'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
        path:"/deles",
         flags: false,
    position: { x: 0, y: 0 },
    nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
    };
  },
  watch: {},
  computed: {},
  methods: {
  // 实现移动端拖拽
  down(){
    this.$store.commit("down")

    this.flags = true;
    let touch;
    if(event.touches){
        touch = event.touches[0];
    }else {
        touch = event;
    }
    this.position.x = touch.clientX;
    this.position.y = touch.clientY;
    this.dx = moveDiv.offsetLeft;
    this.dy = moveDiv.offsetTop;
  },
  move(){
       this.$store.commit("move")
    if(this.flags){
      let touch ;
      if(event.touches){
          touch = event.touches[0];
      }else {
          touch = event;
      }
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx+this.nx;
      this.yPum = this.dy+this.ny;
      //添加限制：只允许在屏幕内拖动
	  const maxWidth = document.body.clientWidth - 54;//屏幕宽度减去悬浮框宽高
	  const maxHeight = document.body.clientHeight - 54;
	  if (this.xPum < 0) { //屏幕x限制
		this.xPum = 0;
	  } else if (this.xPum>maxWidth) {
	    this.xPum = maxWidth;
	  }
	  if (this.yPum < 0) { //屏幕y限制
		this.yPum = 0;
	  } else if (this.yPum>maxHeight) {
		this.yPum = maxHeight;
	  }
      moveDiv.style.left = this.xPum+"px";
      moveDiv.style.top = this.yPum +"px";
      
      //阻止页面的滑动默认事件
      // document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
      //     // event.preventDefault();//jq 阻止冒泡事件
      //     event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
      // },false);
    }
  },
//鼠标释放时候的函数
  end(){
      this.$store.commit("end")
    this.flags = false;
  }
},

  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
 .wrapper{
     width: 100%;
     height: 100%;

 }
 .absode{
   width: 100%;
   height: 200px;
   background: chartreuse;
   position: fixed;
.xf{
  width:60px;
  height:60px;
  border-radius:50%;
  background:blue;
  position: fixed;
  right: 30px;
  bottom: 100px;

 .xfs{
   margin-top:15px;
   margin-left:15px;
 }
}
 }

// #webId { position: relative; }
//   .xuanfu {
//     height: 54px; /* rem = 12px */
//     width: 54px;
//     /*1.3  如果碰到滑动问题，请检查 z-index。z-index需比web大一级*/
//     z-index: 999;
//     position: fixed;
//     top: 4.2rem;
//     right: 3.2rem;
//     border-radius: 0.8rem;
//     background-color: rgba(0, 0, 0, 0.55);
//   }
//   .yuanqiu {
//     height: 2.7rem;
//     width: 2.7rem;
//     border: 0.3rem solid rgba(140, 136, 136, 0.5);
//     margin: 0.65rem auto;
//     color: #000000;
//     font-size: 1.6rem;
//     line-height: 2.7rem;
//     text-align: center;
//     border-radius: 100%;
//     background-color: #ffffff;
//   }


</style>