<template>
	<section>
		<header class="artcile-head">
			<h1 class="title">
				<a @click.prevent="">{{articleHead.aTopic}}</a>
			 </h1>
			
			<p class="article-meta">
				<i class="icon"><img src="./../../assets/date.png"></i>
				发表于
				<time>{{ articleHead.time }}</time>
				<i class="icon"><img src="./../../assets/eyes.png"></i>
				<span>{{articleHead.aVisit}}次围观</span>
				<i class="icon"><img src="./../../assets/comment.png"></i>
				<span>0条评论</span>
			</p>
		</header>
	</section>
</template>

<script>
export default{
	props:['articleHead']
}
</script>