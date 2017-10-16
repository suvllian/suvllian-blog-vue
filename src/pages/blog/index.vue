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
    <div class="blog-right">
      <div class="article-category">
        <h2>文章分类</h2>
        <ul v-if="isFetchingClassList">
          <li>大力加载中...</li>
        </ul>
        <ul v-else>
          <li v-for="classObj in classList">
            <router-link to="/about">{{classObj.aClassName}}</router-link>
          </li>
          <li>
            <router-link to="/about">更多分类...</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="last-article" v-if="articleList[0].aId">
      <h3>
        <router-link :to="`article/${articleList[0].aId}`">{{articleList[0].aTopic}}</router-link>
      </h3>
      <p>
        {{articleList[0].aIntro}}
        <router-link :to="`article/${articleList[0].aId}`">阅读全文<font>»</font></router-link>
      </p>
      <span>
        Posted by <router-link to="/about">Suvllian</router-link> at 
        <a href="#">{{articleList[0].aClassName}}</a> on <time>{{articleList[0].time}}</time>
      </span>
    </div>
    <div class="article-list">
      <h2>近期文章</h2>
      <ul v-if="isFetchingArticleList">
          <li>大力加载中...</li>
        </ul>
      <ul v-else>
        <li v-for="article in articleList">
          <span>{{article.time}} »</span>
          <router-link :to="`article/${article.aId}`">{{article.aTopic}}</router-link>
        </li>
        <li>
          <router-link to="/article-list">更多文章...</router-link>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p>©2016-2017 陕IPC备16014072-1号 </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_ARTICLE_LIST, GET_ARTICLE_CLASS } from './../../vuex/type.js'

export default {
	computed: mapState({ 
		articleList: store => store.articleList.articleList,
		isFetchingArticleList: store => store.articleList.isFetchingArticleList,
		classList: store => store.articleList.classList,
		isFetchingClassList: store => store.articleList.isFetchingClassList
	}),
	methods: {
		...mapActions([GET_ARTICLE_LIST, GET_ARTICLE_CLASS]),
	},
	created() {
		this.GET_ARTICLE_LIST();
    this.GET_ARTICLE_CLASS();
	}
}
</script>