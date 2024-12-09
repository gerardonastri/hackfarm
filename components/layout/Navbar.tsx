import React from "react";
import FixedBar from "./FixedBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-5 left-3 px-[2rem] lg:left-0 w-full z-[50]">
      <div className="relative lg:max-w-[1600px] mx-auto flex sm:block justify-center">
        <Link href="/" className="w-fit block">
          <h2 className="text-white font-bold text-3xl">Hackfarm</h2>
        </Link>
        <FixedBar />
      </div>
    </nav>
  );
};

export default Navbar;
