<script>
export default {
  name: 'TrainingSchedule',
  data() {
    return {
      days: [
        { name: 'Lundi', trainings: ['Natation 8h-9h', 'Course 18h-19h'] },
        { name: 'Mardi', trainings: ['Cyclisme 7h-8h', 'Renfo 19h-20h'] },
        { name: 'Mercredi', trainings: ['Natation 8h-9h', 'Course 18h-19h'] },
        { name: 'Jeudi', trainings: ['Cyclisme 7h-8h', 'Renfo 19h-20h'] },
        { name: 'Vendredi', trainings: ['Natation 8h-9h', 'Course 18h-19h'] },
        { name: 'Samedi', trainings: ['Triathlon léger 9h-11h'] },
        { name: 'Dimanche', trainings: ['Repos ou étirements'] },
      ],
      selectedDay: 'Lundi',
    };
  },
  methods: {
    selectDay(dayName) {
      this.selectedDay = dayName;
    },
  },
}
</script>

<template>
  <div class="schedule-container">
    <h1 class="title">Nos créneaux</h1>
    <v-slide-group class="pa-2 day-selector">
      <v-slide-item
        v-for="day in days"
        :key="day.name"
        :value="day.name"
      >
        <v-btn
          :color="day.name === selectedDay ? 'blue accent-4' : 'grey lighten-2'"
          class="ma-2 day-btn"
          elevation="4"
          @click="selectDay(day.name)"
          :text="day.name"
        />
      </v-slide-item>
    </v-slide-group>
    <div class="training-card mx-auto mt-8">
      <div class="training-list">
        <div
          v-for="(training, index) in days.find(d => d.name === selectedDay).trainings"
          :key="index"
          class="training-item"
        >
          <v-icon left small>mdi-dumbbell</v-icon>
          {{ training }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
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
}

.day-selector {
  overflow-x: auto;
  white-space: nowrap;
  justify-content: center;
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
}

.day-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
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
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: background 0.3s ease, transform 0.2s ease;
}

.training-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateX(5px);
}

.training-item v-icon {
  margin-right: 0.8rem;
}
</style>
