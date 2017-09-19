import api from './../../api';
import { formatTime } from './../../utils/format.js';
import { GET_BOOK_LIST, GET_BOOK_LIST_FAILURE, VOTE_BOOK, LOADING_BOOK } from './../type';

export default {
	state: {
		page: 1,
		bookList: [],
		isMore: false,
		loading: false
	},

	mutations: {
		[GET_BOOK_LIST](state, action) {
			state.isMore = action.isMore;
			state.page = action.page; 
			state.loading = false;
			state.bookList = [...state.bookList, ...action.bookList]; 
		},
		[GET_BOOK_LIST_FAILURE](state){

		},
		[LOADING_BOOK](state){
			state.loading = true;
		}
	},
	actions: {
		[GET_BOOK_LIST]({ commit }, page){
			commit(LOADING_BOOK);
			api.getBookData(page).then(res => {
				let response  = res.data;
				let isMore = response.length < 10 ? false : true;

      	response.forEach((item, index) => {
      		item.isActive = false;
      		item.isVote = false;
      		item.time = formatTime(item.iDate).time;
      	});

        commit(GET_BOOK_LIST,{
					bookList: response,
					page,
          isMore
        });
			}).catch(err => {
				commit(GET_BOOK_LIST_FAILURE);
			});
		},
		[VOTE_BOOK]({ commit }, action){
			api.voteBook(action.id,action.way);
		}
	}
}