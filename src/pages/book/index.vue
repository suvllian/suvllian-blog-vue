<template>
	<div class="book-container">
		<Book :book-list="bookList"></Book>		
		<h3 class="text-center">
			<span class="color-white" v-if="!isMore">-- THE END --</span>
		  <span class="color-white" v-if="isMore && loading">大力加载中...</span>
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
		bookList: store => store.books.bookList,
		page: store => store.books.page,
		isMore: store => store.books.isMore,
		loading: store => store.books.loading,
	}),
	methods: {
		...mapActions([GET_BOOK_LIST, ADD_BOOK_LIST]),
	},
	created() {
		this.GET_BOOK_LIST();
	},
	mounted() {
    let slideNav = (event) => {
			let scrollTop = document.body.scrollTop || window.scroolY || document.documentElement.scrollTop;
			let direction = event.wheelDelta || -event.detail;
			let screenHeight = document.documentElement.clientHeight
			let totalHeight = document.body.clientHeight

			if (scrollTop + screenHeight >= totalHeight - 100) {
        // 向下滑
				if (direction < 0 && this.isMore && !this.loading){
					this.ADD_BOOK_LIST(++this.page)
				} else if (!this.isMore) {
					window.removeEventListener("mousewheel", slideNav);
					window.removeEventListener("DOMMouseScroll", slideNav);	
				}
			}
		}
		// 谷歌、欧朋
		window.addEventListener("mousewheel", slideNav);
		// 火狐
		window.addEventListener("DOMMouseScroll", slideNav);	
	}
}
</script>