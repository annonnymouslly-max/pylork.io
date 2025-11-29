"use client"

import { useState, useEffect } from "react"
import Envelope from "./envelope"
import LetterPopup from "./letter-popup"

interface Letter {
  id: number
  title: string
  content: string
  duration: number
}

const letters: Letter[] = [
  {
    id: 1,
    title: "💌",
    content: "Hi my Tinetlog",
    duration: 5000,
  },
  {
    id: 2,
    title: "💕",
    content: "Gawa kopo tong website for u ahhahah",
    duration: 5000,
  },
  {
    id: 3,
    title: "😘",
    content: "Kahit wala akong kiss hmpp..",
    duration: 5000,
  },
  {
    id: 4,
    title: "💌",
    content:
      "So ayun nanga 1st month na ba ata natin basta ewan inihanda kona ta baka mag blablabla kasi hahhaha so ayun i just want to say na baka mamaya may bisita ka na dumating mamayang hapon idk lang if what time sya pupunta may sasabihin daw at may ibibigay sau? nagchat sakin eh pero d ko kilala hahaha nakakainis lang kasi sabi nya crush kadaw nya nung sabi kong ala kang gf...so sayun lang labyuu mwaa sana may kiissss ulit ako pag pupunta ulit ako jan next time mwaaa..",
    duration: 60000, // Updated duration to 1 minute (60000ms)
  },
]

export default function EnvelopeSequence() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(true)

  useEffect(() => {
    if (!isOpen) return

    const timer = setTimeout(() => {
      setIsOpen(false)

      if (currentLetterIndex < letters.length - 1) {
        setTimeout(() => {
          setCurrentLetterIndex(currentLetterIndex + 1)
        }, 500)
      } else {
        // Loop back to first letter
        setTimeout(() => {
          setCurrentLetterIndex(0)
        }, 500)
      }
    }, letters[currentLetterIndex].duration)

    return () => clearTimeout(timer)
  }, [isOpen, currentLetterIndex])

  const handleEnvelopeClick = () => {
    setIsOpen(true)
  }

  const currentLetter = letters[currentLetterIndex]

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {showEnvelope && <Envelope onClick={handleEnvelopeClick} isActive={!isOpen} />}

      {isOpen && <LetterPopup letter={currentLetter} isOpen={isOpen} />}
    </div>
  )
}
