<script>
import TrainingSchedule from './TrainingSchedule.vue'

export default {
  name: 'School',
  components: { TrainingSchedule },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Bienvenue à l'école de triathlon du TVT</h1>
    <p class="subtitle">Un lieu d'apprentissage et de partage, où tous les petits sauront s'épanouir et blablabla et Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ex, laudantium harum quae perferendis nesciunt quas porro nihil, quisquam doloribus provident explicabo sit sunt debitis dolorum dolorem. Sit, deleniti nihil?</p>
    <img class="image" src="@/assets/school.jpg">
    <p class="subtitle">Un lieu d'apprentissage et de partage, où tous les petits sauront s'épanouir et blablabla et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sapiente molestiae, error quae aliquid, veritatis voluptas facere quibusdam quos optio accusamus eveniet voluptatibus nam quidem impedit reiciendis corporis? Id, quis!</p>
    <TrainingSchedule />
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
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
.image {
  max-width: 70vw;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 8vh;
}
.spacer {
  height: 15vh;
}
</style>
