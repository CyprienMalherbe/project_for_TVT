<script>
export default {
  name: 'TrainingSchedule',
  data() {
    return {
      categories: ['Tous', 'Adultes', 'Mini-poussins-Juniors', 'Éveils'],
      selectedDay: 'Lundi',
      selectedCategory: 'Tous',
      days: [
        {
          name: 'Lundi',
          trainings: [
            { category: 'Adultes', discipline: 'Natation', time: '20h00-21h00', location: 'Aquaval' }
          ]
        },
        {
          name: 'Mardi',
          trainings: [
            { category: 'Adultes', discipline: 'Course à pied', time: '18h45-20h00', location: 'Stade Jean Rives' },
            { category: 'Adultes', discipline: 'Natation', time: '20h00-21h00', location: 'Aquaval' }
          ]
        },
        {
          name: 'Mercredi',
          trainings: [
            { category: 'Éveils', discipline: 'Course à pied & Vélo', time: '16h30-17h15', location: 'Stade Jean Rives' },
            { category: 'Mini-poussins-Juniors', discipline: 'Course à pied', time: '17h00-18h30', location: 'Stade Jean Rives' },
            { category: 'Mini-poussins-Juniors', discipline: 'Natation', time: '18h45-19h45', location: 'Aquaval' },
            { category: 'Adultes', discipline: 'Natation', time: '19h45-20h45', location: 'Aquaval' }
          ]
        },
        {
          name: 'Jeudi',
          trainings: [
            { category: 'Adultes', discipline: 'Course à pied', time: '18h45-20h15', location: 'Stade Jean Rives' }
          ]
        },
        {
          name: 'Vendredi',
          trainings: [
            { category: 'Adultes', discipline: 'Renforcement musculaire', time: '18h30-19h30', location: 'Stade Jean Rives' }
          ]
        },
        {
          name: 'Samedi',
          trainings: [
            { category: 'Adultes', discipline: 'Natation', time: '9h30-11h30', location: 'Aquaval' },
            { category: 'Mini-poussins-Juniors', discipline: 'Natation', time: '11h30-12h30', location: 'Aquaval' },
            { category: 'Mini-poussins-Juniors', discipline: 'Vélo', time: '14h30-16h30', location: "Parking d'Aquaval" }
          ]
        },
        {
          name: 'Dimanche',
          trainings: [
            { category: 'Adultes', discipline: 'Vélo', time: '9h00-12h00', location: "Parking d'Aquaval" }
          ]
        },
      ],
    };
  },
  computed: {
    filteredTrainings() {
      let trainings = this.days.find(d => d.name === this.selectedDay)?.trainings || []
      if (this.selectedCategory === 'Tous') return trainings
      return trainings.filter(t => t.category === this.selectedCategory)
    }
  },
  methods: {
    trainingIcon(discipline) {
      switch (discipline) {
        case 'Course à pied':
          return 'mdi-run'
        case 'Natation':
          return 'mdi-swim'
        case 'Renforcement musculaire':
          return 'mdi-dumbbell'
        case 'Vélo':
          return 'mdi-bike'
        case 'Course à pied & Vélo':
          return 'mdi-shoe-sneaker'
      }
    },
  },
}
</script>

<template>
  <div class="schedule-container">
    <h1 class="title">Nos créneaux</h1>

    <!-- Filtre par catégorie -->
    <v-slide-group v-model="selectedCategory" class="pa-2 day-selector">
      <v-slide-group-item
        v-for="cat in categories"
        :key="cat"
        :value="cat"
      >
        <template v-slot="{ isSelected, toggle }">
          <v-btn
            :color="isSelected ? 'blue-accent-4' : 'grey-lighten-2'"
            class="ma-2 day-btn"
            elevation="4"
            @click="toggle"
          >
            {{ cat }}
          </v-btn>
        </template>
      </v-slide-group-item>
    </v-slide-group>

    <!-- Sélecteur de jour -->
    <v-slide-group v-model="selectedDay" class="pa-2 day-selector">
      <v-slide-group-item
        v-for="day in days"
        :key="day.name"
        :value="day.name"
      >
        <template v-slot="{ isSelected, toggle }">
          <v-btn
            :color="isSelected ? 'blue-accent-4' : 'grey-lighten-2'"
            class="ma-2 day-btn"
            elevation="4"
            @click="toggle"
          >
            {{ day.name }}
          </v-btn>
        </template>
      </v-slide-group-item>
    </v-slide-group>

    <!-- Liste des trainings filtrés -->
    <div class="training-card mx-auto mt-8">
      <div class="training-list">
        <div
          v-for="(training, index) in filteredTrainings"
          :key="index"
          class="training-item"
        >
          <v-icon start>{{ trainingIcon(training.discipline) }}</v-icon>
          <div class="training-info-row">
            <div class="left"><strong>{{ training.category }}</strong> : {{ training.discipline }}</div>
            <div class="center">{{ training.time }}</div>
            <div class="right">{{ training.location }}</div>
          </div>
        </div>
        <div v-if="filteredTrainings.length === 0" class="training-item">
          <v-icon start>mdi-calendar-remove</v-icon> Pas d'entraînement prévu
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.v-slide-group__content) {
  justify-content: center;
}
.schedule-container {
  max-width: 70vw;
  margin: 0 auto;
  text-align: center;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 70vw;
  padding-top: 7vh;
}
.day-btn {
  font-weight: bold;
  min-width: 90px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.day-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}
.training-card {
  background: transparent;
  color: #fff;
  border-radius: 24px;
  padding: 2rem;
  max-width: 60vw;
}
.training-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.training-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: background 0.3s ease, transform 0.2s ease;
  text-align: left;
}
.training-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateX(5px);
}
.training-info-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.training-info-row .left {
  flex: 1;
  text-align: left;
}
.training-info-row .center {
  flex: 1;
  text-align: center;
}
.training-info-row .right {
  flex: 1;
  text-align: right;
}

</style>
