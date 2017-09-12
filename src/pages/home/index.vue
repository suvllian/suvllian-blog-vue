<template>
	<div class="home">
	  <HeadTitle title="最新文章" />
		<Articles />
		<section class="home-banner"></section>
		<HeadTitle title="最热照片" />
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