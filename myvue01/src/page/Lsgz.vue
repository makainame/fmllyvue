<template>
  <div class="wrapper">
      <van-nav-bar
  title="我的关注"
  left-arrow
  @click-left="onClickLeft"
/>
  <div class="box"  v-for="(item,index) in list" :key="index" @click="dele(item.teacher_id)">
<van-card  
    currency=""
  :price="item.introduction"
  :desc="item.teacher_name"
  :title="item.level_name"
  :thumb="item.avatar"
>
  <template #footer>
    <van-button size="mini" @click.stop="gzz(item.teacher_id,index)">取消关注</van-button>
  </template>
</van-card>
</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
         list:'',
       
    };
  },
  watch: {},
  computed: {},
  methods: {
      onClickLeft(){
         this.$router.go(-1)
      },
    async  gzz(id,index) {
        alert(1111)
        let {data:res} = await this.$http.get(`/api/app/teacher/collect/`+id)
                 console.log(res.data)
                        
                      this.list.splice(index,1)
                     
                
      },
      dele(id){
          alert(111)
            this.$router.push({
                path:"/teacher",
                query:{
                     id:id
                }
            })
      }
  },
  created() {
        this.$http.get("/api/app/collect?page=1&limit=10&type=2").then((res)=>{
                console.log(res)
                this.list=res.data.data.list
               
                // console.log(this.list1)
         })
   
  },
  mounted() {
       
  }
};
</script>
<style lang="scss" scoped>
.overfolw{
    overflow: hidden;
}
.box{
  width: 100%;
  .van-card__price {
    width: 100%;
    display: inline-block;
    color: #323233;
    font-weight: 500;
    font-size: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  
}
.van-card__price-integer {
    font-size: 0.3rem;
    
}
}
</style>