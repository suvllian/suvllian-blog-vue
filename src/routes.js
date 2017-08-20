import VueRouter from 'vue-router'

import Index from './pages/home/index.vue'
import Camera from './pages/camera/index.vue'
import Book from './pages/Book/index.vue'
import Article from './pages/article/index.vue'
import About from './pages/about/index.vue'
import Lab from './pages/lab/index.vue'

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