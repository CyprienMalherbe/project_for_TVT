import { defineStore } from 'pinia'
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import eveilsImg from '@/assets/eveil.png'

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
