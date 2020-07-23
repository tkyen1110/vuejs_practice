import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Route Parameters
// localhost:8080/blog/123
// localhost:8080/blog/500
// localhost:8080/blog/:id -> Route Parameter
// 1. Set up a route:
//    {path:'/blog/:id', component: singleBlog}
// 2. In singleBlog component, detect route parameter and handle it
//    -> make http request for correct resource

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
