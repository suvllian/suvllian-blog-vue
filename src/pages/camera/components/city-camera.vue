<template>
	<div class="camera-category-list">
		<section class="camera" v-for="(single,key) in cityImageList">
			<div class="camera-content">
				<img :class="{imgClicked:single.isActive}" class="img-camera" :src="'http://suvllian.com/static/images/travel/' + single.iImage + '.jpg'" :alt="single.iTopic" @click="enlargeImage(single)">
				<div class="camera-introduction" :class="{introClicked: single.isActive}">
					<h4 class="text-underline">{{single.iTopic}}:</h4>
					<p class="p-img" :class="{borderClicked:single.isActive}">{{single.iContent}}</p>
				</div>
			</div>
			<div class="camera-bottom">
				<span class="span">热度({{single.iLike}})</span>
				<span class="span pointer" @click="dealVote(single)">
					<i v-if="single.isVote" class="fa fa-heart color-red"></i>
					<i v-else class="fa fa-heart-o"></i>
				</span>
			</div>
		</section>
	</div>
</template>

<script>
import { VOTE_IMAGE } from './../../../vuex/type.js'
import { mapActions} from 'vuex'

export default {
	props:["cityImageList"],
	methods:{
		...mapActions([VOTE_IMAGE]),
		enlargeImage: function(item) {
			item.isActive = !item.isActive;
		},
		dealVote: function(item) {
			item.isVote = !item.isVote;
			if(item.isVote){
				item.iLike++;
				this.VOTE_IMAGE({id:item.iId,way:"add"});
			}else{
				item.iLike--;
				this.VOTE_IMAGE({id:item.iId,way:"sub"});
			}
		}
	}
}
</script>
