<template>
	<div class="home-article-container">
		<div class="article-list"> 
			<section class="article-card" v-for="article in articleList">
				<router-link :to="{path:'article', query:{id:article.aId}}">
					<div class="article-card-content">
	          <div class="img-center">
							<img class="img-big" :src="article.aImage">
						</div>
						<div class="article-info">
	            <p class="article-meta">
								<time class="p-small">{{ `${article.monthInEnglish} ${article.day},${article.year}` }}</time>
							</p>
							<h2 class="article-title">
								<router-link :to="{path:'article', query:{id:article.aId}}">{{article.aTopic}}</router-link>
							</h2>
						</div>
					</div>
				</router-link>
			</section>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST, ADD_ARTICLE_LIST } from './../../../vuex/type.js'

export default{
	computed: mapState({ 
		articleList: store => store.articleList.items,
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore,
		loading: store => store.articleList.loading,
	}),
	methods: {
		...mapActions([ARTICLE_LIST, ADD_ARTICLE_LIST]),
	},
	created() {
		this.ARTICLE_LIST();
  }
}
</script>