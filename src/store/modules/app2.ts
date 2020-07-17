

const app = {
  namespaced: true,
  state: {
    store1: ''
  },
  mutations: {
    setStore1: (state: any, paylod: any) => {
      state.store1 = paylod
    }
  },
  actions: {
    setStore1: (context: any, paylod: any) => {
      context.commit('setStore1', paylod);
    }
  },
  getters: {
    gettersStore1(state: any) {
      return state.store1
    }
  }
};

export default app;