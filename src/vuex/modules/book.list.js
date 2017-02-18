import api from '../../api';
import filters from '../../utils/filters.js';
import { GET_BOOK_LIST, GET_BOOK_LIST_FAILURE, VOTE_BOOK, ADD_BOOK_LIST } from './../type';

export default {
	state: {
		page: 1,
		items: [],
		isMore:false
	},

	mutations: {
		[GET_BOOK_LIST](state, action) {
			state.isMore = action.isMore;
			state.page   = 1; 
			state.items  = action.bookList; 
		},
		[GET_BOOK_LIST_FAILURE](state){

		},
		[ADD_BOOK_LIST](state, action){
			state.isMore = action.isMore;
			state.page   = action.page; 
			state.items  = [...state.items, ...action.bookList]; 
		},
		[VOTE_BOOK](state){
			
		}
	},

	actions: {
		[GET_BOOK_LIST]({ commit }){
			api.getBookData(1).then(res => {
		        var response  = res.data;
		        var resLength = response.length;
	        	var isMore = true;
		        for(let i=0; i<resLength; i++){
	        		response[i].isActive = false;
	        		response[i].isVote   = false;
	        		response[i].time     = filters.bookTime(response[i].iDate);
	        	}	
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
			api.getBookData(page).then(res => {
		        var response  = res.data;
		        var resLength = response.length;
	        	var isMore = true;
		        for(let i=0; i<resLength; i++){
	        		response[i].isActive = false;
	        		response[i].isVote   = false;
	        		response[i].time     = filters.bookTime(response[i].iDate);
	        	}	
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