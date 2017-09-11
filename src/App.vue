<template>
  <div id="app">
    <Navbar />
    <header></header>
    <router-view></router-view>
    <toTop />
  </div>
</template>

<script>
import Navbar from './pages/components/navbar.vue'
import toTop from './pages/components/totop.vue'

export default {
  name: 'app',
  components: { Navbar, toTop }
}
</script>

<style lang="scss">
	@import './app.scss'
</style>