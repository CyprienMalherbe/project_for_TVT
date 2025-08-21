<script>
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import triathlonImg from '@/assets/triathlon.jpg'
import aquathlonImg from '@/assets/aquathlon.jpg'
import bikeAndRunImg from '@/assets/bike-and-run.jpg'

export default {
  name: 'Events',
  data () {
    return {
      cards: [
        { title: 'Aquathlon jeunes', image: youngAquathlonImg, url: 'https://www.klikego.com/inscription/aquathlon-jeunes-de-gaillon-2025/triathlon/1643334174070-6' },
        { title: 'Triathlon des 2 amants', image: triathlonImg, url: 'https://www.klikego.com/inscription/triathlon-des-2-amants-2025/triathlon/1643334174070-5' },
        { title: 'Aquathlon des 2 amants', image: aquathlonImg, url: 'https://www.klikego.com/inscription/aquathlon-des-2-amants-2025/triathlon/1643334174070-7?' },
        { title: 'Bike and Run', image: bikeAndRunImg, url: 'https://www.lntri.fr/agenda/bike-and-run-des-mousseaux/' },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nos différents événements</h1>
    <p class="subtitle">Que vous soyez blabla et Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro assumenda labore maiores debitis dolor voluptatem sunt, at consequatur neque officiis ad quas saepe. Mollitia perspiciatis voluptate debitis rerum laborum!</p>
    <div class="cards-section">
      <v-card
        v-for="card in cards"
        class="card"
        color="blue"
        variant="elevated"
        width="25vw"
        height="25vh"
        rounded="xl"
        :image="card.image"
        :href="card.url"
        target="_blank"
        rel="noopener"
      >
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 7vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
}
.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
}
.card {
  width: 100%;
  max-width: 25vw;
  height: 25vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}
.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card-title {
  font-size: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.4);
  text-align: center;
}
</style>
