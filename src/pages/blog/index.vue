<template>
  <div class="blog">
    <div class="blog-right">
      <div class="article-category">
        <h2>文章分类</h2>
        <ul>
          <li v-for="classObj in classList">
            <router-link to="/about">{{classObj.aClassName}}</router-link>
          </li>
          <li>
            <router-link to="/about">更多分类...</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="last-article">
      <h3>
        <router-link to="/about">{{articleList[0].aTopic}}</router-link>
      </h3>
      <p>
        {{articleList[0].aIntro}}
        <a href="">阅读全文<font>»</font></a>
      </p>
      <span>
        Posted by <router-link to="/about">Suvllian</router-link> at 
        <a href="#">{{articleList[0].aClassName}}</a> on <time>{{articleList[0].time}}</time>
      </span>
    </div>
    <div class="recent-article">
      <h2>近期文章</h2>
      <ul>
        <li v-for="article in articleList">
          <span>{{article.time}} »</span>
          <router-link to="/about">{{article.aTopic}}</router-link>
        </li>
        <li>
          <router-link to="/about">更多文章...</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_ARTICLE_LIST, GET_ARTICLE_CLASS } from './../../vuex/type.js'

export default {
	computed: mapState({ 
		articleList: store => store.articleList.articleList,
		classList: store => store.articleList.classList
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