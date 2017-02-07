<template>
	<div class="article-list">
		<article class="article">
			<Ahead :article-head="article"></Ahead>
			<p class="line"></p>
			<div class="article-content" v-html="article.aContent">

			</div>
		</article>
	</div>
</template>

<script>
import api from '../../api'
import Ahead from './../home/Ahead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET } from './../../vuex/type.js'

export default{
	components: { Ahead },
	computed: mapState({ 
		article: store => store.articleContent.article,
		id: store => store.articleContent.id
	}),

	methods:{ ...mapActions([ARTICLE_CONTNET]) },

	created(){
		var id = this.$route.query.id;
		this.ARTICLE_CONTNET(id);;
    }
}
</script>
<style lang="scss">
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
			padding:30px;
			margin: 50px auto;
			width: 100%;
			background-color:#fff;
			position:relative;
			border-radius:5px;

			.roate-date{
				height: 70px;
				width: 70px;
				padding:9px 6px;
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
					font-size: 18px;
					@extend %span;
				}

				.day{
					@extend %span;
					font-size: 24px;
					font-weight: 500;
				}

			}

			// 文章头部
			.artcile-head{
				position:relative;
				padding-bottom:48px;

				// 文章标题
				.title{
					font-size: 26px;
					text-align: center;
					font-weight: 400;
					max-height: 100%;
					margin: 10px 0;
					font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
					line-height: 1.5;
					padding:0;

					a{
						color: #555;
					}
				}

				// 文章发布时间、浏览量等信息
				.article-meta{
					color: #555;
					font-size: 14px;
					text-align: center;
					margin-bottom:12px; 

					.icon{
						height: 16px;
						width: 16px;
						img {
							position:relative;
							top: 2px;
						}
					}
				}

				// 分类标签
				.label{
					padding:5px 16px 5px 32px;
					position:absolute;
					left: -45px;
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

			// 文章内容
			.article-content{
				clear: both;

				// 下划线
				.line{
					height: 1px;
					border-top:1px dashed #bbb;
				}

				// 图片的样式
				.intro-img{
					text-align: center;
					width: 100%;

					%img{
						border-radius:5px;
						max-width: 100%;		
					}

					.big-img{
						max-height: 500px;
						@extend %img;
					}

					.medium-img{
						max-height: 400px;
						@extend %img;
					}

					.small-img{
						max-height: 300px;
						@extend %img;
					}
				}

				// 文字样式
				%p{
					line-height: 2;
					color: #555;
					font-size: 16px;
					overflow-wrap: break-word;
				    white-space: normal;
				    word-break: break-all;
				    font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
				    letter-spacing: 1px;
				}

				// 文字样式
				p{
					@extend %p;
					margin:0 0 25px;
				}

				// 无序列表
				ol,ul{
					margin: 10px 0;
					padding:6px 0px 6px 48px;

					li{
						@extend %p;
						list-style: outside none circle;
					}
				}

				ol{
					li{
						list-style: decimal;
					}
				}

				// 指令
				code{
				    background: #eee none repeat scroll 0 0;
				    border-radius: 4px;
				    color: #555;
				    font-size: 13px;
				    padding: 2px 4px;
				    word-break: break-all;
				}

				pre, code {
				    font-family: consolas,Menlo,"PingFang SC","Microsoft YaHei",monospace;
				}

				a{
					color: #555;
					border-bottom:1px solid #ccc;

					&:hover{
				    	border-bottom-color: #000;
			    		color: #000;
			    	}
				}

				// 左边框块
				.border-left{
					border-left:4px solid #eee;
					margin-bottom:25px;

					p{
						padding-left:48px;
					}
				}

				.part-title{
					padding-top:10px;
					margin: 20px 0 10px;
					font-size: 22px;
					font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
				    font-weight: bold;
				    line-height: 1.5;
				    color: #555;

				    span{
				   		border-bottom:1px solid #ccc;

				   		&:hover{
					    	border-bottom-color: #000;

					    	&{
					    		color: #000;
					    	}
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

						&:hover{
							border:0;
						}
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