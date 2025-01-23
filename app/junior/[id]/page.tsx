"use client";

import InfiniteCarousel from "@/components/Carousel";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Trophy,
  Calendar,
  Users,
  Clock,
  Gamepad2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { junior } from "@/constants/junior";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";

const editionData = [
  {
    year: 2023,
    image: "/phaser/2023/img-5.webp",
    introText:
      "La prima edizione dell'Hackathon Junior è nata come sperimentazione di un progetto di orientamento per avvicinare gli studenti dell'ultimo anno delle Scuole Secondarie di primo grado alla programmazione a blocchi con Scratch. Sin dal suo esordio, l'iniziativa ha riscosso un grande successo, coinvolgendo numerosi partecipanti e suscitando entusiasmo per il coding creativo. Un’esperienza innovativa che ha posto le basi per una tradizione formativa e competitiva di grande valore educativo.",
    stats: [
      { label: "Partecipanti alla formazione", value: "40" },
      { label: "Team in gara", value: "11" },
      { label: "Scuole", value: "4" },
    ],
  },
  {
    year: 2024,
    image: "/hero-2024.jpg",
    introText:
      "La seconda edizione dell'Hackathon Junior ha segnato un importante passo avanti per il progetto, grazie all'interesse e al supporto dell'USR Campania nell'ambito del progetto Orientalife. Questo coinvolgimento ha contribuito ad aumentare il numero di partecipanti, estendendo l'iniziativa oltre il contesto locale e attirando l'attenzione di scuole di tutta la Regione Campania. L'evento si è confermato un'occasione unica per promuovere la programmazione a blocchi con Scratch, avvicinando sempre più giovani studenti al mondo del coding e dell'innovazione tecnologica.",
    stats: [
      { label: "Partecipanti alla formazione", value: "70" },
      { label: "Team in gara", value: "20" },
      { label: "Scuole", value: "6" },
    ],
  },
  {
    year: 2025,
    image: "/phaser/2025/edition.jpg",
    introText:
      "L’edizione 2025 segna il consolidamento dell’Hackathon Junior come appuntamento fisso e atteso dalle scuole. Da progetto sperimentale di orientamento, è diventato un’iniziativa stabile e di riferimento, grazie al crescente interesse e ai numeri sempre più significativi di partecipazione. Questo evento rappresenta ormai un momento chiave per promuovere la programmazione a blocchi con Scratch, coinvolgendo studenti e docenti in un’esperienza educativa e competitiva che unisce apprendimento, creatività e innovazione. Un successo che continua a crescere e a ispirare nuove generazioni verso il coding e il pensiero computazionale.",
    stats: [
      { label: "Partecipanti previsti", value: "1500+", icon: Users },
      { label: "Team attesi", value: "35+", icon: Users },
      { label: "Developer stimati", value: "300+", icon: Gamepad2 },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


export default function page() {
  const { id } = useParams(); 
  
  if(!id) {
    return (
      <Loading />
    )
  }
  const newId = Number(id)
  const isCurrentEdition = id && id == "3"; // Assuming 2025 is the 4th edition in the array

  return (
    <main className="max-w-[1600px] pt-[60px] mx-auto px-4 lg:px-[3rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* back link  */}
        <Link
          href="/junior"
          className={`
            inline-flex items-center justify-center
            text-white hover:text-gray-200
            transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
          `}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back</span>
        </Link>

        <div className="relative">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={editionData[newId - 1].image || "/placeholder.svg"}
              alt={`Edition ${junior[newId - 1].year}`}
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-40 h-40 mb-4"
            >
              <Image
                src="/logo-junior.avif"
                alt="Phaser Game Jam Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFD700]"
            >
              {junior[newId - 1].year}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white font-secondary text-2xl md:text-3xl mt-4"
            >
              edition
            </motion.p>
          </div>
        </div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 gap-8">
            <p className="text-gray font-secondary text-sm leading-relaxed">
              {editionData[newId - 1].introText}
            </p>
          </div>
        </motion.section>

        {isCurrentEdition ? (
          // Content for 2025 edition
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
              Preparati per la Phaser Game Jam 2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Cosa aspettarsi
                  </h4>
                  <ul className="space-y-2 text-gray">
                    <li>Sfide creative</li>
                    <li>Supporto e formazione da parte di docenti esperti</li>
                    <li>Riconoscimenti e premi per i progetti migliori</li>
                    <li>Collaborazione e confronto tra studenti di diverse scuole</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Come partecipare
                  </h4>
                  <ol className="space-y-2 text-gray list-decimal list-inside">
                    <li>Forma il tuo team (da 2 a 4 studenti)</li>
                    <li>Registrati <a href="https://forms.gle/Y62WNQ8sGq6uECu3A" className=" underline text-blue-600">Qui</a></li>
                    <li>Partecipa alle sessioni di formazione</li>
                    <li>Preparati per un'esperienza di pura creatività</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        ) : (
          // Content for past editions
          <>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-3xl mt-[80px] sm:text-4xl font-bold text-white">
                I Vincitori
              </h3>
            </motion.section>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-8"
            >
              {junior[newId - 1].vincitori.map((winner, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`flex flex-col ${
                    index === 2
                      ? "lg:scale-110 z-10"
                      : index === 1 || index === 3
                      ? "lg:scale-105 z-5"
                      : ""
                  }`}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                    <CardContent className="p-6 h-full flex flex-col items-center justify-between text-center">
                      <div className="relative">
                        <div
                          className={`mb-4 relative ${
                            index === 2
                              ? "w-24 h-24 lg:w-32 lg:h-32"
                              : index === 1 || index === 3
                              ? "w-20 h-20 lg:w-24 lg:h-24"
                              : "w-16 h-16 lg:w-20 lg:h-20"
                          }`}
                        >
                          <Image
                            src={winner.logo || "/placeholder.svg"}
                            alt={`${winner.teamName} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                          <div className="absolute -top-2 -right-2 bg-[#6F6FFF] rounded-full p-1">
                            <Trophy className="w-4 h-4 text-white" />
                          </div>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h4 className="text-lg font-bold text-[#FFD700] group-hover:text-white transition-colors duration-300">
                          {winner.teamName}
                        </h4>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {winner.name}
                        </p>
                        <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                          {winner.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* media  */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

          <div className="relative max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700]">
                  {isCurrentEdition ? "Edizione 2025" : "Video e Media"}
                </h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[#6F6FFF] to-transparent" />
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    Edizione {junior[newId - 1].year}
                  </span>
                </motion.div>
              </div>

              {isCurrentEdition ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        Rimani Aggiornato
                      </h3>
                      <p className="text-gray mb-4">
                        Iscriviti alla nostra newsletter per ricevere tutte le
                        novità sull’Hackathon junior 2025.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          placeholder="La tua email"
                          className="flex-grow px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6F6FFF]"
                        />
                        <button className="px-4 py-2 bg-[#6F6FFF] text-white rounded-md hover:bg-[#5050FF] transition-colors duration-300">
                          Iscriviti
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        Date Importanti
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">Apertura iscrizioni: 1 Novembre 2024</span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">
                            Sessioni di formazione: Gennaio - Febbraio 2025
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">29 Marzo 2025</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-video">
                      <VideoPlayer videoId={junior[newId - 1].videoId} />
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8"
                  >
                    {editionData[newId - 1].stats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-[#FFD700]">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* {!isCurrentEdition && (
          <InfiniteCarousel images={junior[newId -1].media} />
        )} */}
      </motion.div>
    </main>
  );
}
