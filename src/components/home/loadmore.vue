<template>
	<h3 class="text-center">
		<span class="pointer" @click="ADD_ARTICLE_LIST(++page)" v-if="isMore && !loading">查看更多</span>
		<span v-if="!isMore">-- THE END --</span>
		<span v-if="isMore && loading">大力加载中...</span>
	</h3>
</template>

<script>
import { ADD_ARTICLE_LIST } from './../../vuex/type.js'
import { mapActions, mapState} from 'vuex'

export default {
	computed: mapState({ 
		page: store => store.articleList.page,
		isMore: store => store.articleList.isMore,
		loading: store => store.articleList.loading,
	}),
	methods:{
		...mapActions([ADD_ARTICLE_LIST]),
	},
}
</script>