<script>
import { RouterView } from 'vue-router'
import Footer from './views/Footer.vue'
import logoImg from './assets/logo.png'

export default {
  name: 'App',
  components: {
    RouterView,
    Footer,
  },
  data () {
    return {
      logo: { text: 'Accueil', route: '/', icon: logoImg },
      tabs: [
        { text: 'Adultes', route: 'adults' },
        { text: 'École de triathlon', route: 'school' },
        { text: 'Organigramme', route: 'chart' },
        { text: 'Créneaux', route: 'training' },
        { text: 'Événements', route: 'events' },
        { text: 'Licences', route: 'licenses' },
        { text: 'Textiles', url: 'https://www.strayde.shop/foulees-louviers/c15-team-val-eure-triathlon' },
      ],
      contact: { text: 'Contactez-nous', route: 'contact' },
      activeTab: null,
    }
  },
  methods: {
    resetTabs() {
      this.activeTab = null
    }
  }
}
</script>

<template>
  <div class="toolbar">
    <v-tab :to="logo.route" @click="resetTabs">
      <img
        :src="logo.icon"
        class="logo-img"
      />
    </v-tab>
    <v-tabs v-model="activeTab" slider-color="transparent">
      <v-tab
        v-for="tab in tabs"
        :key="tab.route"
        v-bind="tab.route ? { to: tab.route, text: tab.text } : { href: tab.url, text: tab.text, target: '_blank', rel: 'noopener' }"
        :text="tab.text"
        size="x-small"
      />
      <v-tab
        :to="contact.route"
        :text="contact.text"
        size="x-small"
        base-color="blue"
      />
    </v-tabs>
  </div>
  <main class="main-content" @click="resetTabs">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);
  padding: 0 2rem;
  height: 48px;
  z-index: 10;
}
.logo-img {
  height: 40px;
  width: auto;
}
.main-content {
  min-height: calc(100vh - 48px); /* prend en compte la hauteur de la toolbar */
  margin-top: 48px; /* repousse le contenu sous la toolbar */
  background: linear-gradient(
    to bottom,
    rgb(33, 150, 243) 0%,
    rgb(25, 110, 190) 25%,
    rgb(15, 70, 130) 55%,
    rgb(6, 38, 72) 75%,
    #000 100%
  );
}
</style>
