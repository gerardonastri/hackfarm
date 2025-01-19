"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: "4",
    label: "Edizioni",
  },
  {
    value: "3000",
    label: "Partecipanti",
  },
  {
    value: "30",
    label: "Scuole",
  },
  {
    value: "5",
    label: "Province",
  },
  {
    value: "20",
    label: "Aziende",
  },
  {
    value: "5",
    label: "Patner",
  },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => {
    if (value.endsWith("+")) {
      return `${latest}+`;
    }
    return latest.toString();
  });

  useEffect(() => {
    const finalValue = parseInt(value.replace("+", ""));
    const controls = animate(count, finalValue, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6F6FFF] to-[#c8ff00] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-xl p-6 transition-all duration-300">
        <motion.div
          className="text-4xl lg:text-5xl font-bold text-[#c8ff00] mb-2 tabular-nums"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayValue}
        </motion.div>
        <p className="text-white/60 font-medium tracking-wide text-sm uppercase">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#6F6FFF]/5 to-black/0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AnimatedStat value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
