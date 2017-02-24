<template>
	<div class="navbar" ref="header">
		<nav>
			<ul class="nav-ul">
				<li v-for="item in liItems" v-bind:class="{active:item.isActive}" @click="toTop">
					<router-link v-bind:to="item.src"><i :class="item.class"></i>{{item.title}}</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import effect from './../../utils/effect.js'

export default{
	data(){
		return{
			liItems:[
				{title:"首页",src:'/', class:"fa fa-home", isActive:true},
				// {title:"分类",src:'/', class:"fa fa-folder", isActive:true},
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
		window.onmousewheel = document.onmousewheel = slideNav;
		// 火狐
		window.addEventListener("DOMMouseScroll", slideNav);	
	}
}
</script>