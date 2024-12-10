"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedStatProps {
  value: number;
  label: string;
  duration?: number;
}

function AnimatedStat({ value, label, duration = 2 }: AnimatedStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration });
    }
  }, [count, value, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <motion.span className="text-5xl font-bold text-white mb-2">
        {rounded}
      </motion.span>
      <span className="text-sm text-white max-w-[120px]">{label}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <div className="mt-[30px] md:mt-[100px] flex flex-col items-center justify-center p-6">
      <div className="max-w-[1700px] lg:px-[3rem] w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-10 lg:mb-20"
        >
          I dati di Hack Farm
        </motion.h2>

        {/* Stats Grid with Dividers */}
        <div className="flex flex-wrap justify-center items-stretch mb-24 gap-10">
          <AnimatedStat value={7} label="Edizioni del Phaser Game Jam" />
          <div className="hidden md:block w-px bg-secondary mx-8" />
          <AnimatedStat value={2123} label="Partecipanti ogni anno" />
          <div className="hidden md:block w-px bg-secondary mx-8" />
          <AnimatedStat value={78} label="scuole ogni anno" />
          <div className="hidden md:block w-px bg-secondary mx-8" />
          <AnimatedStat value={37} label="alunni partecipanti ogni anno" />
        </div>

        {/* Bottom Section */}
        <div ref={textRef} className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={
              isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white text-left mb-8"
          >
            Le nostre cose
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:gap-20 text-gray "
          >
            <p className="">
              Hack Farm F.T.S. è un&apos;associazione senza scopo di lucro che
              opera con passione per promuovere la cultura e le attività
              culturali come strumenti di aggregazione e inclusione sociale
            </p>
            <p className="">
              Hack Farm F.T.S. è un&apos;associazione senza scopo di lucro che
              opera con passione per promuovere la cultura e le attività
              culturali come strumenti di aggregazione e inclusione sociale
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
