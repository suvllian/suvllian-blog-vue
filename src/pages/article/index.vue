<template>
  <article class="article-contianer">
    <section class="article-head">
      <h1 class="article-title">{{article.aTopic}}</h1>
      <p class="article-info">
        <span>作者：<router-link to="/about">Suvllian</router-link></span>
        <span>发表于{{article.time }}</span>
        <span>围观：{{article.aVisit}}次</span>
        <span>评论数：0条</span>
      </p>
      <div class="article-image">
        <img :src="article.aImage">
      </div>
    </section>	
    <div class="article-content" v-html="article.aContent"></div>
    <div class="prenext">
    <div class="prev">
    	<router-link v-if="prev.aId" :to="`/article/${prev.aId}`">
        <span class="pre-btn">上一篇: {{prev.aTopic}} </span>
      </router-link>
    </div>
    <div class="next text-right">
    	<router-link v-if="next.aId" :to="`/article/${next.aId}`">
        <span class="next-btn">下一篇: {{next.aTopic}}</span>
      </router-link>
    </div>
  </div>
  </article>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET, GET_PRENEXT_LIST } from './../../vuex/type.js'
import effect from './../../utils/effect.js'

export default{
	computed: mapState({ 
		article: store => store.articleContent.article,
		id: store => store.articleContent.id,
    prev: store => store.articlePreNext.prev,
    next: store => store.articlePreNext.next,
	}),
	methods:{ 
    ...mapActions([ARTICLE_CONTNET, GET_PRENEXT_LIST]),
    getData() {
      let id = this.$route.params.id;
      this.ARTICLE_CONTNET(id);
      this.GET_PRENEXT_LIST(id);
    }
  },
  watch:{
    '$route':'getData'
  },
	created(){
		this.getData();
  }
}
</script>