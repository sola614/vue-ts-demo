import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/store/modules/app';
// import getters from '@/store/getters';

Vue.use(Vuex);

// const getters = {
//   sidebar: (state: any) => state.app.sidebar
// };

const store = new Vuex.Store({
  modules: {
    app,
  },
  // getters,
});

export default store;