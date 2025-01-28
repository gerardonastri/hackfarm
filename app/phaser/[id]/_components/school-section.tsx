"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, School } from "lucide-react";

type School = {
  name: string;
  province: string;
};

const schools: School[] = [
  { name: 'IIS "MARGHERITA HACK" - BARONISSI', province: "Salerno" },
  { name: 'IIS "BASILIO FOCACCIA"', province: "Salerno" },
  { name: 'IIS "E. FERMI"', province: "Salerno" },
  { name: 'IIS "GALILEI DI PALO"', province: "Salerno" },
  { name: 'IIS "MATTEI-FORTUNATO" - EBOLI', province: "Salerno" },
  { name: 'IIS "PUBLIO VIRGILIO MARONE"', province: "Salerno" },
  { name: 'IIS "PRESTA GLORIOSI"', province: "Salerno" },
  { name: 'IIS "DELLA CORTE-VANVITELLI"', province: "Salerno" },
  { name: 'IIS "G. MARCONI"', province: "Salerno" },
  { name: 'IIS "GENOVESI-DA VINCI"', province: "Salerno" },
  { name: 'LICEO SCIENTIFICO "A. GENOINO"', province: "Salerno" },
  { name: 'LICEO SCIENTIFICO "C. PISACANE" - PADULA', province: "Salerno" },
  { name: 'IIS "GENOVESI-DA VINCI"', province: "Salerno" },
  { name: 'IIS "DON MILANI"', province: "Napoli" },
  { name: 'IIS "MASULLO-THETI" - NOLA', province: "Napoli" },
  { name: 'ISIS "EINAUDI-GIORDANO"', province: "Napoli" },
  { name: 'ISIS "GUIDO TASSINARI"', province: "Napoli" },
  { name: 'ISS "MANLIO ROSSI DORIA"', province: "Napoli" },
  { name: 'ITI "ENRICO MEDI"', province: "Napoli" },
  { name: 'ITI "GALILEO FERRARIS"', province: "Napoli" },
  { name: 'POLISPECIALISTICO "SAN PAOLO" - SORRENTO', province: "Napoli" },
  { name: 'ISIS "FERRARIS" - BUCCINI', province: "Caserta" },
  { name: 'ITT "G. C. FALCO"', province: "Caserta" },
  { name: 'LICEO SCIENTIFICO "E. FERMI" - AVERSA', province: "Caserta" },
  { name: 'ITT "G.B. BOSCO LUCARELLI"', province: "Benevento" },
  { name: 'IIS "CARAFA GIUSTINIANI"', province: "Benevento" },
  { name: 'ITT "GUIDO DORSO"', province: "Avellino" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SchoolsSection() {
  // Group schools by province
  const schoolsByProvince = schools.reduce((acc, school) => {
    if (!acc[school.province]) {
      acc[school.province] = [];
    }
    acc[school.province].push(school);
    return acc;
  }, {} as Record<string, School[]>);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <School className="w-8 h-8 text-[#FFD700]" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700]">
                Scuole Partecipanti
              </h2>
            </div>
            <p className="text-white/60 max-w-2xl">
              Un network di eccellenza che unisce le migliori scuole della
              Campania in un'esperienza formativa unica
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#6F6FFF] to-transparent" />
            <span className="text-white/60 text-sm uppercase tracking-wider">
              Edizione 2025
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {Object.entries(schoolsByProvince).map(
            ([province, provinceSchools]) => (
              <motion.div key={province} variants={item}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-[#FFD700]/10">
                        <MapPin className="h-6 w-6 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {province}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {provinceSchools.length}{" "}
                          {provinceSchools.length === 1
                            ? "istituto"
                            : "istituti"}{" "}
                          partecipanti
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {provinceSchools.map((school) => (
                        <motion.li
                          key={school.name}
                          className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]/50 group-hover:bg-[#FFD700] transition-colors duration-300" />
                          <span className="text-sm sm:text-base">
                            {school.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
