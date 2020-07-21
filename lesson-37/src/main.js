import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

// // Register filters globally
// Vue.filter('to-uppercase', function(value){
//     return value.toUpperCase();
// });

// // Register custom directives globally
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//       el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
