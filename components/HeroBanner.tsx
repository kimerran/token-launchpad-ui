'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
]

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`NFT Collection ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center px-4">
          Launch your token
        </h2>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

