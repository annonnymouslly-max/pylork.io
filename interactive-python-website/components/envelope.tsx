"use client"

import { useState } from "react"

interface EnvelopeProps {
  onClick: () => void
  isActive: boolean
}

export default function Envelope({ onClick, isActive }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-64 h-48 cursor-pointer transform transition-all duration-300"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.05) translateY(-10px)" : "scale(1)",
      }}
    >
      {/* Envelope body */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-lg shadow-2xl" />

      {/* Envelope flap - left triangle */}
      <div
        className="absolute top-0 left-0 w-0 h-0 transition-all duration-300"
        style={{
          borderLeft: "128px solid transparent",
          borderRight: "0px solid transparent",
          borderTop: "96px solid rgba(244, 114, 182, 0.8)",
          transition: "all 0.3s ease",
          transform: isHovered ? "rotateX(45deg)" : "rotateX(0deg)",
        }}
      />

      {/* Envelope flap - right triangle */}
      <div
        className="absolute top-0 right-0 w-0 h-0 transition-all duration-300"
        style={{
          borderLeft: "0px solid transparent",
          borderRight: "128px solid transparent",
          borderTop: "96px solid rgba(244, 114, 182, 0.8)",
          transition: "all 0.3s ease",
          transform: isHovered ? "rotateX(45deg)" : "rotateX(0deg)",
        }}
      />

      {/* Center flap divider */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-pink-600 opacity-30 transition-all duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0.3,
        }}
      />

      {/* Envelope shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />

      {/* Heart decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-bounce">
        💌
      </div>

      {/* Tap instruction */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white text-sm font-semibold drop-shadow-lg">Click to open 💕</p>
      </div>
    </div>
  )
}
