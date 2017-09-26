import {getResource,postResource} from './resources';

export default{

	// 书籍
	getBookData:(page) => { return getResource.get({do:"book",concrete:"getBook",page:page}); },

	voteBook:(id, way) => { return postResource.save({do:"book",concrete:"voteBook",way:way,id:id}) },

	/* 时间排序照片列表 */
	getImageListByTime: (page) => { return getResource.get({ do: "image", concrete: "getImageListByTime", page }) },

	/* 按城市分类的照片 */
	getImageListByCity: () => { return getResource.get({ do: "image", concrete: "getImageListByCity" }) },

  /* 获取某个城市的照片 */
	getCityImages: (cityId) => { return getResource.get({ do: "image", concrete: "getCityImages", cityId }) },

	voteImage:(id,way) => { return postResource.save({do:"image",concrete:"voteImage",way:way,id:id}) },

	/* 时间排序文章列表 */
	getArticleListByTime: () => { return getResource.get({do:"article", concrete:"getArticleListByTime"}) },

	/* 文章分类 */
	getArticleClass: () => { return getResource.get({do: "article", concrete: "getArticleClasses"}) },

	getArticleContent:(id) => { return getResource.get({do:"article",concrete:"getContent",id:id}) },

	getPreNext:(id) => { return getResource.get({do:"article", concrete:"getPreNext", id:id}) },

	// 关于
	getAbout:() => { return getResource.get({do:"article", concrete:"getAbout"}) },



}