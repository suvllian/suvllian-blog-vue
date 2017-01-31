import Vue from 'vue'
import VueResource from 'vue-resource'

// API路径
const API_ROOT = "http://192.168.0.102/bapi/index.php";

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
export const getResource = Vue.resource(API_ROOT);
export const voteResource = Vue.resource(API_ROOT);
