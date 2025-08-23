<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <v-footer
    color="blue darken-3"
    padless
    height="auto"
  >
    <v-container class="py-6">
      <v-row class="text-center text-md-left" align="center" justify="space-between">
        <!-- Section 1: Logo / Nom -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h3 class="white--text font-weight-bold">Mon Site</h3>
          <p class="white--text">© 2025 Tous droits réservés</p>
        </v-col>

        <!-- Section 2: Liens rapides -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h4 class="white--text font-weight-bold mb-2">Liens rapides</h4>
          <v-list dense nav>
            <v-list-item link>
              <v-list-item-title class="white--text">Accueil</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title class="white--text">À propos</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title class="white--text">Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Section 3: Réseaux sociaux -->
        <v-col cols="12" md="4">
          <h4 class="white--text font-weight-bold mb-2">Suivez-nous</h4>
          <v-btn icon href="https://facebook.com" target="_blank" class="white--text">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com" target="_blank" class="white--text">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://linkedin.com" target="_blank" class="white--text">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.v-footer {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}
</style>
