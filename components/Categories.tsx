"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideMoveDownLeft, Maximize2, MoveUpRight } from "lucide-react";
import Image from "next/image";

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Phaser Game Jam",
    description:
      "Hack Farm F.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
    image: "/hero.jpg", // Replace with your pixel art game image
  },
  {
    id: 2,
    title: "Le nostre competenze",
    description:
      "Hack Farm F.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la Hack Farm F.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la Hack Farm F.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la",
    image: "/hero.jpg",
  },
];

export default function CategoriesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen mt-[60px] p-6">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {expandedId ? (
            // Expanded View
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              {categories.map(
                (category) =>
                  category.id === expandedId && (
                    <div key={category.id} className="space-y-4">
                      <div className="relative w-full rounded-2xl overflow-hidden">
                        <div className="relative aspect-[21/9]">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
                          <button
                            onClick={() => setExpandedId(null)}
                            className="absolute top-4 right-4 bg-[#c8ff00] rounded-full p-2 hover:bg-[#a3cc00] transition-colors"
                          >
                            <LucideMoveDownLeft className="w-4 h-4 text-black" />
                          </button>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-white text-2xl font-semibold mb-4">
                          {category.title}
                        </h3>
                        <p className="text-gray">{category.description}</p>
                      </motion.div>
                    </div>
                  )
              )}
            </motion.div>
          ) : (
            // Grid View
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  layoutId={`card-${category.id}`}
                  className="relative rounded-3xl overflow-hidden cursor-pointer "
                  onClick={() => setExpandedId(category.id)}
                >
                  <div className="relative aspect-square max-h-[400px] w-full rounded-3xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 rounded-3xl" />
                    <div className="absolute top-4 right-4 bg-[#c8ff00] rounded-full p-2 hover:bg-[#a3cc00] transition-colors">
                      <MoveUpRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-center text-lg font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray text-sm line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
