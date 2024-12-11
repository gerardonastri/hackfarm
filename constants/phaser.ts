interface School {
  name: string;
  location: string;
  teamName: string;
  prize: number;
  logo: string;
  rank: number;
}

interface Edition {
  id: number;
  year: number;
  videoId: string;
  media: string[];
  mainImage: string;
  vincitori: School[];
}

const senior: Edition[] = [
  {
    id: 1,
    year: 2022,
    videoId: "eH6x2dUdYyM",
    media: [],
    mainImage: "main-image-2023.jpg",
    vincitori: [
      {
        name: "IIS Mattei - Fortunato",
        location: "Salerno",
        teamName: "The while loops",
        prize: 150,
        logo: "/assets/squadre/2022/img-4.jpg",
        rank: 4,
      },
      {
        name: "IIS Enrico Fermi",
        location: "Salerno",
        teamName: "Error404",
        prize: 300,
        logo: "/assets/squadre/2022/img-2.jpg",
        rank: 2,
      },
      {
        name: "IIS Basilio Focaccia",
        location: "Salerno",
        teamName: "The BITles",
        prize: 600,
        logo: "/assets/squadre/2022/img-1.jpg",
        rank: 1,
      },
      {
        name: "ITI G.B. Lucarelli",
        location: "Benevento",
        teamName: "Humans from Earth",
        prize: 200,
        logo: "/assets/squadre/2022/img-3.jpg",
        rank: 3,
      },
      {
        name: "IIS Margherita Hack",
        location: "Baronissi",
        teamName: "Phaserat in centro",
        prize: 100,
        logo: "/logo.png",
        rank: 5,
      },
    ],
  },
  {
    id: 2,
    year: 2023,
    videoId: "-zjwOesIuak", // Esempio di ID di un video YouTube
    media: [],
    mainImage: "main-image-2023.jpg",
    vincitori: [
      {
        name: 'I.T.I. "G. Ferraris"',
        location: "Napoli",
        teamName: "Alpha Game Studio",
        prize: 200,
        logo: "/assets/squadre/2023/img-4.jpg",
        rank: 4,
      },
      {
        name: "IIS Enrico Fermi",
        location: "Sarno",
        teamName: "Hyperuranium",
        prize: 600,
        logo: "/assets/squadre/2023/img-2.jpg",
        rank: 2,
      },
      {
        name: 'Liceo Scientifico "E.FERMI"',
        location: "Aversa",
        teamName: "Racoon",
        prize: 1000,
        logo: "/assets/squadre/2023/img-1.jpg",
        rank: 1,
      },

      {
        name: "ITI G.B. Lucarelli",
        location: "Benevento",
        teamName: "Time Square",
        prize: 400,
        logo: "/assets/squadre/2023/img-3.jpg",
        rank: 3,
      },
      {
        name: 'I.I.S. "Guglielmo Marconi"',
        location: "Nocera",
        teamName: "</noname>",
        prize: 100,
        logo: "/assets/squadre/2023/img-5.jpg",
        rank: 5,
      },
    ],
  },
  {
    id: 3,
    year: 2024,
    videoId: "cnUIg-eFldg", // Esempio di ID di un video YouTube
    media: [],
    mainImage: "main-image-2023.jpg",
    vincitori: [
      {
        name: 'IIS "Della Corte Vanvitelli"',
        location: "di Cava dei Tirreni (SA)",
        teamName: "Nova dreamers",
        prize: 300,
        logo: "/assets/squadre/2024/img-4.jpg",
        rank: 4,
      },
      {
        name: 'IIS "Margherita Hack"',
        location: "di Baronissi (SA)",
        teamName: "Colossus",
        prize: 500,
        logo: "/logo.png",
        rank: 2,
      },
      {
        name: 'Polispecialistico "San Paolo"',
        location: "di Sorrento (NA)",
        teamName: "Victorious Juice",
        prize: 1000,
        logo: "/assets/squadre/2024/img-1.jpg",
        rank: 1,
      },
      {
        name: 'Liceo Scientifico "E. Fermi"',
        location: "di Aversa (CE)",
        teamName: "Kraus Games",
        prize: 400,
        logo: "/assets/squadre/2024/img-3.jpg",
        rank: 3,
      },
      {
        name: 'IIS "Galilei – Di Palo"',
        location: "di Salerno",
        teamName: "Moonveil",
        prize: 200,
        logo: "/assets/squadre/2024/img-5.jpg",
        rank: 5,
      },
      {
        name: 'ITI "Enrico Medi"',
        location: "di San Giorgio a Cremano (NA)",
        teamName: "Tegu",
        prize: 100,
        logo: "/assets/squadre/2024/img-6.jpg",
        rank: 6,
      },
    ],
  },
];

export type { School, Edition };
export { senior };
