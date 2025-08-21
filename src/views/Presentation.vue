<script>
import youngImg from '@/assets/young.jpg'
import adultsImg from '@/assets/adults.jpg'
import licencedImg from '@/assets/licenced.jpg'
import clothesImg from '@/assets/clothing.jpg'
import eventImg from '@/assets/events.jpg'

export default {
  name: 'Presentation',
  data () {
    return {
      cards: [
        { title: 'Adultes', image: adultsImg, route: 'adults' },
        { title: 'Jeunes', image: youngImg, route: 'school' },
        { title: 'Événements', image: eventImg, route: 'events' },
        { title: 'Licences', image: licencedImg, route: 'licenses' },
        { title: 'Textiles', image: clothesImg, route: 'clothing' },
      ],
    }
  },
}
</script>

<template>
  <h2>Nos différentes sections</h2>
  <div class="spacer"></div>
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
      hover="true"
      :to="card.route"
    >
      <v-card-title class="title">{{ card.title }}</v-card-title>
    </v-card>
  </div>
</template>

<style scoped>
.cards-section {
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
}
.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.title {
  font-size: 40px;
}
.spacer {
  height: 4vh;
}
</style>

