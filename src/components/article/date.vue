<template>
	<div>
		<span class="roate-date">
			<span class="month text-center">{{ articleHead.month }}</span>
			<span class="day text-center">{{ articleHead.day }}</span>
		</span>
	</div>
</template>

<script>
export default{
	props:['articleHead']
}
</script>