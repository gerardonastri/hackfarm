import Navbar from "@/components/layout/Navbar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="min-h-screen w-full bg-[##1C1C1C] bg-fixed bg-cover pt-[100px] bg-no-repeat relative"
      style={{
        backgroundImage: `url('/mask.png'), linear-gradient(#1C1C1C, #1C1C1C)`,
        backgroundPosition: "center",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
};

export default layout;
