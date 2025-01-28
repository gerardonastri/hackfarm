import React from "react"
import { GraduationCap } from "lucide-react"
import Link from "next/link"
import FixedBar from "./FixedBar"

const Navbar = () => {
  return (
    <nav className="absolute top-5 px-[2rem] lg:left-0 w-full z-[50]">
      <div className="lg:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/" className="w-fit block">
          <h2 className="text-white font-bold text-3xl">Hackfarm</h2>
        </Link>
        <div className="flex items-center">
          <FixedBar />
          <Link
            href="https://formazione.hackfarm.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-[rgb(200,255,0)] text-black font-semibold py-2 px-4 rounded-full hover:bg-[rgb(220,255,100)] transition-colors duration-300"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="hidden sm:inline">Formazione</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

