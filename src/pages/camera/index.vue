<template>
	<div class="camrea-container">
		<CityCamera :cityImageList="cityImageList" v-if="cityId" />
		<CategoryCamera :imagesListByCity="imagesListByCity" v-else />
	</div>
</template>

<script>
import CityCamera from './components/city-camera.vue'
import CategoryCamera from './components/category-camera.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGES_LIST_BY_CITY, GET_IMAGES_BY_CITYID } from './../../vuex/type.js'

export default{
	components: { CityCamera, CategoryCamera },
	computed: mapState({ 
		imagesListByCity: store => store.camera.imagesListByCity,
		cityImageList: store => store.camera.cityImageList,
	}),
	data() {
    return {
			cityId: 0
		}
	},
	methods: {
		...mapActions([GET_IMAGES_LIST_BY_CITY, GET_IMAGES_BY_CITYID]),
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
		this.getPictures()	
	}
}
</script>