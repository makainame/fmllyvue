<template>
  <div class="wrapper">
      
       <div class="xf"   v-jump="path" v-drag>
      <van-icon  name="envelop-o" color="#ffffff" class="xfs" size="30" />
     </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        path:"/deles"
    };
  },
  watch: {},
  computed: {},
  methods: {
      
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
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
</style>