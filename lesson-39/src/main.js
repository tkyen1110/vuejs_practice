import Vue from 'vue'
import VueResource from 'vue-resource' // npm install vue_resource --save
import VueRouter from 'vue-router'     // npm install vue-router --save
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
