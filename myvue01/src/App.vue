<template>

  <div id="app">
    <!-- loading加载组件 -->
   <lod v-if="isLoading"></lod>
            <router-view ></router-view>
     <!-- 信封组件 -->
      
    <xf v-show="!$route.meta.ollarr"></xf>
  </div>
  
</template>

<script>
import xf from'./page/Xf'
import lod from './page/Loading'
import { mapGetters } from 'vuex'

export default {
  components: {
   xf,
   lod
  },
  props: {},
  data() {
    return {
    
    };
  },
  watch: {},
 computed: mapGetters({
      isLoading: 'getLoading'
  }),
  methods: {},
  created() {
     this.$store.dispatch("changeLoading")
  },
  mounted() {
     
  }
};
</script>
<style>
*{
  margin:0;
  padding:0;
  
}
#app{
  height:100%;
}
html,body{
  height:100%;
}


</style>
