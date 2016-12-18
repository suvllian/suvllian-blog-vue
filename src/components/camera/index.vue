<template>
	<section>
		<div class="box" v-for="(single,key) in data">
			<div class="box-content">
				<img :class="{active:single.isActive}" v-bind:src="'http://suvllian.com/V/images/travel/'+single.tImage+'.jpg'" v-on:click="enlargeImage(key)" alt="">
				<div class="introduction" :class="{float:single.isActive}">
					<h3>{{single.tTopic}}:</h3>
					<p :class="{border:single.isActive}">{{single.tContent}}</p>
				</div>
			</div>
			<div class="box-common">
				<span>热度({{single.tLike}})</span>
				<span @click="dealVote(key,single.tId)">
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
			apiPath:"http://192.168.1.106/bapi/"
		}
	},

	methods:{
		enlargeImage:function(index){
			this.data[index].isActive = !this.data[index].isActive;
		},

		dealVote:function(index,id){
			this.data[index].isVote = !this.data[index].isVote;
			if(this.data[index].isVote){
				this.data[index].tLike++;
				this.changeVote(id,"add");
			}else{
				this.data[index].tLike--;
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
	section{
		height: auto;
		width: 100%;
		padding:2em 0;
		position:relative;

		h1{
			font-weight: 400;
			text-align: center;
			margin: 1em 0;
			cursor: pointer;
			transition: 1s all ease;
			outline: none;
			-webkit-tap-highlight-color:rgba(0,0,0,0) ;

			&:hover{
				color: #333;
			}
		}
	}

	.box{
		background-color: #fff;
		width: auto;
		max-width: 48em;
		height:auto;
		margin: 1em auto;
		padding:1em;
		border: 1px solid #eee;
		box-shadow:1px 1px 5px #aaa;
		border-radius:5px;
		outline: none;


		img{
			height: auto;
			max-width:40%; 
			cursor: pointer;
			padding-left: 4%;
			box-sizing:border-box;
			outline: none;
		}

		.introduction{
			max-width: 60%;
			min-width: 60%;
			color: #333;
			float: left;

			h3{
				font-weight: 400;
				text-decoration: underline;
				font-size: 1.125em;
				margin-bottom: 0.875em;
			}

			p{
				line-height: 1.5em;
			}
		}

		.box-common{
			height: 3em;
			width: 100%;
			padding-top:0.5em;
			clear: left;

			span{
				margin-left: 1em;
				color: #aaa;
				font-size: 0.875em;
				line-height: 3em;

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

		// JS设置样式
		.active{
			width: 100%;
			max-width: 100%;
			padding-left:0;
			padding-bottom:0.5em;
		}

		.float{
			float: none;
			max-width: 100%;
		}

		.border{
			border-left:4px solid #dfdfdf;
			padding-left:1em;
		}
	}

	// 响应式布局

	@media screen and (max-width:800px){
		.box{
			max-width: 96%;
			margin: 1em 2%;
		}
	}

	@media screen and (max-width:510px){
		body{
			min-width: 368px;
		}

		.box{
			max-width: 96%;
			margin: 1em 2%;
			min-width: 300px;

			.introduction{
				float: none;
				max-width: 100%;

				p{
					border-left:4px solid #dfdfdf;
					padding-left:1em;
				}
			}
		}
		.box-content{
			img{
				width: 100%;
				max-width: 100%;
				padding-left:0;
				padding-bottom:0.5em;
				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0) ;
			}
		}


		.box-common{
			span{
				&:first-child{
					padding-left:0%; 
				}

				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0) ;
			}
		}
	}
</style>