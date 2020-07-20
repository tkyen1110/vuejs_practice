import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

// Create custom directives globally which means any component can use it
Vue.directive('rainbow', {
    // Vue components have lifecycle hooks.
    // Vue directives have lifecycle hooks called bind. (Fire when the directive is bound to the element.)
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode){
        if (binding.value == 'wide'){
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow'){
            el.style.maxWidth = "560px";
        }
        if(binding.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
