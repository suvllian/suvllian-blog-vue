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
		        var data = filters.formatTime(res.data[0]);

			    commit(GET_ABOUT_INFO,{
		            article: data
		        });
			}).catch(err =>{
				commit(GET_ABOUT_INFO_FAILURE);
			});
		}
	}
}