<template>
	<div class="article-list">
		<article class="article">
			<Ahead :article-head="article"></Ahead>
			<div class="article-content" v-html="article.aContent"></div>
      <Prenext :prev-article="prev" :next-article="next"></Prenext>
		</article>
	</div>
</template>

<script>
import Ahead from './../home/Ahead.vue'
import Prenext from './prenext.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_CONTNET, GET_PRENEXT_LIST } from './../../vuex/type.js'
import effect from './../../utils/effect.js'

export default{
	components: { Ahead, Prenext },
	computed: mapState({ 
		article: store => store.articleContent.article,
		id: store => store.articleContent.id,
    prev: store => store.articlePreNext.prev,
    next: store => store.articlePreNext.next,
	}),

	methods:{ ...mapActions([ARTICLE_CONTNET, GET_PRENEXT_LIST]),
    getData(){
      var id = this.$route.query.id;
      this.ARTICLE_CONTNET(id);
      this.GET_PRENEXT_LIST(id);
      effect.toTop();
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
  @import "./../../assets/style/article.scss";
  @import "./../../assets/style/totop.scss";
  @import "./../../assets/style/foot.scss";
  @import "./../../assets/style/nav.scss";

  .article-list{
    width: 70%;
    margin: 0 auto;
    font-family: PingFang TC,Avenir Next,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    clear: both;
    transition: 1s all ease;
  }


  @include respond-to(medium){
    .article-list{
      width: 100%;

      .roate-date{
        display: none;
      }

      .article{
        .article-content{
          pre{
            width: 100%;
            left: 0;
          }

          $leftIndent:30px;
          // 无序列表
          ol,ul{
            padding:6px 0px 6px $leftIndent;
          }

          // 左边框块
          .border-left{
            p{
              padding-left:$leftIndent;
            }
          }

        }
      } 
    }
  }

</style>