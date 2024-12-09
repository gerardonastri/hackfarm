import Image from "next/image";
import React from "react";

const AboutImages = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:items-end md:justify-between gap-10 mt-12">
      <div className="relative w-full h-[350px] rounded-3xl">
        <Image
          src="/hero.jpg"
          alt="about images"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="overlay rounded-3xl"></div>
      </div>
      <div className="relative w-full h-[250px] rounded-3xl">
        <Image
          src="/hero.jpg"
          alt="about images"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="overlay rounded-3xl"></div>
      </div>
      <div className="relative  w-full h-[350px] rounded-3xl">
        <Image
          src="/hero.jpg"
          alt="about images"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="overlay rounded-3xl"></div>
      </div>
    </div>
  );
};

export default AboutImages;
