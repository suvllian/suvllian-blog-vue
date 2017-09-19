<template>
	<div class="home">
		<Articles />
		<Footer />
	</div>
</template>

<script>
import Articles from './components/articles.vue'
import Footer from './components/footer.vue'

export default{
	components: { Articles, Footer }
}
</script>