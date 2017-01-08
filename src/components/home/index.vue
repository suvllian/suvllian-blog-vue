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
					<time datetime="2011-01-12">December 26th, 2016</time>
					•
					<i></i>
					<span>{{article.aVisit}}次围观</span>
					<!-- •
					<i></i>
					<span>100条评论</span> -->
				</p>

				<div class="label">
					<a href="" title="生活">生活</a>
				</div>
			</header>

			<div class="article-content">
				<div class="intro-img">
					<img src="http://www.suvllian.com/V/images/hashiqi1.jpg" alt="">
				</div>
				<div class="intro-p">
					<p v-html="article.aIntro"></p>
					<p>2016，陪跑奥斯卡22年的小李子终于拿到了小金人<router-link to="/article">继续阅读</router-link></p>
				</div>
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
import Music from './../music/index.vue'

export default{
	components: {
    	Music
	},

	data(){
		return{
			articleList:[],
			// api路径
			apiPath:"http://127.0.0.1/bapi/",
		}
	},

	methods:{
		getData:function(){
			var url = this.apiPath + "data.php";
			var postData = "do=article";
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST',url);
	        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	        var that = this;
	        xhr.onload = function(e){
	        	var data = JSON.parse(this.response);
	        	that.articleList = data;
	        }
	        xhr.send(postData);
		},
	},

	created(){
		this.getData();
    }
}
</script>
<style lang="scss" scoped>
	// 响应式布局
	@mixin respond-to($breakpoint) {
	    @if $breakpoint == "small" {
	        @media (max-width: 510px) {
	            @content;
	        }
	    }
	    @else if $breakpoint == "medium" {
	        @media (max-width: 800px) {
	        	@content;
	    	}
	  	} 
	    @else if $breakpoint == "large" {
	    	@media (max-width: 1200px) {
	    		@content;
	    	}
	    }
	}

	$Color:#00adb5;

	.article-list{
		width: 70%;
		margin: 0 auto;
		font-family: PingFang TC,Avenir Next,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif;
		clear: both;
		transition: 1s all ease;


		.article{
			padding:15px;
			margin: 50px auto;
			width: 100%;
			background-color:#fff;
			position:relative;
			border-radius:5px;

			p{
				line-height: 24px;
				margin: 10px 0;
			}

			.roate-date{
				height: 70px;
				width: 70px;
				padding:9px 12px;
				position:absolute;
				top: -30px;
				left: -25px;
				color: #fff;
				background-color: $Color;
				border-radius: 50%;
				box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);

				%span{
					text-align: center;
					display: block;
				}

				.month{
					font-size: 16px;
					@extend %span;
				}

				.day{
					@extend %span;
					font-size: 28px;
					font-weight: 600;
				}

			}

			.artcile-head{
				position:relative;
				padding-bottom:48px;

				.title{
					font-size: 25px;
					font-weight: 700;
					line-height: 30px;
					text-align: center;
					max-height: 100%;

					a{
						color: #444;
					}
				}

				.article-meta{
					color: #555;
					font-size: 14px;
					text-align: center;
				}

				.label{
					padding:5px 16px 5px 32px;
					position:absolute;
					left: -29px;
					background-color:$Color;
					border-radius:0 4px 4px 0;
					box-shadow:1px 1px 5px #333;

					&::before{
						position:absolute;
						top: 30px;
						left: 0;
						content: "";
						border-left:14px solid #efefef;
						border-top:14px solid #333;
					}


					a{
						color: #fff;
						font-size: 15px;
					}
				}
			}

			.article-content{
				clear: both;

				.intro-img{
					text-align: center;
					width: 100%;

					img{
						border-radius:5px;
						max-width: 100%;
					}
				}

				.intro-p{
					margin-top: 40px;

					p{
						line-height: 20px;
						margin: 10px 0;
						color: #444;
						font-size: 15px;
						line-height: 24px;
						overflow-wrap: break-word;
					    white-space: normal;
					    word-break: break-all;

						a{
							color: $Color;
						}
					}
				}

				.more{
					text-align: center;

					p{
						margin-top: 20px;
					}

					a{
						background-color:$Color;
						color: #fff;
						font-size: 14px;
						padding:6px 10px;
						border-radius:5px;
					}
				}
			}
		}
	}


	@include respond-to(medium){
		.article-list{
			width: 100%;

			.roate-date{
				display: none;
			}
		}
	}

</style>