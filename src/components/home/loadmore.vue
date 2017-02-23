<template>
	<h3 class="text-center">
		<span class="pointer" @click="ADD_ARTICLE_LIST(++page)" v-if="isMore">查看更多</span>
		<span v-else>-- THE END --</span>
	</h3>
</template>

<script>
import { ADD_ARTICLE_LIST } from './../../vuex/type.js'
import { mapActions, mapState} from 'vuex'

export default {
	computed: mapState({ 
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore
	}),
	methods:{
		...mapActions([ADD_ARTICLE_LIST]),
	},
}
</script>