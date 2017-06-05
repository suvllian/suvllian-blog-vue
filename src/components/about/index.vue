<template>
	<div>
		<header></header>
		<div class="article-list">
			<article class="article">
				<Ahead :article-head="article"></Ahead>
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
import Ahead from './ahead.vue'	
import { mapActions, mapState} from 'vuex'
import { GET_ABOUT_INFO, GET_ABOUT_INFO_FAILURE } from './../../vuex/type.js'
export default{
	components: { Ahead },
	computed: mapState({ 
		article: store => store.aboutInfo.article,
	}),

	methods:{ ...mapActions([GET_ABOUT_INFO]) },
    created(){
		this.GET_ABOUT_INFO();
  }
}
</script>