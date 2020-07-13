import Vue from 'vue'
import App from './App.vue'

// // [comment] Register Vue component globally
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas);
// // [comment-end]

new Vue({
  el: '#app',
  render: h => h(App)
})
