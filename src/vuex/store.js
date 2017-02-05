import Vue from 'vue'
import Vuex from 'vuex'

import articleList from './modules/article.list'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		articleList
	}
})