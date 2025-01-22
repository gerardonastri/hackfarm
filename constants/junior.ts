interface School {
  name: string;
  location: string;
  teamName: string;
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

const junior: Edition[] = [
  {
    id: 1,
    year: 2023,
    videoId: "L71IyAgMFTQ", // Esempio di ID di un video YouTube
    media: [
      "/phaser/2023/img-1.webp",
      "/phaser/2023/img-2.webp",
      "/phaser/2023/img-3.webp",
      "/phaser/2023/img-4.webp",
      "/phaser/2023/img-5.webp",
      "/phaser/2023/img-6.webp",
    ],
    mainImage: "main-image-2023.jpg",
    vincitori: [
        {
            name: 'Scuola media "San Tommaso"',
            location: "di Mercato San Severino (SA)",
            teamName: "M4THG3N1US",
            logo: "/junior/san-tommaso.png",
            rank: 3,
          },
          {
            name: 'Scuola Media "San Tommaso"',
            location: "di Mercato San Severino (SA)",
            teamName: "XY3D",
            logo: "/junior/san-tommaso.png",
            rank: 1,
          },
          {
            name: 'IC "Autonomia 82"',
            location: "di Baronissi (SA)",
            teamName: "GEVAVD FANS",
            logo: "/junior/autonomia-82.svg",
            rank: 2,
          },
          {
            name: 'IC "A.F. Galiani"',
            location: "di Montoro (AV)",
            teamName: "I Magnifici 4",
            logo: "/junior/galiani.png",
            rank: 4,
          },
    ],
  },
  {
    id: 2,
    year: 2024,
    videoId: "DUTJW4N0USg", // Esempio di ID di un video YouTube
    media: [
      "/phaser/2024/img-1.webp",
      "/phaser/2024/img-2.webp",
      "/phaser/2024/img-3.webp",
      "/phaser/2024/img-4.webp",
      "/phaser/2024/img-5.webp",
      "/phaser/2024/img-6.webp",
    ],
    mainImage: "main-image-2023.jpg",
    vincitori: [
      {
        name: 'IC "Viscigliete"',
        location: "di Sala Consilina (SA)",
        teamName: "GLI ENIGMATICI",
        logo: "/junior/san-tommaso.png",
        rank: 3,
      },
      {
        name: 'IC "Autonomia 82"',
        location: "di Baronissi (SA)",
        teamName: "3GAME",
        logo: "/junior/autonomia-82.svg",
        rank: 3,
      },
      {
        name: 'Scuola media “San Tommaso”',
        location: "di Mercato San Severino (SA)",
        teamName: "LE GIRLS",
        logo: "/junior/san-tommaso.png",
        rank: 2,
      },
      {
        name: 'IC "Bracigliano"',
        location: "di Bracigliano (SA)",
        teamName: "no name",
        logo: "/junior/bracigliano.png",
        rank: 2,
      },

    ],
  },
  {
    id: 3,
    year: 2025,
    videoId: "", // Esempio di ID di un video YouTube
    media: [],
    mainImage: "main-image-2023.jpg",
    vincitori: [],
  },
];

export type { School, Edition };
export { junior };