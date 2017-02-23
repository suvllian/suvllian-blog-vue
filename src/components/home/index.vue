<template>
	<div class="article-list">
		<!-- <Music></Music> -->
		<section class="article" v-for="article in articleList">
			<Head :article="article"></Head>
			<Link :article="article"></Link>
		</section>

		<Load></Load>
	</div>
</template>

<script>
import Music from './music.vue'
import Load from './loadmore.vue'
import Link from './tolink.vue'
import Head from './../article/commonhead.vue'
import { mapActions, mapState} from 'vuex'
import { ARTICLE_LIST } from './../../vuex/type.js'

export default{
	components: { Music, Head, Load, Link },
	computed: mapState({ 
		articleList: store => store.articleList.items
	}),
	methods:{
		...mapActions([ARTICLE_LIST]),
	},
	created(){
		this.ARTICLE_LIST();
    }
}
</script>