<template>
	<section>
		<div class="box" v-for="(single,key) in data">
			<div class="box-content">
				<img :class="{imgClicked:single.isActive}" class="content-img" v-bind:src="'http://suvllian.com/V/images/travel/'+single.iImage+'.jpg'" :alt="single.iTopic" @click="enlargeImage(key)">
				<div class="introduction" :class="{introClicked:single.isActive}">
					<h3 class="introduction-h3">{{single.iTopic}}:</h3>
					<p class="introduction-p" :class="{borderClicked:single.isActive}">{{single.iContent}}</p>
				</div>
			</div>
			<div class="box-common">
				<span class="common-span">热度({{single.iLike}})</span>
				<span class="common-span" @click="dealVote(key,single.iId)">
					<img  v-if="single.isVote" src="./../../assets/after.png">
					<img  v-else src="./../../assets/before.png">
				</span>
			</div>
		</div>
		<h1 @click="addData()">{{bottomTitle}}</h1>
	</section>
</template>

<script>
export default{
	data(){
		return{
			data:[],
			pageCounter:1,
			bottomTitle:"查看更多",
			apiPath:"http://www.suvllian.com/C/bapi/"
		}
	},

	methods:{
		enlargeImage:function(index){
			this.data[index].isActive = !this.data[index].isActive;
		},

		dealVote:function(index,id){
			this.data[index].isVote = !this.data[index].isVote;
			if(this.data[index].isVote){
				this.data[index].iLike++;
				this.changeVote(id,"add");
			}else{
				this.data[index].iLike--;
				this.changeVote(id,"sub");
			}
		},

		getData:function(){
			var url = this.apiPath + "data.php";
			var postData = "do=data&page=1";
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

		addData:function(){
			this.pageCounter++;

			this.$http.post(
	            this.apiPath + "data.php",
	            {
	            	do:"data",
	            	page:this.pageCounter,
	            }
	        ).then(function (res) {
	        	var data = res.data;
                var resLength = data.length;
	        	if(resLength===0){
		        	this.bottomTitle = "没有更多内容了";
		        	return;
		        }
		        
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        	}	
	        	this.data.concat(data);
            },function (res) {
                console.log(res.data);
            });
		},

		changeVote:function(id,way){
			this.$http.post(
	            this.apiPath + "data.php",
	            {
	            	do:"vote",
	            	way:way,
	            	id:id
	            }
	        ).then(function (res) {
               
            },function (res) {
                console.log(res.data);
            });
		},
	},

	created(){
		this.getData();
    }
}
</script>
<style lang="scss" scoped>
	
	// 设置宽高及最大宽度
	@mixin widthHeightMaxWidth($width:auto,$height:auto,$maxWidth:100%){
		width:$width;
		height:$height;
		max-width:$maxWidth;
	}

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

	section{
		@include widthHeightMaxWidth(100%,auto);
		padding:2em 0;
		position:relative;

		h1{
			font-weight: 400;
			text-align: center;
			margin: 1em 0;
			cursor: pointer;
			transition: 1s all ease;
			outline: none;

			&:hover{
				color: #333;
			}
		}
	}

	.box{
		@include widthHeightMaxWidth(auto,auto,48em);
		background-color: #fff;	
		padding-bottom:1em;
		margin: 1em auto;
		border: 1px solid #eee;
		border-radius:2px;
		outline: none;

		.box-content{
			.content-img{
				@include widthHeightMaxWidth(auto,auto,40%); 
				padding:1em;
				cursor: pointer;
				outline: none;
			}

			.introduction{
				max-width: 60%;
				min-width: 60%;
				padding:1em;
				padding-bottom:0;
				float: left;
				color: #333;

				.introduction-h3{
					margin-bottom: 0.875em;
					font-weight: 400;
					text-decoration: underline;
					font-size: 1.125em;
				}

				.introduction-p{
					line-height: 1.5em;
				}
			}

			// 点击图片后的样式
			.imgClicked{
				@include widthHeightMaxWidth(100%,auto,100%);
				padding-bottom:0;
			}

			.introClicked{
				float: none;
				max-width: 100%;
			}

			.borderClicked{
				border-left:3px solid #dfdfdf;
				padding-left:1em;
			}
		}

		.box-common{
			height: 2em;
			width: 100%;
			padding:0 1em;
			margin-top:0.5em;
			clear: left;
			border-top:1px dotted #ddd;

			.common-span{
				margin-left: 1em;
				color: #aaa;
				font-size: 0.875em;
				line-height: 3em;

				&:first-child{
					margin-left: 0;
				}	

				&:nth-child(2){
					img{
						width: 20px;
						max-height: 1.6em;
						padding-left:0;
						cursor: pointer;
						outline: none;
					}
				}
			}
		}
		
	}


	@include respond-to(medium){
		.box{
			max-width: 96%;
			margin: 1em 2%;
		}
	}

	@include respond-to(small){
		body{
			min-width: 368px;
		}

		.box{
			max-width: 100%;
			margin: 1em 0;
			min-width: 300px;
			border:0px;

			

			.box-content{
				.content-img{
					@include widthHeightMaxWidth(100%,auto,100%);
					padding:0;
					margin: 0;
					outline: none;
				}

				.introduction{
					float: none;
					max-width: 100%;

					.introduction-p{
						border-left:3px solid #dfdfdf;
						padding-left:1em;
					}
				}
			}

			.box-common{
				.common-span{
					&:first-child{
						padding-left:0%; 
					}

					outline: none;
				}
			}
		}
	}
</style>