<template>
	<section>
		<div class="container">
			<audio ref="audio" src="http://suvllian.com/static/music/1.mp3" loop="true"></audio>
			<div class="music-info">
				
			</div>
			<div class="music-img" @click="pause">
				<div class="img-block">
					<div class="stop-button" :class="{stop:audioItem.isPlay,play:!audioItem.isPlay}"></div>
					<img id="image" src="http://suvllian.com/static/music/1.jpg" alt="">
				</div>
				
			</div>
		</div>
	</section>
</template>


<script>
export default{
	data(){
		return{
			audioItem:{
				handle:null,
				audio:null,
				deg:0,
				isPlay:false,
			}		
		}
	},

	methods:{
		rotate:function(){
			var image = document.getElementById("image");
			var that = this;
			this.audioItem.handle = setInterval(function(){
				image.style.transform = "rotate(" + that.audioItem.deg + "deg)";
				that.audioItem.deg = that.audioItem.deg + 0.5;
				if (that.audioItem.deg>360) { that.audioItem.deg = 0;}
			},25);
		},

		pause:function(){	
			this.audioItem.isPlay = !this.audioItem.isPlay;
			if(!this.audioItem.isPlay){
				clearInterval(this.audioItem.handle);
				this.audioItem.audio.pause();
			}else{
				this.rotate();
				this.audioItem.audio.play();
			}
		}
	},

	mounted(){
		this.audioItem.audio = this.$refs.audio;
		// this.pause();
    }
}
</script>


<style lang="scss" scoped>
    section{
    	position:relative;
    	width: 100%;
    	background-color: rgba(250, 250, 250, 0.93); 
    	transition: 2s all ease;

    	$height:240px;
    	.container{
    		width: 100%;
    		height: $height;
    		margin: 0 auto;
    		transition: 2s all ease;

    		// .music-info{
    		// 	width: 650px;
    		// 	height: $height;
    		// 	float: left;
    		// 	background-color: #ddd;
    		// }

    		.music-img{
    			width: 240px;
    			height: 240px;
    			// float: left;
    			margin: 0 auto;
    			

    			.img-block{
    				width: 240px;
    				height: 240px;
    				position:relative;
    				

    				.stop-button{
    					cursor: pointer;
	    				width: 42px;
	    				height: 42px;
	    				position:absolute;
	    				left: 50%;
	    				top: 50%;
	    				margin-top: -21px;
	    				margin-left: -21px;
	    				z-index: 1000;
	    			}

	    			.stop{
	    				background-image:url(./../../assets/pause.png);
	    				border-radius:%50;
	    				background-size:100% 100%;
	    			}

	    			.play{
	    				background-image:url(./../../assets/play.png);
	    				border-radius:%50;
	    				background-size:100% 100%;
	    			}

	    			img{
	    				width: 240px;
	    				height: 240px;
	    				border-radius: 50%;
	    				display: block;
	    				margin: 30px auto;
    				}
    			}    			
    		}
    	}
    }
    
</style>