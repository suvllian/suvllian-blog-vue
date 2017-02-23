<template>
	<header ref="header" class="">
		<!-- <div class="header-img">
			<img src="https://img.alicdn.com/tps/TB15XU_LpXXXXbEXpXXXXXXXXXX-900-500.png" alt="">
		</div> -->
	</header>
</template>

<script>
export default {
	methods:{

	},

	mounted(){
		var $this = this;
		var header = $this.$refs.header;
		console.log(header);
		var slide = (event) => {
			let top = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;
			if (top > 0){
				// 向下滑
				if (direction < 0){
					header.className = "header-hide";
				} else{
					header.className = "";
				}
			} else{
				header.className = "";
			}
		}

		// 谷歌、欧朋
		window.onmousewheel = document.onmousewheel = slide;
		// 火狐
		window.addEventListener("DOMMouseScroll", slide);	
	}
}
</script>