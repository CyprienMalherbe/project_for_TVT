<script>
import fouleesImg from '../assets/foulees.png'

export default {
  name: 'Footer',
  data() {
    return {
      fouleesImg
    }
  }
}
</script>

<template>
  <v-footer color="black">
    <v-container>
      <v-row align="end">

        <!-- Section 1: Bas gauche -->
        <v-col class="text-left">
          <h4 class="white--text">Suivez-nous</h4>
          <v-btn
            icon
            href="https://www.facebook.com/people/TeamVal-EureTriathlon/100063858311946/"
            target="_blank"
            class="white--text hover-zoom"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.instagram.com/teamvaleuretriathlon.off/"
            target="_blank"
            class="white--text hover-zoom"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>

        <!-- Section 2: Milieu -->
        <v-col class="text-center">
          <h4 class="white--text">Notre partenaire</h4>
          <a href="https://foulees.com/-louviers-" target="_blank">
            <v-img
              :src="fouleesImg"
              alt="Partenaire Foulées"
              max-width="120"
              class="mx-auto hover-zoom"
              contain
            />
          </a>
        </v-col>

        <!-- Section 3: Droite -->
        <v-col class="text-right">
          <p class="developped-by">
            Ce site a été développé par Cyprien Malherbe, développeur web
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.developped-by {
  color: white;
  font-size: xx-small;
}

.hover-zoom {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 50%;
}
.hover-zoom:hover {
  transform: scale(1.2);
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}
</style>
