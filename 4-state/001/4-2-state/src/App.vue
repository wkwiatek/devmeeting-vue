<template>
  <div id="app">
    <h2>My awesome list</h2>

    <!-- 4. Input to the list has to be updated also -->
    <product-list :products="sharedState.products"></product-list>
    <add-product @add-product="onAddProduct"></add-product>

  </div>
</template>

<script>
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
// 1. Our store will now be used to keep the data
import store from '../store';

export default {
  name: 'app',
  components: {
    ProductList,
    AddProduct
  },
  //3/ 2. We will keep some methods there too
  created() {
    store.fetchProducts();
  },
  data() {
    //3/ 3. Instead of just products we have to add reference to whole state
    return {
      sharedState: store.state
    }
  },
  methods: {
    //3/ 5. Handler is using store
    onAddProduct(product) {
      store.addProduct(product);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
