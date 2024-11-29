"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const FixedBar = () => {
  const pathname = usePathname();

  const links = [
    {
      text: "Home",
      link: "",
    },
    {
      text: "Chi siamo",
      link: "about",
    },
    {
      text: "Contatti",
      link: "contact",
    },
  ];
  return (
    <div className="color-opaced flex items-center gap-x-1 fixed top-5 rounded-[1.5rem] px-3 py-1 left-[50%] translate-x-[-50%]">
      {links.map((item, i) => (
        <Link
          className={`px-3 py-1 text-white rounded-[1.5rem] text-[15px] font-secondary ${
            item.link === pathname.split("/")[1] ? "bg-[#88A001]" : ""
          }`}
          href={`/${item.link}`}
          key={i}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default FixedBar;
