<template>
	<div class="navbar" ref="header">
		<div class="header">
			<nav>
				<ul class="nav-ul">
					<li v-for="item in liItems" v-bind:class="{active:item.isActive}" @click="toTop">
						<router-link v-bind:to="item.src"><i :class="item.class"></i>{{item.title}}</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import effect from './../../utils/effect.js'

export default{
	data(){
		return{
			liItems:[
				{title:"首页",src:'/', class:"fa fa-home", isActive:true},
				{title:"图集",src:'/camera', class:"fa fa-image",isActive:false},
				{title:"读书",src:'/book', class:"fa fa-book",isActive:false},
				{title:"关于",src:'/about', class:"fa fa-user",isActive:false},
			]
		}
	},
	methods:{
		toTop(){
			effect.toTop();
		}
	},

	mounted(){
		var $this = this;
		var header = $this.$refs.header;

		var slideNav = (event) => {
			let top = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;
			if (top > 300){
				// 向下滑
				if (direction < 0){
					header.className = "hidden navbar";
				} else{
					header.className = "navbar";
				}
			} else{
				header.className = "navbar";
			}
		}

		// 谷歌、欧朋
		window.addEventListener("mousewheel", slideNav);
		
		// 火狐
		window.addEventListener("DOMMouseScroll", slideNav);	
	}
}
</script>

<style lang="scss" scoped>
	$height:38px;

	.navbar{
		width: 100%;
		background: rgba(40, 42, 44, 0.6);
	    left: 0;
	    position: fixed;
	    right: 0;
	    top: 0;
	    z-index: 3;
	    transition:all 0.5s ease;
	}

	.hidden{
		transform:translateY(-$height);
	}

	.fa{
		margin: 0 0.2em;
	}

	.header{
		width: 1170px;
		height: $height;
		padding:0px 15px;
		margin: 0 auto;
		transition: 1s all ease;
	}

	nav{
	    display: block;
	    float: left;
	    position: relative;

	    ul{
		    color: #848484;
		    font-family: "Open Sans",Arial,serif;
		    height: $height;
		    line-height: $height;
		    font-weight: 300;
		    outline: none;

		    li{
				float: left;
				position: relative;
				list-style: none;
				transition: 0.6s all ease;
				cursor: pointer;
				outline: none;

				a{
				    text-decoration: none;
					outline: none;
					font-size: 15px;
				    font-weight: 400;
					font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
					color: #fff;
					padding:0 12px;
				}
			}
		}
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

		.fa{
			display: none;
		}
	}
</style>
