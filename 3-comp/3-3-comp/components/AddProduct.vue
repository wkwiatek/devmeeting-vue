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
    //6/ newProduct goes to AddProduct component
    data() {
      return {
        newProduct: {
          name: ''
        }
      }
    },
    //3/ As well as onSubmit
    methods: {
      onSubmit() {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          //4/ But instead of adding element we're just emitting onAddProduct event with product as a payload
          this.$emit('add-product', {
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
