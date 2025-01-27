"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Sponsor = {
  name: string;
  logo: string;
};

type SponsorsData = {
  [key: string]: Sponsor[];
};

const sponsorsData: SponsorsData = {
  "2022": [
    { name: "4x4 System", logo: "/sponsors/2022/4x4-system.png" },
    { name: "Blexin", logo: "/sponsors/2022/blexin.png" },
    { name: "Healthware", logo: "/sponsors/2022/healthware.png" },
    { name: "Nexsoft", logo: "/sponsors/2022/nexsoft.png" },
    {
      name: "Palazzo Innovazione",
      logo: "/sponsors/2022/palazzo-innovazione.png",
    },
    { name: "DaCar", logo: "/sponsors/2022/dacar.png" },
    { name: "Studio Murano", logo: "/sponsors/2022/studio-murano.png" },
    { name: "Studio Legale Sisto", logo: "/sponsors/2022/studio-sisto.png" },
    { name: "Tuko Productions", logo: "/sponsors/2022/tuko.png" },
    { name: "weBeetle", logo: "/sponsors/2022/webeetle.png" },
    { name: "CUS Salerno", logo: "/sponsors/2022/cus-salerno.png" },
  ],
  "2023": [
    { name: "Accenture", logo: "/sponsors/2023/accenture.png" },
    { name: "NTT Data", logo: "/sponsors/2023/ntt-data.png" },
    { name: "Healthware", logo: "/sponsors/2023/healthware.png" },
    { name: "Nexsoft", logo: "/sponsors/2023/nexsoft.png" },
    {
      name: "Palazzo Innovazione",
      logo: "/sponsors/2023/palazzo-innovazione.png",
    },
    { name: "DaCar", logo: "/sponsors/2023/dacar.png" },
    { name: "Studio Murano", logo: "/sponsors/2023/studio-murano.png" },
    { name: "weBeetle", logo: "/sponsors/2023/webeetle.png" },
  ],
  "2024": [
    { name: "Deloitte", logo: "/sponsors/2024/deloitte.png" },
    { name: "NTT Data", logo: "/sponsors/2024/ntt-data.png" },
    { name: "Healthware", logo: "/sponsors/2024/healthware.png" },
    { name: "Nexsoft", logo: "/sponsors/2024/nexsoft.png" },
    {
      name: "Palazzo Innovazione",
      logo: "/sponsors/2024/palazzo-innovazione.png",
    },
    { name: "DaCar", logo: "/sponsors/2024/dacar.png" },
    { name: "Studio Murano", logo: "/sponsors/2024/studio-murano.png" },
    { name: "weBeetle", logo: "/sponsors/2024/webeetle.png" },
  ],
};

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

interface SponsorsSectionProps {
  year: string;
}

export default function SponsorsSection({ year }: SponsorsSectionProps) {
  const sponsors = sponsorsData[year] || [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700]">
            Sponsor dell'evento
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#6F6FFF] to-transparent" />
            <span className="text-white/60 text-sm uppercase tracking-wider">
              Edizione {year}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={item}
              className="relative group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#FFD700]/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="relative aspect-[3/2] flex items-center justify-center">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/60 text-sm mt-8"
        >
          Un ringraziamento speciale a tutti i nostri sponsor che hanno reso
          possibile questa edizione
        </motion.p>
      </div>
    </motion.section>
  );
}
