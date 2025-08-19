<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div class="home">
    <div class="overlay-content">
      <h1>Bienvenue</h1>
      <p>Ce texte se déplace vers le haut au scroll ✨</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 200vh;
  background-image: url('@/assets/everybody.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.overlay-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 100px;
  transition: transform 0.1s linear;
}
.home::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
}
</style>
