<template>
	<div class="article-list">
		<article class="article">
      <Head :article="article"></Head>
			<div class="article-content" v-html="article.aContent"></div>
      <Prenext :prev-article="prev" :next-article="next"></Prenext>
		</article>
	</div>
</template>

<script>
import Prenext from './prenext.vue'
import Head from './commonhead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET, GET_PRENEXT_LIST } from './../../vuex/type.js'
import effect from './../../utils/effect.js'

export default{
	components: { Prenext, Head},
	computed: mapState({ 
		article: store => store.articleContent.article,
		id: store => store.articleContent.id,
    prev: store => store.articlePreNext.prev,
    next: store => store.articlePreNext.next,
	}),

	methods:{ ...mapActions([ARTICLE_CONTNET, GET_PRENEXT_LIST]),
    getData(){
      let id = this.$route.query.id;
      this.ARTICLE_CONTNET(id);
      this.GET_PRENEXT_LIST(id);
      effect.toTop();
      document.title = this.article.aTpoic;
      this.$parent.$children[0].$refs.header.className = "navbar";
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

<style lang="scss">
  @import "./../../assets/style/_mixins.scss";
  @import "./../../assets/style/_common.scss";

  @import "./../../assets/style/respond.scss";
  @import "./../../assets/style/article.scss";
  @import "./../../assets/style/totop.scss";
  @import "./../../assets/style/slider.scss";
  @import "./../../assets/style/book.scss";
  @import "./../../assets/style/header.scss";
  @import "./../../assets/style/camera.scss";
  @import "./../../assets/style/prenext.scss";
</style>