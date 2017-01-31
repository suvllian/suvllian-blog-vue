import {getResource,voteResource} from './resources';

export default{

	// 书籍
	getBookData:(page) => { return getResource.get({do:"book",concrete:"getBook",page:page}); },

	// 照片
	getImageData:(page) => { return getResource.get({do:"image",concrete:"getImage",page:page}); },

	voteImage:(id,way) => { return voteResource.save({do:"image",concrete:"voteImage",way:way,id:id}) },

	// 文章
	getArticleList:(id) => { return getResource.get({do:"article",concrete:"getList",id:id}) },

	getArticleContent:() => { return getResource.get({do:"article",concrete:"getContent"}) },

}