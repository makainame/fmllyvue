<template>
  <div class="wrapper">
   <van-button type="primary" size="large" @click="remove">退出登陆</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    remove(){
        localStorage.removeItem("adminToken")
        this.$router.push("/home/wd")
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>