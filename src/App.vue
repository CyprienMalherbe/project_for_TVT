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
        { text: 'Le club', route: 'club' },
        { text: 'École de triathlon', route: 'school' },
        { text: 'Adultes', route: 'adults' },
        { text: 'Événements', route: 'events' },
        { text: 'Licences', route: 'licenses' },
        { text: 'Textiles', route: 'clothing' },
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
        :to="tab.route"
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
  background-color: rgb(33, 150, 243);
}
</style>
