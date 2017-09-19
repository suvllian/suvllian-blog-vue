<template>
	<div class="camrea-container">
		<ImageList :imageList="imageListByTime" />
		<h3 class="text-center">
			<span v-if="!isMore">-- THE END --</span>
		  <span v-if="isMore && loading">大力加载中...</span>
		</h3>
		<!-- <CategoryCamera :imagesListByCity="imagesListByCity"/> -->
	</div>
</template>

<script>
import ImageList from './components/image-list.vue'
import CategoryCamera from './components/category-camera.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST_BY_TIME, GET_IMAGES_LIST_BY_CITY, GET_IMAGES_BY_CITYID } from './../../vuex/type.js'

export default{
	components: { ImageList, CategoryCamera },
	computed: mapState({ 
		imagesListByCity: store => store.camera.imagesListByCity,
		cityImageList: store => store.camera.cityImageList,
		imageListByTime: store => store.camera.imageListByTime,
		page: store => store.camera.page,
		loading: store => store.camera.loading,
		isMore: store => store.camera.isMore
	}),
	data() {
    return {
			cityId: 0
		}
	},
	methods: {
		...mapActions([GET_IMAGES_LIST_BY_CITY, GET_IMAGES_BY_CITYID, GET_IMAGE_LIST_BY_TIME]),
		getPictures() {
      this.cityId = this.$route.params.cityId;
			if (this.cityId) {
				this.GET_IMAGES_BY_CITYID(this.cityId);
			} else {
				this.GET_IMAGES_LIST_BY_CITY();
			}
		}
	},
	watch:{
    '$route':'getPictures'
  },
	created() {
		//this.getPictures()	
		this.GET_IMAGE_LIST_BY_TIME(1)
	},
	mounted() {
    let slideNav = (event) => {
			let scrollTop = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;
			let screenHeight = document.documentElement.clientHeight
			let totalHeight = document.body.clientHeight

			if (scrollTop + screenHeight >= totalHeight - 100) {
        // 向下滑
				if (direction < 0 && this.isMore && !this.loading){
					this.GET_IMAGE_LIST_BY_TIME(++this.page)
				} else if (!this.isMore) {
					window.removeEventListener("mousewheel", slideNav);
					window.removeEventListener("DOMMouseScroll", slideNav);	
				}
			}
		}
		// 谷歌、欧朋
		window.addEventListener("mousewheel", slideNav);
		// 火狐
		window.addEventListener("DOMMouseScroll", slideNav);	
	}
}
</script>