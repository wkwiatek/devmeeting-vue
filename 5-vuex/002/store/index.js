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
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    //7/ actions can be async and can commit a mutation at any time
    async getProducts({ commit }) {
      const products = await axios.get('products.json').then(({ data }) => data);
      commit('SET_PRODUCTS', products);
    }
  },
plugins: [createLogger()]
});
