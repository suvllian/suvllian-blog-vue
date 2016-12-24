<template>
	<header>
		<div class="header">
			<div class="header-nav">
				<h1 class="logo"><a :href="logo.src">{{logo.title}}</a></h1>
				<nav>
					<ul class="nav-ul">
						<li v-for="item in liItems" v-bind:class="{active:item.isActive}" @click="changeActive(item)">
							<router-link v-bind:to="item.src">{{item.title}}</router-link>
						</li>
					</ul>

					<ul class="nav-ul">
						<li>
							<a title="More" id="more" @click="changeSmall()">
								<i></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

		<nav :class="{small:true,show:isSmall}">
			<ul>
				<li v-for="item in liItems" >
					<router-link v-bind:to="item.src">{{item.title}}</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>

export default{
	data(){
		return{
			logo:{
				title:"Suvllian",
				src:"http://suvllian.com"
			},
			liItems:[
				{title:"首页",src:'/',isActive:true},
				{title:"人在旅途",src:'/camera',isActive:false},
				{title:"读书",src:'/book',isActive:false},
			],
			isSmall:false
		}
	},

	methods:{
		changeActive:function(item,event){
			var length = this.liItems.length;
			for(var i = 0;i<length;i++){
				this.liItems[i].isActive = false;
			}
			item.isActive = true;
		},

		changeSmall:function(){ 
  			this.isSmall = !this.isSmall;
		}
	},

	created(){
		window.onresize = function(){
			this.isSmall = false;
		}
	}
}
</script>

<style lang="scss" scoped>
	$height:6rem;
	// 导航个数
	$liNumber:3;

	header{
		height: $height;
		width: 100%;
		background: white;
    	box-shadow: 0 0.25rem 0.25rem -0.25rem rgba(0, 0, 0, 0.22);
    	padding: 0;
		position: relative;
		top: 0;
		left: 0;

	}

	.header{
		width: 1170px;
		height: $height;
		padding:0px 15px;
		margin: 0 auto;
	}

	.header-nav{
		float: left;
		height: $height;
	    width: 100%;
	}

	.logo {
		color: rgba(0, 0, 0, 0.7);
	    font-weight: 400;
	    margin: 0 0 1.875rem;
	    float: left;
	    font-size: 22px;
	    font-weight: 700;
	    margin-top: 1rem;
	    padding-top: 15px;
	    text-transform: uppercase;

	    a {
		    border: 2px solid #00adb5;
		    color: rgba(21, 31, 44, 0.8);
		    padding: 0 7px;
		    position: relative;

		    &:hover,&:focus{
		    	color: rgba(0, 0,0 , 0.9);
		    }
		}
	}

	nav{
	    display: block;
	    float: right;
	    position: relative;
	    z-index: 100;

	    ul{
		    color: #848484;
		    font-family: "Open Sans",Arial,serif;
		    height: $height;
		    font-weight: 300;
		    outline: none;

		    li{
				float: left;
				height: 0;
			    padding-top: 0.25rem;
				position: relative;
				list-style: none;
				transition: 1s all ease;
				cursor: pointer;
				outline: none;

				a{
					display: block;
					height: 100%;
					position: relative;
				    color: rgba(0, 0, 0, 0.8);
				    font-size: 0.875rem;
				    font-weight: 400;
				    padding: 2.125rem 1.3rem;
				    text-decoration: none;
				    text-transform: uppercase;
					transition: 0.5s all ease;
					outline: none;
				}

				&:hover{
					background-color: #00adb5;
					height: $height;
					outline: none;

					a{
						color: #fff;
						outline: none;
					}
				}	
			}

			.active{
				background-color: #00adb5;
				color: #fff;
				height: $height;
				a{
					color: #fff;
				}
			}
		}
	}

	// 响应式小屏幕导航
	#more{
		margin-top: -5px;
	}

	.small{
		width:100%;
		height: 0;
		margin-bottom: 50px;
		background-color:#fff;
		position:relative;
		border-top:2px solid #eee;
		transition: 0.5s all ease;
		overflow: hidden;

		ul{
			width: 100%;
			position:relative;

			li{
				width: 100%;
				height: 52px;
				padding:16px 0px;
				transition: 1s all ease;
				background-color:#fff;
				border-bottom:2px dotted #eee;

				&:hover{
					transform: translateX(10px);
					height: 52px;
					a{
						color: #333;
					}
				}

				a{
					display: inline;
					font-size: 20px;
				}
			}
		}
	}

	.show{
		height:52px*$liNumber+2px;
	}

	// 响应式布局
	@media screen and (max-width:1200px){
		.header{
			width: 970px;
		}
	}

	@media screen and (max-width:1000px){
		.header{
			width: 820px;
		}
	}

	@media screen and (max-width:840px){
		.header{
			width: 100%;
		}
	
		ul:first-child{
			display: none;
		}
		

		ul:last-child{
			display: block;

			li{
				&:hover{
					background-color:#fff;
				}
			}

			i{
				background: #000;
			    display: inline-block;
			    height: 2px;
			    position: relative;
			    transition: all 0.2s ease-out 0s;
			    width: 30px;

			    &::before,&::after{
			    	background: #000 none repeat scroll 0 0;
				    content: "";
				    height: 2px;
				    left: 0;
				    position: absolute;
				    transition: all 0.2s ease 0s;
				    width: 30px;
			    }

			    &::before{
			    	top:-8px;
			    }

			    &::after{
			    	bottom:-8px;
			    }
			}

			a{
				&:hover{

					i{
						&::before{
					    	top:-11px;
					    }

					    &::after{
					    	bottom:-11px;
				    	}
					}
					
			    }
			}
		}
	}
</style>
