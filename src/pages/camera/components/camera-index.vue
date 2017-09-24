<template>
	<div>
    <ImageList :imageList="imageListByTime" />
		<h3 class="text-center">
			<span v-if="!isMore">-- THE END --</span>
		  <span v-if="isMore && loading">大力加载中...</span>
		</h3>
	</div>
</template>

<script>
import ImageList from './image-list.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST_BY_TIME } from './../../../vuex/type.js'

export default{
  components: { ImageList },
	computed: mapState({ 
		imageListByTime: store => store.camera.imageListByTime,
		page: store => store.camera.page,
		loading: store => store.camera.loading,
		isMore: store => store.camera.isMore
	}),
	methods: {
		...mapActions([GET_IMAGE_LIST_BY_TIME]),
		slideNav(e) {
      let scrollTop = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;
			let screenHeight = document.documentElement.clientHeight
			let totalHeight = document.body.clientHeight

			if (scrollTop + screenHeight >= totalHeight - 100) {
        // 向下滑
				if (direction < 0 && this.isMore && !this.loading){
					this.GET_IMAGE_LIST_BY_TIME(++this.page)
				} else if (!this.isMore) {
					window.removeEventListener("mousewheel", this.slideNav);
					window.removeEventListener("DOMMouseScroll", this.slideNav);	
				}
			}
		}
	},
	created() {
		this.GET_IMAGE_LIST_BY_TIME(1)
	},
	mounted() {
		// 谷歌、欧朋
		window.addEventListener("mousewheel", this.slideNav);
		// 火狐
		window.addEventListener("DOMMouseScroll", this.slideNav);	
	},
	beforeDestroy() {
		window.removeEventListener("mousewheel", this.slideNav);
		window.removeEventListener("DOMMouseScroll", this.slideNav);
	}
}
</script>
