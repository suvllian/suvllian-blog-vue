import {getResource,postResource} from './resources';

export default{

	// 书籍
	getBookData:(page) => { return getResource.get({do:"book",concrete:"getBook",page:page}); },

	voteBook:(id,way) => { return postResource.save({do:"book",concrete:"voteBook",way:way,id:id}) },

	// 照片
	getImageData:(page) => { return getResource.get({do:"image",concrete:"getImage",page:page}); },

	voteImage:(id,way) => { return postResource.save({do:"image",concrete:"voteImage",way:way,id:id}) },

	// 文章
	getArticleList:(page) => { return getResource.get({do:"article",concrete:"getList", page:page}) },

	getArticleContent:(id) => { return getResource.get({do:"article",concrete:"getContent",id:id}) },

	getPreNext:(id) => { return getResource.get({do:"article", concrete:"getPreNext", id:id}) },

	// 关于
	getAbout:() => { return getResource.get({do:"article", concrete:"getAbout"}) },



}