<template>
	<section>
		<span class="roate-date">
			<span class="month text-center">{{ articleHead.month }}</span>
			<span class="day text-center">{{ articleHead.day }}</span>
		</span>
		<div class="artcile-head">
			<h2 class="title text-center">
				<router-link :to="{path:'article',query:{id:articleHead.aId}}">{{articleHead.aTopic}}</router-link>
			</h2>
			
			<p class="article-meta text-center">
				<i class="fa fa-calendar"></i>	
				<time class="p-small">发表于{{articleHead.time }}</time>
				<i class="fa fa-eye"></i>
				<span class="p-small">{{articleHead.aVisit}}次围观</span>
				<i class="fa fa-comments"></i>
				<span class="p-small">0条评论</span>
			</p>
			<div class="label">
				<a href="" :title="articleHead.aClassName">{{articleHead.aClassName}}</a>
			</div>
		</div>
		<div class="article-content">
			<div class="img-center">
				<img class="img-small" :src="articleHead.aImage" v-if="articleHead.aImageHome">
				<img class="img-big" :src="articleHead.aImage" v-else>
			</div>
			<div v-html="articleHead.aIntro" v-if="articleHead.aImageHome"></div>
		</div>
	</section>
</template>

<script>
export default{
	props:['articleHead']
}
</script>