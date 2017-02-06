<template>
	<div class="article-list">
		<!-- <Music></Music> -->
		<article class="article" v-for="article in articleList">
			<Ahead :article-head="article"></Ahead>

			<div class="article-content">
				<div class="intro-img">
					<img :src="article.aImage" alt="">
				</div>
				<div class="intro-p" v-html="article.aIntro"></div>
			</div>

			<div class="article-content">
				<div class="more">
					<p>
						<router-link :to="{path:'article',query:{id:article.aId}}">阅读全文 >></router-link>
					</p>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
import Music from './music.vue'
import Ahead from './Ahead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST } from './../../vuex/type.js'


export default{
	components: { Music,Ahead },
	computed: mapState({ articleList: store => store.articleList.items }),
	methods:{
		...mapActions([ARTICLE_LIST]),
	},
	created(){
		this.ARTICLE_LIST();
    }
}
</script>
