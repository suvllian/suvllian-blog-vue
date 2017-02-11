<template>
  <div class="prenext">
    <div class="prev">
    	<router-link v-if="prevArticle.aId" :to="{path:'article',query:{id:prevArticle.aId}}"><span>上一篇: {{prevArticle.aTopic}} </span></router-link>
    </div>
    <div class="next">
    	<router-link v-if="nextArticle.aId" :to="{path:'article',query:{id:nextArticle.aId}}"><span>下一篇: {{nextArticle.aTopic}}</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:['prevArticle','nextArticle']
}
</script>

<style lang="scss" scoped>
	.prenext{
		width: 100%;
		padding:18px 0 0;

		a{
			color: #444;
			font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
			font-size: 20px;

			span{ 
				display: inline-block;
				border-bottom:1px solid #ccc;

				&:hover{
	              border-bottom-color: #000;

	              &{
	                color: #000;
	              }
	            }
			}
		}

		.prev, .next{
			width: 48%;
			padding: 0 8px;
			box-sizing:border-box;
			display: inline-block;
			overflow: hidden;
			white-space: nowrap;
		}

		.next{
			text-align: right;
		}

	}

	@media (max-width: 600px) {
        .prenext{
			a{
				font-size: 14px;
			}
		}
    }

    @media (max-width: 880px) {
        .prenext{
			a{
				font-size: 16px;
			}
		}
    }
	
</style>