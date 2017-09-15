<template>
	<div class="home">
	  <HeadTitle title="最新文章" />
		<Articles />
		<header class="home-banner">
			<div class="banner" ref="banner">
				<img src="/static/images/4.jpg" />
			</div>
		</header>
		<HeadTitle title="最新照片" />
		<Articles />
		<Footer />
	</div>
</template>

<script>
import Articles from './components/articles.vue'
import Footer from './components/footer.vue'
import HeadTitle from './components/head-title.vue'

export default{
	components: { Articles, Footer, HeadTitle }
}
</script>