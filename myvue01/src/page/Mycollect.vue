<template>
  <div class="mycollect">
    <van-nav-bar
      title="我的收藏"
     
      left-arrow
      @click-left="onClickLeft"
    
    />
  <div class="box" v-for="(item,index) in arr" :key="index"  @click="deles(item.course_id)">

  
  <van-card 
  :desc="item.title"
  :title="item.teachers"
  :thumb="item.teachersAvatar"
>
  <template #tags>
    <van-tag plain type="danger">{{item.sales_num |toText}}</van-tag>
    <van-tag plain type="danger">{{item.price | toText1(1)}}</van-tag>
  </template>
  <template #footer>
     <van-icon  
          name="star"
          size="20"
           color="orchid"
          @click.stop="Changeclick(index,item.collect_id)" 
          
        />
       
  </template>
</van-card>
</div>
 </div>



</template>

<script>
  import axios from'axios'
export default {
  components: {},
  props: {},
  data() {
    return {
      arr:'',
    };
  },
  filters:{
     toText1(val,inp){
        return `￥${(val / 100).toFixed(2)}`;
      },
      toText(val){
        return    Number(val)+"人购买"
      }
  },
  watch: {},
  computed: {},
  methods: {
      onClickLeft(){
         this.$router.go(-1)
      },
      deles(id){
         this.$router.push({
           path:"/detail",
           query:{
              id:id
           }
         })
      },
     async Changeclick(index,collect_id){
    //  console.log(this.collect_id)
      let { data: res } = await this.$http.put(`/api/app/collect/cancel/${collect_id}/1`);
      this.$axios.get(
        `https://365msmk.com/api/app/courseInfo/basis_id=${this.id}`
      )
      .then((msg) => {
        // console.log(msg.data.data.info);
       this.arr.splice(index,1)
      });
    },
  },
  created() {},
  mounted() {
      this.id = this.$route.query.id;
    this.$axios
      .get(
        `https://www.365msmk.com/api/app/collect?page=1&limit=10&type=1&`
      )
      .then((msg) => {
        console.log(msg)
        this.arr=msg.data.data.list
      });
  }
};
</script>
<style lang="scss" scoped>
  
</style>