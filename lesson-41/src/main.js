import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
// https://router.vuejs.org/guide/essentials/history-mode.html
// (mode: 'history') localhost:8081/whatever makes a request to the server.
// A server is going to look at that request and decide what to do with it and return the appropriate result.
// (mode: 'hash')    localhost:8081/#whatever does not make an additional request to the server.
// It just takes me to a different part of the page.
// You may have seen on websites when you click on a button and it drags you further down to the bottom of the page or vice versa.
// What they are doing is they are targeting an ID on the page.
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
