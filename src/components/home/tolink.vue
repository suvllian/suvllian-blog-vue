<template>
	<div class="article-content">
		<div class="more text-center">
			<p>
				<router-link :to="{path:'article',query:{id:article.aId}}">阅读全文 >></router-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props:['article']
}
</script>