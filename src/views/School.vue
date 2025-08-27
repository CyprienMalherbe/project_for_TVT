<script>
export default {
  name: 'School',
}
</script>

<template>
  <div class="container">
    <h1 class="title">Bienvenue à l'école de triathlon du TVT</h1>
    <p class="subtitle">
      Prêt à devenir un super-héros du triathlon ?
      À l'école de triathlon, c'est comme un jeu ! Des
      coachs super sympas et diplômés t'apprennent à
      nager comme un poisson, à pédaler comme un
      pro du vélo et à courir comme le vent.
      Même les tout-petits, dès 4 ans, peuvent nous
      rejoindre pour s'amuser. Et à partir de 6 ans, c'est
      parti pour les premières compétitions !
      On te prête même la trifonction, la tenue
      magique des triathlètes ! Le club paye tes courses
      et on organise un stage pour encore plus de fun.
      Alors, prêt à relever le défi ?
    </p>
    <img class="image" src="@/assets/school.jpg" alt="École de triathlon">
    <p class="subtitle">
      Le triathlon, ça vous tente ? Venez découvrir
      notre école de triathlon avec une séance
      d'essai. C'est l'occasion de rencontrer nos
      jeunes triathlète et nos entraîneurs pour se
      familiariser avec le club et les entraînements. Notez bien la date : la reprise est fixée au
      <span class="important-date">mercredi 24 septembre</span>.
    </p>
    <h1 class="eveil-title">Éveil dès 4 ans</h1>
    <h1 class="eveil-subtitle">Nouveauté pour la saison 2025-2026</h1>
    <img class="image" src="@/assets/eveil.png" alt="Éveil">
    <p class="subtitle">
      Une bonne façon de découvrir deux des trois sports de la discipline : cyclisme (draisienne ou tricycle, trottinette ou vélo à roulettes) et
      course à pied dans un cadre sécurisé et avec des méthodes pédagogiques spécifiques (de l'école Française de Triathlon). Il n'y a pas
      de natation pour les triathlètes "Éveils" mais il y aura bel et bien des jeux d'eau proposés.
    </p>
    <p class="subtitle">
      N'hésitez pas à aller faire un tour dans nos différentes rubriques, et notamment la rubrique
      <RouterLink to="/training" class="link">Créneaux</RouterLink> pour connaître les horaires d'entraînements.
    </p>
  </div>
</template>

<style scoped>
.eveil-title {
  margin-top: 7vh;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
}
.eveil-subtitle {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
}
.link {
  font-weight: bold;
  text-decoration: underline;
  color: #4fc3f7;
  cursor: pointer;
  transition: color 0.3s ease;
}
.link:hover {
  color: #82e9de;
}
.important-date {
  font-weight: bold;
  text-decoration: underline;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
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

/* Responsive mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .subtitle {
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 15px;
  }
  .eveil-title {
    font-size: 2rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .eveil-subtitle {
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 15px;
  }
  .image {
    max-width: 95%;
    margin-bottom: 5vh;
  }
}
</style>
