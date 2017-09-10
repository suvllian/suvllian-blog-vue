<template>
  <div id="app">
    <Navbar />
    <header></header>
    <div class="nav-main">

    </div>
    <router-view></router-view>
    <Footer />
    <toTop />
  </div>
</template>

<script>
import Navbar from './pages/components/navbar.vue'
import Footer from './pages/components/footer.vue'
import toTop from './pages/components/totop.vue'
import Music from './pages/components/music.vue'

export default {
  name: 'app',
  components: { Navbar, Footer, toTop, Music }
}
</script>

<style lang="scss">
	@import "./assets/style/_mixins.scss";
  @import "./assets/style/_common.scss";
  @import "./assets/style/respond.scss";
  @import "./assets/style/article.scss";
  @import "./assets/style/totop.scss";
  @import "./assets/style/slider.scss";
  @import "./assets/style/book.scss";
  @import "./assets/style/header.scss";
  @import "./assets/style/camera.scss";
  @import "./assets/style/prenext.scss";
  @import "./assets/style/music.scss";
  @import "./assets/style/lab.scss";
  @import "./assets/style/reset.scss";
</style>