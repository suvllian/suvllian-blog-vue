<template>
	<div class="book-container">
		<slider></slider>

		<article class="book">
			<section v-for="item in bookList" class="book-section">
				<a @click.prevent="" href="">
					<div class="bg-img">
						<img :src="item.iBgLink" :alt="item.iName">
					</div>

					<div class="content">
						<div class="img-book">
							<img :src="item.iImage" :alt="item.iName">
						</div>
						<span class="bclass-label">{{item.cClass}}</span>
						<div class="book-quote">
							<h4 class="black">{{item.iName}}</h4>
							<p class="quote-p">{{item.iContent}}</p>	
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
						<div class="common-right text-right">
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