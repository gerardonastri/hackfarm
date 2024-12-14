"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, BookOpen, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const features = [
  { icon: Calendar, title: "8 Lezioni Online", description: "Formazione asincrona accessibile a tutti" },
  { icon: Users, title: "2 Incontri dal Vivo", description: "Sessioni pratiche con i docenti" },
  { icon: BookOpen, title: "Formazione Flessibile", description: "Partecipazione non obbligatoria" },
  { icon: Trophy, title: "Esperienza Pratica", description: "Focus su matematica e pensiero scientifico" },
];

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
            <h2 className="text-5xl tracking-wide lg:text-6xl font-secondary text-transparent bg-clip-text bg-gradient-to-r from-[#00487C] to-[#0077CC]">
              Hackaton
              <br />
              Junior
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/80 font-secondary text-lg leading-relaxed">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
              Utilizzando il framework Phaser JS, i partecipanti sviluppano
              competenze tecniche e creative, lavorano in team e sperimentano
              una vera sfida di programmazione.
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
              className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-[#00487C] mb-4" />
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
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00487C] to-[#0077CC] mb-8">
            Come acquisire le competenze necessarie?
          </h2>
          <div className="bg-white/5 rounded-2xl p-8 space-y-6">
            <p className="text-white/80 leading-relaxed mb-4">
              L'IIS "M. Hack" mette a disposizione degli studenti delle Scuole Secondarie di primo grado che vogliano partecipare alla competizione, un percorso di formazione on line (8 lezioni) e due incontri in presenza presso la sede dell'Istituto Tecnico.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#00487C] mt-1 mr-3 flex-shrink-0" />
                <p className="text-white/80">Ciascuna lezione on line potrà essere fruita in modalità asincrona.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#00487C] mt-1 mr-3 flex-shrink-0" />
                <p className="text-white/80">Le due lezioni in presenza saranno tenute da docenti di Informatica dell'Istituto nelle date di domenica 18 dicembre 2022 e domenica 22 gennaio 2022 e avranno la durata di 1h ciascuna.</p>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00487C] to-[#0077CC] mb-8">
            Domande Frequenti
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 rounded-xl overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#00487C] transition-colors">
                Il corso è obbligatorio per la partecipazione all'HACKathon junior?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/80">
                No, il corso non è obbligatorio; infatti, non vengono rilevate le presenze. Il corso è solo un supporto che i docenti dell'IIS "M. HACK" offrono agli studenti interessati.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white/5 rounded-xl overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#00487C] transition-colors">
                Possono seguire il corso anche studenti che non partecipano all'HACKathon junior?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/80">
                Si, il corso, poiché è on line ed è svolto in modalità asincrona, può essere seguito anche da studenti che non partecipano alla competizione.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 mt-[100px]"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00487C] to-[#0077CC] mb-8">
            La Nostra Storia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white/80">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="leading-relaxed xl:max-w-[90%] font-secondary text-lg"
            >
              Durante l'anno scolastico 2021/2022 l'IIS "Margherita Hack" ha organizzato la prima edizione del Phaser game jam – HACKathon, challenge didattica per la realizzazione di un videogame, che ha coinvolto 10 scuole superiori della Regione Campania, 326 studenti, 31 tutor scolastici e numerose aziende del settore informatico.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="leading-relaxed font-secondary text-lg"
            >
              Fortemente convinto della valenza didattica del percorso e della necessità di accompagnare gli studenti ad una scelta quanto più consapevole possibile per il loro percorso futuro, l'Istituto propone agli alunni delle classi terze delle Scuole secondarie di primo grado un HACKathon junior sul tema "Matematica e pensiero scientifico".
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <Link 
            href="/register" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#00487C] to-[#0077CC] text-white font-bold text-lg hover:from-[#003A66] hover:to-[#0066B3] transition-all duration-300"
          >
            Partecipa all'Hackathon Junior
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

