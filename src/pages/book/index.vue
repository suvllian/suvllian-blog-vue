<template>
	<div class="book-container">
		<slider></slider>
		<Book :book-list="bookList"></Book>		
		<h3 class="text-center">
			<span class="pointer" @click="ADD_BOOK_LIST(++page)" v-if="isMore && !loading">查看更多</span>
			<span v-if="!isMore">-- THE END --</span>
		<span v-if="isMore && loading">大力加载中...</span>
		</h3>
	</div>
</template>

<script>
import Slider from './components/slider.vue'
import Book from './components/book.vue'
import { mapActions, mapState} from 'vuex'
import { GET_BOOK_LIST, ADD_BOOK_LIST } from './../../vuex/type.js'

export default {
	components: { Slider, Book },
	computed: mapState({ 
		bookList: store => store.bookList.items,
		page: store => store.bookList.page,
		isMore: store => store.bookList.isMore,
		loading: store => store.bookList.loading,
	}),
	methods:{
		...mapActions([GET_BOOK_LIST, ADD_BOOK_LIST]),
	},
	created(){
		this.GET_BOOK_LIST();
	}
}
</script>