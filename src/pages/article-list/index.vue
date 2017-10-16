<template>
  <div class="blog">
    <h1 class="crumb-nav">
      <div class="crumb-nav-items">
        <router-link to="/">一颗松</router-link>
        <ul>
          <li><router-link to="/camera">相册</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
      <font>» 博客</font>
    </h1>
    <div class="article-list">
      <h2>文章列表</h2>
      <ul v-if="isFetchingAllArticleList">
          <li>大力加载中...</li>
        </ul>
      <ul v-else>
        <li v-for="article in allArticleList">
          <span>{{article.time}} »</span>
          <router-link :to="`article/${article.aId}`">{{article.aTopic}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_ALL_ARTICLE_LIST } from './../../vuex/type.js'

export default {
	computed: mapState({ 
		allArticleList: store => store.articleList.allArticleList,
		isFetchingAllArticleList: store => store.articleList.isFetchingAllArticleList
	}),
	methods: {
		...mapActions([GET_ALL_ARTICLE_LIST]),
	},
	created() {
		this.GET_ALL_ARTICLE_LIST();
	}
}
</script>