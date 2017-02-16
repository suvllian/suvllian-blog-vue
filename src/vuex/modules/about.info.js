import api from '../../api';
import filters from '../../utils/filters.js';
import { GET_ABOUT_INFO, GET_ABOUT_INFO_FAILURE } from './../type';

export default {
	state: {
		article: []
	},

	mutations: {
		[GET_ABOUT_INFO](state, action) {
			state.article  = action.article; 
		},
		[GET_ABOUT_INFO_FAILURE](state){

		}
	},

	actions: {
		[GET_ABOUT_INFO]({ commit }, id){
			api.getAbout().then(res => {
		        var response  = res.data[0];
		        var data = filters.formatTime(response);

			    commit(GET_ABOUT_INFO,{
		            article: data
		        });
			},res => {
		       commit(GET_ABOUT_INFO_FAILURE);
			});
		}
	}
}