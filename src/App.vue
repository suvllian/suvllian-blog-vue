<template>
  <div class="suvllian">
    <Navbar />
    <header></header>
    <router-view></router-view>
    <toTop />
  </div>
</template>

<script>
import Navbar from './pages/common/navbar.vue'
import toTop from './pages/common/totop.vue'

export default {
  name: 'app',
  components: { Navbar, toTop }
}
</script>

<style lang="scss">
	@import './app.scss'
</style>