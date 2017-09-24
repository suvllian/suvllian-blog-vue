<template>
  <div class="suvllian">
    <router-view></router-view>
  </div>
</template>

<script>
import ToTop from './pages/common/totop.vue'

export default {
  name: 'app',
  components: { ToTop }
}
</script>

<style lang="scss">
	@import './app.scss'
</style>