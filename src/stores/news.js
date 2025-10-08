import { defineStore } from 'pinia'
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import eveilsImg from '@/assets/eveil.png'
import resultsTriathlon2025 from '@/assets/results-triathlon-2025.jpg'
import bikeRunMousseaux2025 from '@/assets/bikerun-mousseaux-2025.jpg'
import articleTriAmants2025 from '@/assets/article-tri-amants-2025.jpg'

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
        title: 'Résultats triathlon des 2 amants 2025',
        image: resultsTriathlon2025,
        published: new Date("2025-09-16T03:24:00"),
        url: 'https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009'
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
        subtitle3: "Si l’organisation mobilise à fond l’ensemble du club, quelques-un.es ont eu le loisir de prendre un départ sur l’événement club, en premier lieu les jeunes de l’école de triathlon. Notons le gros week-end d'Axel Suard, 1er sur l’aquathlon et 2e sur le triathlon 6-9ans.",
        subtitle4: "Sur le triathlon XS, la jolie place de Lenny Lecaplain (10e BEM) fait plaisir ainsi que le tout premier enchaînement réussi sur la distance pour Timothée Jacques.",
        subtitle5: "Sur le S, Nicolas Duranteau confirme sa forme du moment avec une 5ème place au scratch et une première dans sa catégorie d’âge, tout cela après avoir tenu son carrefour le matin comme signaleur.",
        subtitle6: "Enfin, c’est un top 15 que réalise Ludovic Cauchois sur la distance «reine» du L.",
        subtitle7: "Bravo également à Nelly Pintus et Céline Duval pour leur contribution au sein des relais ATA logistique et des Electric Caméléons ainsi qu’à l’ensemble des TVTistes présents sur les courses !",
        subtitle8: "Minitri : Axel Suard : 2e en 07’53 ,  Paul Rocher : 31e en 11’56",
        subtitle9: "Tri-Cross 10-13 ans : Léopold Hamard : 23e en 26’39, Aaron Delaunay : 25e en 26’52, Grégoire Lenoble : 29e en 27’46",
        subtitle10: "Format XS : Lenny Lecaplain : 31e (10e BEM) en 50’17, Pierre Laloire : 42e 53’36, Timothée Jacques : 55e en 58’03, Simon Geoffriau-Rasmusson : 63e en 01:00’04, Emma Corbel (3e BEF) : 70e en 01:01’57, Gabrielle Hamard (4e BEF) : en 01 :02’26",
        subtitle11: "Format Sprint : Nicolas Duranteau : 5e (1er S35-39) en 01:05’11",
        subtitle12: "Format Longue Distance : Ludovic Cauchois : 13e (4e V1) en 04:34’12",
        subtitle13: "Aquathlon 8-11 ans : Leopold Hamard : 08’06",
        subtitle14: "Aquathlon XS (Championnat de Normandie Ca/Ju) : Timaël Fromager : 15e (7e MIM) en 22’34",
        subtitle15: "Aquathlon S (Championnat de Normandie Ca/Ju) : Adénora Petit : 18e (2e féminine et 1ere CAF) en 42’04, Natalia Bastart : 37e (2e CAF) en 01 :02’42",
        subtitle16: 'Voir les résultats complets <a href="https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009" target="_blank" rel="noopener noreferrer">ici</a>',
        published: new Date("2025-10-08T03:24:00"),
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
