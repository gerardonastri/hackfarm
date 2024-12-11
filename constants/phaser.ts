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
    year: 2024,
    videoId: "dQw4w9WgXcQ", // Esempio di ID di un video YouTube
    media: ["img-gallery-1.jpg", "img-gallery-2.jpg", "img-gallery-3.jpg"],
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
