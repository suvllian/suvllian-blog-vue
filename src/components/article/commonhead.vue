<template>
	<section>
    	<Date :article-head="article"></Date>
    	<Head :article-head="article"></Head>
    	<Intro :article-head="article"></Intro>
	</section>	
</template>

<script>
import Date from './date.vue'
import Head from './head.vue'
import Intro from './intro.vue'
export default {
	props:['article'],
	components: { Date, Head, Intro }
}
</script>