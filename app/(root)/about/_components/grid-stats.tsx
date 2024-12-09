"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

interface StatItemProps {
  endNumber: number;
  label: string;
  duration?: number;
}

function StatItem({ endNumber, label, duration = 2 }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, endNumber, { duration: duration });
    }
  }, [count, endNumber, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      className="bg-black/40 backdrop-blur-sm rounded-xl p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="text-2xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {endNumber > 10 ? <motion.span>{rounded}</motion.span> : endNumber}
        {endNumber <= 10 && endNumber > 0 && "+"}
      </motion.div>
      <div className="text-sm  font-secondary text-gray mt-1">{label}</div>
    </motion.div>
  );
}

export default function StatsGrid() {
  return (
    <div className="rounded-3xl w-[90%] mx-auto md:mx-0 md:w-[500px] mt-8 bg-[#282828] flex items-center py-4 px-4 z-[50]">
      <div className="grid grid-cols-2 gap-4 max-w-lg w-full ">
        <StatItem endNumber={7} label="Eventi per Phase Game Jam" />
        <StatItem endNumber={700} label="Partecipanti ogni anno" />
        <StatItem endNumber={6} label="Svolti ogni anno" />
        <StatItem endNumber={700} label="Partecipanti ogni anno" />
      </div>
    </div>
  );
}
