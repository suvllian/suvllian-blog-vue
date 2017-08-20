<template>
	<div>
		<header></header>
		<div class="article-list">
			<article class="article">
				<Header :article-head="article" />
				<div class="article-content">
					<div class="img-center">
						<img class="img-big" :src="article.aImage">
					</div>
				</div>
				<div class="article-content about" v-html="article.aContent"></div>
			</article>
		</div>
	</div>
</template>

<script>
import Header from './header.vue'	
import { mapActions, mapState} from 'vuex'
import { GET_ABOUT_INFO, GET_ABOUT_INFO_FAILURE } from './../../vuex/type.js'
export default{
	components: { Header },
	computed: mapState({ 
		article: store => store.aboutInfo.article,
	}),
	methods: { 
		...mapActions([GET_ABOUT_INFO]) 
	},
  created(){
		this.GET_ABOUT_INFO();
  }
}
</script>