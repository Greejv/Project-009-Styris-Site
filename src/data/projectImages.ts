import type { ImageMetadata } from 'astro';

// Product photos. Astro's asset pipeline resizes & re-encodes at build time.
import branaSiva from '../assets/products/Sivá_Brána.webp';
import branaZelena from '../assets/products/Zelená bránička.webp';
import schodyBiele1 from '../assets/products/biele_schody_1.webp';
import schodyBiele2 from '../assets/products/biele_schody_2.webp';
import schodyPlech1 from '../assets/products/Plech_Schody_1.webp';
import schodyPlech2 from '../assets/products/Plech_Schody_2.webp';
import zabradlieBiele1 from '../assets/products/Biele_Zabradlie_1.webp';
import zabradlieBiele2 from '../assets/products/Biele_Zabradlie_2.webp';
import zabradlieFrancuz from '../assets/products/Sivé_Frencúzke_Zabradlie.webp';
import pergola from '../assets/products/Pergola.webp';
import vizualizacia3d from '../assets/products/3d-vizualizacia.webp';
import vizualizacia3dWide from '../assets/products/3d-vizualizacia-wide.webp';

export type ProjectImage = {
  src: ImageMetadata;
  alt: string;
  /** Renders in an uncropped 2:1 band instead of the default fixed-height photo band. */
  fit?: 'render';
};

/** Card image used on the homepage services grid and the /prace index. */
export const cardImage: Record<string, ProjectImage> = {
  'kovove-brany-a-ploty': { src: branaSiva, alt: 'Kovová vjazdová brána v sivom prevedení' },
  'schodiska-na-mieru': { src: schodyBiele2, alt: 'Biele interiérové kovové schodisko' },
  'zabradlia-a-madla': { src: zabradlieFrancuz, alt: 'Sivé francúzske kovové zábradlie' },
  'pergoly-a-zastresenia': { src: pergola, alt: 'Kovová pergola so zastrešením terasy' },
  'kovove-doplnky': { src: branaZelena, alt: 'Zelená kovová bránička s dekoračným motívom' },
  'priemyselne-konstrukcie': { src: vizualizacia3d, alt: '3D vizualizácia oceľovej plošiny so schodiskom a zábradlím' },
};

/** Larger hero showcase image on the case-study detail page. */
export const showcaseImage: Record<string, ProjectImage> = {
  'kovove-brany-a-ploty': { src: branaSiva, alt: 'Detail sivá vjazdová brána Styris' },
  'schodiska-na-mieru': { src: schodyBiele1, alt: 'Ručne vyrobené biele schodisko na mieru' },
  'zabradlia-a-madla': { src: zabradlieBiele1, alt: 'Biele kovové zábradlie s minimalistickými výplňami' },
  'pergoly-a-zastresenia': { src: pergola, alt: 'Zastrešenie terasy — kovová pergola' },
  'kovove-doplnky': { src: branaZelena, alt: 'Zelená dekoračná kovová bránička na mieru' },
  'priemyselne-konstrukcie': {
    src: vizualizacia3dWide,
    alt: '3D vizualizácia oceľovej plošiny so schodiskom — model pred výrobou',
    fit: 'render',
  },
};

/** Poster image used above the hero-adjacent video block. */
export { schodyBiele1 as videoPoster };

/** Render used by the 3D-visualisation section on the homepage. */
export { vizualizacia3d };
