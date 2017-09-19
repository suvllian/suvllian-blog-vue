import api from '../../api';
import { GET_IMAGES_LIST_BY_CITY, GET_IMAGES_BY_CITYID, GET_IMAGE_LIST_BY_TIME, GET_IMAGE_LIST_FAILURE, VOTE_IMAGE, 
		ADD_IMAGE_LIST, LOADING_IMAGE } from './../type';

export default {
	state: {
		imagesListByCity: [],
		cityImageList: [],
		imageListByTime: [],
		page: 1,
		loading: false,
		isMore: true
	},

	mutations: {
		[GET_IMAGES_LIST_BY_CITY](state, action) {
			state.imagesListByCity   = action.imagesListByCity; 
		},
		[GET_IMAGES_BY_CITYID](state, action) {
			state.cityImageList   = action.cityImageList; 
		},
		[GET_IMAGE_LIST_BY_TIME](state, action){
			state.isMore = action.isMore;
			state.loading = false;
			state.page = action.page; 
			state.imageListByTime = action.page === 1 ? action.imageListByTime : 
			  [...state.imageListByTime, ...action.imageListByTime]; 
		},
		[GET_IMAGE_LIST_FAILURE](state){

		},
		[LOADING_IMAGE](state){
			state.loading = true;
		}
	},

	actions: {
		[GET_IMAGES_LIST_BY_CITY]({ commit }){
			document.title = "图集";
			api.getImageListByCity().then(res => {				
        commit(GET_IMAGES_LIST_BY_CITY, {
          imagesListByCity: res.data
        });
			}).catch(err => {
				commit(GET_IMAGE_LIST_FAILURE);
			});
		},
		[GET_IMAGES_BY_CITYID]({ commit }, cityId){
			api.getCityImages(cityId).then(res => {		
				let response  = res.data;
				response.forEach(item => {
					item.isActive = false;
					item.isVote = false;
				})

        commit(GET_IMAGES_BY_CITYID, {
          cityImageList: response
        });
			}).catch(err => {
				commit(GET_IMAGE_LIST_FAILURE);
			});
		},
		[GET_IMAGE_LIST_BY_TIME]({ commit }, page){
			commit(LOADING_IMAGE);
			api.getImageListByTime(page).then(res => {
        let response = res.data;
        let isMore = response.length < 10 ? false : true;

        response.forEach(item => {
        	item.isActive = false;
      		item.isVote = false;
        })

        commit(GET_IMAGE_LIST_BY_TIME,{
          imageListByTime: response,
          isMore,
          page
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