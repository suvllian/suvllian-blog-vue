<template>
	<header class="common-banner">
		<div class="banner-list" ref="bannerList">
			<div class="banner" ref="banner">
				<img src="/static/images/1.jpg" />
			</div>
		</div>
	</header>	
</template>

<script>
export default {
	methods: {
		
	},
	mounted() {
    let width = document.body.clientWidth
		let bannerList = this.$refs.bannerList
		let banner = this.$refs.banner

		bannerList.style.width = `${width*4}px`
		banner.style.width = `${width}px`
		// banner.forEach(item => {
		// 	item.style.width = `${width}px`
		// })
	}
}
</script>