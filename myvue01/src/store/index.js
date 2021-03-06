import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import VuexPersist from 'vuex-persist'
Vue.use(Vuex);
const vuexLocal = new VuexPersist({
  storage: window.localStorage //可选，sessionStorage/indexDB
});
const store = new Vuex.Store({
  state:{
      isLoading:false,
      index:null,
      isHove:true,
      isDetail:false
  
     
  },
  mutations:{
      
    changeLoading(state, boolean){
      state.isLoading = boolean
    }
       
  },
  actions:{
    changeLoading(state, boolean){
      state.commit('changeLoading', boolean)
    }
  },
  getters:{
    getLoading(state){
      return state.isLoading
    }
  },
  
  plugins: [vuexLocal.plugin]
});

export default store



