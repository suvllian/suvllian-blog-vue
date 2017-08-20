<template>
	<article class="book">
		<section v-for="item in bookList" class="section-book">
			<a @click.prevent="" href="">
				<div class="img-book-bg">
					<img :src="item.iBgLink" :alt="item.iName">
				</div>

				<div class="content">
					<div class="img-book">
						<img :src="item.iImage" :alt="item.iName">
					</div>
					<span class="class-book">{{item.cClass}}</span>
					<div class="intro-book">
						<h4 class="color-black">{{item.iName}}</h4>
						<p class="p-book">{{item.iContent}}</p>	
					</div>
				</div>
				<div class="book-bottom">
					<div class="row">
						<div class="col-md-6">
							<span>热度({{item.iLike}})</span>
							<span class="vote-icon pointer" @click="dealVote(item)">
								<i v-if="item.isVote" class="fa fa-heart color-red"></i>
								<i v-else class="fa fa-heart-o"></i>
							</span>	
						</div>
						<div class="col-md-6 text-right">
							<span>{{ item.time }}</span>
						</div>
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
		dealVote: function(item) {
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