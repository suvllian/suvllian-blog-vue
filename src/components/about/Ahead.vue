<template>
	<section>
		<div class="artcile-head">
			<h1 class="title text-center">
				<a @click.prevent="">{{articleHead.aTopic}}</a>
			 </h1>
			
			<p class="article-meta text-center">
				<i class="fa fa-calendar"></i>
				发表于
				<time>{{ articleHead.time }}</time>
				<i class="fa fa-eye"></i>
				<span>{{articleHead.aVisit}}次围观</span>
				<i class="fa fa-comments"></i>
				<span>0条评论</span>
			</p>
		</div>
	</section>
</template>

<script>
export default{
	props:['articleHead']
}
</script>