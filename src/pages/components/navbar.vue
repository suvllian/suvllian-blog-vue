<template>
	<div class="nav-container" ref="header">
		<nav class="nav">
			<ul class="nav-ul">
				<li v-for="item in liItems" :class="{active: item.isActive}" @click="toTop">
					<router-link :to="item.src"><i :class="item.class"></i>{{item.title}}</router-link>
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
				{title:"首页",src:'/', class:"fa fa-home", isActive: true},
				// {title:"实验室",src:'/lab', class:"fa fa-folder", isActive: false},
				{title:"图集",src:'/camera', class:"fa fa-image",isActive: false},
				{title:"读书",src:'/book', class:"fa fa-book",isActive: false},
				{title:"关于",src:'/about', class:"fa fa-user",isActive: false}
			]
		}
	},
	methods:{
		toTop(){
			effect.toTop();
		}
	},
	mounted(){
		let header = this.$refs.header;

    // 根据相应的操作改变class
		let changeClass = (newClass) => {
			if (header.className === newClass) {
				return
			} else {
				header.className = newClass;
			}
		}

		let slideNav = (event) => {
			let top = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;

			if (top > 300){
				// 向下滑
				if (direction < 0){
					changeClass("hidden nav-container")
				} else{
					changeClass("nav-container")
				}
			} else{
				changeClass("nav-container")
			}
		}

		// 谷歌、欧朋
		window.addEventListener("mousewheel", slideNav);

		// 火狐
		window.addEventListener("DOMMouseScroll", slideNav);	
	}
}
</script>