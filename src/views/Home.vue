<script>
import Presentation from './Presentation.vue'
import Join from './Join.vue'

export default {
  name: 'Home',
  components: { Presentation, Join },
  data () {
    return {
      images: [
        new URL('@/assets/carousel.jpg', import.meta.url).href,
        new URL('@/assets/carousel1.jpg', import.meta.url).href,
        new URL('@/assets/carousel2.jpg', import.meta.url).href,
        new URL('@/assets/carousel3.jpg', import.meta.url).href,
        new URL('@/assets/carousel4.jpg', import.meta.url).href,
        new URL('@/assets/carousel5.jpg', import.meta.url).href,
        new URL('@/assets/carousel6.jpg', import.meta.url).href,
      ]
    }
  },
}
</script>

<template>
  <div>
    <v-carousel
      cycle
      hide-delimiter-background
      :show-arrows="false"
      class="carousel-bg"
      height="100vh"
    >
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
        class="carousel-item"
      >
        <v-img :src="img" cover style="height: 100%;" />
      </v-carousel-item>
    </v-carousel>
    <div class="overlay-content">
      <div class="spacer"></div>
      <Join />
      <div class="spacer"></div>
      <Presentation />
    </div>
  </div>
</template>

<style scoped>
.carousel-bg {
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  height: calc(100vh - 48px);
  z-index: 0;
}
.carousel-item {
  height: 100vh;
}
.overlay-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  padding-top: 48px;
}
.spacer {
  height: 15vh;
}
</style>
