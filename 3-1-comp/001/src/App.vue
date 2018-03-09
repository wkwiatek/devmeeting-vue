<template>
  <div id="app">
    <!--5- 1. There is a list part of the app -->
    <h2>My awesome list</h2>
    <ul>
      <li v-for="p in products">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>

    <!--11- 2. And the add product form -->
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
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        //5/ 3. However, they share some common data
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
