export interface Project {
  slug: string;
  title: string;
  category: string;
  short: string;
  tagline: string;
  intro: string;
  description: string;
  features: string[];
  materials: string[];
  useCases: string[];
  faq: Array<{ q: string; a: string }>;
  /** Inline SVG path/shapes for the category icon (24×24 viewBox, stroke-based). */
  icon: string;
  /** Placeholder photo caption. */
  imageLabel: string;
}

export const projects: Project[] = [
  {
    slug: 'kovove-brany-a-ploty',
    title: 'Kovové brány & ploty',
    category: 'Vstupy a oplotenie',
    short:
      'Vjezdové brány, chodníkové brány, oplotenie pozemku. Jednokrídlové, dvojkrídlové, posuvné — v akomkoľvek štýle.',
    tagline: 'Vstup, ktorý reprezentuje váš dom',
    intro:
      'Ručne vyrábané kovové brány a oplotenie na mieru — od klasickej kutej estetiky po čistý moderný dizajn. Riešime celý proces od zamerania cez 3D vizualizáciu až po montáž.',
    description:
      'Brána je prvá vec, ktorú návštevník uvidí. U nás dostanete konštrukciu, ktorá je zároveň pekná aj poctivá — nosné rámy z uzavretých profilov, výplne podľa vášho vkusu, povrchové úpravy odolné voči korózii aj UV žiareniu. Pri väčších realizáciách navrhujeme aj automatický pohon a integráciu s domácou automatizáciou.',
    features: [
      'Jednokrídlové, dvojkrídlové a posuvné brány s automatikou',
      'Oplotenie pozemku vrátane stĺpikov, podhrabových dosiek a montáže',
      'Zinkovanie a komaxit v akejkoľvek RAL farbe',
      'Integrácia videozvončeka, DTMF prijímača alebo GSM modulu',
      '5-ročná záruka na konštrukciu a povrchovú úpravu',
    ],
    materials: ['Konštrukčná oceľ S235', 'Žiarovo zinkovaná oceľ', 'Nerez AISI 304 / 316', 'Hliníkové výplne'],
    useCases: [
      'Vjazdy k rodinným domom a vilám',
      'Oplotenie priemyselných areálov',
      'Reprezentatívne vstupy k firmám a hotelom',
      'Obnovy a rekonštrukcie historických plotov',
    ],
    faq: [
      { q: 'Ako dlho trvá výroba brány?', a: 'Od zamerania po montáž zvyčajne 4–6 týždňov, v závislosti od zložitosti povrchovej úpravy.' },
      { q: 'Robíte aj montáž pohonu?', a: 'Áno, dodávame a inštalujeme pohony Nice, CAME a BFT vrátane elektroinštalácie a zaučenia.' },
      { q: 'Aká je záruka?', a: '5 rokov na konštrukciu, 2 roky na pohon a elektroniku podľa podmienok výrobcu.' },
    ],
    icon: '<rect x="3" y="3" width="7" height="18" rx="1"></rect><rect x="14" y="3" width="7" height="18" rx="1"></rect>',
    imageLabel: 'kovové brány',
  },
  {
    slug: 'schodiska-na-mieru',
    title: 'Schodiská na mieru',
    category: 'Interiér & exteriér',
    short:
      'Interiérové aj exteriérové schodiská. Kombinujeme oceľ s drevom, sklom alebo betónom podľa vašich predstáv.',
    tagline: 'Konštrukcia, ktorá udáva rytmus priestoru',
    intro:
      'Priamočiare, točité alebo lomené schodiská z ocele — samostatne nosné, kombinované s drevom, sklom alebo pohľadovým betónom. Každý stupeň je navrhnutý s rezervou na nosnosť a s ohľadom na akustiku.',
    description:
      'Robíme statické výpočty, výrobné výkresy aj vizualizáciu, aby ste presne vedeli, čo dostanete. Zvárané spoje sú brúsené do R-0 kvality, konzoly a schodnice sú v celku, bez tolerancií, ktoré by na hotovom schodisku bolo vidieť. Pri kombinovaných schodiskách spolupracujeme s truhlármi a sklármi, aby ste dostali jedného partnera pre celý projekt.',
    features: [
      'Statický výpočet a výrobné výkresy v cene',
      '3D vizualizácia priestoru pred výrobou',
      'Priame, U-schody, L-schody, točité a špirálové varianty',
      'Kombinácia oceľ + dub, jaseň, sklo VSG, pohľadový betón',
      'LED osvetlenie stupňov a zábradlia integrované do konštrukcie',
    ],
    materials: ['Konštrukčná oceľ', 'Nerez leštený / brúsený', 'Masívne drevo', 'Bezpečnostné sklo VSG'],
    useCases: [
      'Novostavby rodinných domov',
      'Rekonštrukcie podkroví a mezoninov',
      'Reprezentatívne priestory obchodov a kancelárií',
      'Exteriérové terasy a vstupné schodiská',
    ],
    faq: [
      { q: 'Viete zamerať aj u nás doma?', a: 'Áno, zameranie robíme laserom priamo na stavbe, aby výroba sedela na milimeter.' },
      { q: 'Aký je rozdiel medzi zvarencom a šraubovaným schodiskom?', a: 'Zvarence sú tuhšie a bezúdržbové, šraubované sa dajú demontovať a upraviť.' },
    ],
    icon: '<path d="M22 5L18 5L18 9L14 9L14 13L10 13L10 17L6 17L6 21L2 21"></path>',
    imageLabel: 'schodiská',
  },
  {
    slug: 'zabradlia-a-madla',
    title: 'Zábradlia & madlá',
    category: 'Bezpečnosť a detail',
    short: 'Na schodiská, balkóny aj terasy. Každý detail zladíme s interiérom vášho domu.',
    tagline: 'Detail, ktorý drží celý priestor pokope',
    intro:
      'Zábradlia sú miesto, kde najviac vidno, či remeselník vie, čo robí. Pracujeme s milimetrovou presnosťou, brúsime spoje, kotvíme do stavby cez chemické kotvy — aby madlo pod rukou vydržalo desaťročia.',
    description:
      'Ponúkame celý spektrum od minimalistických sklo-nerez systémov cez klasické kované zábradlia až po interiérové kombinácie s masívnym dubom. Vždy počítame silu vodorovnej záťaže podľa normy a certifikujeme kotvenie. Madlá sú brúsené aj kartáčované, s prehľadom optimálne pre uchopenie ruky.',
    features: [
      'Sklenené výplne z VSG bezpečnostného skla',
      'Nerez brúsený, leštený alebo čierny mat',
      'Statický výpočet a certifikácia kotvenia',
      'Interiérové drevené madlá s kovovou dušou',
      'Antikorózna úprava pre exteriér',
    ],
    materials: ['Nerez AISI 316', 'Konštrukčná oceľ', 'Bezpečnostné sklo VSG 8.8.4', 'Dub, jaseň, orech'],
    useCases: [
      'Interiérové schodiská a mezanínové galérie',
      'Balkóny, francúzske okná a lodžie',
      'Terasy a bazénové ochrany',
      'Verejné priestory — kaviarne, hotely, ordinácie',
    ],
    faq: [
      { q: 'Vyhoviete norme STN 74 3305?', a: 'Áno, každé zábradlie navrhujeme minimálne s výškou 1000 mm a s odolnosťou na vodorovnú silu 1 kN/m.' },
      { q: 'Robíte aj madlá do panelákov?', a: 'Áno, aj v spolupráci so správcami bytových domov — vieme riešiť aj kotvenie do pórobetónu.' },
    ],
    icon: '<line x1="2" y1="12" x2="22" y2="12"></line><line x1="6" y1="12" x2="6" y2="20"></line><line x1="12" y1="12" x2="12" y2="20"></line><line x1="18" y1="12" x2="18" y2="20"></line><line x1="2" y1="20" x2="22" y2="20"></line>',
    imageLabel: 'zábradlia',
  },
  {
    slug: 'pergoly-a-zastresenia',
    title: 'Pergoly & vonkajšie strechy',
    category: 'Exteriér',
    short: 'Kovové pergoly a zastrešenia terás, ktoré vydržia každé počasie a krajšia každý dvor.',
    tagline: 'Vonkajší priestor, ktorý funguje celý rok',
    intro:
      'Bioklimatické aj klasické pergoly s pevnou strechou z oceľových profilov, zinkované a farbené do RAL odtieňov. Konštruujeme ich tak, aby zvládli sneh aj vietor — a vyzerali čisto aj po desiatich rokoch.',
    description:
      'Pri každej pergole robíme statický výpočet zaťaženia snehom (region IV Východ = 1.5 kN/m²) a vetrom. Odvodňujeme cez integrované žľaby v stĺpikoch, aby po fasáde netieklo. Ako výplne používame bezpečnostné sklo, polykarbonát alebo lamely s ovládaním na diaľku.',
    features: [
      'Statický výpočet pre snehové a veterné zaťaženie',
      'Bioklimatické lamely s motorom a dažďovým senzorom',
      'Integrované odvodnenie cez stĺpiky',
      'LED osvetlenie a vyhrievanie v cene',
      'Bočné screen rolety a sklenené steny',
    ],
    materials: ['Konštrukčná oceľ + komaxit', 'Hliníkové lamely', 'Bezpečnostné sklo VSG', 'Polykarbonát Makrolon'],
    useCases: [
      'Zastrešenie terasy pri rodinnom dome',
      'Vonkajšie sedenie pri reštauráciách',
      'Prístrešky nad vjazdmi a autá',
      'Záhradné pergoly s pnúcimi rastlinami',
    ],
    faq: [
      { q: 'Zvládne pergola sneh na východe?', a: 'Áno, počítame na 1.5 kN/m² a bežne dodávame konštrukcie s rezervou 2 kN/m².' },
      { q: 'Musím riešiť stavebné povolenie?', a: 'Pri pergolách do 25 m² zvyčajne stačí ohláška, väčšie riešime individuálne s obcou.' },
    ],
    icon: '<path d="M3 7h18"></path><path d="M3 7v14"></path><path d="M21 7v14"></path><path d="M6 3v4"></path><path d="M18 3v4"></path><path d="M8 7v14"></path><path d="M16 7v14"></path>',
    imageLabel: 'pergoly',
  },
  {
    slug: 'kovove-doplnky',
    title: 'Kovové doplnky na mieru',
    category: 'Detaily',
    short: 'Poštové schránky, plotové stĺpiky, dekoračné prvky — ak to ide urobiť z ocele, urobíme to.',
    tagline: 'Malé veci, ktoré robia veľký rozdiel',
    intro:
      'Poštové schránky, čísla domov, madlá dverí, konzoly, vešiaky, kovové kryty — vyrobíme jednorazový kus alebo malú sériu, ktorá zladí exteriér vášho domu do jedného rukopisu.',
    description:
      'Toto je kategória, ktorú nikto z veľkých výrobcov neponúka, lebo sa im to neoplatí. My áno — pretože veríme, že práve tieto detaily rozhodujú o tom, či dom pôsobí ako projekt alebo ako domov. Ak máte konkrétnu predstavu, prineste náčrt alebo fotku a my vám povieme, či to vieme urobiť.',
    features: [
      'Poštové schránky s presvetleným menovkovým poľom',
      'Domové čísla laserom rezané z 4 mm ocele',
      'Konzoly, držiaky a dekoračné prvky',
      'Kovové kryty klimatizácií, tepelných čerpadiel',
      'Interiérové police, konzolové stolíky',
    ],
    materials: ['Oceľ 3–8 mm laserom rezaná', 'Nerez brúsený a leštený', 'Corten (patinovaná oceľ)', 'Mosadz a meď'],
    useCases: [
      'Zladenie exteriérových detailov rodinného domu',
      'Vlastné poštové schránky pre bytovky a firmy',
      'Reklamné a orientačné prvky',
      'Interiérové doplnky pre kancelárie a showroomy',
    ],
    faq: [
      { q: 'Vyrobíte jeden kus?', a: 'Áno, väčšina zákaziek v tejto kategórii je jednorazová — počítame s tým.' },
      { q: 'Robíte aj lasering?', a: 'Áno, máme vlastný CNC laser do 8 mm ocele a 5 mm nerezu.' },
    ],
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    imageLabel: 'kovové doplnky',
  },
  {
    slug: 'priemyselne-konstrukcie',
    title: 'Priemyselné konštrukcie',
    category: 'Priemysel',
    short:
      'Oceľové haly, technologické plošiny, potrubné mosty a nosné rámy pre výrobné prevádzky.',
    tagline: 'Nosné konštrukcie, na ktorých stojí vaša výroba',
    intro:
      'Pre firmy a menšie prevádzky navrhujeme a vyrábame priemyselné oceľové konštrukcie — od plošín a schodísk pre technológiu až po celé haly. Vlastný statik, vlastná dielňa, jeden dodávateľ od projektu po montáž.',
    description:
      'Pracujeme pre potravinárov, strojárov aj menšie výrobné prevádzky. Riešime plošiny na stroje, obslužné lávky, priemyselné schodiská s roštovými stupňami, aj kompletné nosné rámy hál do 500 m². Zvary certifikujeme podľa EN 1090-2, dokumentáciu odovzdávame v štruktúrovanej forme pre kolaudáciu.',
    features: [
      'Certifikácia zvarov podľa EN 1090-2 EXC2',
      'Statický výpočet a výrobná dokumentácia',
      'Roštové stupne a plošiny s protišmykom',
      'Antikorózne úpravy vhodné pre potravinárstvo',
      'Montáž s vlastnou technikou po celom Východe',
    ],
    materials: ['Konštrukčná oceľ S235 a S355', 'Nerez potravinársky', 'Žiarovo zinkovaná oceľ', 'Podlahové rošty'],
    useCases: [
      'Obslužné plošiny pre výrobné linky',
      'Skladové medziposchodia',
      'Potrubné mosty a technologické trasy',
      'Prístrešky nad rampami a manipulačnými plochami',
    ],
    faq: [
      { q: 'Máte certifikáciu EN 1090?', a: 'Áno, sme certifikovaní na výrobu nosných oceľových konštrukcií v triede EXC2.' },
      { q: 'Robíte aj projekty pod kľúč?', a: 'Áno, od geodetického zamerania cez statiku a výrobu až po montáž a kolaudačnú dokumentáciu.' },
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line>',
    imageLabel: 'priemyselné konštrukcie',
  },
];

export const projectBySlug = new Map(projects.map((p) => [p.slug, p]));
