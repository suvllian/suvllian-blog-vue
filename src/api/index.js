import {getResource,postResource} from './resources';

export default{

	// 书籍
	getBookData:(page) => { return getResource.get({do:"book",concrete:"getBook",page:page}); },

	voteBook:(id,way) => { return postResource.save({do:"book",concrete:"voteBook",way:way,id:id}) },

	/* 按时间顺序获取所有照片 */
	getImageListByTime: (page) => { return getResource.get({ do: "image", concrete: "getImageListByTime", page }) },

	/* 按城市分类的照片 */
	getImageListByCity: () => { return getResource.get({ do: "image", concrete: "getImageListByCity" }) },

  /* 获取某个城市的照片 */
	getCityImages: (cityId) => { return getResource.get({ do: "image", concrete: "getCityImages", cityId }) },

	voteImage:(id,way) => { return postResource.save({do:"image",concrete:"voteImage",way:way,id:id}) },

	// 文章
	getArticleList:(page) => { return getResource.get({do:"article",concrete:"getList", page:page}) },

	getArticleContent:(id) => { return getResource.get({do:"article",concrete:"getContent",id:id}) },

	getPreNext:(id) => { return getResource.get({do:"article", concrete:"getPreNext", id:id}) },

	// 关于
	getAbout:() => { return getResource.get({do:"article", concrete:"getAbout"}) },



}