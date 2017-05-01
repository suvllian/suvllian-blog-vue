import api from '../../api';
import { GET_IMAGE_LIST, GET_IMAGE_LIST_FAILURE, VOTE_IMAGE, 
		ADD_IMAGE_LIST, LOADING_IMAGE } from './../type';

export default {
	state: {
		page: 1,
		items: [],
		isMore: false,
		loading: false
	},

	mutations: {
		[GET_IMAGE_LIST](state, action) {
			state.isMore  = action.isMore;
			state.loading = false;
			state.page    = 1; 
			state.items   = action.imageList; 
		},
		[GET_IMAGE_LIST_FAILURE](state){

		},
		[ADD_IMAGE_LIST](state, action){
			state.isMore  = action.isMore;
			state.loading = false;
			state.page    = action.page; 
			state.items   = [...state.items, ...action.imageList]; 
		},
		[LOADING_IMAGE](state){
			state.loading = true;
		}
	},

	actions: {
		[GET_IMAGE_LIST]({ commit }){
			document.title = "图集";
			api.getImageData(1).then(res => {
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
		            isMore: isMore
		        });
			}).catch(err => {
				commit(GET_IMAGE_LIST_FAILURE);
			});
		},

		[ADD_IMAGE_LIST]({ commit }, page){
			commit(LOADING_IMAGE);
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
		        commit(ADD_IMAGE_LIST,{
		            imageList: response,
		            isMore: isMore,
		            page: page
		        });
			}).catch(err => {
				commit(GET_IMAGE_LIST_FAILURE);
			});
		},
		[VOTE_IMAGE]({ commit }, action){
			api.voteImage(action.id,action.way);
		}
	}
}