<template>
  <div id="app">
    <h2>My awesome list</h2>
    <!-- 3. Then we can use component by kebab-case'd name and providing :input -->
    <product-list :products="products"></product-list>

    <form @submit.prevent="onSubmit()">
      <input
        name="product"
        v-model="newProduct.name"
        v-validate="'required|min:3'"
      >
      <button>Add</button>
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
// 1. To use our new, shiny component we need to import it first
import ProductList from '../components/ProductList'

export default {
  name: 'app',
  //3/ 2. And add it to the object called components
  components: {
    ProductList
  },
  data() {
    return {
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }],
      newProduct: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.products.push({
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = '';
        this.$validator.reset();
      });
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
