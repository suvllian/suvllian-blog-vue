<template>
	<div class="article-list">
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
					<p>2016年，我感觉什么都没有发生，但是他就是结束了。</p>
					<p>让我先想想这一年发生了什么大事。</p>
					<p>年初的时候，谷歌公司的围棋程序 AlphaGo 战胜了世界冠军李世石。</p>
					<p>2016，无人驾驶、虚拟现实、可穿戴设备、人工智能成的元年。也许未来的移动终端就是一个“统一体”，也许会像《超体》中露西在结尾说的那句：我，将无处不在。</p>
					<div class="intro-img">
						<img src="http://suvllian.com/V/images/2016/chaoti.png">
					</div>
					<p>2016，奥运会在巴西举办，女排再次夺得冠军。</p>
					<p>
					2016，陪跑奥斯卡22年的小李子终于拿到了小金人。</p>
					<p>2016，还发生过许多事。</p>
					<div class="intro-img">
						<img src="http://suvllian.com/V/images/2016/china.png">
					</div>
					<p>2016还是发生了不少事...</p>
					<p class="biger">回归正题，谈谈我的2016年。</p>
					<p>我印象中这一年对我影响最大的就是选择了前端作为发展方向吧，放弃了Windows方向。</p>
					<p>有很多人和我说，学底层的东西比较好。学的人少难度高，前端只是做个界面而已，没什么意思。</p>
					<p>我觉得这就是以偏概全了。</p>
					<p>只选择一个方向，我觉得那就有趣多了，下半年也开始认真学习了。下面就是的github2016记录，虽然没有写出什么有价值的东西，但也算是一个对成长的过程记录。</p>
					<div class="intro-img">
						<img src="http://suvllian.com/V/images/2016/github2016.png">
					</div>
					<p class="biger">2016年，我也读了不少书。</p>
					<p>课外书读了三十来本，技术书籍也读了20来本。</p>
					<p>个人偏爱纸质书籍，一向认为开卷有益。所以看的书也是比较杂。闲来无事看看书打发时光还是挺不错的，且不说能不能学到什么。</p>
					<div class="intro-img">
						<img src="http://suvllian.com/V/images/2016/book2016.png">
					</div>
					<p>懒了一年的我也终于开始搞事了。简单的搭了个博客，UI界面是各种“抄”，看到好看的设计就往上凑，我觉得现在的导航栏还是挺难看的。</p>
					<p>简单的学习了Vue.js和React.js框架。觉得Vue更易上手，就用Vue做了一些小Demo，前后端分离的感觉真是太好了。</p>
					<p class="biger">其他？</p>
					<p>这一年，也经历了不少有趣的事，认识了许多有趣的朋友。</p>
					<p>(觉得身边的人都是大神)</p>
					<p class="biger">2017年</p>
					<p>2017年，好好学习，好好生活，好好睡觉。坚持搞事情。</p>
					<p>"道阻且长，行则将至"。</p>
					<p class="end">不好意思，一不小心点开了前置摄像头</p>
					<div class="intro-img">
						<img src="http://suvllian.com/V/images/2016/hashiqi2.jpg">
					</div>
					<p>好吧 我承认我没它↑帅</p>

					<p>都看到这里了，不赞赏一次？</p>
				</div>

				<div class="article-content">
					<div class="more">
						<p><a href="#" @click.prevent="show">赞赏</a></p>
					</div>
					<div class="money" :class="{show:isShow}">
						<div class="intro-img">
							<img src="http://suvllian.com/V/images/2016/weixin.jpg">
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isShow:false,
			articleList:[],
			// api路径
			apiPath:"http://127.0.0.1/bapi/",
		}
	},

	methods:{
		show:function(){
			this.isShow = !this.isShow;
		},

		getData:function(){
			var url = this.apiPath;
			var postData = "do=article&concrete=getContent";
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

				.money{
					transition: 1s all ease;
					height: 0;
					overflow: hidden;

					img{
						height: 300px;
					}
				}

				.show{
					height: 300px;
				}

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

					.biger{
						font-size: 17px;
						font-weight: 700;
					}

					.end{
						margin-top:30px;
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