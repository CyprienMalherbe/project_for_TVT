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
import SEMILUDO from "@/assets/semi-ludo.jpg";
import SEMILISON from "@/assets/semi-lison.jpg";
import FIVEKM20261 from "@/assets/5km2026-1.jpg";
import FIVEKM20262 from "@/assets/5km2026-2.jpg";
import FIVEKM20263 from "@/assets/5km2026-3.jpg";
import FIVEKM20264 from "@/assets/5km2026-4.jpg";
import FIVEKM20265 from "@/assets/5km2026-5.jpg";
import FIVEKM20266 from "@/assets/5km2026-6.jpg";
import FIVEKM20267 from "@/assets/5km2026-7.jpg";
import AMALIA2026 from "@/assets/amalia-2026.jpg";
import aquaresults1 from "@/assets/aquathlon-results-1.jpg";
import aquaresults2 from "@/assets/aquathlon-results-2.jpg";
import aquaresults3 from "@/assets/aquathlon-results-3.jpg";
import aquaresults4 from "@/assets/aquathlon-results-4.jpg";
import aquaresults5 from "@/assets/aquathlon-results-5.jpg";
import aquaresults6 from "@/assets/aquathlon-results-6.jpg";
import aquaresults7 from "@/assets/aquathlon-results-7.jpg";
import aquaresults8 from "@/assets/aquathlon-results-8.jpg";
import aquaresults9 from "@/assets/aquathlon-results-9.jpg";
import aquaresults10 from "@/assets/aquathlon-results-10.jpg";
import resultsaqua1 from "@/assets/results-aquathlon-1.jpg";
import resultsaqua2 from "@/assets/results-aquathlon-2.jpg";
import resultsaqua3 from "@/assets/results-aquathlon-3.jpg";
import resultsaqua4 from "@/assets/results-aquathlon-4.jpg";
import resultsaqua5 from "@/assets/results-aquathlon-5.jpg";
import resultsaqua6 from "@/assets/results-aquathlon-6.jpg";
import dumanneville1 from "@/assets/du-manneville-1.jpg";
import dumanneville2 from "@/assets/du-manneville-2.jpg";
import dumanneville3 from "@/assets/du-manneville-3.jpg";
import dumanneville4 from "@/assets/du-manneville-4.jpg";
import dumanneville5 from "@/assets/du-manneville-5.jpg";
import duneubourg1 from "@/assets/du-neubourg-1.jpg";
import duneubourg9 from "@/assets/du-neubourg-9.jpg";
import duneubourg2 from "@/assets/du-neubourg-2.jpg";
import duneubourg3 from "@/assets/du-neubourg-3.jpg";
import duneubourg4 from "@/assets/du-neubourg-4.jpg";
import duneubourg5 from "@/assets/du-neubourg-5.jpg";
import duneubourg6 from "@/assets/du-neubourg-6.jpg";
import duneubourg7 from "@/assets/du-neubourg-7.jpg";
import duneubourg8 from "@/assets/du-neubourg-8.jpg";
import duneubourg10 from "@/assets/du-neubourg-10.jpg";
import trimai20261 from "@/assets/tri-mai-2026-1.jpg";
import trimai20262 from "@/assets/tri-mai-2026-2.jpg";
import trimai20263 from "@/assets/tri-mai-2026-3.jpg";
import trimai20264 from "@/assets/tri-mai-2026-4.jpg";
import trimai20265 from "@/assets/tri-mai-2026-5.jpg";
import triversailles1 from "@/assets/tri-versailles-1.jpg";
import triversailles2 from "@/assets/tri-versailles-2.jpg";
import triversailles3 from "@/assets/tri-versailles-3.jpg";
import tritpn1 from "@/assets/tri-tpn-1.jpg";
import tritpn2 from "@/assets/tri-tpn-2.jpg";
import tritpn3 from "@/assets/tri-tpn-3.jpg";
import tritpn4 from "@/assets/tri-tpn-4.jpg";
import tritpn5 from "@/assets/tri-tpn-5.jpg";
import tritpn6 from "@/assets/tri-tpn-6.jpg";
import tritpn7 from "@/assets/tri-tpn-7.jpg";
import tritpn8 from "@/assets/tri-tpn-8.jpg";
import tritpn9 from "@/assets/tri-tpn-9.jpg";
import tritpn10 from "@/assets/tri-tpn-10.jpg";
import ventoux1 from "@/assets/ventoux-1.jpg";
import ventoux2 from "@/assets/ventoux-2.jpg";
import tricarrieres20261 from "@/assets/tri-carrieres-2026-1.jpg";
import tricarrieres20262 from "@/assets/tri-carrieres-2026-2.jpg";
import tricarrieres20263 from "@/assets/tri-carrieres-2026-3.jpg";
import tricarrieres20264 from "@/assets/tri-carrieres-2026-4.jpg";
import tricanada2026 from "@/assets/tri-canada-2026.jpg";
import ironmantours2026 from "@/assets/ironman-tours-2026.jpg";
import deauville2026 from "@/assets/deauville-2026.jpg";
import sables20261 from "@/assets/sables-2026-1.jpg";
import sables20262 from "@/assets/sables-2026-2.jpg";
import sables20263 from "@/assets/sables-2026-3.jpg";
import sables20264 from "@/assets/sables-2026-4.jpg";
import sables20265 from "@/assets/sables-2026-5.jpg";
import franceaquathlon20261 from "@/assets/france-aquathlon-2026-1.jpg";
import franceaquathlon20262 from "@/assets/france-aquathlon-2026-2.jpg";
import trailfred2026 from "@/assets/trail-fred-2026.jpg";
import ironmanespagne2026 from "@/assets/ironman-espagne-2026.jpg";

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
      {
        title: "SEMI-MARATHON : tout roule !",
        images: [SEMILUDO, SEMILISON],
        published: new Date("2026-04-08T03:24:00"),
        subtitle1:
          "Pendant que ça cherchait à trouver le bon pack à Caen le 29 mars, Lison Malherbe et Ludovic Cauchois étaient alignés sur semi, la première à Cabourg et le second à Elbeuf.",
        subtitle2:
          "Ludovic a réalisé une course très très solide, tournant à une allure moyenne de 3’33/km et termine 27e au scratch 1er Master🥇 en 01 :15’40. Bravo au passage également à Véronique Hertay pour son RP en 01:27'20 !",
        subtitle3:
          "🏆 Quant à Lison, c'était son tout premier dossard sur semi et elle a comme prévu  franchi la ligne d’arrivée en compagnie de son pacer de mari après 02:04’20 de course. Il y a des courses qui font plus sens que d’autres. Celle-ci en fait partie. Se sachant désormais capable, n’ayons aucun doute sur le fait qu’elle ne tardera pas à se lancer d’autres défis excitants en course à pied ou en triathlon, qui sait…, 70.3…?  🤩",
      },
      {
        title: "Week-end 100% CAP",
        images: [
          FIVEKM20261,
          FIVEKM20262,
          FIVEKM20263,
          FIVEKM20264,
          FIVEKM20265,
          FIVEKM20266,
          FIVEKM20267,
        ],
        published: new Date("2026-04-15T03:24:00"),
        subtitle1:
          "Il y avait l'embarras du choix ce week-end pour prendre un dossard : en solo, en individuel, en famille, sur 5km ou 10km, aux Foulées lovériennes vendredi soir et sur les Boucles de l'Eure à Gaillon dimanche matin.",
        subtitle2:
          "👏👏👏 Bravo à l'ensemble des coureurs et coureuses, particulièrement à Aline Jacques🥈et Clémence Mahieu 🥇, à nouveau sur un podium par catégorie après le Duathlon de Caen, à Thomas Delcourt et Ludovic Cauchois pour leur temps sur 10km ainsi qu'à Gabrielle Hamard et Laura Stravidis pour leur tout premier 5km! ",
        subtitle3:
          "Également un grand, grand bravo à Didier Soutif pour son temps de 03:27' (4'54/km) sur le marathon de Paris. Une excellente préparation pour l'Ironman de Tours! 🦸‍♂️",
        subtitle4: "Résultats complets (TVT):",
        subtitle5:
          "Foulées lovériennes (Relais familles) : 9e : Timothée Jacques / Arnaud Jacques (11’22), 17e : Nelson Paturel / Vanessa Savidan (11’51), 57e : Paul Rocher / Olivier Rocher (16’56)",
        subtitle6:
          "Foulées lovériennes (Course Poussins / Benjamins) : 9e : Lévi Dufossée Cerneau (5’41), 33e : Paul Rocher (6’40)",
        subtitle7:
          "Foulées lovériennes (5km, 453 classés) : 55e : Dufossé Cerneau Ethan (21’21, 5e MIH), 63e : Arnaud Jacques (21’39), 65e : Johann Hamard (21’44), 118e : Lucie Hamard 24’14 (2e MIF), 172e : Gabrielle Hamard 26’35 (5e MIF), 189e : Aline Jacques 27’23 (3e CAF), 226 : Perrine Ratel (28’47), 290 : Marianne Jacques (29’08), 240 : Aline dieppois (29’09), 241 : Cédric Martin (29’09), 335e : Laura Stravidis (31’42), 348 : Natalia Bastart (33’11)",
        subtitle8:
          "Foulées lovériennes (10km, 325 classés) : 14e : Thomas Delcourt (37’22), 15e : Sylvain Gangloff (38’24), 37e : Vincent Ratel (42’26), 51e : Vincent Boinet (43’48), 85e : Vincent Petit (48’19), 103e : Clémence Mahieu (49’58, 1ere JUF), 165e : Harmonie Petit (54’13), 227e : Gérald Viger (59’18)",
        subtitle9:
          "Boucles de l’Eure (5km, 255 classés) : 78e : Damien Garnier (21’14, 3e M3H), 95e : Mathieu Vanderlinden (22’24), 196e : Aline Dieppois (30’34)",
        subtitle10:
          "Boucles de l’Eure (10km, 253 classés) :, 9e : Ludovic Cauchois (35’06, 2e M2H), 48e : Éric Pintus (41’28), 75e : Viviane De Abreu (44’21, 1ere M2F), 93e : Grégory Pezzetta (45’12), 114e : Luc Fossaert (46'551), 124e : Cédric Martin (48’23), 155e : Jean-Marie Rosse (50’49)",
      },
      {
        title: "GLÜCKWUNSCH! UN GRAND BRAVO À AMALIA !",
        images: [AMALIA2026],
        published: new Date("2026-04-20T03:24:00"),
        subtitle1:
          "De passage dans la capitale autrichienne pour quelques jours de vacances, Amalia a épinglé samedi pour la première fois un dossard sur son t-shirt club pour un run de 800m à proximité des plus beaux monuments viennois en compagnie de papa, sous un soleil aussi radieux que son visage à l'arrivée. Elle a éprouvé beaucoup de plaisir lors de cette course et était fière de l'avoir fait « sans marcher »! ",
        subtitle2:
          "Amalia, touchée par le syndrome de Williams et Beuren, a rejoint le club avec beaucoup d’enthousiasme à l’automne 2025 où elle a bénéficié d’un accueil bienveillant et où elle s' épanouit chaque semaine.",
        subtitle3:
          'Pour en savoir plus sur ce syndrome, n’hésitez pas à visiter le site de l’association « Autour des William » <a href="https://www.autourdeswilliams.org " target="_blank" rel="noopener noreferrer">ici</a> !',
      },
      {
        title: "AQUATHLON JEUNES DE GAILLON 2026",
        images: [
          aquaresults1,
          aquaresults2,
          aquaresults3,
          aquaresults4,
          aquaresults5,
          aquaresults6,
          aquaresults7,
          aquaresults8,
          aquaresults9,
          aquaresults10,
          resultsaqua1,
          resultsaqua2,
          resultsaqua3,
          resultsaqua4,
          resultsaqua5,
          resultsaqua6,
        ],
        published: new Date("2026-05-01T03:24:00"),
        subtitle1:
          "🐣Mini-Poussins : 🥇Lou Fonthenau (Rouen Triathlon); 🥈Lucie Bachet (Caen Triathlon), 🥉Lyv Blin (Caen Triathlon), 🥇Côme Souami (Caen Triathlon), 🥈Marin Gahery (Caen Triathlon), 🥉Baptiste Suard (TVT)",
        subtitle2:
          "🐥Poussins : 🥇Alice Theis (TPN), 🥈Lily Gauchet (Piranhas), 🥉Vanille Acher (MSA Triathlon), 🥇Arthur Mantois (Lions Vernon), 🥈Lambert Meuric (Piranhas), 🥉Tom (Caen Triathlon) ",
        subtitle3:
          "🐵Pupilles (après 2 manches) :🥇Aline Tartarin (Les Vikings Rouen), 🥈Lisa Langlois (non lic.), 🥉Blanche Suard (Caen Triathlon), 🥇Lucas Simon (Rouen Triathlon), 🥈Adâm Toyb (Rouen Triathlon), 🥉Lucas Ebran (Caen Triathlon)",
        subtitle4:
          "🦸 Benjamins : 🥇Manel Lebas (Rouen Triathlon), 🥈Louane Delamare (Andelle Natation), 🥉Lou Acher (MSA Triathlon), 🥇Thomas Thuillier (Rouen Triathlon), 🥈Charly Mantois (Lions Triathlon, 🥉Aloïs Tartarin (Rouen Triathlon)",
        subtitle5:
          "🦹‍♀️ Minimes  (après 2 manches) : 🥇Inès Hadj Ali, 🥈Emmie Lefrançois (TPN), 🥉Gabrielle Hamard (TVT), 🥇 William Sanchez (Rouen Triathlon), 🥈 Martin Barthlemy (Lions Vernon), 🥉 Lenny Lecaplain (TVT)",
      },
      {
        title: "DUATHLON DE MANNEVILLE",
        images: [
          dumanneville1,
          dumanneville2,
          dumanneville3,
          dumanneville4,
          dumanneville5,
        ],
        published: new Date("2026-05-04T03:24:00"),
        subtitle1:
          "Le 26 Avril s'est déroulé l'autre Duathlon du pays de Caux, à Maneville les Plains : un parcours sélectif, du vent côtier, du dénivelé positif et une première en disciplines enchaînées pour Lucie Hamard déjà rodée en course à pied jusqu'à la distance semi-marathon. Et pour cette première, elle l'emporte 🥇 en catégorie d'âge, partageant le podium XS avec sa collègue de club Marianne Jacques sur la 3e 🥉 marche, tout comme Johann Hamard 🥉chez les masculins.",
        subtitle2:
          "Côtés jeunes sur ce même format, Gabrielle Hamard et Aline Jacques terminent respectivement première Minime 🥇et Cadette tandis que Timothée Jacques se classe 4e Benjamin 🏅.",
        subtitle3:
          "Enfin, sur le S, Vincent Boinet atteste à nouveau de sa bonne forme du moment ",
        subtitle4:
          "Un grand bravo aux TVTistes présents et un grand merci aux organisateurs pour cette 3e édition qui en appelle une autre sur laquelle se déplaceront sans aucun doute les noir & turquoise...",
        subtitle5:
          "Duathlon XS : 7e : Johann Hamard (3e master), 12e : Lucie Hamard (1ere féminine), 14e : Timothée Jacques (4e benjamin), 17e : Aline Jacques (1ere cadette), 19e : Gabrielle Hamard (1ere Minime), 25e : Marianne Jacques (3e master fémines) ",
        subtitle6: "Duathlon S : 22e : Vincent Boinet, 25e : Arnaud Jacques ",
      },
      {
        title: "DUATHLON DU NEUBOURG",
        images: [
          duneubourg1,
          duneubourg9,
          duneubourg2,
          duneubourg3,
          duneubourg4,
          duneubourg5,
          duneubourg6,
          duneubourg7,
          duneubourg8,
          duneubourg10,
        ],
        published: new Date("2026-05-05T03:24:00"),
        subtitle1:
          "La saison de duathlon 2026 se sera achevée pour la Team  au Neubourg en ce vendredi 1er mai avec une belle délégation de jeunes du TVT sur cette toute nouvelle épreuve du calendrier de la Ligue de Normandie de Triathlon à l'organisation millimétrée made in TPN!",
        subtitle2:
          "Notons chez les petits  les belles places de nos mini-poussines Madison Le Merrer, Sofia Garrido et Baptiste Suard, respectivement 3e et 4e de leur catégorie ainsi que l'accession à un  top 10 pour Ethan Berteaux, Axel Suard et Timothée Jacques à l'issue d'une très belle remontée à pied pour ce dernier.",
        subtitle3:
          "Sur les courses open, Clémence Mahieu et Aline Jacques - conformément à leurs habitudes - montent sur le podium cadettes et juniores sur  XS  tandis que Leny Lecaplain termine 2e Minime et se hisse dans le top 10 au scratch alors que Damien Garnier, 16e, termine 1er M3.",
        subtitle4:
          "Une belle journée sportive et ensoleillée (et ventée!) sur le plateau et beaucoup de plaisir pour les noir & turquoise.",
        subtitle5:
          "Merci aux copains du TPN pour ce bel événement! Nous aurons plaisir à vous rendre à nouveau visite à la fin du mois pour le Triathlon Terres de Normandie à Brionne! 🏊‍♀️🚴🏃",
        subtitle6: "RÉSULTATS COMPLETS TVT :",
        subtitle7:
          "DU Mini-Poussins/Poussins : 10e : Ethan Berteaux (9'18), 17e : Madison Le Merrer (10'04, 3e MPO🥉), 18e : Sofia Garrido (10'07, 4e MPO🏅), 20e : Baptiste Suard (10'42, 4e MPO🏅), 21e : Luca Pezetta ",
        subtitle8:
          "DU Pupilles : 9e : Axel Suard (13'43), 21e : Milan Amand (16'57), 24e : Savanna Mirkovic (17'45)",
        subtitle9: "DU Benjamins : 10e : Timothée Jacques (23'39)",
        subtitle10:
          "FORMAT XS : 9e : Leny Lecaplain (32'15, 2e MI🥈), 16e : Damien Garnier (33'37, 1er M3🥇), 24e : Pierre Laloire (35'42) , 27e : Clémence Mahieu ( 36'50, 1ere JUF🥇), 32e : Aline Jacques (40'19, 2e CAD🥈)",
        subtitle11:
          "FORMAT S : 36e : Alexis Rousselin (01:10'44), 41e : Vincent Boinet (01:12'52)",
      },
      {
        title: "EN MAI : DEUX TRI, DEUX AMBIANCES !",
        images: [
          trimai20261,
          trimai20262,
          trimai20263,
          trimai20264,
          trimai20265,
        ],
        published: new Date("2026-05-28T03:24:00"),
        subtitle1:
          "Qui aurait pu imaginer… ? Qui aurait pu imaginer des conditions climatiques aussi contrastées en l’espace de quinze petits jours ? Le 10 Mai à La Bonneville, ce sont des températures peinant à franchir les quinze degrés qui ont accompagné les coureurs toute la journée et même des trombes d’eau sur le format tandis que pour la 35e édition du triathlon de Pont-Audemer, c’est une chaleur accablante qui s’est abattue ce dimanche sur la course avec des corps mis à rude épreuve, menant à 45 abandons sur la distance olympique.",
        subtitle2:
          "👏👏👏La performance du week-end est féminine et à attribuer à Vaness Avidan, 184e au scratch du format M de Pont-Audemer, 13e féminine et 1ere master 🥇. C'est le fruit d’un entraînement minutieux et assidu durant ces derniers mois qui lui permet une progression solide. Une dernière course d’entraînement qui peut laisser entrevoir le meilleur pour l’Ironman de Tours où elle se rendra en compagnie de cinq de ses camarades de club, mais sans Gaylord Crayon. Tout juste de retour de blessure après une vilaine entorse, il aura limité les dégâts pour son retour à la compétition avec un temps à l’arrivée en deçà de ses standards. Sa mine émoussée à l’arrivée, comme d’autres le teint grisâtre sous les brumisateurs de fortune montre ses limites actuelles, logiques.  D’autres objectifs vont se dessiner, axés plaisir, avec pourquoi pas pour lui quelques critériums estivaux…",
        subtitle3:
          "Ces conditions relativement  extrêmes ont certes été gênantes, mais c’est bien peu au regard de conséquences bien plus graves et effrayantes. Aussi, nous avons une pensée pour les personnes qui envisageaient en ce dimanche juste de se faire plaisir sur un sport de plein-air.",
        subtitle4:
          "Plus tôt dans le mois, on se serait cru faire un tri en plein novembre, dans des conditions tout aussi rudes dans leur genre. Ceci n’a pas empêché Cyprien Malherbe de réaliser une course de costaud sur le M pour finir 28e en affleurant les 02:20’ !",
        subtitle5:
          "Big-up également à Vincent Eveno, qui a rejoint le club en septembre, pour cette première course sous nos couleurs ainsi qu’à Vincent Boinet qui gagner 10’ dont 3’ sur la nata sur son triple enchainement entre La Bonneville et Pong-Audemer ! ",
        subtitle6:
          "Quant à Olivier Caldier, présent sur ces deux triathlons de Mai, à savoir s’il serait en mesure de dire lequel il avait préféré, il aurait peut-être pu répondre : ni l’un ni l’autre, bien au contraire !",
        subtitle7:
          "Triathlon S (Triathlon de la Vallée de l’Iton – La Bonneville) 191e : Vincent Boinet (01 :41’39)",
        subtitle8:
          "Triathlon M (Triathlon de la Vallée de l’Iton – La Bonneville), 28e : Cyprien Malherbe (02:20’56), 84e : Vincent Eveno (02 :36’04), 166e : Olivier Caldier (03 :05’14)",
        subtitle9:
          "Triathlon S (Triathlon de Pont-Audemer), 150e : Vincent Boinet (01 :30’06)",
        subtitle10:
          "Triathlon M (Triathlon de Pont-Audemer), 128e : Gaylord Crayon (02 :47’23), 166e : Didier Soutif (02 :52’46), 184e : Vaness Avidan (02 :54’47) – 1ere Master féminine, 313e : Luc Fossaert (03 :10’51), 347e : Olivier Caldier (03 :20’24)",
      },
      {
        title: "Tri Versailles",
        images: [triversailles1, triversailles2, triversailles3],
        published: new Date("2026-06-03T03:24:00"),
        subtitle1:
          "Déjà en verve la semaine passée sur le Triathlon de Pont-Audemer, Vaness emporte cette fois dans le cadre du Versailles Triathlon Festival le duathlon familial en compagnie de Nelson. Bravo, les binômes! 🖤💙 ",
        subtitle2:
          "La place des combis était décidément au placard en cette fin de période de fortes chaleurs et c'est sans trop de suspens que la confirmation d'une natation en trifonction dans les bassins du château!",
        subtitle3:
          "Lison et Cyprien avaient en effet privilégié la destination versaillaise également en raison du circuit vélo fermé - et donc du drafting autorisé pour ce triathlon du roi et et la reine.",
        subtitle4:
          "Gros niveau sur l'épreuve francilienne dans une course de mouvement et notre  Cyprien qui s'est employé pour intégrer un top 100 en 01:13'39 tandis que sa mie Lison bouclait la distance en 01:36'56.",
      },
      {
        title: "TRIATHLON TERRES DE NORMANDIE 2026",
        images: [
          tritpn1,
          tritpn2,
          tritpn3,
          tritpn4,
          tritpn5,
          tritpn6,
          tritpn7,
          tritpn8,
          tritpn9,
          tritpn10,
        ],
        published: new Date("2026-06-02T03:24:00"),
        subtitle1:
          "Épreuve prisée depuis sa création concomitante à celle du Triathlon des 2 Amants en 2021, le Triathlon Terres de Normandie organisé au carré par le TPN a à nouveau vu débarqué sur la base de loisirs de Brionne une très belle délégation du TVT composée d’une trentaine d’athlètes de 7 à… pas encore 77 ans !",
        subtitle2:
          "Ce sont les filles qui se sont particulièrement illustrées cette semaine avec une Vaness Avidan inarrêtable en ce moment et qui monte pour son ultime course d’entrainement avant l’Ironbman de Tours sur le podium féminin des Masters et l’ emporte même  dans sa catégorie d’âge (M1). Chez les filles, le  Triathlon Terres de Normandie 2026 restera également le premier enchainement complet pour Harmonie Hamard en poussins, Aline Jacques sur format XS, Clémence Mahieu et Laura Stradivarius sur le format S tandis que Gabrielle Hamard et Emma Corbel ont amélioré leur temps de 2025. Good job, girls !",
        subtitle3:
          "Les garçons ne sont cependant pas en reste avec un Guile Home qui rate de très peu le top50 malgré sa perf' solide et son joli brin de voix et un Baptiste Parisy costaud sur la distance olympique avec un temps de 02 :23’ tandis que des Luc Fossaert, Olivier Caldieraméliorent nettement leur temps de la semaine précédente à Pont-Audemer.",
        subtitle4:
          "Le XS a lui ressemblé à un choc des générations et sans offense ni mauvaise foi aucune, on peut dire que l’école de triathlon l’a emporté, même si Damien Garnier a su bien se défendre face à Leny Lecaplain qui termine 37e en 45’43 et Pierre Laloire 66e en 45’15. Également sur ce même format,  c'était une première Nelson Paturel.",
        subtitle5:
          "Une chose est par ailleurs sûre, il n’y a pas que Papy qui fait de la résistance mais Pascal Allard et Daniel Corbel. Il reste encore un peu de chemin (ou de temps…) avant que la jeunesse prenne le pouvoir sur leurs aînés !",
        subtitle6:
          "Bravo encore à l’ensemble des athlètes alignés sur les courses enfants, XS, S ou M solo ou en relais et bonne récup’ !",
        subtitle7:
          "PS : bien sûr, nous avons également une pensée solidaire et de soutien à l’adresse de Louen qui, suite à une chute à vélo, a dû être pris en charge par les secours et transféré au CHU de Rouen. Une grosse frayeur pour lui et quelques semaines de convalescence avant de reprendre le sport. Bon courage à lui !",
        subtitle8:
          "Course Poussins : 24e : Ethan Berthaux, 25e : Harmonie Hamard, DNF : Louen Ötzgu",
        subtitle9: "Course Pupilles : 9e : Axel Suard, 44e : Timéo Rosse",
        subtitle10: "Course Benjamins 19e : Grégoire Lenoble (27’30)",
        subtitle11:
          "Triathlon XS : 37e : Leny Lecaplain (44’43), 46e : Damien Garnier (45’15), 66e : Pierre Laloire (47’47), 77e : Pascal Allard ((49’13), 79e : Daniel Corbel (49’22), 82e : Timothée (49’43), 86e : Simon Geoffriau Rasmusson (50’51), 92e : Nelson Paturel (52'04), 103e : Gabrielle Hamard (54’02), 111e : Aline Jacques (57’21), 119e : Emma Corbel (58’25)",
        subtitle12:
          "Triathlon S : 52e : Guile Home (01:10'23), 116e : Johann Hamard (01:15’58), 166e : Adénora Petit (01:20’37) / 1ere CADF, 250e : Vincent Boinet (01:26’34), 287e : Clémence Mahieu (01:30’37), 339e : Laura Stradivarius (01:39’05)",
        subtitle13:
          "Triathlon M, distance olympique : 113e : Baptiste Parisy (02:23’38), 182e : Arnaud Jacques (02:33’25), 188e : Vaness Avidan (02:33’57) / 3e MAF / 1ere MA1F, 270e : Luc Fossaert (02:44’41), 288e : Olivier Caldier (02:47’03), 303e : Vincent Petit (02:47’30), 352e : Cyril Fournol (02:57'18), 395e : Harmonie Petit (03 :09’42)",
        subtitle14:
          "Triathlon M (relais) 13e : Team Blue Power (02:34'26) composé de Johann, Daniel et Lucie",
      },
      {
        title:
          "X-RACE-ADVENTURE 2026 : LE VENTOUX SOUS TOUS LES ANGLES POUR UN ATHLÈTE XXL!",
        images: [ventoux1, ventoux2],
        published: new Date("2026-06-08T03:24:00"),
        subtitle1:
          "Yann Quillet est parmi les pensionnaires du TVT un AVNI (athlète vélocypédestre non identifié) pas avare de facéties et de projets un peu fous, tant qu'ils impliquent de la longueur et de la durée dans l'effort : Ironman, Ultramarin, Grand raid des Cathares, il les enchaine de saisons en saisons avec un flegme et une détermination sans pareils.",
        subtitle2:
          "Le 30 mai figurait donc à son programme une triple ascension (et redescente) du Mont Ventoux, à VTT, en trail et en vélo de route à l'occasion de la X-Race Adventure. Si la première montée s'est bien passée, la seconde à pied sous la chaleur accablante dans le Vaucluse en cette fin de canicule a laissé des traces trop indélébiles pour repartir dans de bonnes conditions  sur une 3eme support.",
        subtitle3:
          "Yann a donc avec sagesse décidé d'en rester là, mais sans aucune place laissée à la déception: 'Je reviendrai en touriste terminer le boulot...'.",
        subtitle4:
          "Sacré Yannou ! Bravo à toi et on est déjà curieux de connaître quel sera le prochain défi !",
      },
      {
        title:
          "TRIATHLON DES CARRIÈRES / CHAMPIONNAT DE NORMANDIE D’AQUATHLON JEUNES 2026",
        images: [
          tricarrieres20262,
          tricarrieres20261,
          tricarrieres20263,
          tricarrieres20264,
        ],
        published: new Date("2026-06-16T03:24:00"),
        subtitle1:
          "Alors que beaucoup avaient ce week-end les yeux rivés vers la Touraine, q uelques TVTistes avaient pris un dossard ce dimanche sur l’épreuve des carrières organisée par MSA Triathlon et qui s’installe depuis trois ans de plus en plus dans le paysage sportif pré-estival.",
        subtitle2:
          "👩‍❤️‍👨Sur le S Duo, Lison et Cyprien Malherbe bouclent le parcours en 01 :13’36, améliorant ainsi leur temps de l’an passé dans les trois sports avec à l’arrivée -3’10 sur leur chrono précédent ! Belle performance même si on aurait évidemment aimé les voir monter sur la boîte… la faute à Maud Villeval et Quentin Patat du HAC Triathlon, Maud qui est bien connue du TVT et avait remporté le Triathlon des 2 Amants L en 2024 et reviendra sur notre orga à la base de loisirs de Léry-Poses le 13 septembre pour reconquérir le maillot de championne de Normandie !",
        subtitle3:
          "🏊‍♀️🚴🏃‍♂️Sur les courses enfants, Axel Suard réalise sa meilleure performance sur cette saison de printemps avec une belle 5e place 🏅 notamment acquise grâce à une très bonne natation, un bon vélo et de bonnes transitions.",
        subtitle4:
          "👏Bravo également à Ethan Berthaux qui poursuit son apprentissage et réalise après Brionne son 2e enchainement complet avec une natation en eau libre. Il termine 14e du la course poussins.",
        subtitle5:
          "🏊‍♀️🏃‍♂️Le championnat de Normandie jeunes d’Aquathlon était également programmé à cette occasion. Le club comptait deux représentants sur le format XS en catégorie Benjamins et Minimes. Lény Lecaplain se classe 23e (8e Minime) en 20’44 tandis que Simon Geoffriau-Rasmusson termine à la 33e place à 2e de son partenaire d’entrainement. ",
      },
      {
        title: "TRIATHLON DU PLAN D'EAU DU CANADA : COURSE AMIRALE POUR NELSON",
        images: [tricanada2026],
        published: new Date("2026-06-16T03:24:00"),
        subtitle1:
          "Pendant que maman Vaness était en train de construire une perf une nouvelle solide sur Ironman du côté des châteaux de la Loire, Nelson comptait bien être un des acteurs du week-end du côté du Triathlon du plan d'eau du CANADA à Beauvais.",
        subtitle2:
          "À peine 15' de course furent nécessaires pour nager 150m, rouler 2km et courir 1500m et terminer à une belle 54e place sur 136 classés de la course 10-13ans.",
        subtitle3: "Bravo, Nelson! 👏",
      },
      {
        title: "TOURS DE FORCE SUR IRONMAN !",
        images: [ironmantours2026],
        published: new Date("2026-06-18T03:24:00"),
        subtitle1:
          "Ils sont une demi-douzaine de turquoises à ne pas avoir manquer l’occasion de prendre leur dossard sur la toute première édition de l’Ironman de Tours dimanche dernier et c’est tout un club qui a vibré au bord du parcours ou derrière l’écran et a suivi ces six fantastiques pour leur tout premier full pour les uns ou le temps de la confirmation pour les autres. ",
        subtitle2:
          "C’est le cas de Vaness Avidan qui en était à son 3e départ sur iron et que l’on sentait forte depuis le début du printemps ! S’il y en a une qui a été au rendez-vous de son objectif sportif de 2026, c’est elle, qui réalise la meilleure performance club malgré des troubles digestifs intervenus très tôt dans la course. Dotée d’une force mentale sans pareille, elle sera parvenue à surmonter la douleur pour presque égaler sa meilleure performance sur la distance de 12:07’27, pas si loin du sub 12 :00 qu’elle a assurément dans les jambes… et la tête ! ",
        subtitle3:
          "Cédric Martin, à juste titre confiant, a réalisée jusqu’à T2 une course absolument magistrale avec une natation en 01:06’ et un vélo en 05:22’. Un temps, la projection a même été sous les 11h mais « Tac » a rapidement souffert lui aussi de la chaleur à pied et rallie la ligne d’arrivée à l’issue d’un marathon aux airs de sacerdoce.",
        subtitle4:
          "Autre vieux briscard de l’IM et désormais athlète du TVT le plus capé sur 226km, Vincent Petit prouve une nouvelle fois la pertinence de son approche disruptive quant à la préparation d'un Full. Son ouvrage, « l’IM à la cool », est disponible aux éditions « noir et turquoise ». On le charrie, mais grand respect à lui et pour ce qu'il réalise de manière toujours bluffante!",
        subtitle5:
          "Et puis, il y avait les nouveaux : Vincent Eveno, aussi humble et discret que prometteur et Didier Soutif, dont la grande inquiétude était de passer la barrière horaire à T1 : transcendé par l’événement, il réalise une nata de l’espace en moins de 01 :30, lui qui était pour ainsi dire non-nageur à son arrivée au club il y a deux saisons ! Ensuite, il a su gérer sa course étape par étape et « claquer » malgré la chaleur un marathon en 04:07’, meilleure performance parmi les athlètes club. Vincent a lui joué la sécurité et fait un enchainement des plus cohérents pour finir sous les 13h !",
        subtitle6:
          "Seule ombre au tableau de cette journée solaire, l’abandon de Sébastien Benoit au seuil du second semi, victime d’une insolation qui l’aura laissé pétrifié… La joie ne peut donc être complète et aurait dû l’être avec sur le papier une préparation aussi sérieuse et assidue. Malheureusement, ça ne s’est pas passé comme prévu… pour cette fois. On espère de tout cœur qu’il parviendra à passer outre cette déconvenue et que les stigmates, physiques comme dans la tête, s’estomperont et nul doute qu’il trouvera des compagnons de route pour l’accompagner jusqu’à cette foutue cloche, cette fois... : You are 90% of an Ironman !",
        subtitle7:
          "Tout le club est fier de vous, des efforts fournis et de l’abnégation dont vous avez su faire preuve. Maintenant, vous pouvez relâcher et profiter de votre succès.",
        subtitle8:
          "Désormais, place à Guy Boulnois samedi sur le full Open Lakes du Lac de Der en Champagne. À nouveau, l’effervescence sera de mise… Go, Guy ! ",
        subtitle9:
          "1448 : Vaness Avidan (12:17’29), 1636 : Didier Soutif (12:38’39), 1692 : Cédric Martin (12:45’06), 1770 : Vincent Evenno (12:54’13), 1909 : Vincent Petit (13 :17’15), DNF : Sébastien Benoit (206km)",
      },
      {
        title:
          "TRIATHLON DE DEAUVILLE : PASCAL ET SES DRÔLES DE DAMES EN DÉCOUVERTE...",
        images: [deauville2026],
        published: new Date("2026-06-27T03:24:00"),
        subtitle1:
          "L'épreuve qui avait subi il y a quelques années une annulation pour événement climatique extrême est passé cette années entre les gouttes et a pu se tenir.",
        subtitle2:
          "Quelques TVTistes l'avaient coché très tôt dans la saison. Parmi eux, Laura Stradivarius, dont c'était l'objectif de saison et la raison de son arrivée au club il y a huit mois.",
        subtitle3:
          "Également présents  sur le format découverte, Lison Malherbe et Pascal Allard terminent dans la même seconde en  01:46'32 et dans le top 25%, avec un profil de course tout à fait différent, l'avantage allant à Lison sur la partie natation tandis que Pascal faisait une bonne partie de son retard sur le vélo. ",
        subtitle4:
          "On n'oublie pas sur le format olympique (M) Yann  Quillet , habitué de la côte fleurie, qui termine les 51,5km en 03:16'04 de course ainsi que Harmonie Petit, associée en relais à ses collègues du team Cani-X",
        subtitle5:
          "Désormais, ils ont mérité de basculer en mode estival, avec un petit crochet par les Sables d'Olonne le week-end prochain pour Harmonie Petit...",
        subtitle6:
          "Format découverte (1736 partants), 420e : Lison Malherbe (01:46'32), 421e  : Pascal Allard (01:46'32), 1164e : Laura Stradivarius (02:05'00)",
        subtitle7: "Format M :1000e : Yann Quillet (03:16'04)",
      },
      {
        title:
          "PAS UN GRAIN DE SABLES, NI DANS LA MÉCANIQUE, NI DANS LA CHAUSSURE ET SIX FINISHERS SUR 70.3 !",
        images: [
          sables20261,
          sables20262,
          sables20263,
          sables20264,
          sables20265,
        ],
        published: new Date("2026-07-08T03:24:00"),
        subtitle1:
          "Contrat rempli pour la délégation 2026 du TVT aux Sables et six réussites pour parfaire une magnifique journée démarrée à 7h30 avec les premières vagues bénéficiant de la fin de marée montante. ",
        subtitle2:
          "Cyprien Malherbe réalise un triple enchainement – disons-le – magistral pour sa première confrontation avec le format, tout en maîtrise et dans les plages d’allures pré-définies, ce qui lui permet de franchir la mythique arche en 04 :45’19, d’intégrer le cercle des 10% des coureurs les plus rapides de l’édition et (à un cheveu…, enfin deux !) un Top200, excusez du peu… ! 💪",
        subtitle3:
          "Alex aura également réalisé une très belle course jusqu’à la pose du vélo. Ensuite, ça s’est vraiment compliqué, au contraire de Arnaud Jacques, bien qu’empêché par des pépins récents et Harmonie Petit en désormais « vieille briscarde » de l’Half pour qui la course à pied a été un point positif.",
        subtitle4:
          "Saluons également la présence d’un vieux compagnon de route et habitué, Luc Durand, qui peut-être sans le savoir s’est livré à un mano à mano indécis avec un autre Luc du club, Luc Fossaert, qui doit reconnaître que cette fois, la jeunesse l’aura emporté sur la sagesse. ",
        subtitle5:
          "Mais le big-up de la semaine va sans conteste à Margot Delaunay qui pour sa 3e tentative sur l’épreuve et officiellement Finisher de l’Ironman 70.3 des Sables d’Olonne, après avoir dépassé la barrière horaire de 4 minuscules minutes en 2022 et été victime d’un ennui mécanique deux ans plus tard.",
        subtitle6:
          "La 3e fut la bonne, tout aussi bonne que la préparation fut minutieuse. Margot est un modèle de résilience et d’abnégation inspirant. Bravo pour cette fantastique réussite, Margot ! 👏👏👏",
        subtitle7:
          "Désormais, place à la récup' et aux doigts de pieds en éventail... ",
        subtitle8:
          "🖤💙Résultats complets Team TVT : 200e : Cyprien Malherbe (04 :45’19), 696e : Arnaud Jacques (05 :14’30), 1338e Luc Fossaert (05 :43’00), 2517e : Alexandre « Goun » Joly : (07 :07’32), 2572e : Harmonie Petit (07:19’02), 2659e : Margot Delaunay (07:50’58) ",
      },
      {
        title:
          "CHAMPIONNAT DE FRANCE D'AQUATHLON 2026 :  ADÉ N'AURA PAS DÉMÉRITÉ !",
        images: [franceaquathlon20261, franceaquathlon20262],
        published: new Date("2026-07-11T03:24:00"),
        subtitle1:
          "Les championnats de France d'Aquathlon se déroulaient ce matin à Lapalud dans le Vaucluse. Après l'annulation de la demi-finale à Tours en raison de l'épisode de canicule, Adénora Petit s'est vue octroyer une place sur critères par la ligue de Normandie de Triathlon.",
        subtitle2:
          "Un départ matinal à 8h30 était définitivement la bonne option choisie par les organisateurs et la pensionnaire du TVT s'est bien débrouillée sur les 1000m de nata avec un temps de 17'21 dans ses standards. Certes, pas dans ceux de celles qui jouaient le titre, un podium ou une place, tellement le niveau était élevé, mais peu  importe. Avec un déficit d'entrainement à pied en raison d'une périostite qui tarde à se résorber, elle a finit avec les moyens du jour, avec comme toujours le large sourire qui la caractérise et le sentiment d'avoir vécu une belle expérience sportive.",
        subtitle3:
          "Merci à la ligue de Normandie pour l'accompagnement et place désormais aux vacances avant de se fixer de nouveaux objectifs d'ici l'automne!",
      },
      {
        title:
          "RESTONICA TRAIL BY UTMB : VRAIMENT DE QUOI EN FAIRE TOUT UN FROMAGE!",
        images: [trailfred2026],
        published: new Date("2026-07-14T03:24:00"),
        subtitle1:
          "Elle n'est pas mince, la performance quintuple, sextuple, décuple XL réalisée par Fred Dutheil  . Pendant que certains se la coulaient douce dans le pays basque espagnol dans l'attente de leur Ironman, le désormais ultra-trailer du TVT aura parcouru dans les massifs entourant la capitale corse, tel un berger corse à la robustesse légendaire, la distance folle  113km et gravi 7000m de D+, l'équivalent de l'ascension du Aconcagua dans la Cordillière des Andes! Il lui aura fallu pour cela résister à la fatigue, aux douleurs, gérer ses émotions pendant 38:12'21!",
        subtitle2:
          "L'ensemble du club est admiratif et ce qu'a réalisé Fred inspire juste un énorme respect. Désormais, au programme, récupération et cure de sommeil s'imposent... ainsi bien sûr qu'une Pietra accompagnée de Figatellu et d'une petite tome mi-chèvre, mi-brebis dont vous me direz des nouvelles...",
      },
      {
        title:
          "DEUX ARRIVÉES POUR TROIS FINISHERS : HASTA LA VITORIA SIEMPRE !",
        images: [ironmanespagne2026],
        published: new Date("2026-07-15T03:24:00"),
        subtitle1:
          "Trois pensionnaires du TVT ont affronté ce dimanche l’Ironman de Vitoria-Gasteiz, dont l’édition 2026 a définitivement été marquée par des conditions de course rendues difficiles par la chaleur d’une part, mais aussi par un vent fort du sud-est qui avait, scélérat, décidé de souffler dès le levé du jour et pour toute cette journée de ce 12 juillet. Dès les premiers mille mètres de natation dans un lac du Parque Provincial de Landa très formé, Alexandre Lebougault, Vincent Ratel et Alex Rousselin auront, comme l’ensemble des 1529 athlètes au départ, été mis à rude épreuve. Parmi ceux-ci, presque 20% n’atteindront pas l’arche surmontée du M au cœur de la capitale basque et un certain nombre n’aura même pas été autorisé à s’engager sur le parcours vélo, la faute à une barrière horaire inflexible.",
        subtitle2:
          "Ce ne fut heureusement pas le cas pour nos mousquetaires, bien que les temps de natation aient été bien modestes en plus de 01 :24’. Beaux joueurs, il faut reconnaitre ici que Vincent semble être celui qui se sera le mieux adapté à la difficulté du plan d’eau. Et ce n’est pas à vélo que le trio allait trouver du répit : harcelés par ce vent chaud pendant plus de six heures sur les routes rectilignes à travers la campagne basque, mais loin d’être plate, évoquant presque le Midwest américain et ses vastes plaines, ils trouvaient finalement sur le parcours à pied une « relative fraicheur » et de l’ombre salvatrice pour parcourir les 42,195km à travers la Ciudad Verde.",
        subtitle3:
          "Ce ne fut cependant évidemment pas chose aisée et, si Vincent et Alex s’étaient fortuitement retrouvés assez tôt sur le parcours, s’épaulant, s’encourageant mutuellement quand l’un était moins bien, leur présence aux côtés de Alexandre durant une bonne partie de son deuxième des quatre tours à pied lui aura permis de renoncer à courber l’échine et de retrouver la conviction que décidément, non, il ne flancherait pas, pas là, pas maintenant, pas après tout ce qu’il avait fait et enduré. La douleur n’est-elle pas qu’une information, un signal qu’il faut en pareil circonstances savoir balayer d’un revers de main telle une fake-news et en amoindrir la résonnance grâce à une indéfectible conviction ?",
        subtitle4:
          "Ce n’était pas un jour pour réaliser un temps, mais l’essentiel est ailleurs : on préfèrera retenir l’abnégation, l’entraide, le soutien, et ces images des deux inséparables du jour franchissant côte à côte l’arrivée et de Alexandre sonnant la cloche à l’approche de minuit au cœur d’une éphémère arène rouge et noire sur la Espaina Plaza avant que le speaker ne l’accueille d’un YOU ARE AN IRONMAN qui résonnera longtemps dans sa mémoire, probablement toujours…",
        subtitle5:
          "Vincent Ratel : 844e,  104e M35-39 (01:29’/05’25/06:16’45/10’30/04:59’59), Alexis Rousselin : 845e, 95e M45-49 (01:31’56/05’461/ 06:11’45/04’50/ 05:07’46), Alexandre Lebougault : 1207e, 139e M45-49 (01:24’51/09‘37/06 :55’32/08’50/06 :40’05)",
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
