<template>
  <ImageList :imageList="cityImageList" />
</template>

<script>
import ImageList from './image-list.vue'
import { mapActions, mapState} from 'vuex'
import { GET_IMAGES_BY_CITYID } from './../../../vuex/type.js'

export default{
  components: { ImageList },
	computed: mapState({ 
		cityImageList: store => store.camera.cityImageList
	}),
	methods: {
    ...mapActions([GET_IMAGES_BY_CITYID]),
    getPictures() {
      this.cityId = this.$route.params.cityId;
			this.GET_IMAGES_BY_CITYID(this.cityId);
		}
  },
  watch:{
    '$route':'getPictures'
  },
  created() {
    this.getPictures()
  }
}
</script>
