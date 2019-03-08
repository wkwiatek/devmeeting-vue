import Vue from 'vue'
//1/ 6. The whole App component is now imported
import App from './App.vue'

Vue.config.productionTip = false

//3/ 7. To bind Vue app to some specific element we can also get a render function with $mount
new Vue({
  render: h => h(App)
}).$mount('#app')
