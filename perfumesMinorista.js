const perfumes = [
  {
    id: 1,
    name: "9AM DINE EDP 100ml",
    brand: "AFNAN",
    image: "/images/9am-dine-edp-100ml.jpg",
    price: "69000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 2,
    name: "9AM POUR FEMME EDP 100ml",
    brand: "AFNAN",
    image: "/images/9am-pour-femme-edp-100ml.jpg",
    price: "71000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 3,
    name: "9PM EDP 100ml",
    brand: "AFNAN",
    image: "/images/9pm-edp-100ml.jpg",
    price: "72000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 4,
    name: "9PM POUR FEMME EDP 100ml",
    brand: "AFNAN",
    image: "/images/9pm-pour-femme-edp-100ml.jpg",
    price: "73000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 87,
    name: "9PM REBEL EDP 100ml",
    brand: "AFNAN",
    image: "/images/9pm-rebel.jpg",
    price: "82000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 5,
    name: "AMBER OUD GOLD EDITION EDP 60ml",
    brand: "AL HARAMAIN",
    image: "/images/amber-oud-gold-edition-edp-100ml.jpg",
    price: "80000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 6,
    name: "AMBER OUD RUBY EDITION EDP 120ml",
    brand: "AL HARAMAIN",
    image: "/images/amber-oud-ruby-edition-edp-120ml.jpg",
    price: "97000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 7,
    name: "JEAN LOWE INMORTAL EDP 100ml",
    brand: "ALHAMBRA",
    image: "/images/jean-lowe-inmortal-edp-100ml.jpg",
    price: "65000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 8,
    name: "CLUB DE NUIT ICONIC 100ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-iconic-100ml.jpg",
    price: "90000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 9,
    name: "CLUB DE NUIT INTENSE EDT 105ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-intense-edt-105ml.jpg",
    price: "78000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 89,
    name: "CLUB DE NUIT MILESTONE EDP 105ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-milestone-edp-105ml.jpg",
    price: "75000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 10,
    name: "CLUB DE NUIT SILLAGE 100ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-sillage-100ml.jpg",
    price: "86000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 11,
    name: "CLUB DE NUIT UNTOLD 100ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-untold-100ml.jpg",
    price: "88000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 88,
    name: "CLUB DE NUIT URBAN MAN",
    brand: "ARMAF",
    image: "/images/club-nuit-urban-man.jpeg",
    price: "71000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO dentro de CLUB DE NUIT */
  {
    id: 71,
    name: "CLUB DE NUIT URBAN MAX ELIXIR 105ml",
    brand: "ARMAF",
    image: "/images/club-de-nuit-urban.jpg",
    price: "80000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },

  {
    id: 12,
    name: "ODYSSEY AOUD EDP 100ml",
    brand: "ARMAF",
    image: "/images/odyssey-aoud-edp-100ml.jpg",
    price: "73000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 13,
    name: "ODYSSEY CANDEE EDP 100ml",
    brand: "ARMAF",
    image: "/images/odyssey-candee-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 14,
    name: "ODYSSEY HOMME EDP 100ml",
    brand: "ARMAF",
    image: "/images/odyssey-homme-edp-100ml.jpg",
    price: "61000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 15,
    name: "ODYSSEY MANDARIN SKY M. EDP 100ml",
    brand: "ARMAF",
    image: "/images/odyssey-mandarin-sky-m-edp-100ml.jpg",
    price: "72000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 90,
    name: "ODYSSEY MANDARIN SKY ELIXIR",
    brand: "ARMAF",
    image: "/images/odyssey-mandarin-sky-elixir.jp.jpg",
    price: "90000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 91,
    name: "ODYSSEY LIMONI",
    brand: "ARMAF",
    image: "/images/odyssey-limoni.jpg",
    price: "58000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 16,
    name: "NOBLE BLUSH EDP 100ml",
    brand: "BADEE AL OUD",
    image: "/images/noble-blush-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 17,
    name: "AFEEF 100ml",
    brand: "LATTAFA",
    image: "/images/afeef-100ml.jpg",
    price: "96000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 18,
    name: "AMETHYST BADEE AL OUD EDP 100ml",
    brand: "LATTAFA",
    image: "/images/amethyst-badee-al-oud-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 19,
    name: "ANA ABIYEDH",
    brand: "LATTAFA",
    image: "/images/ana-abiyedh.jpg",
    price: "46000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 20,
    name: "ANA ABIYEDH LEATHER",
    brand: "LATTAFA",
    image: "/images/ana-abiyedh-leather.jpeg",
    price: "46000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 21,
    name: "ANA ABIYEDH ROUGE",
    brand: "LATTAFA",
    image: "/images/ana-abiyedh-rouge.jpg",
    price: "46000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 22,
    name: "ANSSAM GOLD EDP 100ml",
    brand: "LATTAFA",
    image: "/images/anssam-gold-edp-100ml.jpg",
    price: "64000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 24,
    name: "ASAD BOURBON EDP 100ml",
    brand: "LATTAFA",
    image: "/images/asad-bourbon-edp-100ml.jpg",
    price: "75000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 25,
    name: "ASAD EDP (NEGRO) 100ml",
    brand: "LATTAFA",
    image: "/images/asad-edp-negro-100ml.jpg",
    price: "70000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 26,
    name: "ASAD ZANZIBAR EDP 100ml",
    brand: "LATTAFA",
    image: "/images/asad-zanzibar-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 27,
    name: "ATHEERI",
    brand: "LATTAFA",
    image: "/images/atheeri.jpg",
    price: "95000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 28,
    name: "BADEE AL OUD FOR GLORY EDP 100ml",
    brand: "LATTAFA",
    image: "/images/badee-al-oud-for-glory-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 29,
    name: "ECLAIRE EDP 100ml",
    brand: "LATTAFA",
    image: "/images/eclaire-edp-100ml.jpg",
    price: "66000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 30,
    name: "EMAAN EDP 100ml",
    brand: "LATTAFA",
    image: "/images/emaan-edp-100ml.jpg",
    price: "64000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 31,
    name: "EMEER 100ml",
    brand: "LATTAFA",
    image: "/images/emeer-100ml.jpg",
    price: "98000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 32,
    name: "FAKHAR EDP 100ml (NEGRO)",
    brand: "LATTAFA",
    image: "/images/fakhar-edp-100ml-negro.jpg",
    price: "66000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 33,
    name: "FAKHAR ELIXIR EDP 100ml",
    brand: "LATTAFA",
    image: "/images/fakhar-elixir-edp-100ml.jpg",
    price: "71000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 34,
    name: "FAKHAR F EDP 100ml",
    brand: "LATTAFA",
    image: "/images/fakhar-f-edp-100ml.jpg",
    price: "84000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO dentro de FAKHAR */
  {
    id: 72,
    name: "FAKHAR PLATIN 100ml",
    brand: "LATTAFA",
    image: "/images/fakhar-platin.jpeg",
    price: "66000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },

  {
    id: 35,
    name: "GHARAM EDP 100ml",
    brand: "LATTAFA",
    image: "/images/gharam-edp-100ml.jpg",
    price: "Por encargue",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 36,
    name: "HAYA EDP 100ml",
    brand: "LATTAFA",
    image: "/images/haya-edp-100ml.jpg",
    price: "67000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 37,
    name: "HAYAATI 100ml",
    brand: "LATTAFA",
    image: "/images/hayaati-100ml.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 38,
    name: "HAYAATI AL MALEKY 100ml",
    brand: "LATTAFA",
    image: "/images/hayaati-al-maleky-100ml.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 39,
    name: "HAYAATI FLORENCE 100ml",
    brand: "LATTAFA",
    image: "/mages/hayaati-florence-100ml.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 40,
    name: "HAYAATI GOLD ELIXIR 100ml",
    brand: "LATTAFA",
    image: "/images/hayaati-gold-elixir-100ml.jpg",
    price: "46000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 41,
    name: "HER CONFESSION EDP 100ml",
    brand: "LATTAFA",
    image: "/images/her-confession-edp-100ml.jpg",
    price: "74000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 42,
    name: "HIS CONFESSION EDP 100ml",
    brand: "LATTAFA",
    image: "/images/his-confession-edp-100ml.jpg",
    price: "74000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 43,
    name: "HONOR GLORY EDP 100ml",
    brand: "LATTAFA",
    image: "/images/honor-glory-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 44,
    name: "KHAMRAH DUKAHAH EDP 100ml",
    brand: "LATTAFA",
    image: "/images/khamrah-dukahah-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 45,
    name: "KHAMRAH EDP 100ml",
    brand: "LATTAFA",
    image: "/images/khamrah-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 46,
    name: "KHAMRAH QAHWA EDP 100ml",
    brand: "LATTAFA",
    image: "/images/khamrah-qahwa-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO dentro de LATTAFA (ubicado tras Khamrah) */
  {
    id: 74,
    name: "NEBRAS EDP 100ml",
    brand: "LATTAFA",
    image: "/images/nebras-edp-100ml.jpeg",
    price: "68000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },

  {
    id: 47,
    name: "MAYAR CHERRY INTENSE EDP 100ml",
    brand: "LATTAFA",
    image: "/images/mayar-cherry-intense-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 48,
    name: "MAYAR EDP 100ml",
    brand: "LATTAFA",
    image: "/images/mayar-edp-100ml.jpg",
    price: "65000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 49,
    name: "MAYAR NATURAL INTENSE EDP 100ml",
    brand: "LATTAFA",
    image: "/images/mayar-natural-intense-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 50,
    name: "PRIDE AJWAA EDP 90ml",
    brand: "LATTAFA",
    image: "/images/pride-ajwaa-edp-90ml.jpg",
    price: "Por encargue",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 51,
    name: "PRIDE ISHQ AL SHUYUKH GOLD",
    brand: "LATTAFA",
    image: "/images/pride-ishq-al-shuyukh-gold.jpg",
    price: "63000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 52,
    name: "QAED AL FURSAN EDP 90ml",
    brand: "LATTAFA",
    image: "/images/qaed-al-fursan-edp-90ml.jpg",
    price: "54000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO dentro de QAED AL FURSAN */
  {
    id: 73,
    name: "QAED AL FURSAN UNTAMED 90ml",
    brand: "LATTAFA",
    image: "/images/qaed-al-fursan-untamed.jpg",
    price: "52000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 53,
    name: "QAED AL FURSAN UNLIMITED EDP 90ml",
    brand: "LATTAFA",
    image: "/images/qaed-al-fursan-unlimited-edp-90ml.jpg",
    price: "52000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 54,
    name: "QIMMAH EDP 100ml",
    brand: "LATTAFA",
    image: "/images/qimmah-edp-100ml.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 55,
    name: "QIMMAH FOR WOMEN EDP 100ml",
    brand: "LATTAFA",
    image: "/images/qimmah-for-women-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 56,
    name: "SAKEENA 100ml",
    brand: "LATTAFA",
    image: "/images/sakeena-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 57,
    name: "SILVER PRIDE 100ml",
    brand: "LATTAFA",
    image: "/images/silver-pride-100ml.jpg",
    price: "67000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 58,
    name: "SUBLIME",
    brand: "LATTAFA",
    image: "/images/sublime.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 59,
    name: "THE KINGDOM EDP 100ml",
    brand: "LATTAFA",
    image: "/images/the-kingdom-edp-100ml.jpg",
    price: "74000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 60,
    name: "THE KINGDOM M. EDP 100ml",
    brand: "LATTAFA",
    image: "/images/the-kingdom-m-edp-100ml.jpg",
    price: "68000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 61,
    name: "VICTORIA 100ml",
    brand: "LATTAFA",
    image: "/images/victoria-100ml.jpg",
    price: "74000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 62,
    name: "WAJOOD EDP 100ml",
    brand: "LATTAFA",
    image: "/images/wajood-edp-100ml.jpg",
    price: "Por encargue",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 63,
    name: "YARA CANDY EDP 100ml",
    brand: "LATTAFA",
    image: "/images/yara-candy-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 64,
    name: "YARA MOI EDP 100ml",
    brand: "LATTAFA",
    image: "/images/yara-moi-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 65,
    name: "YARA ROSA EDP 100ml",
    brand: "LATTAFA",
    image: "/images/yara-rosa-edp-100ml.jpg",
    price: "62000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 66,
    name: "YARA TOUS EDP 100ml",
    brand: "LATTAFA",
    image: "/images/yara-tous-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 67,
    name: "PHILOS PURA EDP 100ml",
    brand: "MAISON ALHAMBRA",
    image: "/images/philos-pura-edp-100ml.jpg",
    price: "60000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO dentro de MAISON ALHAMBRA */
  {
    id: 75,
    name: "LA VIVACITE EAV DE PARFUM 100ml",
    brand: "MAISON ALHAMBRA",
    image: "/images/la-vivacite.jpeg",
    price: "52000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  /* NUEVO – bloque FRENCH AVENE */
  {
    id: 76,
    name: "FRENCH AVENE LIQUID BRUN MASCULINO 100ml",
    brand: "FRENCH AVENE",
    image: "/images/french-avenue.jpeg",
    price: "82000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },

  {
    id: 68,
    name: "EAU DE PARFUM",
    brand: "SALVO",
    image: "/images/eau-de-parfum.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 69,
    name: "ELIXIR 60ml",
    brand: "SALVO",
    image: "/images/elixir-60ml.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 70,
    name: "INTENSE",
    brand: "SALVO",
    image: "/images/intense.jpg",
    price: "56000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },

  /* === NUEVOS PERFUMES (CATÁLOGO POR MENOR) === */
  {
    id: 77,
    name: "BHARARA 3 KING EDP 100ml",
    brand: "BHARARA",
    image: "/images/bharara-foto.jpg",
    price: "100000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 78,
    name: "PISA LATTAFA EDP 100ml",
    brand: "LATTAFA",
    image: "/images/pissa.jpg",
    price: "86000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 79,
    name: "AL NOBLE AMEER EDP 100ml",
    brand: "LATTAFA",
    image: "/images/noble-ameer.jpeg",
    price: "61000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 80,
    name: "AL NOBLE SAFEER EDP 100ml",
    brand: "LATTAFA",
    image: "/images/noble-safeer.jpg",
    price: "61000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 81,
    name: "AL NOBLE WAZEER EDP 100ml",
    brand: "LATTAFA",
    image: "/images/noble-wazeer.png",
    price: "65000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 82,
    name: "ODYSSEY AQUA EDP 100ml",
    brand: "ARMAF",
    image: "/images/aqua.jpg",
    price: "72000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 83,
    name: "ODYSSEY MEGA EDP 100ml",
    brand: "ARMAF",
    image: "/images/mega.jpg",
    price: "68000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 84,
    name: "ANGHAM LATTAFA EDP 100ml",
    brand: "LATTAFA",
    image: "/images/angham.jpg",
    price: "70000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 85,
    name: "AL HARAMAIN AMBER OUD BLACK EDITION EDP 100ml",
    brand: "AL HARAMAIN",
    image: "/images/black.jpg",
    price: "95000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  },
  {
    id: 86,
    name: "ARMAF BEACH PARTY EDP 100ml",
    brand: "ARMAF",
    image: "/images/beach.jpg",
    price: "82000 ARS",
    notes: "Notas cítricas, florales y amaderadas"
  }
];

export default perfumes;
