import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

// Register filters globally
// Filter does not alter the data in any shape.
// The data which is stored in blogs is still exactly the same.
// The only thing we changed is how we output it to the browser.
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
