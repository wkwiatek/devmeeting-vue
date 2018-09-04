<template>
  <div id="app">
    <h2>My awesome list</h2>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>

    <form @submit.prevent="onSubmit()">
      <!--3- 1. name attribute is now required as well as v-validate with its own DSL values -->
      <input
        name="product"
        v-model="newProduct.name"
        v-validate="'required|min:3'"
      >
      <button>Add</button>
      <!--3- 2. errors are added by default when validation is initialized and have some useful methods -->
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'app',
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
      // 3. On the JS side we need to use yet another injected value called $validator to validate all the fields
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.products.push({
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = '';
        // 4/ and reset validation state after adding a product
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
