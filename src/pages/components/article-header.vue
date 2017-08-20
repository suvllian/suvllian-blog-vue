<template>
	<section>
	  <div>
			<span class="roate-date">
				<span class="month text-center">{{ article.month }}</span>
				<span class="day text-center">{{ article.day }}</span>
			</span>
		</div>
  	<div class="artcile-head">
			<h2 class="title text-center">
				<router-link :to="{path:'article',query:{id:article.aId}}">{{article.aTopic}}</router-link>
			</h2>
			<div>
				<p class="article-meta text-center">
					<i class="fa fa-calendar"></i>	
					<time class="p-small">发表于{{article.time }}</time>
					<i class="fa fa-eye"></i>
					<span class="p-small">{{article.aVisit}}次围观</span>
					<i class="fa fa-comments"></i>
					<span class="p-small">0条评论</span>
				</p>
				<div class="label">
					<a href="" :title="article.aClassName">{{article.aClassName}}</a>
				</div>
			</div>
		</div>
  	<div class="article-content">
			<div class="img-center">
				<img class="img-small" :src="article.aImage" v-if="article.aImageHome">
				<img class="img-big" :src="article.aImage" v-else>
			</div>
			<div v-html="article.aIntro" v-if="article.aImageHome" class="artice-intro"></div>
		</div>
	</section>	
</template>

<script>
export default {
	props: ['article']
}
</script>