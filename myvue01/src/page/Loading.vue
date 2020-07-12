<template>
  <div class='loading'>
    <van-loading type="spinner" size="100" color="#1989fa" vertical>
      加载中...
    </van-loading>
  </div>
</template>

<script>

export default {
  components: {},
  props: [],
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped lang='scss'>
.loading{
  width: 100%;
  height: 100%;
  position: fixed;
  background:pink;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
