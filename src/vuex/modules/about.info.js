import api from '../../api';
import { formatTime } from './../../utils/format.js';
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
        let formatDate = formatTime(aboutInfo.aDate);
        aboutInfo.aClassName = "Wow";
        
		    commit(GET_ABOUT_INFO, {
          article: { ...aboutInfo, ...formatDate}
        });
			}).catch(err =>{
				commit(GET_ABOUT_INFO_FAILURE);
			});
		}
	}
}