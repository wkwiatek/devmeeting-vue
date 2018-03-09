import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload.product);
    },
    setProducts(state, payload) {
      state.products = payload.products;
    }
  },
  actions: {
    addProduct({ commit }, payload) {
      commit({
        type: 'addProduct',
        product: payload
      });
    },
    //7/ actions can be async and can commit a mutation at any time
    async getProducts({ commit }) {
      const payload = await axios.get('/products.json').then(res => res.data);
      commit({
        type: 'setProducts',
        products: payload
      });
    }
  },
  plugins: [createLogger()]
});
