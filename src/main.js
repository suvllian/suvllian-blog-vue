import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'

Vue.use(VueResource);
Vue.use(VueRouter);



import Camera from './components/camera/index.vue';
import Book from './components/Book/index.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Book },
    { path: '/camera', component: Camera },
    { path: '/book', component: Book },
    { path: '/*', component: Book },
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

Vue.http.options.emulateJSON = true;
