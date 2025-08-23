<script>
import youngImg from '@/assets/young.jpg'
import adultsImg from '@/assets/adults.jpg'
import licencedImg from '@/assets/licenced.jpg'
import clothesImg from '@/assets/clothing.png'
import eventImg from '@/assets/events.jpg'
import trainingImg from '@/assets/training.jpg'
import chartImg from '@/assets/chart.jpg'

export default {
  name: 'Presentation',
  data () {
    return {
      cards: [
        { title: 'Adultes', image: adultsImg, route: 'adults' },
        { title: 'Jeunes', image: youngImg, route: 'school' },
        { title: 'Organigramme', image: chartImg, route: 'chart' },
        { title: 'Créneaux', image: trainingImg, route: 'training' },
        { title: 'Événements', image: eventImg, route: 'events' },
        { title: 'Licences', image: licencedImg, route: 'licenses' },
        { title: 'Textiles', image: clothesImg, url: 'https://www.strayde.shop/foulees-louviers/c15-team-val-eure-triathlon' },
      ],
    }
  },
}
</script>

<template>
  <h2 class="big-title">Nos différentes sections</h2>
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
      v-bind="card.route ? { to: card.route } : { href: card.url, target: '_blank', rel: 'noopener' }"
    >
      <v-card-title class="title">{{ card.title }}</v-card-title>
    </v-card>
  </div>
</template>

<style scoped>
.big-title {
  color: white;
  display: flex;
  justify-content: center;
  font-size: 4rem;
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
.title {
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

