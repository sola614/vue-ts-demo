import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/store/modules/app';
import app2 from '@/store/modules/app2';
// import getters from '@/store/getters';

Vue.use(Vuex);

// const getters = {
//   sidebar: (state: any) => state.app.sidebar
// };

const store = new Vuex.Store({
  modules: {
    app,
    app2
  },
  // getters,
});

export default store;