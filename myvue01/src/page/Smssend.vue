<template>
  <div class="sms-send">
       <van-nav-bar
  title="信息填写"
  
  left-arrow
  @click-left='goPwd'
/>
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
      goPwd(){
          this.$router.go(-1)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>

</style>