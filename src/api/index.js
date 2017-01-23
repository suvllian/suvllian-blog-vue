import {getResource,PostResource} from './resources';

export default{
	getBookData:() => { return getResource.get({do:"book",concrete:"getBook"}); },

	getImageData:(page) => { return getResource.get({do:"image",concrete:"getImage",page:page}); },

	getArticleList:() => { return getResource.get({do:"article",concrete:"getList"}) },

	getArticleContent:() => { return getResource.get({do:"article",concrete:"getContent"}) },
}