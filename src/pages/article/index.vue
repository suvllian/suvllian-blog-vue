<template>
  <div class="article-page">
  	<div class="article-list">
  		<article class="article">
        <ArticleHeader :article="article"></ArticleHeader>
  			<div class="article-content" v-html="article.aContent"></div>
        <PreNext :prev-article="prev" :next-article="next"></Prenext>
  		</article>
  	</div>
  </div>
</template>

<script>
import PreNext from './components/prenext.vue'
import ArticleHeader from './components/article-header.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET, GET_PRENEXT_LIST } from './../../vuex/type.js'
import effect from './../../utils/effect.js'

export default{
	components: { PreNext, ArticleHeader},
	computed: mapState({ 
		article: store => store.articleContent.article,
		id: store => store.articleContent.id,
    prev: store => store.articlePreNext.prev,
    next: store => store.articlePreNext.next,
	}),
	methods:{ 
    ...mapActions([ARTICLE_CONTNET, GET_PRENEXT_LIST]),
    getData() {
      let id = this.$route.query.id;
      this.ARTICLE_CONTNET(id);
      this.GET_PRENEXT_LIST(id);
      effect.toTop();
      this.$parent.$children[0].$refs.header.className = "nav-container";
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