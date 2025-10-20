import { defineStore } from 'pinia'
import Bayman2025 from '@/assets/results-bayman-2025.jpg'
import BnRCriel2025 from '@/assets/BnR-Criel-2025.jpg'
import resultsTriathlon2025 from '@/assets/results-triathlon-2025.jpg'

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const useResultsStore = defineStore('results', {
  state: () => ({
    cards: [
      {
        title: 'Résultats triathlon des 2 amants 2025',
        image: resultsTriathlon2025,
        subtitle1: "Si l’organisation mobilise à fond l’ensemble du club, quelques-un.es ont eu le loisir de prendre un départ sur l’événement club, en premier lieu les jeunes de l’école de triathlon. Notons le gros week-end d'Axel Suard, 1er sur l’aquathlon et 2e sur le triathlon 6-9ans.",
        subtitle2: "Sur le triathlon XS, la jolie place de Lenny Lecaplain (10e BEM) fait plaisir ainsi que le tout premier enchaînement réussi sur la distance pour Timothée Jacques.",
        subtitle3: "Sur le S, Nicolas Duranteau confirme sa forme du moment avec une 5ème place au scratch et une première dans sa catégorie d’âge, tout cela après avoir tenu son carrefour le matin comme signaleur.",
        subtitle4: "Enfin, c’est un top 15 que réalise Ludovic Cauchois sur la distance «reine» du L.",
        subtitle5: "Bravo également à Nelly Pintus et Céline Duval pour leur contribution au sein des relais ATA logistique et des Electric Caméléons ainsi qu’à l’ensemble des TVTistes présents sur les courses !",
        subtitle6: "Minitri : Axel Suard : 2e en 07’53 ,  Paul Rocher : 31e en 11’56",
        subtitle7: "Tri-Cross 10-13 ans : Léopold Hamard : 23e en 26’39, Aaron Delaunay : 25e en 26’52, Grégoire Lenoble : 29e en 27’46",
        subtitle8: "Format XS : Lenny Lecaplain : 31e (10e BEM) en 50’17, Pierre Laloire : 42e 53’36, Timothée Jacques : 55e en 58’03, Simon Geoffriau-Rasmusson : 63e en 01:00’04, Emma Corbel (3e BEF) : 70e en 01:01’57, Gabrielle Hamard (4e BEF) : en 01 :02’26",
        subtitle9: "Format Sprint : Nicolas Duranteau : 5e (1er S35-39) en 01:05’11",
        subtitle10: "Format Longue Distance : Ludovic Cauchois : 13e (4e V1) en 04:34’12",
        subtitle11: "Aquathlon 8-11 ans : Leopold Hamard : 08’06",
        subtitle12: "Aquathlon XS (Championnat de Normandie Ca/Ju) : Timaël Fromager : 15e (7e MIM) en 22’34",
        subtitle13: "Aquathlon S (Championnat de Normandie Ca/Ju) : Adénora Petit : 18e (2e féminine et 1ere CAF) en 42’04, Natalia Bastart : 37e (2e CAF) en 01 :02’42",
        subtitle14: 'Voir les résultats complets <a href="https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009" target="_blank" rel="noopener noreferrer">ici</a>',
        published: new Date("2025-10-08T03:24:00"),
        route: 'results'
      },
      {
        title: 'Criel s/ Mer : le challenge B&R 2025 est lancé !',
        image: BnRCriel2025,
        published: new Date("2025-10-15T03:24:00"),
        subtitle1: "Cyprien Malherbe et Vincent Ratel ont représenté le club sur la première étape du challenge 2025 ce dimanche à Criel s mer, dans le nord de la Seine-Maritime et ont parcouru les plus de 20km du parcours en vallée d’Yères en 01:06’39, soit à une allure de 3’19/km.",
        subtitle2: "Ils prennent la 8eme place au scratch et collectent de précieux points en vue du général. Prochaine étape à Bernay avec une montée en puissance du binôme qui sera sans nul doute rejoint par d’autres TVTistes lors de cette échéances, sans oublier #6 qui aura lieu « à la maison » le 30 novembre !",
      },
      {
        title: 'Triathlon Bayman 2025',
        image: Bayman2025,
        published: new Date("2025-10-20T03:24:00"),
        subtitle1: "Fan de l'épreuve autant que du Mont, Didier Soutif était à nouveau sur le Bayman cette année et termine cette fois le L en 06:01'36 avec en guise de cerise sur le gâteau la joie de retrouver dans l'aire d'arrivée son ami de 30 ans Gervais Miquelard, pensionnaire lui du Triathlon Pays du Neubourg.\n «On n'a pas le même maillot, mais on a la même passion !»\n\n Bravo à tous les 2 !",
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
