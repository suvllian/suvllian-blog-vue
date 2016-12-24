<template>
	<section>
		<div class="big">
			<ul>
				<li v-for="item in items">
					<img class="big-img" :class="{show:item.show}" :src="item.src">
					<!-- <div class="big-div">
						<p>{{item.title}}</p>
					</div> -->
				</li>
			</ul>
		</div>
		<div class="small">
			<ul>
				<li class="small-li" v-for="(item,index) in items">
					<img class="small-img" :class="{imgActive:item.show}" @mouseover="changeItem(index)" :src="item.src">
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
					src:"http://www.suvllian.com/V/images/books/bookBg/4.jpg",
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
			},4000);
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

<style lang="scss" scoped>
	// 响应式布局
	@mixin respond-to($breakpoint) {
	    @if $breakpoint == "small" {
	        @media (max-width: 568px) {
	            @content;
	        }
	    }
	    @else if $breakpoint == "medium" {
	        @media (max-width: 980px) {
	        	@content;
	    	}
	  	} 
	    @else if $breakpoint == "large" {
	    	@media (max-width: 1200px) {
	    		@content;
	    	}
	    }
	}

	$largeWidth:950px;

	section{
		width: $largeWidth;
		height: 290px;
		margin:0.1em auto;
		position:relative;
		overflow: hidden;

		.big{
			height: 232px;
			width:100%;
			position:relative;

			.big-img{
				position:absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				opacity: 0;
				transition: 1.6s all ease;
				cursor: pointer;
			}

			.big-div{
				position:absolute;
				background-color: #fff;
			}

			.show{
				opacity: 1;
			}
		}

		.small{
			height: 70px;
			width:$largeWidth;
			position:relative;

			.small-li{
				display: inline;

				.small-img{
					opacity: 1;
					height: 70px;
					width: 20%;
					transition: 0.2s all ease;
				}

				.imgActive{
					transform: translateY(-12px);
				}
			}
		}
	}

	@include respond-to(medium){
		$mediumWidth:475px;

		section{
			width: $mediumWidth;
			height: 268px;
			min-width: 332px;

			.small{
				width: $mediumWidth;

				.small-li{

					.small-img{
						height: 48px;
					}
				}
			}
		}
	}

	@include respond-to(small){
		$mediumWidth:100%;

		section{
			width: $mediumWidth;
			height: 228px;

			.big{
				height: 200px;
			}

			.small{
				width: $mediumWidth;

				.small-li{

					.small-img{
						height: 36px;
					}

					.imgActive{
						transform: translateY(-6px);
					}
				}
			}
		}
	}
</style>