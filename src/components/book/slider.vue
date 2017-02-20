<template>
	<section class="book-banner">
		<div class="img-bg-block">
			<ul>
				<li v-for="item in items">
					<img class="img-bg" :class="{show:item.show}" :src="item.src">
				</li>
			</ul>
		</div>
		<div class="img-slide-block">
			<ul>
				<li class="inline" v-for="(item,index) in items">
					<img class="img-slide" :class="{imgActive:item.show}" @mouseover="changeItem(index)" :src="item.src">
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return{
			items:[
				{
					src:"https://gw.alicdn.com/tps/TB1pOFzOVXXXXbhaXXXXXXXXXXX-900-500.jpg",
					title:"Hello",
					show:true
				},
				{
					src:"http://img.alicdn.com/tfs/TB1cVgDNpXXXXb2XFXXXXXXXXXX-900-500.jpg",
					title:"Hello",
					show:false
				},
				{
					src:"http://img.alicdn.com/tfs/TB1KBJsOpXXXXaeXFXXXXXXXXXX-900-500.jpg",
					title:"Hello",
					show:false
				},
				{
					src:"https://img.alicdn.com/tfs/TB15ZeJOFXXXXcYXVXXXXXXXXXX-900-500.jpg",
					title:"Hello",
					show:false
				},
				{
					src:"http://www.suvllian.com/static/images/books/bookBg/4.jpg",
					title:"Hello",
					show:false
				}
			],
			number:0
		}
	},
	methods:{
		clearAll:function(){
			for(let i = 0;i < this.items.length;i++){
				this.items[i].show = false;
			}
		},

		slideImg:function(){
			var that = this;
			var handle = setInterval(function(){
				that.clearAll();
				that.items[that.number].show = true;
				if(that.number < (that.items.length - 1)){
					that.number++;
				}else{
					that.number = 0;
				}
			},3000);
		},

		changeItem:function(index){
			this.clearAll();
			this.number = index;
			this.items[this.number].show = true;
		}
	},
	created(){
		this.slideImg();
	}
}
</script>