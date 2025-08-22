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
    <div class="carousel-container">
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        height="100vh"
      >
        <v-carousel-item
          v-for="(img, i) in images"
          :key="i"
        >
          <v-img :src="img" cover height="100vh" />
        </v-carousel-item>
      </v-carousel>
      <div class="overlay-content">
        <Join />
      </div>
    </div>
    <Presentation />
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100vh;
}
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  color: white;
  text-align: center;
}
</style>
