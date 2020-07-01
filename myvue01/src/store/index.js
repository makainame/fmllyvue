import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  storage: window.localStorage //可选，sessionStorage/indexDB
});

const store = new Vuex.Store({
  state:{
      isLoading:true,
     
  },
  mutations:{
      
       
  },
  actions:{
      
  },
  getters:{
     
  },
  
  plugins: [vuexLocal.plugin]
});

export default store



