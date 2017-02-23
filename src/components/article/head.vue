<template>
	<div class="artcile-head">
		<h2 class="title text-center">
			<router-link :to="{ path:'/article/' + articleHead.aId}">{{articleHead.aTopic}}</router-link>
		</h2>
		<Meta :article-head="articleHead"></Meta>
	</div>
</template>

<script>
import Meta from './meta.vue';

export default{
	components:{ Meta },
	props:['articleHead']
}
</script>