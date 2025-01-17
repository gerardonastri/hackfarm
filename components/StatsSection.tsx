"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card } from "./ui/card";

import Image from "next/image";
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
    <Card className="p-6 bg-black/50 backdrop-blur text-center border-[#92fa1c]/20 hover:border-[#92fa1c]/40 transition-colors">
      <motion.p className="text-4xl font-bold text-[#c8ff00] mb-2">
        {displayValue}
      </motion.p>
      <p className="text-gray">{label}</p>
    </Card>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 max-w-6xl mx-auto"
      ref={ref}
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
    </div>
  );
}
