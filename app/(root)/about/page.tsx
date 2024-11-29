import Image from "next/image";
import React from "react";
import StatsGrid from "./_components/grid-stats";

const About = () => {
  return (
    <main className="mt-[100px] lg:max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[100px]">
      <section className="flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-secondary">
          Chi siamo?
        </h1>
        <p className="md:max-w-[70%] text-gray text-sm mt-8">
          Il nostro obiettivo è generare un impatto positivo sulla comunità
          attraverso: Il nostro obiettivo è generare un impatto positivo sulla
          comunità attraverso:Il nostro obiettivo è generare un impatto positivo
          sulla comunità attraverso:Il nostro obiettivo è generare un impatto
          positivo sulla comunità attraverso:
        </p>
      </section>
      <section className="flex-1">
        <div className="relative w-full lg:w-[500px] h-[366px] rounded-3xl">
          <Image
            src="/about.jpg"
            alt="chi siamo"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="overlay rounded-3xl" />
        </div>
        <StatsGrid />
      </section>
    </main>
  );
};

export default About;
