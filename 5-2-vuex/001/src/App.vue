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

export default {
  name: 'app',
  components: {
    ProductList,
    AddProduct
  },
  //3/ When the component is created we're immediately dispatching an action
  created() {
    this.$store.dispatch('getProducts');
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    handleAddProduct(product) {
      this.$store.dispatch('addProduct', product);
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
