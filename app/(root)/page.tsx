"use client";

import CategoriesSection from "@/components/Categories";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <div>
      <Hero />
      <div ref={textRef} className="max-w-6xl px-6 lg:px-0 mt-[100px] mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white text-left mb-3"
        >
          I Nostri Progetti
        </motion.h3>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-gray text-md md:max-w-[80%] mb-6"
        >
          Phaser Game Jam – Hackathon e Hackathon Junior Come creare un
          videogame in un week-end
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-gray "
        >
          <p className="">
            Più che semplici competizioni, questi eventi sono veri e propri
            laboratori di creatività e formazione, pensati per sfidare i giovani
            a trasformare idee innovative in progetti concreti in tempi
            ristretti. Utilizzando strumenti come PhaserJs e Scratch, i
            partecipanti non solo realizzano prodotti funzionanti, ma sviluppano
            competenze fondamentali come il lavoro di squadra, la gestione del
            tempo e la creatività. Un’esperienza unica, dove tecnologia e
            talento si incontrano per dare vita al futuro.
          </p>
        </motion.div>
      </div>
      <CategoriesSection />
      <StatsSection />
    </div>
  );
};

export default page;
