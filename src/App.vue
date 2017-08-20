<template>
  <div id="app">
    <Navbar />
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
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
    box-sizing: border-box;
	}	

	a {
		outline: none;
	}
	body{
		background: #f9f9f9 none repeat scroll 0 0;
		color: #89867e;
		font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,PingFang SC,Source Han Sans CN,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
	}
	li{
		list-style: none;
	}
	footer {
		clear: both;
	}
</style>