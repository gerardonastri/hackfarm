"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

type Sponsor = {
  name: string
  logo: string
  website: string
}

type SponsorsData = {
  [key: string]: Sponsor[]
}

const sponsorsData: SponsorsData = {
  "2022": [
    { name: "4x4 System", logo: "/sponsor/sponsor-1.png", website: "https://www.4x4.it/" },
    { name: "Blexin", logo: "/sponsor/sponsor-2.png", website: "https://www.blexin.com" },
    { name: "Healthware", logo: "/sponsor/sponsor-3.png", website: "https://www.facebook.com/healthwareintl/" },
    { name: "Nexsoft", logo: "/sponsor/sponsor-4.png", website: "https://www.nexsoft.it" },
    { name: "Palazzo Innovazione", logo: "/sponsor/sponsor-5.png", website: "https://www.palazzoinnovazione.it" },
    { name: "DaCar", logo: "/sponsor/sponsor-6.png", website: "https://www.dacar.it" },
    { name: "Studio Murano", logo: "/sponsor/sponsor-7.png", website: "https://www.studiomurano.it" },
    { name: "Studio Legale Sisto", logo: "/sponsor/sponsor-8.png", website: "https://www.studiolegalesisto.it" },
    { name: "Tuko Productions", logo: "/sponsor/sponsor-9.png", website: "https://www.tukopro.com/it/" },
    { name: "weBeetle", logo: "/sponsor/sponsor-10.png", website: "https://www.webeetle.com" },
    { name: "CUS Salerno", logo: "/sponsor/sponsor-11.png", website: "https://www.cussalerno.it" },
  ],
  "2023": [
    { name: "Nexsoft", logo: "/sponsor/sponsor-4.png", website: "https://www.nexsoft.it" },
    { name: "eTuitus", logo: "/sponsor/sponsor-12.png", website: "https://www.etuitus.it/" },
    { name: "IndieGala", logo: "/sponsor/sponsor-13.png", website: "https://www.indiegala.com" },
    { name: "Blexin", logo: "/sponsor/sponsor-2.png", website: "https://www.blexin.com" },
    { name: "Sella", logo: "/sponsor/sponsor-15.png", website: "https://www.sella.it" },
    { name: "weBeetle", logo: "/sponsor/sponsor-10.png", website: "https://www.webeetle.com" },
    { name: "CodeMagic", logo: "/sponsor/sponsor-16.png", website: "https://codemagic.it/" },
  ],
  "2024": [
    { name: "eTuitus", logo: "/sponsor/sponsor-12.png", website: "https://www.etuitus.it/" },
    { name: "IndieGala", logo: "/sponsor/sponsor-13.png", website: "https://www.indiegala.com" },
    { name: "SIP&T", logo: "/sponsor/sponsor-17.png", website: "https://www.sipdrill.it/" },
    { name: "Pierro Group", logo: "/sponsor/sponsor-18.png", website: "https://www.fratellipierro.it/it" },
    { name: "ABCD Entertainment", logo: "/sponsor/sponsor-19.png", website: "https://www.labcd.it/" },
    { name: "Too Zoo Technology", logo: "/sponsor/sponsor-20.png", website: "https://www.toozoo.it/" },
    { name: "Case Lab", logo: "/sponsor/sponsor-26.png", website: "https://www.facebook.com/caselabsrl/?locale=it_IT" },
    { name: "New Media Adventures", logo: "/sponsor/sponsor-27.png", website: "https://www.newmediasrl.it/sito/" },
    { name: "Banca Monte Pruno", logo: "/sponsor/sponsor-21.png", website: "https://www.bccmontepruno.it" },
    { name: "Nexsoft", logo: "/sponsor/sponsor-4.png", website: "https://www.nexsoft.it" },
    { name: "weBeetle", logo: "/sponsor/sponsor-10.png", website: "https://www.webeetle.com" },
    { name: "Fondazione Saccone", logo: "/sponsor/sponsor-22.png", website: "https://www.fondazionesaccone.it" },
    { name: "Galdieri Auto", logo: "/sponsor/sponsor-23.webp", website: "https://www.galderiauto.it" },
    { name: "Matteo Napoli", logo: "/sponsor/sponsor-24.png", website: "https://www.matteonapoliappaltiecostruzioni.it/" },
    { name: "Blexin", logo: "/sponsor/sponsor-2.png", website: "https://www.blexin.com" },
    { name: "Virvelle", logo: "/sponsor/sponsor-25.svg", website: "https://www.virvelle.com" },
  ],
}

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

interface SponsorsSectionProps {
  year: string
}

export default function SponsorsSection({ year }: SponsorsSectionProps) {
  const sponsors = sponsorsData[year] || []

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700]">Sponsor dell'evento</h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#6F6FFF] to-transparent" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Edizione {year}</span>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor) => (
            <motion.div key={sponsor.name} variants={item} className="relative group">
              <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                <Card className="bg-[#1a1a1a] hover:bg-[#242424] border-white/5 hover:border-[#FFD700]/20 transition-all duration-300 overflow-hidden cursor-pointer">
                  <CardContent className="p-8 relative">
                    {/* Overlay gradient for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Container for the image with padding control */}
                    <div className="relative aspect-[3/2] flex items-center justify-center p-4">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain mix-blend-normal filter group-hover:brightness-110 group-hover:contrast-125 transition-all duration-300"
                      />
                    </div>

                    {/* Optional: Sponsor name on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-center text-white/90 text-sm py-2 px-4">{sponsor.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/60 text-sm mt-8"
        >
          Un ringraziamento speciale a tutti i nostri sponsor che hanno reso possibile questa edizione
        </motion.p>
      </div>
    </motion.section>
  )
}

