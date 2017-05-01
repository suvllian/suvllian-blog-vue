import api from '../../api';
import filters from '../../utils/filters.js';
import { ARTICLE_LIST, ADD_ARTICLE_LIST, GET_ARTICLE_LIST_FAILURE, LOADING_ARTICLE } from './../type';


export default {
	state: {
		isMore: false,
		loading: false,
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
		[LOADING_ARTICLE](state){
			state.loading = true;
		},
		[ADD_ARTICLE_LIST](state, action) {
			state.page   = action.page;
			state.isMore = action.isMore;
			state.loading = false;
			state.items  = [...state.items, ...action.articleList];
		}
	},

	actions: {
		[ARTICLE_LIST]({ commit }){
			document.title = "瓦尔登湖畔一棵松";
			api.getArticleList(1).then(res => {
		        var response  = res.data,
		            resLength = response.length,
		            isMore = true;

		        response.forEach((item, index) =>{
		        	item = filters.formatTime(item);
				    item.aImageHome = true;	
		        });	

			    if(resLength < 5){
		        	isMore = false;
		        }
			    commit(ARTICLE_LIST,{
		            articleList: response,
		            isMore: isMore
		        });
			}).catch(err => {
				commit(GET_ARTICLE_LIST_FAILURE);
			});
		},
		[ADD_ARTICLE_LIST]({ commit }, page){
			commit(LOADING_ARTICLE);

			api.getArticleList(page).then(res => {
		        var response  = res.data,
		            resLength = response.length,
		            isMore = true;
		            
			    response.forEach((item, index) =>{
		        	item = filters.formatTime(item);
				    item.aImageHome = true;	
		        });	

			    if(resLength < 5){
		        	isMore = false;
		        }
			    commit(ADD_ARTICLE_LIST,{
		            articleList: response,
		            isMore: isMore,
		            page:page
		        });
			}).catch(err => {
				commit(GET_ARTICLE_LIST_FAILURE);
			});
		}
	}
}