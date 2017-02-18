<template>
	<div class="article-list">
		<Music></Music>
		<article class="article" v-for="article in articleList">
			<Ahead :article-head="article"></Ahead>
			<div class="article-content">
				<div class="more">
					<p>
						<router-link :to="{path:'article',query:{id:article.aId}}">阅读全文 >></router-link>
					</p>
				</div>
			</div>
		</article>
		<h3 class="text-center" @click="ADD_ARTICLE_LIST(++page)" v-if="isMore"><span>查看更多</span></h3>
		<h3 class="text-center" v-else>-- THE END --</h3>
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