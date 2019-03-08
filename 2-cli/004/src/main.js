import Vue from 'vue'
import App from './App.vue'
//3/ 1. Packages require some initiation, here's the most common one
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
