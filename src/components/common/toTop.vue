<template>
	<div class="backToTop">
		<a href="#" @click.prevent="backToTop">
			<div class="arrow"></div>
			<div class="stick"></div>
		</a>
	</div>
</template>

<script>
import effect from './../../utils/effect.js'
export default {
	methods:{
		backToTop(){
			effect.toTop();
		}
	}
}
</script>

<style lang="scss" scoped>
    // 响应式布局
    @mixin respond-to($breakpoint) {
        @if $breakpoint == "small" {
            @media (max-width: 510px) {
                @content;
            }
        }
        @else if $breakpoint == "medium" {
            @media (max-width: 800px) {
                @content;
            }
        } 
        @else if $breakpoint == "large" {
            @media (max-width: 1200px) {
                @content;
            }
        }
    }
	.backToTop{
		$width: 16px;
		$beforeColor:#aaa;

		height: 2.75 * $width;
		width: 2.5 * $width;
		padding: 6px 3px;
		border-radius:3px;
		position: fixed;
		bottom:50px;
		right:50px;
		background-color:#ddd;
		
		.arrow{
			width:0; 
		    height:0; 
		    border-left:$width solid transparent;
		    border-right:$width solid transparent;
		    border-bottom:$width solid $beforeColor;
		    position:relative;
			margin: 0 auto;
		}
		.stick{
			height: $width;
			background-color: $beforeColor;
			width: $width - 4px;
			position:relative;
			margin: 0 auto;
		}

		&:hover{
			background-color: #e2e2e2;
		}
	}

	@include respond-to(medium){
		.backToTop{
			$width: 10px;

			height: 3 * $width;
			width: 2.5 * $width;
			bottom:8px;
			right:8px;
	
			.arrow{
			    border-left:$width solid transparent;
			    border-right:$width solid transparent;
			    border-bottom-width:$width;
			}
			.stick{
				height: $width;
				width: $width - 4px;
			}
		}
	}
</style>