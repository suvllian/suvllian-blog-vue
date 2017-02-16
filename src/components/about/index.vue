<template>
	<div class="article-list">
		<article class="article">
			<Ahead :article-head="article"></Ahead>
			<div class="article-content about" v-html="article.aContent"></div>
		</article>
	</div>
</template>

<script>
import Ahead from './Ahead.vue'	
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

<style lang="scss">
	.about a {
	    border-bottom: 0px solid #ccc;
	    text-align: center;
	    display: inline-block;
		margin:0 0.2em;
		text-decoration: none;
	}

	.site{
		text-align: center;

		.fa{
			background-color: rgba(0, 0, 0, 0.1);
		    border-radius: 42px;
		    color: rgba(0, 0, 0, 0.5);
		    display: inline-block;
		    font-size: 16px;
		    font-style: normal;
		    height: 42px;
		    line-height: 42px;
		    transition: all 0.2s ease-in-out 0s;
		    width: 42px;

		    &:hover{
				background-color:#b3d9d9;
				color: #fff;
			}
		}
	}
</style>