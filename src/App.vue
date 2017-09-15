<template>
  <div class="suvllian">
    <Navbar />
    <Banner />
    <router-view></router-view>
    <ToTop />
  </div>
</template>

<script>
import Navbar from './pages/common/navbar.vue'
import ToTop from './pages/common/totop.vue'
import Banner from './pages/common/banner.vue'

export default {
  name: 'app',
  components: { Navbar, ToTop, Banner }
}
</script>

<style lang="scss">
	@import './app.scss'
</style>