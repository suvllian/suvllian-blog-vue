<template>
	<div class="camera-category-list">
      <div v-for="city in imagesListByCity"> 
				<div class="camera-category">
					<div class="camera-category-text">
						<a href="#">{{city.title}}</a>
						<span>{{city.count}} Pictures</span>
					</div>
					<div class="camera-category-images">
						<router-link :to="`travel/${city.id}`"  v-for="image in city.images">
							<div class="camera-category-image">
								<img :src="`http://suvllian.com/static/images/travel/${image.iImage}.jpg`" />  
								<span class="ihover"></span>          
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_IMAGES_LIST_BY_CITY } from './../../../vuex/type.js'

export default {
	computed: mapState({ 
		imagesListByCity: store => store.camera.imagesListByCity
	}),
	methods: {
		...mapActions([GET_IMAGES_LIST_BY_CITY])
	},
	created() {
		this.GET_IMAGES_LIST_BY_CITY()
	}
}
</script>
