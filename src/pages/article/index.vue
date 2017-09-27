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
    <PreNext :prev-article="prev" :next-article="next"></Prenext>
  </article>
</template>

<script>
import PreNext from './components/prenext.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET, GET_PRENEXT_LIST } from './../../vuex/type.js'
import effect from './../../utils/effect.js'

export default{
	components: { PreNext},
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