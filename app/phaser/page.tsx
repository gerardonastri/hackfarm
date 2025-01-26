"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, Code, Trophy } from "lucide-react";

const editions = [
  { id: 1, year: "2k22", image: "/phaser/2022-edition.webp" },
  { id: 2, year: "2k23", image: "/edition-2023.jpg" },
  { id: 3, year: "2k24", image: "/edition-2024.jpg" },
  { id: 4, year: "2k25", image: "/phaser/2025-edition.webp" },
];

const features = [
  { icon: Calendar, title: "48 Ore", description: "di sviluppo intensivo" },
  {
    icon: Users,
    title: "Lavoro di Squadra",
    description: "collaborazione e networking",
  },
  {
    icon: Code,
    title: "Phaser JS",
    description: "framework per game development",
  },
  { icon: Trophy, title: "Premi", description: "per i migliori progetti" },
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
    <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] sm:px-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 lg:mb-[150px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-8"
        >
          <div className="relative w-full max-w-[200px] h-[200px]">
            <Image
              src="/logo-phaser.png"
              alt="Phaser Game Jam Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-6xl lg:text-8xl font-bold tracking-tight">
            <span className="text-[#FFD700]">Phaser</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Game
              <br />
              Jam
            </span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-[#6F6FFF] to-[#FFD700]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center"
        >
          <p className="text-white/80 font-secondary text-lg leading-relaxed">
            La Phaser Game Jam - Hackathon è un evento educativo ideato per
            ispirare e coinvolgere studenti e studentesse delle Scuole
            Secondarie di Secondo grado nella creazione di videogiochi.
            Utilizzando il framework Phaser JS, i partecipanti sviluppano
            competenze tecniche e creative, lavorano in team e sperimentano una
            vera sfida di programmazione.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="bg-[#6F6FFF]/5 backdrop-blur-sm rounded-xl p-6 hover:bg-[#6F6FFF]/10 transition-all duration-300 border border-[#6F6FFF]/10"
          >
            <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/70">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Editions Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-32"
      >
        {editions.map((edition) => (
          <motion.div
            key={edition.id}
            variants={item}
            className={`${"h-[350px]"} group relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
          >
            <Link href={`/phaser/${edition.id}`} className="block h-full">
              <Image
                src={edition.image || "/placeholder.svg"}
                alt={`Edition ${edition.year}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262657]/95 via-[#262657]/85 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                  <p className="text-5xl font-bold text-[#FFD700] mb-2">
                    {edition.year}
                  </p>
                  <p className="text-white/80 text-xl tracking-wider uppercase">
                    edition
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-32"
      >
        <div className="absolute -top-16 left-0 w-20 h-1 bg-gradient-to-r from-[#6F6FFF] to-[#FFD700]" />
        <h2 className="text-4xl lg:text-5xl font-bold text-[#FFD700] mb-12">
          Più informazioni
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/80 leading-relaxed text-lg xl:max-w-[90%]">
              La Phaser Game Jam - Hackathon è un evento educativo innovativo
              progettato per ispirare e coinvolgere giovani sviluppatori nella
              creazione dei videogiochi. Questo evento offre un&apos;esperienza
              unica di apprendimento pratico e rappresenta un&apos;opportunità
              unica per apprendere e mettere in pratica competenze tecniche in
              un contesto stimolante e creativo.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-[#6F6FFF]/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-white/80 leading-relaxed text-lg">
              L&apos;evento è creare un videogioco originale e funzionale in un
              tempo limitato, dimostrando creatività, capacità di
              problem-solving e lavoro di squadra. Questa sfida non è solo
              un&apos;attività divertente, ma anche un&apos;importante
              opportunità di apprendimento pratico in un ambiente collaborativo
              e dinamico.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-[#6F6FFF]/20 to-transparent" />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#6F6FFF] to-[#FFD700] rounded-3xl p-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Pronto per la sfida?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Unisciti alla prossima Phaser Game Jam e trasforma le tue idee in
          realtà. Sviluppa le tue competenze, collabora con altri appassionati e
          crea il tuo videogioco!
        </p>
        <Link
          href="/register"
          className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#6F6FFF] font-bold text-lg hover:bg-[#FFD700] hover:text-white transition-colors duration-300"
        >
          Registrati ora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
