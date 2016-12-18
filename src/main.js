import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);



import Camera from './components/camera/index.vue';
import Main from './components/Home/index.vue';
import Not from './components/404/index.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Camera },
    { path: '/camera', component: Camera },
    { path: '/*', component: Not },
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

Vue.http.options.emulateJSON = true;
