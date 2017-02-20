<template>
  <div class="prenext">
    <div class="prev">
    	<router-link v-if="prevArticle.aId" :to="{path:'/article/' + prevArticle.aId}"><span>上一篇: {{prevArticle.aTopic}} </span></router-link>
    </div>
    <div class="next text-right">
    	<router-link v-if="nextArticle.aId" :to="{path:'/article/' + nextArticle.aId}"><span>下一篇: {{nextArticle.aTopic}}</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:['prevArticle','nextArticle']
}
</script>