<script>
import { RouterView } from 'vue-router'
import logoImg from './assets/logo.png'

export default {
  name: 'App',
  components: {
    RouterView,
  },
  data () {
    return {
      logo: { text: 'Accueil', route: '/', icon: logoImg },
      tabs: [
        { text: 'Le club', route: 'club', icon: '' },
        { text: 'École de triathlon', route: 'school', icon: '' },
        { text: 'Adultes', route: 'adults', icon: '' },
        { text: 'Événements', route: 'events', icon: '' },
        { text: 'Licences', route: 'licenses', icon: '' },
        { text: 'Textiles', route: 'clothing', icon: '' },
      ],
      contact: { text: 'Contactez-nous', route: 'contact', icon: '' },
    }
  },
}
</script>

<template>
  <div class="toolbar">
    <v-tab :to="logo.route">
      <img
        :src="logo.icon"
        class="logo-img"
      />
    </v-tab>
    <v-tabs>
      <v-tab
        v-for="tab in tabs"
        :key="tab.route"
        :to="tab.route"
        :text="tab.text"
        slider-color="blue"
        size="x-small"
      />
      <v-tab
        :to="contact.route"
        :text="contact.text"
        slider-color="blue"
        size="x-small"
        base-color="blue"
      />
    </v-tabs>
  </div>
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);
  padding: 0 2rem;
}
.logo-img {
  height: 40px;
  width: auto;
}
.main-content {
  min-height: calc(100vh - 48px);
  background-color: rgb(33,150,243);
}
</style>
