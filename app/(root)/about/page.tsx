"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Globe, Briefcase, Lightbulb } from "lucide-react";
import { animate } from "framer-motion";
import React from "react";

const stats = [
  {
    value: "7+",
    label: "Eventi per Phase Game Jam",
  },
  {
    value: "700",
    label: "Partecipanti ogni anno",
  },
  {
    value: "6+",
    label: "Eventi svolti ogni anno",
  },
  {
    value: "48h",
    label: "Di gaming non-stop",
  },
];

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
      "Organizziamo eventi culturali e sociali per favorire lo sviluppo e l'inclusione del territorio attraverso il gaming.",
  },
  {
    icon: Briefcase,
    title: "Imprenditorialità",
    description:
      "Sosteniamo l'imprenditorialità responsabile offrendo orientamento e opportunità di occupazione nel settore del gaming.",
  },
  {
    icon: Lightbulb,
    title: "Innovazione Digitale",
    description:
      "Promuoviamo la cultura dell'innovazione e dell'ICT con particolare attenzione alla digitalizzazione e alla sostenibilità.",
  },
];

const images = ["/about/img-1.webp", "/about/img-2.webp", "/about/img-3.webp"];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => {
    if (value.endsWith("+")) {
      return `${latest}+`;
    }
    return latest.toString();
  });

  React.useEffect(() => {
    const finalValue = parseInt(value.replace("+", ""));
    const controls = animate(count, finalValue, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  return (
    <Card className="p-6 bg-black/50 backdrop-blur border-[#92fa1c]/20 hover:border-[#92fa1c]/40 transition-colors">
      <motion.p className="text-4xl font-bold text-[#c8ff00] mb-2">
        {displayValue}
      </motion.p>
      <p className="text-gray">{label}</p>
    </Card>
  );
}

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [objectivesRef, objectivesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className=" text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-[#c8ff00] to-[#92fa1c] text-transparent bg-clip-text">
            Chi siamo?
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
            Il nostro obiettivo è generare un impatto positivo sulla comunità
            attraverso eventi di gaming innovativi e coinvolgenti, creando spazi
            di collaborazione e crescita per tutti i partecipanti.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          ref={ref}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AnimatedStat value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden group"
            >
              <Image
                src={image}
                alt={`Game Jam Event ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={objectivesRef}
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={objectivesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#c8ff00]">
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
                <Card className="p-6 h-full bg-black/50 backdrop-blur border-[#92fa1c]/20 hover:border-[#92fa1c]/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <objective.icon className="w-8 h-8 text-[#c8ff00]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {objective.title}
                    </h3>
                    <p className="text-gray flex-grow">
                      {objective.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#c8ff00]">
            Unisciti alla nostra community
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Partecipa ai nostri eventi, condividi la tua passione per il gaming
            e fai parte di una community in continua crescita.
          </p>
          <button className="bg-[#92fa1c] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#c8ff00] transition-colors duration-300">
            Partecipa ora
          </button>
        </motion.div>
      </div>
    </div>
  );
}
