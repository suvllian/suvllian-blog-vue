import api from './../../api';
import { formatTime } from './../../utils/format.js';
import { GET_ARTICLE_LIST, GET_ARTICLE_LIST_SUCCESS, GET_ARTICLE_LIST_FAILURE, 
	GET_ARTICLE_CLASS, GET_ARTICLE_CLASS_SUCCESS, GET_ARTICLE_CLASS_FAILURE,
	GET_ALL_ARTICLE_LIST, GET_ALL_ARTICLE_LIST_SUCCESS, GET_ALL_ARTICLE_LIST_FAILURE } from './../type';

export default {
	state: {
		articleList: [{}],
		isFetchingArticleList: false,
		allArticleList: [{}],
		isFetchingAllArticleList: false,
		classList: [],
		isFetchingClassList: false
	},
	mutations: {
		[GET_ARTICLE_LIST](state) {
			state.isFetchingArticleList = true
		},
		[GET_ARTICLE_LIST_SUCCESS](state, action) {
			state.articleList = action.articleList;
			state.isFetchingArticleList = false
		},
		[GET_ARTICLE_LIST_FAILURE](state) {
			
		},
		[GET_ALL_ARTICLE_LIST](state) {
			state.isFetchingAllArticleList = true
		},
		[GET_ALL_ARTICLE_LIST_SUCCESS](state, action) {
			state.allArticleList = action.allArticleList;
			state.isFetchingAllArticleList = false
		},
		[GET_ALL_ARTICLE_LIST_FAILURE](state) {
			
		},
		[GET_ARTICLE_CLASS](state, action) {
      state.isFetchingClassList = true;
		},
		[GET_ARTICLE_CLASS_SUCCESS](state, action) {
			state.classList = action.classList;
			state.isFetchingClassList = false;
		},
		[GET_ARTICLE_CLASS_FAILURE](state, action) {
      
		}
	},
	actions: {
		[GET_ARTICLE_LIST]({ commit }) {
			commit(GET_ARTICLE_LIST);

			api.getArticleListByTime(12).then(res => {
        let articleList = res.data.map(item =>{
	      	let formatDate = formatTime(item.aDate);

			    return {...item, ...formatDate} 
				});	

		    commit(GET_ARTICLE_LIST_SUCCESS,{
          articleList
        });
			}).catch(err => {
				commit(GET_ARTICLE_LIST_FAILURE);
			});
		}, 
		[GET_ALL_ARTICLE_LIST]({ commit }) {
			commit(GET_ALL_ARTICLE_LIST);

			api.getArticleListByTime(0).then(res => {
        let allArticleList = res.data.map(item =>{
	      	let formatDate = formatTime(item.aDate);

			    return {...item, ...formatDate} 
				});	

		    commit(GET_ALL_ARTICLE_LIST_SUCCESS,{
          allArticleList
        });
			}).catch(err => {
				commit(GET_ALL_ARTICLE_LIST_FAILURE);
			});
		}, 
		[GET_ARTICLE_CLASS]({ commit }){
			commit(GET_ARTICLE_CLASS);

      api.getArticleClass().then(res => {
        commit(GET_ARTICLE_CLASS_SUCCESS, {
          classList: res.data
        });
			}).catch(err => {
				commit(GET_ARTICLE_CLASS_FAILURE);
			});
		}
	}
}