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
			document.title = "关于";
			api.getAbout().then(res => {
				let aboutInfo = res.data[0]
        let formatTime = filters.formatTime(aboutInfo.aDate);
        aboutInfo.aClassName = "Wow";
		    commit(GET_ABOUT_INFO, {
          article: { ...aboutInfo, ...formatTime}
        });
			}).catch(err =>{
				commit(GET_ABOUT_INFO_FAILURE);
			});
		}
	}
}