<script>
import competitionLicenceImg from '@/assets/competition-licence.jpg'
import spareTimeLicenceImg from '@/assets/spare-time-licence.jpg'
import awakeningLicenceImg from '@/assets/awakening-licence.jpg'
import veryYoungLicenceImg from '@/assets/very-young-licence.jpg'
import youngLicenceImg from '@/assets/young-licence.jpg'

export default {
  name: 'Licences',
  data () {
    return {
      cards: [
        { title: 'Compétition', text: '205€', image: competitionLicenceImg },
        { title: 'Loisir', text: '160€', image: spareTimeLicenceImg },
        { title: 'Éveil', text: '35€', image: awakeningLicenceImg },
        { title: 'Mini-poussin - poussin - pupille - benjamin', text: '120€', image: veryYoungLicenceImg },
        { title: 'Minime - cadet - junior', text: '160€', image: youngLicenceImg },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nos licences</h1>
    <p class="subtitle">Prêt à blabla et Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro assumenda labore maiores debitis dolor voluptatem sunt, at consequatur neque officiis ad quas saepe. Mollitia perspiciatis voluptate debitis rerum laborum!</p>
    <div class="cards-section">
      <v-card
        v-for="card in cards"
        :key="card.title"
        class="card"
        color="blue"
        variant="elevated"
        rounded="xl"
        :image="card.image"
      >
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
        <div class="card-text">{{ card.text }}</div>
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
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

.card {
  position: relative;
  width: 100%;
  max-width: 25vw;
  min-width: 250px;
  min-height: 150px;
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
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.4);
  text-align: center;
  padding: 5px 10px;
  z-index: 2;
}

.card-text {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 24px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.card:hover .card-text {
  opacity: 1;
}

/* Mobile */
@media (max-width: 768px) {
  .cards-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  .card {
    max-width: 100%;
    height: auto;
    min-height: 180px;
  }
  .card-title {
    font-size: 1rem;
    padding: 4px 8px;
  }
  .card-text {
    font-size: 18px;
    padding: 0.4rem 0.8rem;
  }
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .subtitle {
    font-size: 1rem;
    max-width: 90%;
  }
}
</style>
