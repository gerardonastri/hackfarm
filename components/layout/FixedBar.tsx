"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Mail } from "lucide-react"
import { motion } from "framer-motion"

const FixedBar = () => {
  const pathname = usePathname()

  const links = [
    {
      text: "Home",
      link: "",
      icon: Home,
    },
    {
      text: "Chi siamo",
      link: "about",
      icon: Users,
    },
    {
      text: "Contatti",
      link: "contact",
      icon: Mail,
    },
  ]

  return (
    <nav className="fixed sm:top-5 bottom-[50px] sm:bottom-[unset] left-[50%] translate-x-[-50%] z-50">
      <div className="backdrop-blur-md bg-[rgb(200_255_0_/_0.1)] border border-[rgb(200_255_0_/_0.2)] flex items-center gap-2 rounded-full px-3 py-2 w-[90vw] sm:w-auto shadow-lg shadow-[rgb(200_255_0_/_0.05)]">
        {links.map((item, i) => {
          const isActive = item.link === pathname.split("/")[1]
          const Icon = item.icon

          return (
            <Link
              href={`/${item.link}`}
              key={i}
              className="relative flex-1 sm:flex-initial min-w-[80px] sm:min-w-[120px]"
            >
              <motion.div
                className={`
                  flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2
                  px-2 sm:px-4 py-2 rounded-full text-[13px] sm:text-[15px] font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-black bg-[rgb(200_255_0)] font-semibold"
                      : "text-white hover:text-[rgb(200_255_0)] hover:bg-white/5"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-black" : ""}`} />
                <span className="whitespace-nowrap text-center sm:text-left">{item.text}</span>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[rgb(200_255_0_/_0.2)]"
                    layoutId="navbar-active"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default FixedBar

