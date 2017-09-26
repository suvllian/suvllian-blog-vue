import api from './../../api';
import { formatTime } from './../../utils/format.js';
import { GET_ARTICLE_LIST, GET_ARTICLE_LIST_FAILURE, GET_ARTICLE_CLASS } from './../type';

export default {
	state: {
		articleList: [{}],
		classList: []
	},
	mutations: {
		[GET_ARTICLE_LIST](state, action) {
			state.articleList = action.articleList;
		},
		[GET_ARTICLE_LIST_FAILURE](state) {
			
		},
		[GET_ARTICLE_CLASS](state, action) {
      state.classList = action.classList;
		}
	},
	actions: {
		[GET_ARTICLE_LIST]({ commit }){
			api.getArticleListByTime().then(res => {
        let articleList = res.data.map(item =>{
	      	let formatDate = formatTime(item.aDate);
		      item.aImageHome = true;	

			    return {...item, ...formatDate} 
				});	

		    commit(GET_ARTICLE_LIST,{
          articleList
        });
			}).catch(err => {
				commit(GET_ARTICLE_LIST_FAILURE);
			});
		}, 
		[GET_ARTICLE_CLASS]({ commit }){
      api.getArticleClass().then(res => {
        commit(GET_ARTICLE_CLASS, {
          classList: res.data
        });
			}).catch(err => {
				console.log(err)
				commit(GET_ARTICLE_LIST_FAILURE);
			});
		}
	}
}