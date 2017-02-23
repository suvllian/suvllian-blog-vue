<template>
	<section>
		<div class="artcile-head">
			<h2 class="title text-center">
				<a @click.prevent="">{{articleHead.aTopic}}</a>
			</h2>
			
			<Meta :article-head="articleHead"></Meta>
		</div>
	</section>
</template>

<script>
import Meta from './../article/meta.vue';
export default{
	components:{ Meta },
	props:['articleHead']
}
</script>