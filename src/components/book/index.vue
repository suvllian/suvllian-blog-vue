<template>
	<div class="book-container">
		<slider></slider>
		<Book :book-list="bookList"></Book>	
		<Load></Load>	
	</div>
</template>

<script>
import Slider from './slider.vue'
import Book from './book.vue'
import Load from './loadmore.vue'
import { mapActions, mapState} from 'vuex'
import { GET_BOOK_LIST, ADD_BOOK_LIST } from './../../vuex/type.js'

export default {
	components: { Slider, Book, Load },
	computed: mapState({ 
		bookList: store => store.bookList.items,
	}),
	methods:{
		...mapActions([GET_BOOK_LIST]),
	},
	created(){
		this.GET_BOOK_LIST();
	}
}
</script>