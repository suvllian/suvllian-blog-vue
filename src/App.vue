<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import Foot from './components/common/Foot.vue'

export default {
  name: 'app',
  components: {
    Navbar,Foot
  }
}
</script>

