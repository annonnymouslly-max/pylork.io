"use client"

import { useEffect, useState } from "react"

interface LetterPopupProps {
  letter: {
    id: number
    title: string
    content: string
    duration: number
  }
  isOpen: boolean
}

export default function LetterPopup({ letter, isOpen }: LetterPopupProps) {
  const [displayContent, setDisplayContent] = useState("")
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimatingIn(true)
      setDisplayContent(letter.content)
    }
  }, [isOpen, letter])

  // Animation to close
  useEffect(() => {
    if (!isOpen) {
      setIsAnimatingOut(true)
    }
  }, [isOpen])

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
        style={{
          opacity: isAnimatingIn ? 1 : isAnimatingOut ? 0 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Letter paper */}
      <div
        className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-8 pointer-events-auto"
        style={{
          transform: isAnimatingIn
            ? "scale(1) translateY(0px) rotateX(0deg)"
            : isAnimatingOut
              ? "scale(0.8) translateY(100px) rotateX(20deg)"
              : "scale(0) translateY(0px)",
          opacity: isAnimatingIn ? 1 : isAnimatingOut ? 0 : 0,
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Letter header */}
        <div className="text-4xl mb-4 text-center">{letter.title}</div>

        {/* Letter content */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-700 text-center text-lg leading-relaxed font-medium">{displayContent}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-2xl opacity-30">💕</div>
        <div className="absolute bottom-4 left-4 text-2xl opacity-30">💌</div>

        {/* Subtle animations */}
        <style jsx>{`
          @keyframes slideDown {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          div {
            animation: slideDown 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  )
}
