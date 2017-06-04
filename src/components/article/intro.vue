<template>
	<div class="article-content">
		<div class="img-center">
			<img class="img-small" :src="articleHead.aImage" v-if="articleHead.aImageHome">
			<img class="img-big" :src="articleHead.aImage" v-else>
		</div>
		<div v-html="articleHead.aIntro" v-if="articleHead.aImageHome" class="artice-intro"></div>
	</div>
</template>

<script>
export default{
	props:['articleHead']
}
</script>