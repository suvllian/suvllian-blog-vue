<template>
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
						<h4 class="color-black">{{item.iName}}</h4>
						<p class="quote-p">{{item.iContent}}</p>	
					</div>
				</div>
				<div class="common">
					<div class="common-left">
						<span>热度({{item.iLike}})</span>
						<span class="vote-icon pointer" @click="dealVote(item)">
							<i v-if="item.isVote" class="fa fa-heart color-red"></i>
							<i v-else class="fa fa-heart-o"></i>
						</span>	
					</div>
					<div class="common-right text-right">
						<span>{{ item.time }}</span>
					</div>
				</div>
			</a>
		</section>
	</article>
</template>

<script>
import { VOTE_BOOK } from './../../vuex/type.js'
import { mapActions} from 'vuex'

export default {
	props:["bookList"],

	methods:{
		...mapActions([VOTE_BOOK]),
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
}
</script>