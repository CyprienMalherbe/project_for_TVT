<script>
import Join from './Join.vue'
import Presentation from './Presentation.vue'

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
        hide-delimiters
        :show-arrows="false"
        height="100vh"
      >
        <v-carousel-item
          v-for="(img, i) in images"
          :key="i"
        >
          <v-img :src="img" cover class="image" />
        </v-carousel-item>
      </v-carousel>
      <div class="overlay-content">
        <Join />
      </div>
    </div>
    <div class="video-wrapper">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/FrM62NoLTmU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </div>
    <Presentation />
  </div>
</template>

<style scoped>
.video-wrapper {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 85vw;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100vh; /* plein écran desktop */
}

.image {
  height: 100%;
}

/* Overlay Join desktop */
.overlay-content {
  position: absolute;
  top: 50%; /* centré verticalement */
  left: 5%;  /* à gauche */
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-start;
  z-index: 2;
  color: white;
  text-align: left;
  max-width: 500px;
}

/* Responsive mobile : recentrer Join */
@media (max-width: 768px) {
  .carousel-container {
    height: 60vh; /* réduit la hauteur du carousel sur mobile */
  }

  .image {
    height: 60vh;
  }

  .overlay-content {
    top: 50%;            /* centré verticalement */
    left: 50%;           /* centré horizontalement */
    transform: translate(-50%, -50%);
    text-align: center;   /* centre le texte */
    align-items: center;  /* centre le contenu du composant */
    max-width: 90%;       /* presque toute la largeur */
  }
}
</style>
