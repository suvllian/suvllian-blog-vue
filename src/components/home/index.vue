<template>
	<div class="article-list">
		<!-- <Music></Music> -->

		<article class="article" v-for="article in articleList">
			<span class="roate-date">
				<span class="month">{{ article.month }}</span>
				<span class="day">{{ article.day }}</span>
			</span>

			<header class="artcile-head">
				<p class="title"><a href="">{{article.aTopic}}</a></p>
				
				<p class="article-meta">
					<i></i>
					发表于
					<time>{{ article.time }}</time>
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
					<p>
						<router-link :to="{path:'article',query:{id:article.aId}}">阅读全文 >></router-link>
					</p>
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
			    
			    for (let i=0; i<response.length; i++) {
			    	var time =  Array.prototype.slice.
			    		call((new Date(parseInt(response[i].aDate)*100000)).toDateString(),0).
			    		slice(4).join("");
				    var timeArray = time.split(" ");
				    var month = timeArray[0];
				    var day   = timeArray[1];

			    	response[i].time = time;
			    	response[i].month = month;
			    	response[i].day = day;
			    }
			    this.articleList = response;

			    console.log(Date.parse(new Date(2015,12,28)));
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
