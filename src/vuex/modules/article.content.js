import api from '../../api';
import filters from '../../utils/filters.js';
import { ARTICLE_CONTNET, GET_ARTICLE_CONTENT_FAILURE } from './../type';

export default {
	state: {
		id: 0,
		article: []
	},

	mutations: {
		[ARTICLE_CONTNET](state, action) {
			state.id = action.id;
			state.article  = action.article; 
		},
		[GET_ARTICLE_CONTENT_FAILURE](state){

		}
	},

	actions: {
		[ARTICLE_CONTNET]({ commit }, id){
			api.getArticleContent(id).then(res => {
		        var response = filters.formatTime(res.data[0]);
		        document.title = response.aTopic;
			    commit(ARTICLE_CONTNET,{
		            article: response,
		            id: (id - 1)
		        });
			}).catch(err => {
				commit(GET_ARTICLE_CONTENT_FAILURE);
			});
		}
	}
}