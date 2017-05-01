import api from '../../api';
import filters from '../../utils/filters.js';
import { GET_BOOK_LIST, GET_BOOK_LIST_FAILURE, VOTE_BOOK, 
			ADD_BOOK_LIST, LOADING_BOOK } from './../type';

export default {
	state: {
		page: 1,
		items: [],
		isMore:false,
		loading: false
	},

	mutations: {
		[GET_BOOK_LIST](state, action) {
			state.isMore  = action.isMore;
			state.page    = 1; 
			state.loading = false;
			state.items   = action.bookList; 
		},
		[GET_BOOK_LIST_FAILURE](state){

		},
		[ADD_BOOK_LIST](state, action){
			state.isMore  = action.isMore;
			state.page    = action.page; 
			state.loading = false;
			state.items   = [...state.items, ...action.bookList]; 
		},
		[LOADING_BOOK](state){
			state.loading = true;
		}
	},

	actions: {
		[GET_BOOK_LIST]({ commit }){
			document.title = "读书";
			api.getBookData(1).then(res => {
		        var response  = res.data,
		            resLength = response.length,
	        	    isMore = true;

	        	response.forEach((item, index) => {
	        		item.isActive = false;
	        		item.isVote   = false;
	        		item.time     = filters.bookTime(item.iDate);
	        	});
	
			    if(resLength < 10){
		        	isMore = false;
		        }
		        commit(GET_BOOK_LIST,{
		            bookList: response,
		            isMore: isMore
		        });
			}).catch(err => {
				commit(GET_BOOK_LIST_FAILURE);
			});
		},

		[ADD_BOOK_LIST]({ commit }, page){
			commit(LOADING_BOOK);
			api.getBookData(page).then(res => {
		        var response  = res.data, 
		            resLength = response.length,
	        	    isMore = true;

		        response.forEach((item, index) => {
	        		item.isActive = false;
	        		item.isVote   = false;
	        		item.time     = filters.bookTime(item.iDate);
	        	});

			    if(resLength < 10){
		        	isMore = false;
		        }
		        commit(ADD_BOOK_LIST,{
		            bookList: response,
		            isMore: isMore,
		            page: page
		        });
			}).catch(err => {
				commit(GET_BOOK_LIST_FAILURE);
			});;
		},
		
		[VOTE_BOOK]({ commit }, action){
			api.voteBook(action.id,action.way);
		}
	}
}