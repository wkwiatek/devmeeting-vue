<template>
  <div id="app">
    <h2>My awesome list</h2>
    <ul>
      <li v-for="p in products">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>

    <!-- 1. Vue gives as some nice syntax to cope with casual use cases -->
    <form @submit.prevent="onSubmit()">
      <!-- 2. Any Angular fan here? v-model makes a binding with given object -->
      <input v-model="newProduct.name">
      <button>Add</button>
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
      //3/ 3. Here goes the definition
      newProduct: {
        name: ''
      }
    }
  },
  methods: {
    //7/ 4. By keeping reference to data we can let Vue to do its job
    onSubmit() {
      this.products.push({
        id: uuid(),
        ...this.newProduct
      });
      this.newProduct.name = '';
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
