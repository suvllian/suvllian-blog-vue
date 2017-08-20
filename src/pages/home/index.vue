<template>
	<div>
		<header></header>
		<div class="article-list">
			<section class="article" v-for="article in articleList">
				<ArticleHeader :article="article" />
				<div class="article-content">
					<div class="more text-center">
						<p>
							<router-link :to="{path:'article',query:{id:article.aId}}">阅读全文 >></router-link>
						</p>
					</div>
				</div>
			</section>
			<h3 class="text-center">
				<span class="pointer" @click="ADD_ARTICLE_LIST(++page)" v-if="isMore && !loading">查看更多</span>
				<span v-if="!isMore">-- THE END --</span>
				<span v-if="isMore && loading">大力加载中...</span>
			</h3>
		</div>
	</div>
</template>

<script>
import ArticleHeader from './../components/article-header.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST, ADD_ARTICLE_LIST } from './../../vuex/type.js'

export default{
	components: { ArticleHeader },
	computed: mapState({ 
		articleList: store => store.articleList.items,
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore,
		loading: store => store.articleList.loading,
	}),
	methods:{
		...mapActions([ARTICLE_LIST, ADD_ARTICLE_LIST]),
	},
	created(){
		this.ARTICLE_LIST();
  }
}
</script>