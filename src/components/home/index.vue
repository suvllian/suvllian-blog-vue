<template>
	<div class="article-list">
		<Music></Music>

		<article class="article" v-for="article in articleList">
			<span class="roate-date">
				<span class="month">12月</span>
				<span class="day">28</span>
			</span>

			<header class="artcile-head">
				<p class="title"><a href="">{{article.aTopic}}</a></p>
				
				<p class="article-meta">
					<i></i>
					发表于
					<time>December 26th, 2016</time>
					•
					<i></i>
					<span>{{article.aVisit}}次围观</span>
					<!-- •
					<i></i>
					<span>100条评论</span> -->
				</p>
				<div class="label">
					<a href="" :title="article.aClassName">{{article.aClassName}}</a>
				</div>
			</header>

			<div class="article-content">
				<div class="intro-img">
					<img :src="article.aImage + '/hashiqi1.jpg' " alt="">
				</div>
				<div class="intro-p" v-html="article.aIntro"></div>
			</div>

			<div class="article-content">
				<div class="more">
					<p><router-link to="/article">阅读全文 >></router-link></p>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
import Music from './music.vue'
import api from '../../api'

export default{
	components: {
    	Music
	},

	data(){
		return{
			articleList:[],
		}
	},

	methods:{
		getData:function(){
			api.getArticleList().then(res => {
		        var response  = res.data;
			    this.articleList = response;
			},res => {
		       console.log(res.data);
			});
		},
	},

	created(){
		this.getData();
    }
}
</script>
