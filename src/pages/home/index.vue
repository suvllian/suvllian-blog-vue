<template>
	<div class="home">
		<Articles />
		<header></header>
		<Articles />
	</div>
</template>

<script>
import Articles from './components/articles.vue'

export default{
	components: { Articles }
}
</script>