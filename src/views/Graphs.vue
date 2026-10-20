<script>
import { Chart, registerables } from 'chart.js'
import { markRaw, toRaw } from 'vue'

Chart.register(...registerables)

export default {
  name: 'PowerCurve',
  data() {
    return {
      colors: [
        '#2196F3',
        '#FF9800',
        '#4CAF50',
        '#E91E63',
        '#9C27B0',
        '#00BCD4',
        '#FFEB3B',
        '#FF5722'
      ],

      // --- AXES X ---
      cyclingDurations: [
        { key: 'p1s', label: '1s' },
        { key: 'p5s', label: '5s' },
        { key: 'p20s', label: '20s' },
        { key: 'p30s', label: '30s' },
        { key: 'p1m', label: '1min' },
        { key: 'p2m', label: '2min' },
        { key: 'p5m', label: '5min' },
        { key: 'p20m', label: '20min' },
        { key: 'p1h', label: '1h' }
      ],
      runningDistances: [
        { key: 'd1k', label: '1 km' },
        { key: 'd5k', label: '5 km' },
        { key: 'd10k', label: '10 km' },
        { key: 'd21k', label: 'Semi-Marathon' },
        { key: 'd42k', label: 'Marathon' }
      ],
      swimmingDistances: [
        { key: 's100m', label: '100m' },
        { key: 's400m', label: '400m' },
        { key: 's750m', label: '750m' },
        { key: 's1000m', label: '1000m' },
        { key: 's1500m', label: '1500m' }
      ],

      // --- LISTE UNIQUE DES ATHLÈTES ET DONNÉES ---
      athletes: [
        {
          id: 1,
          name: 'Cyprien Malherbe',
          selected: true,
          cycling: { p1s: 1201, p5s: 1156, p20s: 995, p30s: 885, p1m: 574, p2m: 431, p5m: 375, p20m: 281, p1h: 244 },
          running: { d1k: 18.75, d5k: 17.34, d10k: 16.08, d21k: 15.72 },
          swimming: { s100m: 67, s400m: 92, s750m: 97, s1000m: 98, s1500m: 101 }
        },
        {
          id: 2,
          name: 'Alexis Rousselin',
          selected: true,
          cycling: { p1s: 1150, p5s: 1020, p20s: 880, p30s: 720, p1m: 540, p2m: 431, p5m: 410, p20m: 340, p1h: 295 },
          running: { d1k: 21.0, d5k: 18.0, d10k: 17.2, d21k: 16.3, d42k: 15.2 },
          swimming: { s100m: 70, s400m: 78, s750m: 81, s1000m: 83, s1500m: 85 }
        },
      ]
    }
  },
  created() {
    this.cyclingChart = null
    this.runningChart = null
    this.swimmingChart = null
  },
  mounted() {
    this.initCharts()
  },
  beforeUnmount() {
    if (this.cyclingChart) this.cyclingChart.destroy()
    if (this.runningChart) this.runningChart.destroy()
    if (this.swimmingChart) this.swimmingChart.destroy()
  },
  methods: {
    toggleAthlete(athlete) {
      athlete.selected = !athlete.selected
      this.updateAllCharts()
    },
    getAthleteColor(index) {
      return this.colors[index % this.colors.length]
    },
    formatSwimmingPace(seconds) {
      const min = Math.floor(seconds / 60)
      const sec = seconds % 60
      return `${min}'${sec < 10 ? '0' : ''}${sec}"/100m`
    },

    initCharts() {
      // 1. Cyclisme
      if (this.$refs.cyclingCanvas) {
        this.cyclingChart = markRaw(
          new Chart(this.$refs.cyclingCanvas.getContext('2d'), {
            type: 'line',
            data: { labels: this.cyclingDurations.map(d => d.label), datasets: [] },
            options: this.getCommonChartOptions('Puissance (Watts)', (ctx) => ` ${ctx.dataset.label} : ${ctx.raw} W`)
          })
        )
      }

      // 2. Course à pied
      if (this.$refs.runningCanvas) {
        this.runningChart = markRaw(
          new Chart(this.$refs.runningCanvas.getContext('2d'), {
            type: 'line',
            data: { labels: this.runningDistances.map(d => d.label), datasets: [] },
            options: this.getCommonChartOptions('Vitesse (km/h)', (ctx) => ` ${ctx.dataset.label} : ${ctx.raw} km/h`)
          })
        )
      }

      // 3. Natation
      if (this.$refs.swimmingCanvas) {
        const options = this.getCommonChartOptions(
          'Allure (sec / 100m)',
          (ctx) => ` ${ctx.dataset.label} : ${this.formatSwimmingPace(ctx.raw)}`
        )
        options.scales.y.reverse = true

        this.swimmingChart = markRaw(
          new Chart(this.$refs.swimmingCanvas.getContext('2d'), {
            type: 'line',
            data: { labels: this.swimmingDistances.map(d => d.label), datasets: [] },
            options: options
          })
        )
      }

      this.updateAllCharts()
    },

    updateAllCharts() {
      if (this.cyclingChart) {
        this.cyclingChart.data.datasets = this.buildDatasets(this.cyclingDurations, 'cycling')
        this.cyclingChart.update()
      }
      if (this.runningChart) {
        this.runningChart.data.datasets = this.buildDatasets(this.runningDistances, 'running')
        this.runningChart.update()
      }
      if (this.swimmingChart) {
        this.swimmingChart.data.datasets = this.buildDatasets(this.swimmingDistances, 'swimming')
        this.swimmingChart.update()
      }
    },

    buildDatasets(dimensionsList, sportKey) {
      return this.athletes
        .map((athlete, index) => {
          if (!athlete.selected || !athlete[sportKey]) return null

          const color = this.getAthleteColor(index)
          const rawData = toRaw(athlete[sportKey])

          return {
            label: athlete.name,
            data: dimensionsList.map(d => rawData[d.key]),
            borderColor: color,
            backgroundColor: color,
            borderWidth: 3,
            tension: 0.35,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: color,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8
          }
        })
        .filter(Boolean)
    },

    getCommonChartOptions(yAxisTitle, tooltipLabelCallback) {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 13 },
            padding: 12,
            callbacks: { label: tooltipLabelCallback }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: '#ffffff', font: { size: 13, weight: 'bold' } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: '#ffffff', font: { size: 13 } },
            title: {
              display: true,
              text: yAxisTitle,
              color: '#ffffff',
              font: { size: 14, weight: 'bold' }
            }
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="chart-container">

    <!-- Sélecteurs globaux (Puces cliquables communes) -->
    <div class="selection-wrapper">
      <h2 class="chart-title">Sélection des Athlètes</h2>
      <p class="select-hint">Cliquez sur un athlète pour afficher/masquer ses courbes :</p>
      <div class="chips-container">
        <v-chip
          v-for="(athlete, index) in athletes"
          :key="athlete.id"
          class="cyclist-chip"
          :style="{
            borderColor: getAthleteColor(index),
            backgroundColor: athlete.selected ? getAthleteColor(index) : 'transparent',
            color: '#fff'
          }"
          variant="outlined"
          size="large"
          @click="toggleAthlete(athlete)"
        >
          <v-icon start :icon="athlete.selected ? 'mdi-checkbox-marked-circle' : 'mdi-checkbox-blank-circle-outline'"></v-icon>
          {{ athlete.name }}
        </v-chip>
      </div>
    </div>

    <!-- ================= SECTION CYCLISME ================= -->
    <div class="sport-section">
      <h3 class="sport-title">
        <v-icon icon="mdi-bike" class="mr-2"></v-icon>
        Cyclisme - Courbe de Puissance
      </h3>
      <div class="graph-card">
        <div class="canvas-holder">
          <canvas ref="cyclingCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- ================= SECTION COURSE À PIED ================= -->
    <div class="sport-section">
      <h3 class="sport-title">
        <v-icon icon="mdi-run" class="mr-2"></v-icon>
        Course à pied - Profil de Vitesse
      </h3>
      <div class="graph-card">
        <div class="canvas-holder">
          <canvas ref="runningCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- ================= SECTION NATATION ================= -->
    <div class="sport-section">
      <h3 class="sport-title">
        <v-icon icon="mdi-swim" class="mr-2"></v-icon>
        Natation - Profil d'Allure (sec/100m)
      </h3>
      <div class="graph-card">
        <div class="canvas-holder">
          <canvas ref="swimmingCanvas"></canvas>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.chart-container {
  max-width: 75vw;
  margin: 2rem auto;
  text-align: center;
  width: 100%;
}

.selection-wrapper {
  margin-bottom: 3rem;
  padding-top: 3vh;
}

.sport-section {
  margin-bottom: 4rem;
}

.chart-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
}

.sport-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.select-hint {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.cyclist-chip {
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  border-width: 2px !important;
}

.cyclist-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.graph-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.canvas-holder {
  position: relative;
  height: 420px;
  width: 100%;
}

@media (max-width: 768px) {
  .chart-container {
    max-width: 92vw;
  }
  .canvas-holder {
    height: 300px;
  }
  .chart-title {
    font-size: 1.6rem;
  }
  .sport-title {
    font-size: 1.2rem;
  }
}
</style>
