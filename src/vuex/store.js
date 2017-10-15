import Vue from 'vue'
import Vuex from 'vuex'
import articleList from './modules/article.list'
import articleContent from './modules/article.content'
import articlePreNext from './modules/article.prenext'
import camera from './modules/image.list'
import books from './modules/book.list'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		articleList,
		articleContent,
		camera,
		books,
		articlePreNext
	}
})