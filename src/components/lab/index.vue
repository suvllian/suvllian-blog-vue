<template>
	<div class="lab-container">
		<div class="lab-full-bg"></div>
		<div class="lab-main row">
			<div class="col-md-4" v-for="(item, index) in labList">
	      <section class="lab-box">
	      	<div class="text">
	      		<span class="lab-time">{{ item.time }}</span>
	      		<a @click.prevent="" href="" title="" class="lab-link">
	      			<p>{{ item.title }}</p>
	      		</a>
	      		<p class="lab-brief">{{ item.biref }}</p>
	      	</div>
   				<div class="lab-img">
	      		<a @click.prevent="" href="" title="">
	      			<img :src="'http://suvllian.com/static/images/lab/' + (index+1) + '.png'">
	      		</a>
	      	</div>
	      </section>
      </div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default{
	computed: mapState({ 
		
	}),
	data(){
		return {
			labList: [
				{
					time: '2017/4/15 - 2017/5/1',
					title: '云信鸟互动：打动人心，促进生意',
					biref: `项目描述：使用React搭建的单页面展示网站。使用axios异步请求数据，异步上传图片；后台使用react-router实现路由；学习了React组件间通信的方式；封装轮播图组件。`
				},
				{
					time: '2017/3/20 - 2017/4/10',
					title: '麦芒音乐：无畏成长，展露锋芒',
					biref: '前后端均使用Vue全家桶搭建。'
				},
				{
					time: '2017/5/5 - ',
					title: '讯澜工作社官网',
					biref: '完善中...'
				},
				{
					time: '2017/5/15 - 2017/6/1',
					title: '职业毕业生分类信息招聘网',
					biref: '使用React全家桶搭建。'
				},
				{
					time: '2017/5/22 - ',
					title: '定音旅游情感社区',
					biref: '完善中...'
				}
			]
		}
	},
	methods:{
		
	},
	created(){
		
  }
}
</script>