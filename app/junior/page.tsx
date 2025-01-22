"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, BookOpen, Trophy, ArrowRight, CheckCircle2 } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const features = [
  { icon: Calendar, title: "15 ore di corso", description: "Formazione asincrona accessibile a tutti" },
  { icon: Users, title: "3h di tutoring", description: "Sessioni pratiche con i docenti" },
  { icon: BookOpen, title: "Formazione Flessibile", description: "Partecipazione non obbligatoria" },
  { icon: Trophy, title: "Esperienza Pratica", description: "Focus su matematica e pensiero scientifico" },
]

const editions = [
  { id: 1, year: "2k23", image: "/junior/2023-edition.jpg" },
  { id: 2, year: "2k24", image: "/junior/2024-edition.jpg" },
  { id: 3, year: "2k25", image: "/phaser/2025/edition.jpg" },
];

export default function Hackathon() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 lg:mb-[150px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
              <Image
                src="/logo-junior.avif"
                alt="Scratch Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <h2 className="text-5xl tracking-wide lg:text-6xl font-secondary text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
                Hackaton
                <br />
                Junior
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-secondary text-[#FFB84D]"
            >
              Come creare un videogame in poche e semplici mosse
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/80 font-secondary text-lg leading-relaxed">
              L'Hackathon Junior è una competizione entusiasmante che coinvolge gli studenti dell'ultimo anno delle
              Scuole Secondarie di primo grado del territorio. Dopo una formazione dedicata su Scratch, i partecipanti
              mettono in pratica le loro conoscenze sfidandosi nella creazione di un videogame originale. L'evento è
              un'opportunità unica per sviluppare semplici competenze di programmazione, creatività e lavoro di squadra,
              trasformando idee in progetti concreti in un clima di sana competizione e innovazione.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors border border-[#FF8C00]/20 hover:border-[#FF8C00]/40"
            >
              <feature.icon className="w-12 h-12 text-[#FFA500] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500] mb-8">
            Come acquisire le competenze necessarie?
          </h2>
          <div className="bg-white/5 rounded-2xl p-8 space-y-6 border border-[#FF8C00]/20">
            <p className="text-white/80 leading-relaxed mb-4">
              L'IIS "Margherita Hack" mette a disposizione degli studenti delle Scuole secondarie di primo grado che
              vogliano partecipare alla competizione, un percorso di formazione di 15h ore e 3h di tutoring per la
              definizione dei progetti finali.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#FFA500] mt-1 mr-3 flex-shrink-0" />
                <p className="text-white/80">Ciascuna lezione on line potrà essere fruita in modalità on demand</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#FFA500] mt-1 mr-3 flex-shrink-0" />
                <p className="text-white/80">
                  Le ore di docenza saranno tenute da docenti esperti dell'Istituto Tecnico Tecnologico e del Liceo
                  Scientifico
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Editions Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32"
      >
        {editions.map((edition) => (
          <motion.div
            key={edition.id}
            variants={item}
            className={`${
              "h-[350px]"
            } group relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
          >
            <Link href={`/junior/${edition.id}`} className="block h-full">
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

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <Link
            href="/register"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white font-bold text-lg hover:from-[#FF7F00] hover:to-[#FF9500] transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Partecipa all'Hackathon Junior
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div> */}
      </div>
    </main>
  )
}

