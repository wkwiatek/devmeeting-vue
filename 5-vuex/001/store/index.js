import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'

// Vuex needs to be initialized as it injects some data to the components
Vue.use(Vuex);

// Let's defince new store
export default new Vuex.Store({
  //3/ A 'state' part is basically data that will be propagate to the components
  state: {
    products: []
  },
  //5/ mutations are modifying data stored in state
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    }
  },
  //8/ actions can be invoked by components, and use mutations
  actions: {
    addProduct(context, payload) {
      context.commit('ADD_PRODUCT', payload);
    }
  },
  // extra: we added to logger to see what's going on
  plugins: [createLogger()]
});
