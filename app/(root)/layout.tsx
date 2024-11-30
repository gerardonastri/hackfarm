import Navbar from "@/components/layout/Navbar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] relative">
      {/* Sfondo immagine limitato ai primi 110vh */}
      <div
        className="absolute top-0 left-0 w-full h-[110vh] overflow-hidden"
        style={{
          backgroundImage: `url('/mask.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/50 via-transparent to-[#1C1C1C]"></div>
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10 pt-[100px]">
        <Navbar />
        {children}
        <Toaster />
      </div>
    </div>
  );
};

export default layout;
