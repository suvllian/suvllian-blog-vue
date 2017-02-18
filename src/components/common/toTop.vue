<template>
	<div class="back-top">
		<a href="#" @click.prevent="backToTop">
			<div class="arrow"></div>
			<div class="stick"></div>
		</a>
	</div>
</template>

<script>
import effect from './../../utils/effect.js'
export default {
	methods:{
		backToTop(){
			effect.toTop();

			// 显示导航栏
			this.$parent.$children[0].$refs.header.className = "navbar";
		}
	}
}
</script>