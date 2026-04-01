import { defineStore } from "pinia";
import Bayman2025 from "@/assets/results-bayman-2025.jpg";
import BnRCriel2025 from "@/assets/BnR-Criel-2025.jpg";
import BnRBernay2025 from "@/assets/BnR-Bernay-2025.jpg";
import resultsTriathlon2025 from "@/assets/results-triathlon-2025.jpg";
import MarathonSeineEure2025 from "@/assets/marathon-seine-eure-2025.jpg";
import CrossDuathlon2026 from "@/assets/cross-duathlon-2026.jpeg";
import DUCAEN20261 from "@/assets/DU-Caen-2026-1.jpg";
import DUCAEN20262 from "@/assets/DU-Caen-2026-2.jpg";
import DUCAEN20263 from "@/assets/DU-Caen-2026-3.jpg";
import DUCAEN20264 from "@/assets/DU-Caen-2026-4.jpg";
import DUCAEN20265 from "@/assets/DU-Caen-2026-5.jpg";

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export const useResultsStore = defineStore("results", {
  state: () => ({
    cards: [
      {
        title: "Résultats triathlon des 2 amants 2025",
        images: [resultsTriathlon2025],
        subtitle1:
          "Si l’organisation mobilise à fond l’ensemble du club, quelques-un.es ont eu le loisir de prendre un départ sur l’événement club, en premier lieu les jeunes de l’école de triathlon. Notons le gros week-end d'Axel Suard, 1er sur l’aquathlon et 2e sur le triathlon 6-9ans.",
        subtitle2:
          "Sur le triathlon XS, la jolie place de Lenny Lecaplain (10e BEM) fait plaisir ainsi que le tout premier enchaînement réussi sur la distance pour Timothée Jacques.",
        subtitle3:
          "Sur le S, Nicolas Duranteau confirme sa forme du moment avec une 5ème place au scratch et une première dans sa catégorie d’âge, tout cela après avoir tenu son carrefour le matin comme signaleur.",
        subtitle4:
          "Enfin, c’est un top 15 que réalise Ludovic Cauchois sur la distance «reine» du L.",
        subtitle5:
          "Bravo également à Nelly Pintus et Céline Duval pour leur contribution au sein des relais ATA logistique et des Electric Caméléons ainsi qu’à l’ensemble des TVTistes présents sur les courses !",
        subtitle6:
          "Minitri : Axel Suard : 2e en 07’53 ,  Paul Rocher : 31e en 11’56",
        subtitle7:
          "Tri-Cross 10-13 ans : Léopold Hamard : 23e en 26’39, Aaron Delaunay : 25e en 26’52, Grégoire Lenoble : 29e en 27’46",
        subtitle8:
          "Format XS : Lenny Lecaplain : 31e (10e BEM) en 50’17, Pierre Laloire : 42e 53’36, Timothée Jacques : 55e en 58’03, Simon Geoffriau-Rasmusson : 63e en 01:00’04, Emma Corbel (3e BEF) : 70e en 01:01’57, Gabrielle Hamard (4e BEF) : en 01 :02’26",
        subtitle9:
          "Format Sprint : Nicolas Duranteau : 5e (1er S35-39) en 01:05’11",
        subtitle10:
          "Format Longue Distance : Ludovic Cauchois : 13e (4e V1) en 04:34’12",
        subtitle11: "Aquathlon 8-11 ans : Leopold Hamard : 08’06",
        subtitle12:
          "Aquathlon XS (Championnat de Normandie Ca/Ju) : Timaël Fromager : 15e (7e MIM) en 22’34",
        subtitle13:
          "Aquathlon S (Championnat de Normandie Ca/Ju) : Adénora Petit : 18e (2e féminine et 1ere CAF) en 42’04, Natalia Bastart : 37e (2e CAF) en 01 :02’42",
        subtitle14:
          'Voir les résultats complets <a href="https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009" target="_blank" rel="noopener noreferrer">ici</a>',
        published: new Date("2025-10-08T03:24:00"),
        route: "results",
      },
      {
        title: "Criel s/ Mer : le challenge B&R 2025 est lancé !",
        images: [BnRCriel2025],
        published: new Date("2025-10-15T03:24:00"),
        subtitle1:
          "Cyprien Malherbe et Vincent Ratel ont représenté le club sur la première étape du challenge 2025 ce dimanche à Criel s mer, dans le nord de la Seine-Maritime et ont parcouru les plus de 20km du parcours en vallée d’Yères en 01:06’39, soit à une allure de 3’19/km.",
        subtitle2:
          "Ils prennent la 8eme place au scratch et collectent de précieux points en vue du général. Prochaine étape à Bernay avec une montée en puissance du binôme qui sera sans nul doute rejoint par d’autres TVTistes lors de cette échéances, sans oublier #6 qui aura lieu « à la maison » le 30 novembre !",
      },
      {
        title: "Triathlon Bayman 2025",
        images: [Bayman2025],
        published: new Date("2025-10-20T03:24:00"),
        subtitle1:
          "Fan de l'épreuve autant que du Mont, Didier Soutif était à nouveau sur le Bayman cette année et termine cette fois le L en 06:01'36 avec en guise de cerise sur le gâteau la joie de retrouver dans l'aire d'arrivée son ami de 30 ans Gervais Miquelard, pensionnaire lui du Triathlon Pays du Neubourg.\n «On n'a pas le même maillot, mais on a la même passion !»\n\n Bravo à tous les 2 !",
      },
      {
        title: "Incontournable marathon Seine-Eure",
        images: [MarathonSeineEure2025],
        published: new Date("2025-10-23T03:24:00"),
        subtitle1:
          "Une quinzaine de TVTistes étaient présents dimanche 19 octobre sur l’une des courses du Marathon Seine-Eure avec cette année un choix davantage porté vers le semi.",
        subtitle2:
          "La plus grosse performance du week-end est sans aucun doute l’œuvre d'Arnaud Jacques qui entre dans le top 200 en claquant un énorme 03:13’ sur la distance mythique tandis qu’il a manqué un rien à Stéphane Delabrière pour passer sous les 03:35’.",
        subtitle3:
          "Notons également l’excellente course de Vincent Boinet sur le semi et une Lucie Hamard qui confirme que la barre des 01:50’ est accessible.",
        subtitle4:
          "Enfin, notre équipe EKIDEN termine les 42,195km sous les 03:20’, lancée par Adénora Petit qui réalise son meilleur temps sur 5km en 23’.",
        subtitle5:
          "Beaucoup de sourires et de satisfactions sur l’espalnade de la mairie de Val de Reuil malgré les traits tirés ! Bonne récup’ à tous, notamment et particulièrement  à Johann Hamard, contraint à l’abandon au 35e kilomètre à cause d’ une vilaine douleur au genou qui ne cessait de s’intensifier depuis la mi-course. Allez, ça va passer (la douleur, bien sûr, mais aussi les 42km !).",
        subtitle6:
          "Marathon\n 171 Arnaud Jacques 03:13’53\n352 Stéphane Delabrière 03:35’20\nDNF Johann Hamard –",
        subtitle7:
          "Semi-marathon\n260 Vincent Boinet 01:36’34\n352 Vincent Ratel 01:41’30\n353 Alex Rousselin 01:41’30\n391 Sébastien Benoit 01:42’52\n392 Luc Fosseart 01:42’54\n592 Gérald Viger 01:51’26\n593 Lucie Hamard 01:51’26\n907 Daniel Corbel 02:02’12",
        subtitle8:
          "Ekiden\n70 Team Val’Eure Triathon (Adénora Petit, Victor Boulnois, Aline Beau, Guy Boulnois Titouan Guibet, Vincent Petit) 03:19’44",
      },
      {
        title: "B&R de l'hippodrome : La team RATEL dans le tiercé gagnant",
        images: [BnRBernay2025],
        published: new Date("2025-10-31T03:24:00"),
        subtitle1:
          "Votre directeur de course du Bike & Run des Mousseaux le 30 novembre a été bien inspiré de faire le déplacement avec sa compagne Perrine sur le Bike & Run de l'hippodrome à Bernay. Sur le S de 18km, le duo obtient de haute lutte la 3eme place en catégorie équipages mixtes après un mano à mano de 01:20' avec leurs concurrents directs.",
        subtitle2:
          "Merci au SC Bernay, tant pour l'organisation au poil de crin que pour l'atmosphère conviviale !",
        subtitle3:
          "Prochaine destination pour Vincent, cette fois avec son compère Cyprien Malherbe : Oudalle le 09 novembre. Go, guys !",
      },
      {
        title:
          "DUATHLON CROSS DE SAINT-AUBIN D’ESCROSVILLE 2026 : UN CRU… HUMIDE.",
        images: [CrossDuathlon2026],
        published: new Date("2026-02-04T03:24:00"),
        subtitle1:
          "On en serait presque à ne pas regretter que l’annonce d’un temps sec en milieu de semaine ne se soit pas confirmée, tellement l’édition 2026 du Duathlon Cross organisé par les amis du Triathlon pays du Neubourg a été inoubliable car difficile et technique, que ce soit sur les parties pédestres ou à VTT. En plus, un soin thalasso pour chaque athlète compris dans l’inscription, il fallait y penser !",
        subtitle2:
          "Le TVT s’était déplacé en délégation pour cet incontournable de l’hiver puisque ce sont 24 pensionnaires du club qui ont participé à l’une des courses, de la catégorie mini-poussin jusqu’au format S.",
        subtitle3:
          "Les podiums ont été féminins cette semaine grâce à Clémence et Adénora sur le XS, respectivement première cadette et première junior. Très belle performance également pour Thomas Delcourt qui signe pour la 2eme année consécutive un Top 10 (7ème) !",
        subtitle4:
          "Bravo à tous les enfants qui à cette occasion ont découvert une 2eme discipline enchaînée après la saison de Bike &amp; Run et qui s’en sont très bien sortis, notamment Ethan, Jasper et Harmonie.",
        subtitle5:
          "Bravo également à la grande sœur de Luca Pezetta Alicia qui boucle le XS et à Pablo Garrido, grand frère de Sofia qui – auteur d’une remontée éclatante à vélo – a brillamment remporté avec une avance substantielle la course des benjamins.",
        subtitle6:
          'Résultats complets et photos officielles <a href="https://www.triathlonpaysduneubourg.fr/2026/02/01/organisation-3e-duathlon-cross-de-saint-aubin-decrosville/" target="_blank" rel="noopener noreferrer">ici</a>. Photos du club <a href="https://drive.google.com/drive/u/3/folders/1lbuG6wSvu7VzmJFsIe7W2fH3AlC1SVEj" target="_blank" rel="noopener noreferrer">là</a>.',
        subtitle7:
          "Format S (3.3m/13km/1.6km) : Thomas Delcourt : 7 e (57’22), Alexis Rousselin : 23 e (01 :08’03), Yann Quillet : 33 e (01 :13’10), Daniel Corbel : 44 e (01 :19’40), Jean-Marie Rosse : 59 e (01 :28’54)",
        subtitle8:
          "Format XS (1.9km/6.5km/1.2km) : Éthan Dufossé : 6 e (35’27), Johann Hamard : 7 e (35’44), Clémence Mahieu : 18 e (38’54) (1ère cadette), Pierre Laloire : 19 e (39’19), Gabrielle Hamard : 27 e (44’05), Adénora Petit : 28 e (44’11) (1ère junior), Emma Corbel : 30 e (49’43)",
        subtitle9:
          "Format Benjamins (1km/5km/1km) : Levi Dufossé : 13 e (25’50), Simon Geoffriau-Rasmusson : 16 e (26’09), Timothée Jacques : 22 e (28’41)",
        subtitle10:
          "Format Pupilles (480m/2.65km/440m) : Axel Suard : 7 e (11’35), Timéo Rosse : 32 e (14’07)",
        subtitle11:
          "Format Mini- Poussins/ Poussins (300m/1km/300m) : Éthan Berthaux : 11 e (8’02), Jasper Frost : 12 e (8’11), Harmonie Hamard : 19 e (9’08), Madison Le Merrer: 21 e (9’19), Sofia Garrido : 23 e (9’27), Luca Pezetta : 26 e (9’46), Baptiste Suard : 28 e (10’30).",
      },
      {
        title: "DUATHON DE CAEN 2026 : LA SAISON DE PRINTEMPS EST LANCÉE !",
        images: [
          DUCAEN20262,
          DUCAEN20261,
          DUCAEN20263,
          DUCAEN20264,
          DUCAEN20265,
        ],
        published: new Date("2026-03-29T03:24:00"),
        subtitle1:
          "Prisées des athlètes du Team Val’Eure Triathlon, les organisations du Caen Tri voient à peu près tous les six mois débarquer les turquoises et dimanche avait lieu le Duathlon de Caen qui a tenu toutes ses promesses dans des conditions d’abord fraîches pour devenir parfaites au fil de la journée. Une vingtaine de pensionnaires avaient fait le déplacement matinal sans se faire prendre par ce changement d’heure pour être au coup de pistolet sur la ligne.",
        subtitle2:
          "Bravo à Lukas, Ethan et Timéo qui découvraient cet événement d’ampleur et qui se sont drôlement amusés sur le parcours hyper rapide et spectaculaire qui les aura autant ravis que leurs parents de spectateurs.",
        subtitle3:
          "Sur le XS, nos jeunes ont réalisé de belles courses et se sont illustrés. Primeur aux filles, Aline et Clémence, toutes deux 2e de leur catégorie respective tandis que les frères Dufossé sont allés chercher les 2e et 3e temps de vélo ! Il reste encore un peu de temps d’ici la saison de Triathlon pour améliorer l’allure après T2 !",
        subtitle4:
          "Sur le S Open, le TVT peut se satisfaire de plusieurs performances individuelles et de belles places par catégorie : ainsi, Nicolas Duranteau prend la 16e place au scratch en 2eme de sa catégorie (S4), tout comme Vanessa Savidan (V1) et Jean-Marie Rosse (V6), devancé à la photo finish par son comparse Pascal Allard. Bravo également à Luc Durand, Arnaud Jacques, Didier Didou, Vincent Boinet, Mathieu Vanderlinden et Yann Quillet pour leur course ! Un grand big up au passage à Damien Bazire, David Richou et Guile Home, blessé avant ou pour ce dernier pendant la course et à qui nous souhaitons un rétablissement le plus rapide possible ! C’est également à l’ocasion de cette édition 2026 que nous avons à cette occasion appris avec regret la fin (provisoire … ?) du circuit urbain qui a court en raison de travaux. En attendant, c’est avec plaisir que nous reviendrons sur les rives de l’Orne en Septembre pour l’épreuve de contre-la-montre par équipe !",
        subtitle5:
          "Duathlon des Mini-Kids : 43e : Ethan Berthaux  (14e POU), 60e : Lukas Pezetta (22e POU)",
        subtitle6: "Duathlon des Kids : 53e : Timeo Rosse (31e PU)",
        subtitle7:
          "XS Open : 35e : Dufossé Ethan (32’24, 10e MI), 58e : Clémence Mahieu (34’37, 2e JUF), 78e : Lévi Dufossé (37’25, 12e BE), 99e : Aline Jacques (39’59, 2e CAF), 100e : Timothée Jacques (40’10)",
        subtitle8:
          "S Open : 16e : Nicolas Duranteau (57’02 , 2e S4), 89e : Luc Durand (01 :06’14), 92e : Arnaud Jacques (01 :06’51), 102e : Didier Soutif (01 :07’42), 106e : Vincent Boinet (01 :08’09), 112e : Alexis Rousselin (01 :09’21), 144e : Vanes Avidan (01 :13’04, 2e V1), 146e : Yann Quillet (01 :13’06), 166e : Mathieu Vanderlinden (01 :15’13), 197e : Pascal Allard (01 :22’10, 1er V6), 199e : Jean-Marie Rosse (01 :22’20, 2e V6), DNF : Guile Home (-)",
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find((c) => slugify(c.title) === slug);
    },
  },
});
