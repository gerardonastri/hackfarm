"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const editions = [
  { id: 1, year: "2k21", image: "/image.jpg" },
  { id: 2, year: "2k22", image: "/image.jpg" },
  { id: 3, year: "2k23", image: "/image.jpg" },
  { id: 4, year: "2k24", image: "/image.jpg" },
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

export default function Phaser() {
  return (
    <main className="min-h-screen  py-20">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 lg:mb-[150px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-5xl tracking-wide lg:text-6xl font-secondary
             text-white"
            >
              Phaser Game
              <br />
              Jam
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white font-secondary text-[14px] text-right leading-relaxed">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
              Utilizzando il framework Phaser JS, i partecipanti sviluppano
              competenze tecniche e creative, lavorano in team e sperimentano
              una vera sfida di programmazione. La Game Jam rappresenta
              un&apos;occasione unica per apprendere, collaborare e crescere,
              combinando divertimento e apprendimento pratico in un contesto
              stimolante e competitivo.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12"
        >
          {editions.map((edition) => (
            <motion.div
              key={edition.id}
              variants={item}
              className={`${
                edition.id === 1 || edition.id === 4 ? "h-[350px]" : "h-[280px]"
              } w-full relative aspect-square rounded-3xl overflow-hidden group cursor-pointer`}
            >
              <Link href={`/phaser/${edition.year}`}>
                <Image
                  src={edition.image}
                  alt={`Edition ${edition.year}`}
                  fill
                  className="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-4xl font-secondary">
                      {edition.year}
                    </p>
                    <p className="text-white text-xl">edition</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 mt-[100px]"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Più informazioni
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-justify leading-relaxed text-white xl:max-w-[90%] font-secondary text-sm"
            >
              La Phaser Game Jam - Hackathon è un evento educativo innovativo
              progettato per ispirare e coinvolgere giovani sviluppatori nella
              creazione dei videogiochi. Questo evento offre un&apos;esperienza
              unica di apprendimento pratico e rappresenta un&apos;opportunità
              unica per apprendere e mettere in pratica competenze tecniche in
              un contesto stimolante e creativo. Utilizzando Phaser JS, un
              framework JavaScript open-source, una tecnologia avanzata che
              permette di sviluppare videogiochi interattivi e accattivanti.
              Durante la competizione, i partecipanti lavorano in team per
              creare progetti originali che mettono in luce il loro talento e la
              loro creatività.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-justify leading-relaxed text-white font-secondary text-sm"
            >
              L&apos;evento è creare un videogioco originale e funzionale in un
              tempo limitato, dimostrando creatività, capacità di
              problem-solving e lavoro di squadra. Questa sfida non è solo
              un&apos;attività divertente, ma anche un&apos;importante
              opportunità di apprendimento pratico in un ambiente collaborativo
              e dinamico. La Phaser Game Jam - Hackathon offre ai partecipanti
              la possibilità di: Sviluppare competenze tecniche (HTML5,
              JavaScript, framework specifici) Migliorare degli Skill di Sistema
              (DBGA), attraverso il Cooperative Learning Potenziare le capacità
              di Problem Solving e Decisione Esplorare la logica e la struttura
              base dello sviluppo di videogiochi Imparare a gestire il tempo e
              le risorse formando nuove, sport e imparando per garantire
              un&apos;esperienza di crescita in più direzioni. Inoltre,
              l&apos;evento si svolge in un formato stimolante e competitivo che
              incoraggia i partecipanti a dare il situazioni, l&apos;interazione
              tra/con, misurandosi un tutto impegno verso l&apos;eccellenza in
              via unica in modo libero.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
