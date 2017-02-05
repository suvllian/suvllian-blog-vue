import api from '../api'
import filters from '../utils/filters.js'
import * as types from './type.js'

export const getArticleList = ({ dispatch }) => {
	api.getArticleList().then(res => {
        var response  = res.data;
	    for (let i=0; i<response.length; i++) {
		    var filterTime = filters.formatTime(response[i].aDate);
		    var monthInChinese = filterTime.monthInChinese;
		    var month = filterTime.month;
		    var day   = filterTime.day;
		    var year  = filterTime.year;				      

	    	response[i].time = year + " " + month + " " + day;
	    	response[i].month = monthInChinese;
	    	response[i].day = day;
	    }

	    dispatch(types.ARTICLE_LIST,{
            articleList: response,
            isMore:false
        });
	},res => {
        dispatch(types.GET_ARTICLE_LIST_FAILURE)
	})
}