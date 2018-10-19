import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
  //3/ It holds a state itself
  state: {
    products: []
  },
  //6/ And methods to update
  async fetchProducts() {
    this.state.products = await axios.get('products.json').then(res => res.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
};

export default store;
