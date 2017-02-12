import api from '../../api';
import filters from '../../utils/filters.js';
import { ARTICLE_LIST, ADD_ARTICLE_LIST, GET_ARTICLE_LIST_FAILURE } from './../type';


export default {
	state: {
		isMore: false,
		items: [],
		page: 1
	},

	mutations: {
		[ARTICLE_LIST](state, action) {
			state.isMore = action.isMore;
			state.items  = action.articleList;
			state.page   = 1;
		},
		[GET_ARTICLE_LIST_FAILURE](state){
			
		},
		[ADD_ARTICLE_LIST](state, action) {
			state.page   = action.page;
			state.isMore = action.isMore;
			state.items  = [...state.items, ...action.articleList];
		}
	},

	actions: {
		[ARTICLE_LIST]({ commit }){
			api.getArticleList(1).then(res => {
		        var response  = res.data;
		        var resLength = response.length;
		        var isMore = true;
			    for (let i=0; i<resLength; i++) {
				    var filterTime = filters.formatTime(response[i].aDate);
				    var monthInChinese = filterTime.monthInChinese;
				    var month = filterTime.month;
				    var day   = filterTime.day;
				    var year  = filterTime.year;				      

			    	response[i].time = year + " " + month + " " + day;
			    	response[i].month = monthInChinese;
			    	response[i].day = day;
			    }
			    if(resLength < 5){
		        	isMore = false;
		        }
			    commit(ARTICLE_LIST,{
		            articleList: response,
		            isMore: isMore
		        });
			},res => {
		        commit(GET_ARTICLE_LIST_FAILURE)
			})
		},
		[ADD_ARTICLE_LIST]({ commit }, page){
			api.getArticleList(page).then(res => {
		        var response  = res.data;
		        var resLength = response.length;
		        var isMore = true;
			    for (let i=0; i<resLength; i++) {
				    var filterTime = filters.formatTime(response[i].aDate);
				    var monthInChinese = filterTime.monthInChinese;
				    var month = filterTime.month;
				    var day   = filterTime.day;
				    var year  = filterTime.year;				      

			    	response[i].time = year + " " + month + " " + day;
			    	response[i].month = monthInChinese;
			    	response[i].day = day;
			    }
			    if(resLength < 5){
		        	isMore = false;
		        }
			    commit(ADD_ARTICLE_LIST,{
		            articleList: response,
		            isMore: isMore,
		            page:page
		        });
			},res => {
		        commit(GET_ARTICLE_LIST_FAILURE)
			})
		}
	}
}