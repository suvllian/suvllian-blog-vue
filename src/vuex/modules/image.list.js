import api from '../../api';
import { GET_IMAGE_LIST, GET_IMAGE_LIST_FAILURE, VOTE_IMAGE } from './../type';

export default {
	state: {
		page: 1,
		items: [],
		isMore:true
	},

	mutations: {
		[GET_IMAGE_LIST](state, action) {
			state.isMore = action.isMore;
			state.page  = action.page; 
			state.items  = [...state.items, ...action.imageList]; 
		},
		[GET_IMAGE_LIST_FAILURE](state){

		},
		[VOTE_IMAGE](state){

		}
	},

	actions: {
		[GET_IMAGE_LIST]({ commit }, page){
			api.getImageData(page).then(res => {
		        var response  = res.data;
		        var resLength = response.length;
		        var isMore = true;

		        for(let i=0; i < resLength; i++){
	        		response[i].isActive = false;
	        		response[i].isVote = false;
	        	}	
			    if(resLength < 15){
		        	isMore = false;
		        }
		        commit(GET_IMAGE_LIST,{
		            imageList: response,
		            isMore: isMore,
		            page: page
		        });
			},res => {
		       commit(GET_IMAGE_LIST_FAILURE);
			});
		},
		[VOTE_IMAGE]({ commit }, action){
			api.voteImage(action.id,action.way);
		}
	}
}