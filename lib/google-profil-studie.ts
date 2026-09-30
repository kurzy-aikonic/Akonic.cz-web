export type ProfileChart = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProfileStudy = {
  id: string;
  title: string;
  period: string;
  summary: string;
  metrics: { value: string; label: string }[];
  charts: ProfileChart[];
};

export const profileStudies: ProfileStudy[] = [
  {
    id: "profil-1",
    title: "Rychlý nárůst bez další péče",
    period: "duben–září 2026",
    summary:
      "Profil jsme nastavili na přelomu dubna a května. V dubnu byly trasy, prokliky i hovory na nule. V květnu přišlo zhruba 50 žádostí o trasu, v létě prokliky na web vystoupaly téměř k 50 za měsíc a hovory měly vrchol v červnu. Od srpna do září prokliky i celkové interakce klesly.",
    metrics: [
      { value: "363", label: "interakcí s profilem" },
      { value: "203", label: "žádostí o trasu" },
      { value: "152", label: "prokliků na web" },
      { value: "8", label: "hovorů" },
    ],
    charts: [
      {
        src: "/pripadove-studie/profil-1-prehled.webp",
        alt: "Graf interakcí s firemním profilem od dubna do září 2026, celkem 363. Křivka roste z nuly k vrcholu v červenci a v září klesá.",
        caption: "Interakce s profilem",
        width: 1024,
        height: 458,
      },
      {
        src: "/pripadove-studie/profil-1-trasy.webp",
        alt: "Graf žádostí o trasu od dubna do září 2026, celkem 203. V dubnu nula, v květnu skok a poté mírný sestup.",
        caption: "Žádosti o trasu",
        width: 1024,
        height: 452,
      },
      {
        src: "/pripadove-studie/profil-1-prokliky.webp",
        alt: "Graf prokliků na web z firemního profilu od dubna do září 2026, celkem 152. Vrchol v červenci, v září zhruba polovina.",
        caption: "Prokliky na web",
        width: 1024,
        height: 447,
      },
      {
        src: "/pripadove-studie/profil-1-hovory.webp",
        alt: "Graf hovorů z firemního profilu od dubna do září 2026, celkem 8. Vrchol v červnu, v září nula.",
        caption: "Hovory",
        width: 1024,
        height: 435,
      },
    ],
  },
  {
    id: "profil-2",
    title: "Vrchol v červenci, pak mírný sestup",
    period: "duben–září 2026",
    summary:
      "Po jarní úpravě interakce i trasy rostly až do července, kdy se dostaly téměř na 90 interakcí a 70 tras za měsíc. V červnu se krátce zvedl i chat. V srpnu a září obě hlavní křivky sestoupily, pořád však zůstaly nad jarním začátkem.",
    metrics: [
      { value: "415", label: "interakcí s profilem" },
      { value: "308", label: "žádostí o trasu" },
      { value: "5", label: "kliknutí na chat" },
    ],
    charts: [
      {
        src: "/pripadove-studie/profil-2-prehled.webp",
        alt: "Graf interakcí s firemním profilem od dubna do září 2026, celkem 415. Růst do července a mírný sestup v srpnu a září.",
        caption: "Interakce s profilem",
        width: 1024,
        height: 514,
      },
      {
        src: "/pripadove-studie/profil-2-trasy.webp",
        alt: "Graf žádostí o trasu od dubna do září 2026, celkem 308. Vrchol v červenci, poté mírný pokles.",
        caption: "Žádosti o trasu",
        width: 1024,
        height: 475,
      },
      {
        src: "/pripadove-studie/profil-2-chat.webp",
        alt: "Graf kliknutí na chat ve firemním profilu od dubna do září 2026, celkem 5. Krátký výkyv v červnu.",
        caption: "Kliknutí na chat",
        width: 1024,
        height: 444,
      },
    ],
  },
  {
    id: "profil-3",
    title: "Kontakty drží déle než návštěvnost",
    period: "leden–květen 2026",
    summary:
      "Výkon se zvedl v březnu a vrchol měl v dubnu, u přehledu i u tras. V květnu interakce i trasy klesly. Hovory šly opačně: nejvíc jich přišlo právě v květnu. Jednou správně vyplněné kontaktní údaje přiváděly hovory i ve chvíli, kdy se zbytek profilu už neobnovoval.",
    metrics: [
      { value: "345", label: "interakcí s profilem" },
      { value: "292", label: "žádostí o trasu" },
      { value: "53", label: "hovorů" },
    ],
    charts: [
      {
        src: "/pripadove-studie/profil-3-prehled.webp",
        alt: "Graf interakcí s firemním profilem od ledna do května 2026, celkem 345. Vrchol v dubnu, pokles v květnu.",
        caption: "Interakce s profilem",
        width: 1024,
        height: 494,
      },
      {
        src: "/pripadove-studie/profil-3-trasy.webp",
        alt: "Graf žádostí o trasu od ledna do května 2026, celkem 292. Nejvíc v dubnu, v květnu pokles.",
        caption: "Žádosti o trasu",
        width: 1024,
        height: 483,
      },
      {
        src: "/pripadove-studie/profil-3-hovory.webp",
        alt: "Graf hovorů z firemního profilu od ledna do května 2026, celkem 53. Křivka roste a maximum má v květnu.",
        caption: "Hovory",
        width: 1024,
        height: 504,
      },
    ],
  },
  {
    id: "profil-4",
    title: "Návštěvy webu kopírují péči o profil",
    period: "duben–září 2026",
    summary:
      "V dubnu a květnu byly prokliky na web prakticky nulové. Po nastavení vyrostly v červnu a vrchol měly v červenci. V září byly zhruba na polovině červencového měsíce.",
    metrics: [{ value: "156", label: "prokliků na web" }],
    charts: [
      {
        src: "/pripadove-studie/profil-4-prokliky.webp",
        alt: "Graf prokliků na web z firemního profilu od dubna do září 2026, celkem 156. Nula na jaře, vrchol v červenci, pokles v září.",
        caption: "Prokliky na web",
        width: 1024,
        height: 441,
      },
    ],
  },
];
