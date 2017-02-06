<template>
	<section>
		<span class="roate-date">
			<span class="month">{{ articleHead.month }}</span>
			<span class="day">{{ articleHead.day }}</span>
		</span>

		<header class="artcile-head">
			<p class="title"><a href="">{{articleHead.aTopic}}</a></p>
			
			<p class="article-meta">
				<i></i>
				发表于
				<time>{{ articleHead.time }}</time>
				•
				<i></i>
				<span>{{articleHead.aVisit}}次围观</span>
				<!-- •
				<i></i>
				<span>100条评论</span> -->
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