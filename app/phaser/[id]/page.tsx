"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

interface EditionHeaderProps {
  year: string;
  image: string;
}
const prizes = [
  {
    id: 1,
    icon: "/logo.png",
    description:
      "Partecipazione alla Game Jam e fornitura del materiale didattico",
    amount: "100€",
  },
  {
    id: 2,
    icon: "/logo.png",
    description:
      "Partecipazione alla Game Jam e fornitura del materiale didattico",
    amount: "100€",
  },
  {
    id: 3,
    icon: "/logo.png",
    description:
      "Partecipazione alla Game Jam e fornitura del materiale didattico",
    amount: "100€",
  },
  {
    id: 4,
    icon: "/logo.png",
    description:
      "Partecipazione alla Game Jam e fornitura del materiale didattico",
    amount: "100€",
  },
  {
    id: 5,
    icon: "/logo.png",
    description:
      "Partecipazione alla Game Jam e fornitura del materiale didattico",
    amount: "100€",
  },
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

export default function EditionHeader({
  year = "2k21",
  image = "/image.jpg",
}: EditionHeaderProps) {
  return (
    <main className="max-w-[1600px] pt-[60px] mx-auto px-4 lg:px-[3rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="relative">
          {/* Banner Image */}
          <div className="relative h-[250px] rounded-3xl overflow-hidden">
            <Image
              src={image}
              alt={`Edition ${year}`}
              fill
              className="object-cover brightness-75"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
          </div>

          {/* Year and Edition */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-7xl font-secondary"
              style={{
                background: "linear-gradient(to bottom, white, #7C013E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {year}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-secondary text-xl mt-1"
            >
              edition
            </motion.p>
          </div>
        </div>

        {/* vincitori  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className=""
        >
          <h3 className="mt-[80px]  text-2xl font-bold text-white mb-4">
            I Vincitori
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-white font-secondary text-sm">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
            </p>
            <p className="text-white font-secondary text-sm">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="pt-12 flex justify-center items-end gap-8 lg:gap-16 mb-16"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              variants={item}
              className={`flex-grow ${
                index === 2
                  ? " h-[306px]"
                  : index === 1 || index === 3
                  ? " h-[268px]"
                  : "h-[235px]"
              }`}
            >
              <Card
                className={`bg-white h-full ${
                  index === 2
                    ? "lg:scale-110"
                    : index === 1 || index === 3
                    ? "lg:scale-105"
                    : ""
                }`}
              >
                <CardContent className="p-6 h-full flex flex-col items-center justify-between text-center">
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
                      src={prize.icon}
                      alt="Prize icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-[#7C013E] mb-4 ">
                    {prize.description}
                  </p>
                </CardContent>
              </Card>
              <p className="text-3xl text-center font-bold text-white mt-8">
                {prize.amount}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* media  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-[100px]"
        >
          <h3 className=" mt-[150px] text-2xl font-bold text-white mb-4">
            video e media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-white font-secondary text-sm">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
            </p>
            <p className="text-white font-secondary text-sm">
              La Phaser Game Jam - Hackathon è un evento educativo ideato per
              ispirare e coinvolgere studenti e studentesse delle Scuole
              Secondarie di Secondo grado nella creazione di videogiochi.
            </p>
          </div>
        </motion.div>

        <div className="max-w-[1600px] mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden"
          >
            <Image
              src="/hero.jpg"
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}