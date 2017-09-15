<template>
	<section>
		<h2 class="title text-center">
			<a @click.prevent="">{{articleHead.aTopic}}</a>
		</h2>		
		<div class="artcile-head">
			<div>
				<p class="article-meta text-center">
					<i class="fa fa-calendar"></i>	
					<time class="p-small">发表于{{articleHead.time }}</time>
					<i class="fa fa-eye"></i>
					<span class="p-small">{{articleHead.aVisit}}次围观</span>
					<i class="fa fa-comments"></i>
					<span class="p-small">0条评论</span>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	props: ['articleHead']
}
</script>