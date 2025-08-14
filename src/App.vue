<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- Navigation -->
    <header class="navbar">
      <nav class="nav-links">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Structure globale */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Barre de navigation */
.navbar {
  background-color: #2c3e50;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

/* Contenu principal */
.main-content {
  flex: 1;
  padding: 2rem;
}
</style>
