import api from '../../api';
import filters from '../../utils/filters.js';
import {
	ARTICLE_LIST, ADD_ARTICLE_LIST, GET_ARTICLE_LIST_FAILURE
} from './../type';


export default {
	state: {
		isFetching: false,
		isMore: true,
		items: []
	},

	mutations: {
		[ARTICLE_LIST](state, action) {
			state.isMore = action.isMore;
			state.items  = action.articleList; 
		},
		[GET_ARTICLE_LIST_FAILURE](state){
			state.isFetching = false;
		},
		[ADD_ARTICLE_LIST](state, action) {
			state.isFetching = false;
			state.isMore     = action.isMore;
			state.items      = [...state.items, ...action.articleList];
		}
	},

	actions: {
		[ARTICLE_LIST]({ commit }){
			api.getArticleList().then(res => {
		        var response  = res.data;
			    for (let i=0; i<response.length; i++) {
				    var filterTime = filters.formatTime(response[i].aDate);
				    var monthInChinese = filterTime.monthInChinese;
				    var month = filterTime.month;
				    var day   = filterTime.day;
				    var year  = filterTime.year;				      

			    	response[i].time = year + " " + month + " " + day;
			    	response[i].month = monthInChinese;
			    	response[i].day = day;
			    }
			    commit(ARTICLE_LIST,{
		            articleList: response,
		            isMore:false
		        });
			},res => {
		        commit(GET_ARTICLE_LIST_FAILURE)
			})
		}
	}
}