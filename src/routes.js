export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home/index.vue')
    },
    '/camera': {
      name: 'camera',
      component: require('./components/camera/index.vue')
    },
    '*': {
      component: require('./components/404/index.vue')
    }
  })
}