<!--10/ 1. There's a <template> part -->
<template>
  <div id="app">
    <h2>My awesome list</h2>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>
    <button v-on:click="removeLast()">Remove last item</button>
  </div>
</template>

<!--21/ 2. A <script> part -->
<script>
//1/ 4. Now App is not mounted itself, we're just creating a component (more on that later - hold your horses!)
export default {
  name: 'app',
  //11/ 5. Data can no longer be just an object to prevent accidental shared state
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
    removeLast() {
      this.products.pop();
    }
  }
}
</script>

<!--9/ 3. And <style> part -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
