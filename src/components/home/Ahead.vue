<template>
	<section>
		<span class="roate-date">
			<span class="month">{{ articleHead.month }}</span>
			<span class="day">{{ articleHead.day }}</span>
		</span>
		<header class="artcile-head">
			<h1 class="title">
				<router-link :to="{path:'article',query:{id:articleHead.aId}}">{{articleHead.aTopic}}</router-link></h1>
			
			<p class="article-meta">
				<i class="icon"><img src="./../../assets/date.png"></i>
				发表于
				<time>{{ articleHead.time }}</time>
				<i class="icon"><img src="./../../assets/eyes.png"></i>
				<span>{{articleHead.aVisit}}次围观</span>
				<i class="icon"><img src="./../../assets/comment.png"></i>
				<span>0条评论</span>
			</p>
			<div class="label">
				<a href="" :title="articleHead.aClassName">{{articleHead.aClassName}}</a>
			</div>
		</header>
	</section>
</template>

<script>
export default{
	props:['articleHead']
}
</script>