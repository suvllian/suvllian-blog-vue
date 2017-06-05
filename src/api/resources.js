import Vue from 'vue'
import VueResource from 'vue-resource'

// API路径
const API_ROOT = "http://api.suvllian.com";
// const API_ROOT = "http://192.168.1.103/api/index.php";

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
export const getResource = Vue.resource(API_ROOT);
export const postResource = Vue.resource(API_ROOT);

