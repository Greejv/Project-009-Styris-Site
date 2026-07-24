/**
 * The four-step order process.
 *
 * Shared by the UI (`Process.astro`) and the homepage `HowTo` JSON-LD so the
 * copy an answer engine quotes is always the copy on the page.
 */
export type ProcessStep = {
  num: string;
  title: string;
  /** Shown on the page and reused verbatim as the HowToStep text. */
  text: string;
  /** Inline SVG shapes for the step icon (24×24 viewBox, stroke-based). */
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Konzultácia',
    text: 'Spíšeme, čo potrebujete a kde to bude slúžiť. Poradíme najrozumnejšie riešenie — aj keď ešte nemáte nič vymyslené.',
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>',
  },
  {
    num: '02',
    title: 'Návrh a cenová ponuka',
    text: 'Pripravíme návrh riešenia a orientačnú cenu do 48 hodín, aby ste vedeli, s čím počítať.',
    icon: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
  },
  {
    num: '03',
    title: 'Ručná výroba na mieru',
    text: 'Po odsúhlasení ceny pripravíme 3D vizualizáciu a vyrobíme vo vlastnej dielni z materiálu, ktorý sedí danej aplikácii. Bez medzičlánkov a subdodávateľov.',
    icon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path>',
  },
  {
    num: '04',
    title: 'Doprava a montáž',
    text: 'Privezieme a odborne osadíme priamo u vás, aby ste mali čo najmenej starostí.',
    icon: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>',
  },
];
