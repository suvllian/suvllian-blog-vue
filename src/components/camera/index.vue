<template>
	<div class="camrea-container">
		<Camera :image-list="imageList"></Camera>
		<Load></Load>
	</section>
</template>

<script>
import Camera from './camera.vue'
import Load from './loadmore.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST } from './../../vuex/type.js'

export default{
	components:{ Camera, Load },
	computed: mapState({ 
		imageList: store => store.imageList.items
	}),
	methods:{
		...mapActions([GET_IMAGE_LIST]),
	},
	created(){
		this.GET_IMAGE_LIST();
    }
}
</script>