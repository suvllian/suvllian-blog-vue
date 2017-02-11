import api from '../../api';
import { GET_PRENEXT_LIST } from './../type';

export default {
	state: {
		prev: [],
		next: []
	},

	mutations: {
		[GET_PRENEXT_LIST](state, action) {
			state.prev = action.prev[0] || {};
			state.next = action.next[0] || {}; 
		}
	},

	actions: {
		[GET_PRENEXT_LIST]({ commit }, id){
			api.getPreNext(id).then(res => {
		        var response  = res.data;
	        	commit(GET_PRENEXT_LIST, response);		    
			},res => {
		        
			});
		}
	}
}