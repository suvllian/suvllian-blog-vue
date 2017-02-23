<template>
	<h3 class="text-center">
		<span class="pointer" @click="ADD_IMAGE_LIST(++page)" v-if="isMore">查看更多</span>
		<span v-else>-- THE END --</span>
	</h3>
</template>

<script>
import { ADD_IMAGE_LIST } from './../../vuex/type.js'
import { mapActions, mapState} from 'vuex'

export default {
	computed: mapState({ 
		page: store => store.imageList.page,
		isMore: store => store.imageList.isMore
	}),
	methods:{
		...mapActions([ADD_IMAGE_LIST]),
	},
}
</script>