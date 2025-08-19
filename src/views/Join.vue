<script>
export default {
  name: 'Join',
}
</script>

<template>
  <div>
    <v-card
      variant="flat"
      color="transparent"
      max-width="38vw"
    >
        <v-card-title>Rejoignez le Team Val Eure Triathlon</v-card-title>
        <v-card-text class="text">
          TEAM renvoie à cette notion d’équipe et d’unité. VAL'EURE
          est un joli clin d’œil à la vallée de l’Eure mais aussi « valeurs » saines que véhicule le triathlon.
          Les principales valeurs que nous véhiculons sont la convivialité, la cohésion, l’esprit d’équipe, l’entraide,
          l’unité, la simplicité, le dépassement de soi, le fair-play, mais surtout le PLAISIR !!!
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="rgb(33, 150, 243)"
            variant="elevated"
            :to="'contact'"
            text="Nous contacter"
          />
        </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.btn {
  border-color: rgb(33, 150, 243);
}
.btn:hover {
  background-color: rgb(33, 150, 243, 0.6);
}
.text {
  text-align: justify;
  text-justify: inter-word;
}
</style>
