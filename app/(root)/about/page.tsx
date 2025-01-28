"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Globe, Briefcase, Lightbulb } from "lucide-react";
import CtaSection from "@/components/CTA";

const objectives = [
  {
    icon: BookOpen,
    title: "Progetti Formativi",
    description:
      "Collaboriamo con università, aziende e centri di ricerca per offrire progetti formativi innovativi per studenti e docenti.",
  },
  {
    icon: Users,
    title: "Ricerca Educativa",
    description:
      "Promuoviamo la ricerca educativa attraverso la produzione di studi e pubblicazioni innovative nel campo del gaming e della tecnologia.",
  },
  {
    icon: Globe,
    title: "Eventi Culturali",
    description:
      "Organizziamo eventi culturali e sociali per favorire lo sviluppo e l'inclusione del territorio.",
  },
  {
    icon: Briefcase,
    title: "Imprenditorialità",
    description:
      "Sosteniamo l'imprenditorialità responsabile offrendo orientamento e opportunità di occupazione.",
  },
  {
    icon: Lightbulb,
    title: "Innovazione Digitale",
    description:
      "Promuoviamo la cultura dell'innovazione e dell'ICT con particolare attenzione alla digitalizzazione e alla sostenibilità.",
  },
];

const images = ["/about/img-1.webp", "/about/img-2.webp", "/about/img-3.webp"];

export default function AboutPage() {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [objectivesRef, objectivesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-[#c8ff00] to-[#c8ff00] text-transparent bg-clip-text">
            Chi siamo?
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/80">
            L'Associazione Hackfarm E.T.S., un'associazione senza scopo di lucro
            che si propone come punto di riferimento per la promozione della
            cultura e delle attività culturali, favorendo l'aggregazione e
            l'inclusione sociale.
          </p>
        </motion.div>

        <motion.div
          ref={missionRef}
          initial={{ opacity: 0 }}
          animate={missionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#c8ff00] to-[#c8ff00]" />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-[#c8ff00]">
                    La Nostra Missione
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    L'associazione opera per valorizzare il territorio della
                    Valle dell'Irno, con particolare attenzione al Comune di
                    Baronissi e alle sue istituzioni educative, attraverso il
                    sostegno alla comunità scolastica con progetti formativi per
                    docenti e studenti, realizzati in collaborazione con
                    università, centri studi ed enti di ricerca.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#c8ff00] to-[#c8ff00]" />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-[#c8ff00]">
                    Il Nostro Impegno
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Promuove la ricerca didattico-educativa, lo sviluppo di
                    attività extrascolastiche e l'organizzazione di eventi
                    culturali e sociali, per favorire la crescita delle comunità
                    locali.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {images.slice(0, 2).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Game Jam Event ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c8ff00]/10 to-transparent rounded-3xl" />
          <div className="relative p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-[#c8ff00]">
              La Nostra Vision
            </h2>
            <p className="text-white/80 leading-relaxed max-w-4xl">
              Hack Farm E.T.S. incentiva una cultura imprenditoriale
              responsabile, attenta all'orientamento e all'occupazione, e
              sostiene l'innovazione, l'ICT e lo sviluppo sostenibile,
              promuovendo inclusione digitale e imprenditorialità. Inoltre,
              realizza attività culturali e turistiche, nel rispetto delle
              normative, arricchendo l'offerta per gli associati.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={objectivesRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={objectivesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#c8ff00]">
            I Nostri Obiettivi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <objective.icon className="w-8 h-8 text-[#c8ff00]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {objective.title}
                    </h3>
                    <p className="text-white/60">{objective.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#c8ff00]">
            Unisciti alla nostra community
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Partecipa ai nostri eventi, condividi la tua passione per il gaming
            e fai parte di una community in continua crescita.
          </p>
          <button className="bg-[#c8ff00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#a6d900] transition-colors duration-300">
            Partecipa ora
          </button>
        </motion.div> */}
        <CtaSection />
      </div>
    </div>
  );
}
