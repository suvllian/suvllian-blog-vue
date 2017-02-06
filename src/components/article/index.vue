<template>
	<div class="article-list">
		<article class="article">
			<Ahead :article-head="article"></Ahead>
			<div class="article-content" v-html="article.aContent"></div>
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
						max-height: 500px;		
					}

					.small-img{
						max-height: 300px;
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