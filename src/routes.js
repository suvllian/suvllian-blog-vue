import VueRouter from 'vue-router'

import Index from './components/home/index.vue'
import Camera from './components/camera/index.vue'
import Book from './components/Book/index.vue'
import Article from './components/article/index.vue'
import About from './components/about/index.vue'
import Lab from './components/lab/index.vue'

const router = new VueRouter({
  history: true,
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Index },
    { path: '/article', component: Article},
    { path: '/lab', component: Lab},
    { path: '/camera', component: Camera },
    { path: '/book', component: Book },
    { path: '/about', component: About },
    { path: '/*', component: Index },
  ]
});

export default router;