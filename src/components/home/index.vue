<template>
	<div class="article-list">
		<!-- <Music></Music> -->
		<section class="article" v-for="article in articleList">
			<Ahead :article-head="article"></Ahead>
			<div class="article-content">
				<div class="more text-center">
					<p>
						<router-link :to="{ path:'/article/' + article.aId}">阅读全文 >></router-link>
					</p>
				</div>
			</div>
		</section>

		<h3 class="text-center">
			<span class="pointer" @click="ADD_ARTICLE_LIST(++page)" v-if="isMore">查看更多</span>
			<span v-else>-- THE END --</span>
		</h3>
	</div>
</template>

<script>
import Music from './music.vue'
import Ahead from './ahead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST, ADD_ARTICLE_LIST } from './../../vuex/type.js'

export default{
	components: { Music, Ahead },
	computed: mapState({ 
		articleList: store => store.articleList.items,
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore
	}),
	methods:{
		...mapActions([ARTICLE_LIST, ADD_ARTICLE_LIST]),
	},
	created(){
		this.ARTICLE_LIST();
    }
}
</script>