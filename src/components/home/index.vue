<template>
	<div class="article-list">
		<!-- <Music></Music> -->
		<article class="article" v-for="article in articleList">
			<Ahead :article-head="article"></Ahead>

			<div class="article-content">
				<div class="intro-img">
					<img class="small-img" :src="article.aImage">
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
		<h1 @click="ADD_ARTICLE_LIST(++page)" v-if="isMore"><span>查看更多</span></h1>
		<h2 v-else>-- THE END --</h2>
	</div>
</template>

<script>
import Music from './music.vue'
import Ahead from './Ahead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST, ADD_ARTICLE_LIST } from './../../vuex/type.js'


export default{
	components: { Music, Ahead },
	computed: mapState({ 
		articleList: store => store.articleList.items,
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore
	}),
	methods:{
		...mapActions([ARTICLE_LIST, ADD_ARTICLE_LIST]),
	},
	created(){
		this.ARTICLE_LIST();
    }
}
</script>

<style lang="scss">
	%h{
		font-weight: 400;
		text-align: center;
		margin: 0.8em 0;
		outline: none;
	}	

	h1{		
		@extend %h; 
		cursor: pointer;
		transition: 1s all ease;
		font-size: 22px;

		span{
			color: #a4a4a4;
				&:hover{
				color: #444;
			}
		}
	}

	h2{
		@extend %h; 
		font-weight: 300;
		font-size: 16px;
	}
</style>
