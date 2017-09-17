<template>
	<div class="camera-category-list">
      <div class="col-md-6" v-for="city in imagesListByCity"> 
				<div class="camera-category ">
					<div class="camera-category-text">
						<a href="#">{{city.title}}</a>
						<span>{{city.count}} Pictures</span>
					</div>
					<div class="camera-category-images">
						<router-link :to="`camera/${city.id}`"  v-for="image in city.images">
							<span class="camera-category-image col-md-4">
								<img :src="`http://suvllian.com/static/images/travel/${image.iImage}.jpg`" />  
								<span class="ihover"></span>          
							</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
	props:["imagesListByCity"]
}
</script>
