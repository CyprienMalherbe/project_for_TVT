import { defineStore } from 'pinia'
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import eveilsImg from '@/assets/eveil.png'
import bikeRunMousseaux2025 from '@/assets/bikerun-mousseaux-2025.jpg'
import articleTriAmants2025 from '@/assets/article-tri-amants-2025.jpg'
import marbellaDuranteau2025 from '@/assets/marbella-duranteau-2025.jpg'
import BandRinternational2025 from '@/assets/B&RMx2025-Bâche-annonce_V2.jpg'

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
      {
        title: 'Bike & Run international des Mousseaux',
        image: BandRinternational2025,
        subtitle1: "📢 J-2 : Informations coureurs ! Rappel des horaires de courses :",
        subtitle2: "🏁 B&R XXS (7.3km) : 9h30. Tracé GPX <a href='https://connect.garmin.com/modern/course/417405839' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle3: "🏁 B&R 6-9ans (1.55km) : 9h45",
        subtitle4: "🏁 B&R 8-11ans (2.88km) : 10h",
        subtitle5: "🏁 B&R S 20.80km : 10h35. Tracé GPX <a href='https://connect.garmin.com/modern/course/418841392' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle6: "🏁 B&R XS (12.75km) : 10h40. Tracé GPX <a href='https://connect.garmin.com/modern/course/417406805' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle7: "🏃‍♀️🚴‍♀️: 1 TOUR pour les courses 6-9ans, XXS et XS",
        subtitle8: "🚴‍♂️🏃‍♂️: 2 TOURS pour les courses 9-11ans et S",
        subtitle8: "📤 Retrait des dossards (tente accueil Team Val'Eure Triathlon, parc des Pérelles à Courcelles s/ Seine) jusqu'à 15' avant le départ.",
        subtitle9: "📢 Pour les coureurs du XS/S : l'accès au parking à proximité immédiate du parc des Pérelles ne sera pas possible entre 10h et 10h15. Privilégier un stationnement sur les emplacements matérialisés dans le lotissement ou à la mairie (à environ 800m).",
        subtitle10: "🏁 Procédure de départ : un-e équipier-e sur la ligne de départ , le/la second.e en attente avec le vélo dans une zone matérialisée. L'équipier en attente ne peut partir à pied qu'après contact avec son/sa partenaire.",
        subtitle11: "👉 À l'exception de la procédure de départ, les relais sont LIBRES et le 'gagne-terrain' est autorisé. Le cycliste peut donc 'prendre de l'avance' et déposer le vélo en bord EN BORD DE parcours (il ne doit pas gêner les autres!). Le coureur / la coureuse récupère le vélo et rattrape l'équipier.e.",
        subtitle12: "🚴‍♂️🏃‍♂️ Sur les courses XXS, XS et S : à chaque moitié de tour, vous traverserez une 'zone de regroupement'. L'arbitre ne vous laissera UNIQUEMENT traverser la zone si vous êtes en mesure d'avoir un contact coureur-cycliste (cad à moins de 0.8m l'un.e de l'autre)",
        subtitle13: "🏁 Cette règle vaut également pour la procédure d'arrivée (Arche Foulées)",
        subtitle14: "🏆 Podiums et récompenses à 11h pour les les courses enfants & XXS, à 12h30 pour le XS & S",
        subtitle15: "Règlement complet <a href='https://app.strayde.com/datas/2025/82txDwiRfvAvWWqD/docs/reglement.pdf' target='_blank' rel='noopener noreferrer'>ici</a>",
        published: new Date("2025-11-28T03:24:00"),
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
