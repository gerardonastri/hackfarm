"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  LucideMoveDownLeft,
  Maximize2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Phaser Game Jam",
    image: "/phaser/img-1.webp",
    link: "/phaser",
  },
  {
    id: 2,
    title: "Hackaton Junior",
    image: "/phaser/junior.webp",
    link: "/junior",
  },
];

export default function CategoriesSection() {
  return (
    <div className="mt-[60px] p-6">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence>
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
              >
                <a
                  href={category.link}
                  className="relative  block aspect-square max-h-[400px] w-full rounded-3xl"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 rounded-3xl" />
                  <Link
                    href={category.link}
                    className="absolute top-4 right-4 bg-[#c8ff00] rounded-full p-2 hover:bg-[#a3cc00] transition-colors"
                  >
                    <MoveUpRight className="w-4 h-4 text-black" />
                  </Link>
                </a>
                <div className="p-4">
                  <h3 className="text-white text-center text-lg font-semibold mb-2">
                    {category.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
