<template>
	<header>
		
	</header>
</template>

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

	header{
		background-image: url("https://img.alicdn.com/tps/TB15XU_LpXXXXbEXpXXXXXXXXXX-900-500.png");
	    background-position: center 50%;
	    background-repeat: no-repeat;
	    background-size: cover;
	    height: 600px;
	    position: relative;
	    width: 100%;
	}

	@include respond-to(medium){
		header{
			height: 400px;
		}
	}

	@include respond-to(small){
		header{
			height: 280px;
		}
	}
</style>