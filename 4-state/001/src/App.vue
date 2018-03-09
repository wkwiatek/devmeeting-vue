<template>
  <div id="app">
    <h2>My awesome list</h2>

    <product-list :products="products"></product-list>
    <add-product @onAddProduct="handleAddProduct"></add-product>

  </div>
</template>

<script>
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
// 2. We'll use axios due to its simplicity
import axios from 'axios';

export default {
  name: 'app',
  components: {
    ProductList,
    AddProduct
  },
  // 3. Let's use one of lifecycle hooks to fetch some data when component is created
  async created() {
    // 4. products.json has been added to the 'public' directory and it's just an array that we had previously
    this.products = await axios.get('products.json').then(res => res.data);
  },
  //5/ 1. Products will be initialized with empty array
  data() {
    return {
      products: []
    }
  },
  methods: {
    handleAddProduct(product) {
      this.products.push(product);
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
