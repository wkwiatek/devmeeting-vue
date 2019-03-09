<template>
  <div id="app">
    <h2>My awesome list</h2>

    <product-list :products="products"></product-list>
    <!-- With @ we can listen to add-product event and assign onAddProduct-->
    <add-product @add-product="onAddProduct"></add-product>

  </div>
</template>

<script>
import ProductList from '@/components/ProductList';
import AddProduct from '../components/AddProduct';

export default {
  name: 'app',
  components: {
    ProductList,
    // AddProduct has to be defined as any other component
    AddProduct
  },
  data() {
    return {
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }]
    }
  },
  methods: {
    //3/ All we have to do in a method is to add product to the list
    onAddProduct(product) {
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
