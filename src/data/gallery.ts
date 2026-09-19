import type { Language } from './content';

/**
 * Inventario de la galería.
 *
 * Las imágenes no cambian con el idioma, así que viven aquí y no en `content.ts`;
 * lo que sí se traduce —los rótulos de cada grupo— está en `content.ts` bajo
 * `gallery`, junto al resto del texto del sitio.
 *
 * `w` y `h` son las medidas REALES del archivo ya optimizado. Viajan con cada
 * foto para que el navegador reserve el hueco antes de descargarla: sin ellas la
 * página salta mientras cargan las 26 imágenes, que en una red lenta es justo
 * cuando la persona está intentando leer.
 *
 * Los archivos se generaron desde los originales de WhatsApp con
 * `convert -auto-orient -resize 1600x1600\> -strip -quality 82`.
 */

export type GalleryGroupId = 'ciudad' | 'fogon' | 'manos' | 'pueblo';

export interface GalleryPhoto {
  src: string;
  w: number;
  h: number;
  alt: Record<Language, string>;
}

export interface GalleryGroup {
  id: GalleryGroupId;
  photos: GalleryPhoto[];
}

export const GALLERY_GROUPS: GalleryGroup[] = [
  {
    id: 'ciudad',
    photos: [
      {
        src: '/galeria/ciudad-01-acropolis-aerea.webp',
        w: 720,
        h: 730,
        alt: {
          es: 'Vista aérea de la Acrópolis de Ek Balam rodeada de selva',
          en: 'Aerial view of the Ek Balam Acropolis surrounded by jungle',
          fr: "Vue aérienne de l'Acropole d'Ek Balam entourée de jungle",
        },
      },
      {
        src: '/galeria/ciudad-02-gran-escalinata.webp',
        w: 899,
        h: 1599,
        alt: {
          es: 'La gran escalinata de la Acrópolis bajo los techos de palma',
          en: 'The great stairway of the Acropolis beneath the palm roofs',
          fr: "Le grand escalier de l'Acropole sous les toits de palme",
        },
      },
      {
        src: '/galeria/ciudad-03-trono-friso.webp',
        w: 720,
        h: 957,
        alt: {
          es: 'El friso de estuco y el trono, en el corredor de la Acrópolis',
          en: 'The stucco frieze and the throne, in the Acropolis corridor',
          fr: "La frise en stuc et le trône, dans le couloir de l'Acropole",
        },
      },
      {
        src: '/galeria/ciudad-04-trono-colmillos.webp',
        w: 720,
        h: 540,
        alt: {
          es: 'La portada del trono, con sus colmillos de estuco',
          en: 'The throne façade, with its stucco fangs',
          fr: 'La façade du trône, avec ses crocs en stuc',
        },
      },
      {
        src: '/galeria/ciudad-05-friso-estuco.webp',
        w: 720,
        h: 478,
        alt: {
          es: 'Detalle del estuco labrado del trono',
          en: 'Detail of the carved stucco on the throne',
          fr: 'Détail du stuc sculpté du trône',
        },
      },
      {
        src: '/galeria/ciudad-06-arco-entrada.webp',
        w: 720,
        h: 540,
        alt: {
          es: 'El guía frente al arco de entrada a la ciudad',
          en: 'The guide at the entrance arch to the city',
          fr: "Le guide devant l'arche d'entrée de la cité",
        },
      },
      {
        src: '/galeria/ciudad-07-pasaje-piedra.webp',
        w: 1200,
        h: 1600,
        alt: {
          es: 'Escalones de piedra que suben hacia el cielo abierto',
          en: 'Stone steps climbing toward the open sky',
          fr: 'Des marches de pierre montant vers le ciel ouvert',
        },
      },
      {
        src: '/galeria/ciudad-08-escalera-interior.webp',
        w: 1200,
        h: 1600,
        alt: {
          es: 'Visitantes subiendo por un pasaje interior de piedra',
          en: 'Visitors climbing an inner stone passage',
          fr: 'Des visiteurs gravissant un passage intérieur en pierre',
        },
      },
      {
        src: '/galeria/ciudad-09-estructura-circular.webp',
        w: 720,
        h: 482,
        alt: {
          es: 'La estructura circular, entre la vegetación',
          en: 'The circular structure, among the vegetation',
          fr: 'La structure circulaire, au milieu de la végétation',
        },
      },
      {
        src: '/galeria/ciudad-10-excavacion-seres-alados.webp',
        w: 720,
        h: 485,
        alt: {
          es: 'Figuras de estuco descubiertas durante la excavación',
          en: 'Stucco figures uncovered during the excavation',
          fr: "Figures en stuc découvertes pendant les fouilles",
        },
      },
      {
        src: '/galeria/ciudad-11-pintura-mural.webp',
        w: 720,
        h: 541,
        alt: {
          es: 'Pintura mural en rojo sobre el estuco original',
          en: 'Red mural painting over the original stucco',
          fr: 'Peinture murale rouge sur le stuc original',
        },
      },
    ],
  },
  {
    id: 'fogon',
    photos: [
      {
        src: '/galeria/fogon-01-comal-tortillas.webp',
        w: 1600,
        h: 1200,
        alt: {
          es: 'Tortillas al comal sobre el fogón de leña, en una cocina maya',
          en: 'Tortillas on the griddle over a wood fire, in a Maya kitchen',
          fr: 'Tortillas sur le comal au feu de bois, dans une cuisine maya',
        },
      },
      {
        src: '/galeria/fogon-02-abuela-fogon.webp',
        w: 720,
        h: 960,
        alt: {
          es: 'Una señora de la comunidad echando tortillas junto al fogón',
          en: 'A woman from the community making tortillas by the fire',
          fr: 'Une femme de la communauté préparant des tortillas près du foyer',
        },
      },
      {
        src: '/galeria/fogon-03-tortillas-a-mano.webp',
        w: 1600,
        h: 1200,
        alt: {
          es: 'Visitantes formando tortillas a mano en la mesa baja',
          en: 'Visitors shaping tortillas by hand at the low table',
          fr: 'Des visiteurs façonnant des tortillas à la main sur la table basse',
        },
      },
      {
        src: '/galeria/fogon-04-masa-en-familia.webp',
        w: 1600,
        h: 1200,
        alt: {
          es: 'Una familia aprende a trabajar la masa de maíz',
          en: 'A family learning to work the corn dough',
          fr: 'Une famille apprend à travailler la pâte de maïs',
        },
      },
      {
        src: '/galeria/fogon-05-taller-cacao.webp',
        w: 1200,
        h: 1600,
        alt: {
          es: 'Risas en el taller de cacao, alrededor de la mesa',
          en: 'Laughter around the table at the cacao workshop',
          fr: 'Des rires autour de la table à l’atelier de cacao',
        },
      },
      {
        src: '/galeria/fogon-06-molienda-metate.webp',
        w: 720,
        h: 540,
        alt: {
          es: 'Molienda del cacao en metate, ante el grupo',
          en: 'Grinding cacao on the metate, in front of the group',
          fr: 'Broyage du cacao sur le metate, devant le groupe',
        },
      },
      {
        src: '/galeria/fogon-07-degustacion.webp',
        w: 1200,
        h: 1600,
        alt: {
          es: 'Degustación en casa de la familia anfitriona',
          en: 'Tasting at the host family’s home',
          fr: "Dégustation chez la famille d'accueil",
        },
      },
    ],
  },
  {
    id: 'manos',
    photos: [
      {
        src: '/galeria/manos-01-bastidor-hamaca.webp',
        w: 1600,
        h: 1200,
        alt: {
          es: 'Tejido de una hamaca en el bastidor, bajo los árboles',
          en: 'Weaving a hammock on the frame, under the trees',
          fr: 'Tissage d’un hamac sur le métier, sous les arbres',
        },
      },
      {
        src: '/galeria/manos-02-telar-hamaca.webp',
        w: 1599,
        h: 899,
        alt: {
          es: 'Telar de hamaca bajo el techo de palma',
          en: 'Hammock loom beneath the palm roof',
          fr: 'Métier à hamac sous le toit de palme',
        },
      },
      {
        src: '/galeria/manos-03-taller-bordado.webp',
        w: 1600,
        h: 720,
        alt: {
          es: 'Taller de bordado alrededor de la máquina de coser',
          en: 'Embroidery workshop around the sewing machine',
          fr: 'Atelier de broderie autour de la machine à coudre',
        },
      },
      {
        src: '/galeria/manos-04-maquina-singer.webp',
        w: 1600,
        h: 720,
        alt: {
          es: 'Aprendiendo a bordar en una máquina de pedal',
          en: 'Learning to embroider on a treadle sewing machine',
          fr: 'Apprendre à broder sur une machine à pédale',
        },
      },
    ],
  },
  {
    id: 'pueblo',
    photos: [
      {
        src: '/galeria/pueblo-01-casa-maya.webp',
        w: 1280,
        h: 960,
        alt: {
          es: 'Casa maya de techo de huano, entre palmas',
          en: 'Maya house with a thatched roof, among palms',
          fr: 'Maison maya au toit de chaume, parmi les palmiers',
        },
      },
      {
        src: '/galeria/pueblo-02-casa-entre-palmas.webp',
        w: 1448,
        h: 1086,
        alt: {
          es: 'Casa tradicional rodeada de vegetación',
          en: 'Traditional house surrounded by vegetation',
          fr: 'Maison traditionnelle entourée de végétation',
        },
      },
      {
        src: '/galeria/pueblo-03-enramada.webp',
        w: 1040,
        h: 464,
        alt: {
          es: 'Enramada de palma en el monte',
          en: 'Palm shelter in the bush',
          fr: 'Abri de palmes dans la forêt',
        },
      },
      {
        src: '/galeria/pueblo-04-gente-del-pueblo.webp',
        w: 960,
        h: 540,
        alt: {
          es: 'Hombres de la comunidad de Ek Balam',
          en: 'Men from the community of Ek Balam',
          fr: "Hommes de la communauté d'Ek Balam",
        },
      },
    ],
  },
];

/** Todas las fotos en el orden en que se pintan, para el visor. */
export const ALL_PHOTOS: GalleryPhoto[] = GALLERY_GROUPS.flatMap((g) => g.photos);
