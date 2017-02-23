<template>
  <div id="app">
    <Navbar></Navbar>
    <HeadSite></HeadSite>
    <router-view></router-view>
    <Foot></Foot>
    <toTop></toTop>
  </div>
</template>

<script>
import Navbar from './components/common/navbar.vue'
import Foot from './components/common/foot.vue'
import toTop from './components/common/totop.vue'
import HeadSite from './components/common/header.vue'

export default {
  name: 'app',
  components: { Navbar, Foot, toTop, HeadSite }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
        box-sizing: border-box;
	}	
	body{
		background: #f9f9f9 none repeat scroll 0 0;
		color: #89867e;
		font-size: 16px;
	    font-family: "Lato",Calibri,Arial,sans-serif;
	    cursor: url("https://www.anotherhome.net/wp-content/themes/Amativeness/images/cursor.ico"), auto;
	}
	li{
		list-style: none;
	}
</style>