export interface Project {
  slug: string;
  /** Short label used in cards, nav and related-project tiles. */
  title: string;
  /**
   * SEO fields. `title` is a UI label ("Kovové brány & ploty") and rarely
   * matches how people actually search ("brány na mieru"), so search-facing
   * copy is declared separately instead of being derived from it.
   */
  seoTitle: string;
  seoDescription: string;
  /** Page <h1>. Falls back to `title` when omitted. */
  h1?: string;
  category: string;
  short: string;
  tagline: string;
  intro: string;
  description: string;
  features: string[];
  materials: string[];
  useCases: string[];
  /**
   * What moves the price, in plain language. "Cena" / "koľko stojí" queries are
   * the highest-volume commercial searches in this niche and the site answered
   * none of them. We don't publish figures — quotes are per-project — so this
   * explains the variables instead of inventing numbers.
   */
  priceFactors?: Array<{ factor: string; detail: string }>;
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
    seoTitle: 'Brány na mieru — kovové brány a ploty | Styris Košice',
    seoDescription:
      'Kovové brány na mieru — vjazdové, dvojkrídlové aj posuvné. Zameranie, výroba vo vlastnej dielni, pohon NICE a montáž. Košice a celé Slovensko, ozveme sa do 48 hodín.',
    h1: 'Brány na mieru',
    category: 'Vstupy a oplotenie',
    short:
      'Vjazdové brány, vstupné bránky, oplotenie pozemku. Jednokrídlové, dvojkrídlové, posuvné — v akomkoľvek štýle.',
    tagline: 'Vstup, ktorý reprezentuje váš dom',
    intro:
      'Ručne vyrábané kovové brány a oplotenie na mieru — od klasickej kutej estetiky po čistý moderný dizajn. Riešime celý proces od zamerania cez návrh až po montáž.',
    description:
      'Brána je prvá vec, ktorú návštevník uvidí. U nás dostanete konštrukciu, ktorá je zároveň pekná aj poctivá — nosné rámy z uzavretých profilov, výplne podľa vášho vkusu a povrchové úpravy odolné voči korózii aj UV žiareniu. Pri väčších realizáciách dodávame aj elektrický pohon.',
    features: [
      'Jednokrídlové, dvojkrídlové a posuvné brány',
      'Elektrický pohon NICE vrátane inštalácie',
      'Oplotenie pozemku — stĺpiky, výplne a montáž',
      'Povrchová úprava: zinkovanie a komaxit v ľubovoľnej RAL farbe',
      'Možnosť prepojenia s balíkoboxom',
    ],
    materials: ['Konštrukčná oceľ S235', 'Žiarovo zinkovaná oceľ', 'Nerez AISI 304 / 316', 'Hliníkové výplne'],
    useCases: [
      'Vjazdy k rodinným domom a vilám',
      'Oplotenie priemyselných areálov',
      'Reprezentatívne vstupy k firmám a hotelom',
    ],
    priceFactors: [
      { factor: 'Rozmer a spôsob otvárania', detail: 'Dvojkrídlová brána vyjde inak ako posuvná. Posuvná potrebuje robustnejší rám, vodiacu dráhu a miesto na odsun vedľa vjazdu — na to treba myslieť už pri murovaní stĺpikov.' },
      { factor: 'Výplň krídla', detail: 'Jednoduché zvislé profily sú najlacnejšia cesta. Laserom rezaný vzor, drevený dekor alebo plná výplň cenu dvíhajú, lebo pribúda materiál aj práca s ním.' },
      { factor: 'Povrchová úprava', detail: 'Základný náter je najlacnejší, ale najkratšie vydrží. Žiarové zinkovanie a komaxit v RAL odtieni stoja viac a sú jediná úprava, ktorú pri bráne pri ceste odporúčame.' },
      { factor: 'Pohon', detail: 'Ručné otváranie je bez príplatku. Pohon NICE znamená samotný motor, elektroinštaláciu k bráne, fotobunky a zaškolenie — počítajte s tým ako so samostatnou položkou.' },
      { factor: 'Stav vjazdu', detail: 'Ak stĺpiky stoja a sú zvislé, montáž je rýchla. Ak treba stĺpiky vyrobiť, kotviť do betónu alebo riešiť spád vjazdu, pripočítajte prácu navyše.' },
    ],
    faq: [
      { q: 'Koľko stojí brána na mieru?', a: 'Cena vždy závisí od rozmeru, typu otvárania, výplne, povrchovej úpravy a toho, či chcete pohon. Preto neuvádzame cenník — namiesto toho vám po krátkom popise pošleme orientačnú cenu do 48 hodín, nezáväzne.' },
      { q: 'Ako dlho trvá výroba brány?', a: 'Od zamerania po montáž zvyčajne 4–6 týždňov, v závislosti od zložitosti a povrchovej úpravy.' },
      { q: 'Robíte aj montáž pohonu?', a: 'Áno, dodávame a inštalujeme pohony NICE vrátane elektroinštalácie a zaškolenia.' },
      { q: 'Je lepšia posuvná alebo dvojkrídlová brána?', a: 'Dvojkrídlová je jednoduchšia a lacnejšia, ale krídla potrebujú miesto na otvorenie — pri krátkom vjazde alebo aute zaparkovanom hneď za bránou to prekáža. Posuvná potrebuje voľnú stenu vedľa vjazdu na odsun, zato vjazd nechá celý voľný. Pri svahovitom vjazde je posuvná zvyčajne jediná rozumná možnosť.' },
      { q: 'Aká je záruka?', a: 'Nedávame papierovú záruku, ale staviame veci tak, aby prežili dom. Ak sa niečo pokazí našou chybou alebo chybou výroby, opravíme to zdarma.' },
    ],
    icon: '<rect x="3" y="3" width="7" height="18" rx="1"></rect><rect x="14" y="3" width="7" height="18" rx="1"></rect>',
    imageLabel: 'kovové brány',
  },
  {
    slug: 'schodiska-na-mieru',
    title: 'Schodiská na mieru',
    seoTitle: 'Schody na mieru — kovové schodiská | Styris Košice',
    seoDescription:
      'Kovové schody na mieru do interiéru aj exteriéru — priame, točité aj samonosné. Oceľ v kombinácii s dubom, sklom či betónom. Zameranie laserom, výroba a montáž.',
    h1: 'Schody na mieru',
    category: 'Interiér & exteriér',
    short:
      'Interiérové aj exteriérové schodiská. Kombinujeme oceľ s drevom, sklom alebo betónom podľa vašich predstáv.',
    tagline: 'Konštrukcia, ktorá udáva rytmus priestoru',
    intro:
      'Priamočiare, točité alebo lomené schodiská z ocele — samostatne nosné, kombinované s drevom, sklom alebo pohľadovým betónom. Každý stupeň je navrhnutý s rezervou na nosnosť a s ohľadom na akustiku.',
    description:
      'Pripravíme technický návrh a výrobné výkresy, aby ste presne vedeli, čo dostanete. Zvárané spoje brúsime dohladka, konzoly a schodnice sú v celku, bez tolerancií, ktoré by na hotovom schodisku bolo vidieť. Pri kombinovaných schodiskách spolupracujeme so stolármi a sklármi, aby ste mali jedného partnera pre celý projekt.',
    features: [
      'Technický návrh a výrobné výkresy',
      '3D vizualizácia po odsúhlasení ceny, ešte pred výrobou',
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
    priceFactors: [
      { factor: 'Počet stupňov a výška podlažia', detail: 'Najzákladnejší údaj. Z výšky podlažia a požadovaného sklonu vyjde počet stupňov — a každý stupeň je kus materiálu aj práce navyše.' },
      { factor: 'Tvar konštrukcie', detail: 'Priame schodisko je najlacnejšie. L-schody a U-schody znamenajú podestu navyše. Točité a špirálové sú najprácnejšie, lebo každý stupeň má iný uhol a schodnicu treba tvarovať.' },
      { factor: 'Materiál stupňov', detail: 'Oceľový plech je najlacnejší. Masívny dub alebo jaseň, bezpečnostné sklo VSG či pohľadový betón cenu dvíhajú aj o násobky — pri kombinovaných schodiskách býva drevo drahšie ako samotná oceľová konštrukcia.' },
      { factor: 'Zábradlie', detail: 'Počíta sa samostatne. Jednoduché tyčové zábradlie je zlomok ceny sklenenej výplne v nerezovom ráme.' },
      { factor: 'Zvárané alebo skrutkované', detail: 'Zvárané vyrobíme v celku v dielni — je to rýchlejšie, ale musí sa dať doviezť a osadiť. Pri väčších a tvarovo zložitejších schodiskách skladáme na mieste zo skrutkovaných dielov, čo znamená viac hodín na stavbe.' },
      { factor: 'Povrchová úprava', detail: 'Komaxit v RAL odtieni je štandard do interiéru. Do exteriéru pridávame žiarové zinkovanie, ktoré stojí viac, ale bez neho schodisko vonku dlho nevydrží.' },
    ],
    faq: [
      { q: 'Koľko stoja schody na mieru?', a: 'Rozpätie je veľké — rozhoduje počet stupňov, tvar, materiál stupňov a či chcete aj zábradlie. Preto nemáme cenník. Napíšte nám výšku podlažia a predstavu o materiáli a do 48 hodín pošleme orientačnú cenu, nezáväzne.' },
      { q: 'Viete zamerať aj u nás doma?', a: 'Áno, zameranie robíme laserom priamo na stavbe, aby výroba sedela na milimeter.' },
      { q: 'Kedy treba schodisko riešiť pri stavbe domu?', a: 'Čím skôr, tým lepšie — ideálne keď stoja hrubé konštrukcie a je jasná výška podlažia. Vtedy sa dá ešte upraviť veľkosť otvoru v strope aj umiestnenie kotvení. Keď sú hotové podlahy a omietky, možností je podstatne menej.' },
      {
        q: 'Aký je rozdiel medzi zváraným a skrutkovaným schodiskom?',
        a: 'Oba typy sú rovnako pevné a spoľahlivé — líšia sa len spôsobom montáže. Zvárané schodisko je jeden kompaktný celok, ktorý vyrobíme kompletne v dielni. Skrutkované skladáme z presne opracovaných dielov až na mieste, preto ho volíme pri ťažších, väčších a tvarovo zložitejších schodiskách, ktoré by sa v celku nedali doviezť ani osadiť. Skrutkované spoje navrhujeme na plné zaťaženie s rezervou, takže sa časom neuvoľnia — a výhodou navyše je, že sa dajú kedykoľvek rozobrať a upraviť.',
      },
    ],
    icon: '<path d="M22 5L18 5L18 9L14 9L14 13L10 13L10 17L6 17L6 21L2 21"></path>',
    imageLabel: 'schodiská',
  },
  {
    slug: 'zabradlia-a-madla',
    title: 'Zábradlia & madlá',
    seoTitle: 'Zábradlia na mieru — kovové zábradlia a madlá | Styris',
    seoDescription:
      'Kovové zábradlia na mieru na schodiská, balkóny a terasy. Nerez, sklo VSG aj drevené madlá. Poctivé kotvenie do nosnej konštrukcie. Košice a celé Slovensko.',
    h1: 'Zábradlia na mieru',
    category: 'Bezpečnosť a detail',
    short: 'Na schodiská, balkóny aj terasy. Každý detail zladíme s interiérom vášho domu.',
    tagline: 'Detail, ktorý drží celý priestor pokope',
    intro:
      'Zábradlia sú miesto, kde najviac vidno, či remeselník vie, čo robí. Pracujeme s milimetrovou presnosťou, brúsime spoje, kotvíme do stavby cez chemické kotvy — aby madlo pod rukou vydržalo desaťročia.',
    description:
      'Ponúkame celé spektrum od minimalistických sklo-nerez systémov cez klasické kované zábradlia až po interiérové kombinácie s masívnym dubom. Navrhujeme s ohľadom na bežné normy pre vodorovné zaťaženie a poctivo kotvíme do nosnej konštrukcie. Madlá sú brúsené aj kefované, tvarované tak, aby dobre padli do ruky.',
    features: [
      'Sklenené výplne z VSG bezpečnostného skla',
      'Nerez brúsený, leštený alebo čierny mat',
      'Poctivé kotvenie do nosnej konštrukcie',
      'Interiérové drevené madlá s kovovou dušou',
      'Antikorózna úprava pre exteriér',
    ],
    materials: ['Nerez AISI 316', 'Konštrukčná oceľ', 'Bezpečnostné sklo VSG 8.8.4', 'Dub, jaseň, orech'],
    useCases: [
      'Interiérové schodiská a mezanínové galérie',
      'Balkóny, francúzske okná a lodžie',
      'Terasy a zábradlia okolo bazénov',
      'Verejné priestory — kaviarne, hotely, ordinácie',
    ],
    priceFactors: [
      { factor: 'Bežné metre', detail: 'Základná jednotka. Dlhé rovné úseky vyjdú na meter lacnejšie ako krátke lomené, kde je veľa rohov, ukončení a kotvení.' },
      { factor: 'Typ výplne', detail: 'Zvislé tyčky sú najlacnejšia možnosť. Sklenená výplň z VSG je rádovo drahšia — okrem samotného skla treba aj presnejší rám, lebo sklo netoleruje odchýlky.' },
      { factor: 'Materiál', detail: 'Lakovaná konštrukčná oceľ je najdostupnejšia. Nerez AISI 316 stojí výrazne viac, ale pri bazéne alebo na pobreží je to jediný materiál, ktorý dlhodobo obstojí.' },
      { factor: 'Madlo', detail: 'Oceľové madlo je súčasť konštrukcie. Drevené madlo z duba alebo jaseňa s kovovou dušou znamená prácu navyše a tvarovanie do ruky.' },
      { factor: 'Kotvenie a podklad', detail: 'Do betónu kotvíme rýchlo a bez prekvapení. Pórobetón, tehla alebo hotová dlažba znamenajú chemické kotvy a opatrnejší postup, čo predĺži montáž.' },
    ],
    faq: [
      { q: 'Koľko stojí zábradlie na mieru?', a: 'Počíta sa hlavne z bežných metrov, typu výplne a materiálu — sklenené nerezové zábradlie môže vyjsť aj niekoľkonásobne drahšie ako lakované oceľové s tyčkami. Napíšte nám dĺžku a predstavu a do 48 hodín pošleme orientačnú cenu.' },
      { q: 'Podľa akých zásad navrhujete zábradlia?', a: 'Držíme sa bežných zásad — výška zábradlia minimálne 1000 mm a dôraz na pevné kotvenie. Ak je pri projekte potrebná oficiálna certifikácia, vieme ju doriešiť cez partnerov.' },
      { q: 'Robíte aj madlá do panelákov?', a: 'Áno, aj v spolupráci so správcami bytových domov — vieme riešiť aj kotvenie do pórobetónu.' },
    ],
    icon: '<line x1="2" y1="12" x2="22" y2="12"></line><line x1="6" y1="12" x2="6" y2="20"></line><line x1="12" y1="12" x2="12" y2="20"></line><line x1="18" y1="12" x2="18" y2="20"></line><line x1="2" y1="20" x2="22" y2="20"></line>',
    imageLabel: 'zábradlia',
  },
  {
    slug: 'pergoly-a-zastresenia',
    title: 'Pergoly & vonkajšie strechy',
    seoTitle: 'Pergoly na mieru — kovové zastrešenie terasy | Styris',
    seoDescription:
      'Kovové pergoly na mieru a zastrešenie terasy — klasické aj bioklimatické s lamelami. Navrhnuté s rezervou na sneh a vietor, integrované odvodnenie. Košice a celé SR.',
    h1: 'Pergoly na mieru',
    category: 'Exteriér',
    short: 'Kovové pergoly a zastrešenia terás, ktoré vydržia každé počasie a skrášlia každý dvor.',
    tagline: 'Vonkajší priestor, ktorý funguje celý rok',
    intro:
      'Bioklimatické aj klasické pergoly s pevnou strechou z oceľových profilov, zinkované a farbené do RAL odtieňov. Konštruujeme ich tak, aby zvládli sneh aj vietor — a vyzerali čisto aj po desiatich rokoch.',
    description:
      'Pergoly navrhujeme s výraznou rezervou na sneh aj vietor, aby držali roky. Odvodňujeme cez integrované žľaby v stĺpikoch, aby po fasáde netieklo. Ako výplne používame bezpečnostné sklo, polykarbonát alebo lamely s ovládaním na diaľku.',
    features: [
      'Navrhnuté s rezervou na snehové a veterné zaťaženie',
      'Bioklimatické lamely s motorom a dažďovým senzorom',
      'Integrované odvodnenie cez stĺpiky',
      'LED osvetlenie a vyhrievanie na želanie',
      'Bočné screen rolety a sklenené steny',
    ],
    materials: ['Konštrukčná oceľ + komaxit', 'Hliníkové lamely', 'Bezpečnostné sklo VSG', 'Polykarbonát Makrolon'],
    useCases: [
      'Zastrešenie terasy pri rodinnom dome',
      'Vonkajšie sedenie pri reštauráciách',
      'Prístrešky nad vjazdmi a autami',
      'Záhradné pergoly s popínavými rastlinami',
    ],
    priceFactors: [
      { factor: 'Pôdorys a rozpon', detail: 'Nie je to len o metroch štvorcových. Čím väčší rozpon bez podpery, tým silnejšie profily musíme použiť — a tie rastú v cene rýchlejšie ako plocha.' },
      { factor: 'Typ strechy', detail: 'Pevná strecha z polykarbonátu je najdostupnejšia. Bezpečnostné sklo stojí viac. Bioklimatické hliníkové lamely s motorom sú najdrahšia možnosť, zato máte tieň aj dážď pod kontrolou.' },
      { factor: 'Kotvenie', detail: 'Kotvenie do hotovej betónovej terasy je priamočiare. Ak treba vybetónovať pätky alebo kotviť do fasády so zateplením, pripočítajte prípravu navyše.' },
      { factor: 'Doplnky', detail: 'LED osvetlenie, vyhrievanie, bočné screen rolety a sklenené steny sa počítajú samostatne. Kabeláž pre ne treba naplánovať dopredu, aby neviedla po povrchu.' },
      { factor: 'Povrchová úprava', detail: 'Pergola stojí vonku celý rok, takže zinkovanie a komaxit neodporúčame vynechať — je to položka, ktorá sa vráti na životnosti.' },
    ],
    faq: [
      { q: 'Koľko stojí pergola na mieru?', a: 'Rozhoduje pôdorys, rozpon a najmä typ strechy — bioklimatické lamely s motorom vyjdú výrazne inak ako pevný polykarbonát. Napíšte nám rozmery terasy a do 48 hodín pošleme orientačnú cenu.' },
      { q: 'Zvládne pergola sneh na východe?', a: 'Áno — pergoly navrhujeme s výraznou rezervou na snehové aj veterné zaťaženie pre naše podmienky.' },
      { q: 'Musím riešiť stavebné povolenie?', a: 'Pri pergolách do 25 m² zvyčajne stačí ohlásenie stavby, väčšie riešime individuálne s obcou.' },
    ],
    icon: '<path d="M3 7h18"></path><path d="M3 7v14"></path><path d="M21 7v14"></path><path d="M6 3v4"></path><path d="M18 3v4"></path><path d="M8 7v14"></path><path d="M16 7v14"></path>',
    imageLabel: 'pergoly',
  },
  {
    slug: 'kovove-doplnky',
    title: 'Kovové doplnky na mieru',
    seoTitle: 'Kovové doplnky na mieru — výroba na zákazku | Styris',
    seoDescription:
      'Kovové doplnky na mieru — poštové schránky, domové čísla, konzoly, kryty klimatizácií aj interiérové police. Vyrobíme aj jeden kus. Košice a celé Slovensko.',
    category: 'Detaily',
    short: 'Poštové schránky, plotové stĺpiky, dekoračné prvky — ak sa to dá vyrobiť z ocele, vyrobíme to.',
    tagline: 'Malé veci, ktoré robia veľký rozdiel',
    intro:
      'Poštové schránky, čísla domov, madlá dverí, konzoly, vešiaky, kovové kryty — vyrobíme jednorazový kus alebo malú sériu, ktorá zladí exteriér vášho domu do jedného rukopisu.',
    description:
      'Toto je kategória, ktorú nikto z veľkých výrobcov neponúka, lebo sa im to neoplatí. My áno — pretože veríme, že práve tieto detaily rozhodujú o tom, či dom pôsobí ako projekt alebo ako domov. Ak máte konkrétnu predstavu, prineste náčrt alebo fotku a my vám povieme, či to vieme urobiť.',
    features: [
      'Poštové schránky s podsvietenou menovkou',
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
      { q: 'Robíte aj laserové rezanie?', a: 'Laserové rezanie riešime cez nášho dodávateľa — dodáme presné rezané diely z ocele aj nerezu.' },
    ],
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    imageLabel: 'kovové doplnky',
  },
  {
    slug: 'priemyselne-konstrukcie',
    title: 'Veľké a atypické konštrukcie',
    seoTitle: 'Oceľové konštrukcie na mieru — atypické zvárané celky | Styris',
    seoDescription:
      'Väčšie oceľové konštrukcie na mieru — nosné rámy, plošiny, prístrešky a atypické zvárané celky. Vlastný projektant a dielňa, normy riešime cez partnerov.',
    h1: 'Oceľové konštrukcie na mieru',
    category: 'Väčšie konštrukcie',
    short:
      'Väčšie oceľové konštrukcie na mieru — nosné rámy, plošiny, prístrešky a atypické zvárané celky.',
    tagline: 'Keď treba niečo väčšie a poriadne nosné',
    intro:
      'Zvládneme aj väčšie a nosné konštrukcie — nosné rámy, plošiny, prístrešky či atypické zvárané celky. Máme vlastného projektanta a všetko vyrábame vo vlastnej dielni. Ak si zákazka vyžaduje oficiálne normy alebo certifikáciu, vieme ich doriešiť cez overených partnerov.',
    description:
      'Pracujeme aj na väčších zákazkách — plošiny, obslužné lávky, schodiská s roštovými stupňami aj nosné rámy. Návrh pripravíme s vlastným projektantom. Tam, kde treba oficiálne normy, certifikáciu zvarov alebo statický posudok s pečiatkou, zabezpečíme ich cez overených partnerov. Nesľubujeme papiere, ktoré nevieme podložiť — sľubujeme poctivú prácu, ktorá vydrží.',
    features: [
      'Nosné rámy, plošiny, prístrešky a atypické zvárané celky',
      'Návrh a výrobná dokumentácia s vlastným projektantom',
      'Roštové stupne a plošiny s protišmykom',
      'Antikorózne povrchové úpravy podľa prostredia',
      'Normy a certifikáciu doriešime na požiadanie cez partnerov',
    ],
    materials: ['Konštrukčná oceľ S235 a S355', 'Potravinárska nerez', 'Žiarovo zinkovaná oceľ', 'Podlahové rošty'],
    useCases: [
      'Obslužné plošiny pre výrobné linky',
      'Skladové medziposchodia',
      'Potrubné mosty a technologické trasy',
      'Prístrešky nad rampami a manipulačnými plochami',
    ],
    faq: [
      { q: 'Máte certifikáciu EN 1090?', a: 'Vo vlastnej réžii nie sme oficiálne certifikovaní na EN 1090. Ak zákazka vyžaduje certifikát zvarov alebo statický posudok s pečiatkou, zabezpečíme ich cez overených partnerov.' },
      { q: 'Robíte aj projekty pod kľúč?', a: 'Áno — od zamerania cez návrh a výrobu až po montáž. Časti, ktoré si vyžadujú oficiálne oprávnenie, doriešime s partnermi.' },
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line>',
    imageLabel: 'priemyselné konštrukcie',
  },
];

export const projectBySlug = new Map(projects.map((p) => [p.slug, p]));
