<template>
	<div>
		<div class="camrea-container">
			<Camera :image-list="imageList"></Camera>

			<h3 class="text-center">
				<span class="pointer" @click="ADD_IMAGE_LIST(++page)" v-if="isMore && !loading">查看更多</span>
				<span v-if="!isMore">-- THE END --</span>
			<span v-if="isMore && loading">大力加载中...</span>
			</h3>
		</div>
	</div>
</template>

<script>
import Camera from './camera.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST, ADD_IMAGE_LIST } from './../../vuex/type.js'

export default{
	components: { Camera },
	computed: mapState({ 
		imageList: store => store.imageList.items,
		page: store => store.imageList.page,
		isMore: store => store.imageList.isMore, 
		loading: store => store.bookList.loading,
	}),
	methods: {
		...mapActions([GET_IMAGE_LIST, ADD_IMAGE_LIST]),
	},
	created() {
		this.GET_IMAGE_LIST();
  }
}
</script>