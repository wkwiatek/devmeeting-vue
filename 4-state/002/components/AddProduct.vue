<template>
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
</template>

<script>
  import uuid from 'uuid/v4';

  export default {
    name: "AddProduct",
    data() {
      return {
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
          this.$emit('onAddProduct', {
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

<style scoped>

</style>
