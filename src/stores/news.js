import { defineStore } from 'pinia'
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import eveilsImg from '@/assets/eveil.png'
import bikeRunMousseaux2025 from '@/assets/bikerun-mousseaux-2025.jpg'
import articleTriAmants2025 from '@/assets/article-tri-amants-2025.jpg'
import marbellaDuranteau2025 from '@/assets/marbella-duranteau-2025.jpg'

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    cards: [
      {
        title: 'Résultats aquathlon jeunes',
        image: youngAquathlonImg,
        published: new Date("2025-06-02T03:24:00"),
        url: 'https://www.lntri.fr/wp-content/uploads/2025/05/2025_Aquathlon-Gaillon.pdf'
      },
      {
        title: 'Nouveautés Éveils',
        subtitle1: "Nouveauté pour la saison 2025-2026",
        subtitle2: "Une bonne façon de découvrir deux des trois sports de la discipline : cyclisme (draisienne ou tricycle, trottinette ou vélo à roulettes) et course à pied dans un cadre sécurisé et avec des méthodes pédagogiques spécifiques (de l'école Française de Triathlon). Il n'y a pas de natation pour les triathlètes 'Éveils' mais il y aura bel et bien des jeux d'eau proposés.",
        image: eveilsImg,
        published: new Date("2025-08-02T03:24:00"),
        route: 'news'
      },
      {
        title: 'Les inscriptions pour le B&R sont ouvertes',
        image: bikeRunMousseaux2025,
        published: new Date("2025-10-01T03:24:00"),
        url: 'https://www.strayde.com/bike-and-run-des-mousseaux'
      },
      {
        title: 'Superbe week-end sportif à Léry-Poses',
        image: articleTriAmants2025,
        subtitle1: "13 & 14 Septembre 2025 : une superbe fête du sport à Léry-Poses en Normandie à l’occasion du Triathlon des 2 Amants",
        subtitle2: "Plus de 1000 participants sur le week-end, neuf courses lancées en aquathlon et en triathlon, 25 départements représentés, le Team Val’Eure Triathlon peut s’enorgueillir d’avoir mené à bien la plus grosse édition du Triathlon des 2 Amants depuis sa création en 2021.",
        subtitle3: 'Voir les résultats complets <a href="https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009" target="_blank" rel="noopener noreferrer">ici</a>',
        published: new Date("2025-10-08T03:24:00"),
        route: 'news'
      },
      {
        title: 'CHAMPIONNAT DU MONDE IRONMAN 70.3 : TOUT UN CLUB DERRIÈRE NICO !',
        image: marbellaDuranteau2025,
        subtitle1: "Après une brillante qualification à Vichy et au delà, une saison 2025 de bout en bout solide, on y est : la préparation de plusieurs mois s'est bien passée, les bagages récupérés après une petite péripétie aéroportuaire, il ne reste plus à Nico Duranteau qu'à charger les batteries à bloc afin d' être au top dimanche pour sa dernière course de 2025, et quelle course !",
        subtitle2: "Départ dimanche 09 novembre à partir de 8h. 📢 Go, Nico !",
        published: new Date("2025-11-04T03:24:00"),
        route: 'news'
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find(c => slugify(c.title) === slug)
    }
  }
})
