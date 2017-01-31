import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import router from './routes'

Vue.use(VueRouter);

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
