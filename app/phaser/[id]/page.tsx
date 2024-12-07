"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EditionHeaderProps {
  year: string;
  image: string;
}

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

        {/* section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl text-white text-center font-medium"
        >
          I vincitori:
        </motion.h3>
      </motion.div>
    </main>
  );
}
