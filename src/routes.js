import VueRouter from 'vue-router'

import Index from './pages/index/index.vue'
import Blog from './pages/blog/index.vue'
import Camera from './pages/camera/index.vue'
import CameraIndex from './pages/camera/components/camera-index.vue'
import CameraImageList from './pages/camera/components/image-list.vue'
import TravelCamera from './pages/camera/components/travel-camera.vue'
import CityCamera from './pages/camera/components/city-camera.vue'
import Book from './pages/Book/index.vue'
import Article from './pages/article/index.vue'
import About from './pages/about/index.vue'

const router = new VueRouter({
  history: true,
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Index },
    { path: '/blog', component: Blog},
    { path: '/article/:id', component: Article},
    { 
      path: '/camera', 
      component: Camera,
      children: [
        { path: '/camera', component: CameraIndex },
        { path: '/camera/index', component: CameraIndex },
        { path: '/camera/imageslist', component: CameraImageList },
        { path: '/camera/travel', component: TravelCamera },
        { path: '/camera/travel/:cityId', component: CityCamera },
      ]
     },
    { path: '/book', component: Book },
    { path: '/about', component: About },
    { path: '/*', component: Index },
  ], 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;