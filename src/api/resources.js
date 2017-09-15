import Vue from 'vue'
import VueResource from 'vue-resource'

// API路径
const API_ROOT = getApiRoot()

function getApiRoot() {
  return location.href.includes('localhost') ? 'http://127.0.0.1/api/index.php' : 
    'http://api.suvllian.com'
}

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
export const getResource = Vue.resource(API_ROOT);
export const postResource = Vue.resource(API_ROOT);

