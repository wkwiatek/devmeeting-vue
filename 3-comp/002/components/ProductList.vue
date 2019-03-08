//8/ 4. Template is the same as it was, the only difference is 1 root element
<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  //1/ 5. The case is, we have to define props (inputs)
  props: {
    //3/ 6. Here we also added some basic props validation
    products: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
