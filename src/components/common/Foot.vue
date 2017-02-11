<template>
	<footer>
		<div>
			<!-- <p class="count" v-cloak>已有 {{vistorNumber}} 人次访问</p> -->
			<p><small>© 2016 - 2017 瓦尔登湖畔一棵松. All Rights Reserved</small></p>
			<p><small>备案号：陕IPC备16014072-1号</a></small></p>
		</div>
	</footer>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	methods:{
		
	},
	created(){
		
	}
}
</script>

<style lang="scss" scoped>
	$fontsize:1rem;

	footer{
		border-top: 1px solid #f0f2f3;
    	padding: 1rem 0;
    	background-color: rgba(21, 31, 44, 0.1);
    	height: auto;
	}

	div{
		width: 1170px;
		height: auto;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	p{
		color: #818892;
		font-size: $fontsize;
		padding:0.25rem 0;

		a{
			color: #69606b;
			transition: color 1s ease;

			&:hover{
				color: #333;
			}
		}
	}

	img{
		width: 10rem;
		height: 10rem;
	}

	small{
		font-size: $fontsize;
	}

	.count{
		color: #69606b;
		font-family: "Source Sans Light",sans-serif;
    	font-size: $fontsize;
    	font-weight: 300;
	}

	[v-cloak]{
		display:none;
	}

	// 响应式布局
	@media screen and (max-width:1170px){
		div{
			width: 100%;
		}
	}

	$fontsize600:0.8em;
	@media screen and (max-width:600px){
		footer{
			padding:$fontsize600 0;
		}

		p{
			font-size: $fontsize600;
		}

		small{
			font-size: $fontsize600;
		}

		.count{
	    	font-size: $fontsize600;
		}
	}
</style>