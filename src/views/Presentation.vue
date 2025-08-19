<script>
import girlsImg from '@/assets/girls.jpg'
import youngImg from '@/assets/young.jpg'
import licencedImg from '@/assets/licenced.jpg'
import clothesImg from '@/assets/clothing.jpg'
import eventImg from '@/assets/events.jpg'

export default {
  name: 'Presentation',
  data () {
    return {
      cards: [
        { title: 'Les licenciés', text: '110', image: licencedImg, route: 'licenses' },
        { title: 'Les jeunes', text: '35', image: youngImg, route: 'school' },
        { title: 'Les femmes', text: '27', image: girlsImg, route: 'adults' },
        { title: 'Nos textiles', text: 'Beaucoup', image: clothesImg, route: 'clothing' },
        { title: 'Nos événements', text: 'A calculer', image: eventImg, route: 'events' },
      ],
    }
  },
}
</script>

<template>
  <h2>Le club en quelques chiffres</h2>
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
      <v-card-text class="text">{{ card.text }}</v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.cards-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Desktop : 3 cartes */
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
.text {
  font-size: 75px;
}
.title {
  font-size: 40px;
}
.spacer {
  height: 5vh;
}
</style>

