<template>
	<h3 class="text-center">
		<span class="pointer" @click="ADD_BOOK_LIST(++page)" v-if="isMore">查看更多</span>
		<span v-else>-- THE END --</span>
	</h3>
</template>

<script>
import { ADD_BOOK_LIST } from './../../vuex/type.js'
import { mapActions, mapState} from 'vuex'

export default {
	computed: mapState({ 
		page: store => store.bookList.page,
		isMore: store => store.bookList.isMore
	}),
	methods:{
		...mapActions([ADD_BOOK_LIST]),
	},
}
</script>