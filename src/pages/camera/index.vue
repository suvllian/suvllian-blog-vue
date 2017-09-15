<template>
	<div class="camrea-container">
		<Camera :image-list="imageList"></Camera>
		<h3 class="text-center">
			<span class="pointer" @click="ADD_IMAGE_LIST(++page)" v-if="isMore && !loading">查看更多</span>
			<span class="color-white" v-if="!isMore">-- THE END --</span>
		  <span class="color-white" v-if="isMore && loading">大力加载中...</span>
		</h3>
	</div>
</template>

<script>
import Camera from './components/camera.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST, ADD_IMAGE_LIST } from './../../vuex/type.js'

export default{
	components: { Camera },
	computed: mapState({ 
		imageList: store => store.camera.imageList,
		page: store => store.camera.page,
		isMore: store => store.camera.isMore, 
		loading: store => store.camera.loading,
	}),
	methods: {
		...mapActions([GET_IMAGE_LIST, ADD_IMAGE_LIST]),
	},
	created() {
		this.GET_IMAGE_LIST();
  }
}
</script>