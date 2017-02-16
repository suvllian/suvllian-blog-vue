import Vue from 'vue'
import Vuex from 'vuex'

import articleList from './modules/article.list'
import articleContent from './modules/article.content'
import articlePreNext from './modules/article.prenext'
import aboutInfo from './modules/about.info'
import imageList from './modules/image.list'
import bookList from './modules/book.list'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		articleList,
		articleContent,
		imageList,
		bookList,
		articlePreNext,
		aboutInfo
	}
})