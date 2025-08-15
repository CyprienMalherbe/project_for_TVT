<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
  },
  data () {
    return {
      tabs: [
        { text: 'Accueil', route: '/' },
        { text: 'A propos', route: 'about' },
        { text: 'Alexis le plus fort', route: 'services' },
        { text: 'Alexis le plus beau', route: 'contact' },
      ]
    }
  },
}
</script>

<template>
  <v-tabs bg-color="indigo-darken-2" fixed-tabs>
    <v-tab
      v-for="tab in tabs"
      :key="tab.route"
      :to="tab.route"
      replace
      tag="RouterLink"
    >
      {{ tab.text }}
    </v-tab>
  </v-tabs>
  <main>
    <RouterView />
  </main>
</template>
