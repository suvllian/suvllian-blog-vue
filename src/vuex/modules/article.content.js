import api from '../../api';
import { formatTime } from '../../utils/format.js';
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
				let articleInfo = res.data[0]
        let formatDate = formatTime(articleInfo.aDate);
        document.title = articleInfo.aTopic;
        
		    commit(ARTICLE_CONTNET,{
          article: { ...articleInfo, ...formatDate},
          id: (id - 1)
        });
			}).catch(err => {
				commit(GET_ARTICLE_CONTENT_FAILURE);
			});
		}
	}
}