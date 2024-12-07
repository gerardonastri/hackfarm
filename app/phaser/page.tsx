"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {editions.map((edition) => (
            <motion.div
              key={edition.id}
              variants={item}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={edition.image}
                alt={`Edition ${edition.year}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
