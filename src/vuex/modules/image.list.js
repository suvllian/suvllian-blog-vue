import api from '../../api';
import { GET_IMAGES_LIST_BY_CITY, GET_IMAGE_LIST, GET_IMAGE_LIST_FAILURE, VOTE_IMAGE, 
		ADD_IMAGE_LIST, LOADING_IMAGE } from './../type';

export default {
	state: {
		imagesListByCity: [],
		page: 1,
		isMore: false,
		loading: false
	},

	mutations: {
		[GET_IMAGES_LIST_BY_CITY](state, action) {
			state.imagesListByCity   = action.imagesListByCity; 
		},
		[GET_IMAGE_LIST](state, action) {
			state.isMore  = action.isMore;
			state.loading = false;
			state.page    = 1; 
			state.imageList   = action.imageList; 
		},
		[GET_IMAGE_LIST_FAILURE](state){

		},
		[ADD_IMAGE_LIST](state, action){
			state.isMore  = action.isMore;
			state.loading = false;
			state.page = action.page; 
			state.imageList = [...state.imageList, ...action.imageList]; 
		},
		[LOADING_IMAGE](state){
			state.loading = true;
		}
	},

	actions: {
		[GET_IMAGES_LIST_BY_CITY]({ commit }){
			document.title = "图集";
			api.getImageListByCity().then(res => {
        let response  = res.data;
				
        commit(GET_IMAGES_LIST_BY_CITY, {
          imagesListByCity: response
        });
			}).catch(err => {
				commit(GET_IMAGE_LIST_FAILURE);
			});
		},

		[ADD_IMAGE_LIST]({ commit }, page){
			commit(LOADING_IMAGE);
			api.getImageData(page).then(res => {
        let response  = res.data;
        let isMore = response.length < 15 ? false : true;

        response.forEach(item => {
        	item.isActive = false;
      		item.isVote = false;
        })

        commit(ADD_IMAGE_LIST,{
          imageList: response,
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