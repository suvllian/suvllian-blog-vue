<template>
	<div class="container">
		<slider></slider>

		<article>
			<section v-for="item in data">
				<a href="" >
					<div class="bg-img">
						<img :src="item.iBgLink" :alt="item.iName">
					</div>

					<div class="content">
						<div class="book-img">
							<img :src="item.iImage" :alt="item.iName">
						</div>
						<span>{{item.cClass}}</span>
						<div class="book-quote">
							<h3 class="quote-h3">{{item.iName}}</h3>
							<div>
								<p class="quote-p">{{item.iContent}}</p>	
							</div>
						</div>
					</div>
					<div class="common">
						<div class="common-left">
							<span>热度({{item.iLike}})</span>
							<span @click="dealVote()">
								<img v-if="isVote" src="./../../assets/after.png">
								<img v-else src="./../../assets/before.png">
							</span>	
						</div>
						<div class="common-right">
							<span>{{new Date(parseInt(item.iDate) * 1000).toLocaleString().slice(0,10)}}</span>
						</div>
					</div>
				</a>
			</section>
		</article>
	</div>
</template>

<script>
import Slider from './../common/Slider.vue'

export default {
	components: {
    	Slider
	},

	data(){
		return{
			isVote:false,
			data:[],
			bottomTitle:"查看更多",
			apiPath:"http://127.0.0.1/bapi/"
		}
	},
	methods:{
		getData:function(){
			var url = this.apiPath + "data.php";
			var postData = "do=book";
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST',url);
	        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	        var that = this;
	        xhr.onload = function(e){
	    		var responseLength = this.response.length;
	        	if(responseLength===0){
		        	that.bottomTitle = "暂无内容";
		        	return;
		        }
		        
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        	}	
	        	that.data = data;
	        }
	        xhr.send(postData);
		},

		dealVote:function(){
			this.isVote = !this.isVote;
		},

		aclick:function(){
			alert(1);
		}
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
	        @media (max-width: 568px) {
	            @content;
	        }
	    }
	    @else if $breakpoint == "medium" {
	        @media (max-width: 980px) {
	        	@content;
	    	}
	  	} 
	    @else if $breakpoint == "large" {
	    	@media (max-width: 1200px) {
	    		@content;
	    	}
	    }
	}

	%span{
		color: #aaa;
		font-size: 1em;
	}

	.container{
		background-color: #f7f1ed;
		padding-top:2em;
	}

	article{
		height: auto;
		width: 950px;
		margin:0.1em auto 0em;
		padding:2em 0;
		position:relative;
		clear: both;

		section{
			width: 450px;
			display: inline-block;
			margin: 25px 0;
			box-shadow:5px 5px 5px 5px #eee;

			&:nth-child(odd){
				margin-right: 50px;
			}

			&:hover{
				opacity: 0.8;

				.bg-img{
					img{
						transform: scale3d(1.2,1.2,1.2);
					}
				}

				.book-img{
					img{
						transform: rotate(360deg);
					}
				}
			}

			.bg-img{
				height: 200px;
				overflow: hidden;
				box-shadow:1px 1px 5px #aaa;

				img{
					width: 100%;
					height: 100%;
					transition: 1s all ease;
				}
			}

			.content{
				height: auto;
				padding-bottom:1em;
				background-color: #fff;
				position:relative;


				.book-img{
					position:absolute;
					bottom:36px;
					left:25px;
					height: 140px;

					img{
						max-height: 140px;
						box-shadow:1px 5px 5px  #aaa;
						transition: 1s all ease;
					}
				}

				span{
					padding: 3px 8px;
					position: absolute;
					right: -8px;
				    top: -13px;
				    font-size: 16px;
				    line-height: 22px; 
				    background-color: #e76648;
				    color: #fff;
			        border-color: #47456d;
    				box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    				border-radius:4px 0 0 4px;


				    &:after {
						content: "";
						position:absolute;
						top:28px;
						border-left:0.5em solid #9B8651;
						border-bottom:0.5em solid #f7f1ed;
					}
				}

				.book-quote{
					height: 100px;
					overflow: hidden;

					.quote-h3{
					 	color: #494949;
					    font-size: 20px;
					    font-weight: 500;
					    line-height: 28px;
					    margin-left: 151px;
					    padding: 20px 0 5px;
					 }

					.quote-p{
					    color: #9b9b9b;
					    display: -webkit-box;
					    font-size: 15px;
					    height: 42px;
					    line-height: 21px;
					    margin-left: 151px;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    width: 274px;
					    padding:1px;
					 }
				}
			}

			.common{
				clear: both;
				padding: 10px;
				background-color: #fff;
				border-top:1px dotted #ddd;
				position:relative;

				.common-left{
					width: 50%;
					display:inline-block;

					span{
						margin-left: 1em;
						@extend %span;

						&:first-child{
							margin-left: 0;
						}	

						&:nth-child(2){
							img{
								max-height: 1.6em;
								padding-left:0;
								cursor: pointer;
								outline: none;
								max-height:1em;
							}
						}
					}
				}

				.common-right{
					width: 35%;
					display:inline-block;
					float: right;

					span{
						@extend %span;
						float: right;
					}
				}

			}
		}
	}

	@include respond-to(medium){
		article{
			width: 475px;

			section{
				width: 475px;

				&:nth-child(odd){
					margin-right: 0px;
				}
			}
		}
	}

	@include respond-to(small){
		article{
			width: 100%;
			padding:2em 16px;
			min-width: 330px;

			section{
				width: 100%;		

				&:hover{
					opacity: 1;

					.bg-img{
						img{
							transform: scale3d(1,1,1);
						}
					}

					.book-img{
						img{
							transform: rotate(0);
						}
					}
				}

				.content{
					.book-quote{

						.quote-p{
							width: 50%;
							height: auto;
						}
					}
				}
			}
		}
	}
</style>
