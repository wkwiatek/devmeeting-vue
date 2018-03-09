import Vue from 'vue'
import VeeValidate from 'vee-validate';
import store from '../store';

import App from './App.vue'

Vue.use(VeeValidate);

Vue.config.productionTip = false;

//4/ Store needs to be added to the initial app
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
