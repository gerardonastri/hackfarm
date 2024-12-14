"use client";

import InfiniteCarousel from "@/components/Carousel";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { senior } from "@/constants/phaser";

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

const carouselImages = [
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
];

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
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
          href="/phaser"
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
              src="/image.jpg"
              alt={`Edition ${senior[id - 1].year}`}
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #7C013E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {senior[id - 1].year}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-secondary text-2xl md:text-3xl mt-4"
            >
              edition
            </motion.p>
          </div>
        </div>

        {/* vincitori  */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8 "
        >
          <h3 className="text-3xl mt-[80px] sm:text-4xl font-bold text-white">
            I Vincitori
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-gray font-secondary text-sm leading-relaxed">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
            </p>
            <p className="text-gray font-secondary text-sm leading-relaxed">
              Attraverso questa esperienza, i partecipanti hanno l'opportunità
              di mettere alla prova le proprie competenze, lavorare in team e
              sviluppare progetti innovativi nel campo del game development.
            </p>
          </div>
        </motion.section>

        {/* SQUADRE VINCITORI  */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-8"
        >
          {senior[id - 1].vincitori.map((winner, index) => (
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
                        src={winner.logo}
                        alt={`${winner.teamName} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {index < 3 && (
                      <div className="absolute -top-2 -right-2 bg-[#7C013E] rounded-full p-1">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h4 className="text-lg font-bold  text-[#7C013E] group-hover:text-white transition-colors duration-300">
                      {winner.teamName}
                    </h4>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {winner.name}
                    </p>
                    <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {winner.location}
                    </p>
                  </div>
                  <p className="text-2xl font-bold  text-[#7C013E] group-hover:text-white transition-colors duration-300 mt-4">
                    € {winner.prize}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* media  */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

          <div className="relative max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-[#7C013E] bg-clip-text text-transparent">
                  Video e Media
                </h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[#7C013E] to-transparent" />
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    Edizione 2022
                  </span>
                </motion.div>
              </div>

              {/* Description Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray leading-relaxed text-[16px]"
                >
                  La Phaser Game Jam - Hackathon è un evento educativo ideato
                  per ispirare e coinvolgere studenti e studentesse delle Scuole
                  Secondarie di Secondo grado nella creazione di videogiochi.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray leading-relaxed text-[16px]"
                >
                  Attraverso questa esperienza unica, i partecipanti hanno
                  l'opportunità di esplorare il mondo dello sviluppo dei
                  videogiochi, collaborare in team e dare vita alle proprie idee
                  creative.
                </motion.p>
              </div>

              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-video">
                  <VideoPlayer videoId={senior[id - 1].videoId} />
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10" />
              </motion.div>

              {/* Stats or Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              >
                {[
                  { label: "Partecipanti", value: "150+" },
                  { label: "Ore di Gaming", value: "48h" },
                  { label: "Progetti", value: "30+" },
                  { label: "Mentor", value: "12" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#7C013E]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <InfiniteCarousel images={carouselImages} />
      </motion.div>
    </main>
  );
}
