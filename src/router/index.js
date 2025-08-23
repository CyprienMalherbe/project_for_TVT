import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import Home from '../views/Home.vue'
import School from '../views/School.vue'
import Contact from '../views/Contact.vue'
import Adults from '../views/Adults.vue'
import Events from '../views/Events.vue'
import Licenses from '../views/Licenses.vue'
import TrainingSchedule from '@/views/TrainingSchedule.vue'
import Chart from '@/views/Chart.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/school', name: 'School', component: School },
  { path: '/chart', name: 'Chart', component: Chart },
  { path: '/adults', name: 'Adults', component: Adults },
  { path: '/events', name: 'Events', component: Events },
  { path: '/licenses', name: 'Licenses', component: Licenses },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/training', name: 'Training', component: TrainingSchedule },
]

const router = createRouter({
  history: createWebHashHistory('/project_for_TVT/'),
  routes
})

export default router
