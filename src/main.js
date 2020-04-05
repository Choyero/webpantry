import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';

Vue.config.productionTip = false

import app_data from './app-data.js'

let data = {
  items: app_data,
  genres: ['Fruit', 'Vegetable', 'Seasoning', 'Grain', 'Dairy', 'Meat', 'Legume']
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
