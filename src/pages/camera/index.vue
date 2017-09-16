<template>
	<div class="camrea-container">
		<div class="camera-category-list">
      <div class="col-md-6" v-for="city in imagesListByCity"> 
				<div class="camera-category ">
					<div class="camera-category-text">
						<a href="#">{{city.title}}</a>
						<span>{{city.count}} Pictures</span>
					</div>
					<div class="camera-category-images">
						<a href="#" v-for="image in city.images">
							<span class="camera-category-image col-md-4">
								<img :src="`http://suvllian.com/static/images/travel/${image.iImage}.jpg`" />  
								<span class="ihover"></span>          
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Camera from './components/camera.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGES_LIST_BY_CITY } from './../../vuex/type.js'

export default{
	components: { Camera },
	computed: mapState({ 
		imagesListByCity: store => store.camera.imagesListByCity
	}),
	methods: {
		...mapActions([GET_IMAGES_LIST_BY_CITY]),
	},
	created() {
		this.GET_IMAGES_LIST_BY_CITY();
	}
}
</script>