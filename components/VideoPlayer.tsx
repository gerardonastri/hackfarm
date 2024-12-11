"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  videoId?: string
  title?: string
}

export default function VideoPlayer({ 
  videoId = "https://www.youtube.com/embed/-zjwOesIuak?autoplay=0&rel=0&modestbranding=1",
  title = "Game Jam Event Video"
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="w-full mx-auto px-4">
      <div className="relative w-full rounded-3xl overflow-hidden bg-black/5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/10"
          />
        )}
        <iframe
          width="100%"
          height="100%"
          src={videoId}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          className="absolute inset-0 w-full h-full"
          style={{
            border: 0,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </div>
    </div>
  )
}

