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
		        var response  = res.data[0];
		        var filterTime = filters.formatTime(response.aDate);
			    var monthInChinese = filterTime.monthInChinese;
			    var month = filterTime.month;
			    var day   = filterTime.day;
			    var year  = filterTime.year;				      

		    	response.time = year + " " + month + " " + day;
		    	response.month = monthInChinese;
		    	response.day = day;

			    commit(ARTICLE_CONTNET,{
		            article: response,
		            id: (id - 1)
		        });
			},res => {
		       commit(GET_ARTICLE_CONTENT_FAILURE);
			});
		}
	}
}