<template>
	<div class="container">
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
						<span>小说</span>
						<div class="book-quote">
							<h3>{{item.iNmae}}</h3>
							<div>
								<p>{{item.iContent}}</p>	
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
							<span>2016-11-10</span>
						</div>
					</div>
				</a>
			</section>
		</article>
	</div>
</template>

<script>
export default {
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
		}
	},
	created(){
		this.getData();
	}
}
</script>

<style lang="scss" scoped>
	.container{
		background-color: #f7f1ed;
	}

	article{
		height: auto;
		width: 950px;
		margin: 0 auto;
		padding:2em 0;
		position:relative;
		background-color: #f7f1ed;

		section{
			width: 450px;
			overflow: hidden;
			display: inline-block;
			margin: 25px 0;
			box-shadow:5px 5px 5px 5px #eee;
			background-color: #f7f1ed;

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
			}

			.bg-img{
				height: 200px;
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
					bottom:25px;
					left:25px;
					height: 140px;

					img{
						max-height: 140px;
					}
				}

				span{
				    background: #e76648 none repeat scroll 0 0;
				    color: #fff;
				    font-size: 16px;
				    line-height: 22px;
				    padding: 3px 8px;
				    position: absolute;
				    right: -1px;
				    top: -13px;
				}

				.book-quote{
					height: auto;

					 h3{
					 	color: #494949;
					    font-size: 20px;
					    font-weight: 500;
					    line-height: 28px;
					    margin-left: 151px;
					    padding: 20px 0 5px;
					 }

					 p{
					    color: #9b9b9b;
					    display: -webkit-box;
					    font-size: 15px;
					    height: 42px;
					    line-height: 21px;
					    margin-left: 151px;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    width: 274px;
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
						color: #aaa;
						font-size: 0.875em;

						&:first-child{
							margin-left: 0;
						}	

						&:nth-child(2){
							img{
								max-height: 1.6em;
								padding-left:0;
								cursor: pointer;
								outline: none;
							}
						}
					}
				}

				.common-right{
					width: 50%;
					display:inline-block;
					float: right;


					span{
						float: right;
					}
				}

			}
		}
	}

	@media screen and (max-width:980px){
		article{
			width: 500px;

			section{
				width: 500px;

				&:nth-child(odd){
					margin-right: 0px;
				}
			}
		}
	}

	@media screen and (max-width:568px){
		article{
			width: 100%;
			padding:2em 1em;

			section{
				width: 100%;
				border-radius: 3px;

				.content{
					.book-quote{
						div{
							height: auto;
						}

						p{
							width: 50%;
						}
					}
				}
			}
		}
	}
</style>
