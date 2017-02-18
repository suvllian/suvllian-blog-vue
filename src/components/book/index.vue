<template>
	<div class="container">
		<slider></slider>

		<article>
			<section v-for="item in bookList">
				<a @click.prevent="" href="" >
					<div class="bg-img">
						<img :src="item.iBgLink" :alt="item.iName">
					</div>

					<div class="content">
						<div class="book-img">
							<img :src="item.iImage" :alt="item.iName">
						</div>
						<span>{{item.cClass}}</span>
						<div class="book-quote">
							<h4 class="quote-h3">{{item.iName}}</h4>
							<div>
								<p class="quote-p">{{item.iContent}}</p>	
							</div>
						</div>
					</div>
					<div class="common">
						<div class="common-left">
							<span>热度({{item.iLike}})</span>
							<span class="vote-icon" @click="dealVote(item)">
								<i v-if="item.isVote" class="fa fa-heart vote-true"></i>
								<i v-else class="fa fa-heart-o"></i>
							</span>	
						</div>
						<div class="common-right">
							<span>{{ item.time }}</span>
						</div>
					</div>
				</a>
			</section>

			<h3 class="text-center" @click="ADD_BOOK_LIST(++page)" v-if="isMore"><span>查看更多</span></h3>
			<h3 class="text-center" v-else>-- THE END --</h3>
		</article>
	</div>
</template>

<script>
import Slider from './slider.vue'
import { mapActions, mapState} from 'vuex'
import { GET_BOOK_LIST, VOTE_BOOK, ADD_BOOK_LIST } from './../../vuex/type.js'

export default {
	components: { Slider },
	computed: mapState({ 
		bookList: store => store.bookList.items,
		page: store => store.bookList.page,
		isMore: store => store.bookList.isMore
	}),
	methods:{
		...mapActions([GET_BOOK_LIST, VOTE_BOOK, ADD_BOOK_LIST]),
		dealVote:function(item){
			item.isVote = !item.isVote;
			if(item.isVote){
				item.iLike++;
				this.VOTE_BOOK({id:item.iId,way:"add"});
			}else{
				item.iLike--;
				this.VOTE_BOOK({id:item.iId,way:"sub"});
			}
		},
	},
	created(){
		this.GET_BOOK_LIST();
	}
}
</script>

<style lang="scss" scoped>
	@import "./../../assets/style/book.scss";
</style>
