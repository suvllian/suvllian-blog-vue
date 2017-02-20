<template>
	<div class="camrea-container">
		<section class="box" v-for="(single,key) in imageList">
			<div class="box-content">
				<img :class="{imgClicked:single.isActive}" class="content-img" v-bind:src="'http://suvllian.com/static/images/travel/'+single.iImage+'.jpg'" :alt="single.iTopic" @click="enlargeImage(single)">
				<div class="introduction" :class="{introClicked:single.isActive}">
					<h4 class="text-underline">{{single.iTopic}}:</h4>
					<p class="intro-p" :class="{borderClicked:single.isActive}">{{single.iContent}}</p>
				</div>
			</div>
			<div class="box-common">
				<span class="common-span">热度({{single.iLike}})</span>
				<span class="common-span pointer" @click="dealVote(single)">
					<i v-if="single.isVote" class="fa fa-heart color-red"></i>
					<i v-else class="fa fa-heart-o"></i>
				</span>
			</div>
		</section>

		<h3 class="text-center">
			<span class="pointer" @click="ADD_IMAGE_LIST(++page)" v-if="isMore">查看更多</span>
			<span v-else>-- THE END --</span>
		</h3>

	</section>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_IMAGE_LIST, VOTE_IMAGE, ADD_IMAGE_LIST } from './../../vuex/type.js'

export default{
	computed: mapState({ 
		imageList: store => store.imageList.items,
		page: store => store.imageList.page,
		isMore: store => store.imageList.isMore
	}),
	methods:{
		...mapActions([GET_IMAGE_LIST, VOTE_IMAGE, ADD_IMAGE_LIST]),
		enlargeImage:function(item){
			item.isActive = !item.isActive;
		},

		dealVote:function(item){
			item.isVote = !item.isVote;
			if(item.isVote){
				item.iLike++;
				this.VOTE_IMAGE({id:item.iId,way:"add"});
			}else{
				item.iLike--;
				this.VOTE_IMAGE({id:item.iId,way:"sub"});
			}
		}
	},
	created(){
		this.GET_IMAGE_LIST();
    }
}
</script>