import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full lg:max-w-[1700px] mx-auto h-[80vh] lg:px-[2rem] lg:rounded-[25px] relative">
      <div className="w-full h-full relative overflow-hidden lg:rounded-[25px]">
        <Image
          src="/hero.jpg"
          fill
          className="object-cover lg:rounded-[25px]"
          alt=""
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full z-1 inset-0 bg-black/60" />

        {/* TEXT  */}
        <div className="absolute top-[30%] left-[50%] translate-x-[-50%] z-10 flex gap-x-[80px]">
          <section className="flex flex-col items-center">
            <h1 className="text-7xl text-center text-[#ffffff] font-secondary font-[300]">
              Benvenuti su Hack Farm E.T.S
            </h1>
            <p className="text-[#D9D9D9] opacity-90 md:max-w-[70%] mt-6 mb-2 text-center text-sm font-secondary">
              Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera
              con passione per promuovere la cultura e le attività culturali
              come strumenti di aggregazione e inclusione sociale
            </p>
            <Image
              src="/logo-stella.png"
              width={86}
              height={81}
              alt="logo hackfarm"
              className="object-cover"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
