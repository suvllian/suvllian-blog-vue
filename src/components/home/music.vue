<template>
	<section>
		<div class="container">
			<audio ref="audio" src="http://suvllian.com/static/music/1.mp3" loop="true"></audio>
			<div class="music-info">
				
			</div>
			<div class="music-img" @click="pause">
				<div class="img-block">
					<div class="stop-button">
						<i class="fa fa-play-circle fa-3x" v-if="!audioItem.isPlay"></i>
						<i class="fa fa-pause-circle fa-3x" v-if="audioItem.isPlay"></i>
					</div>
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
	.fa{
		color: #fff;
		border-radius:50%;
		border-box:content-box;
		background-color:#47a6e7;
		height: 42px;
		line-height: 42px;
		width: 42px;
		border:2px solid #aaa;
	}
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

    		.music-img{
    			width: 240px;
    			height: 240px;
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
	    				z-index: 2;
	    			}

	    			#image{
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