"use client"
import { useEffect, useState } from "react"
import EnvelopeSequence from "@/components/envelope-sequence"

export default function Page() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const container = document.getElementById("spotify-container")
    if (container) {
      container.innerHTML = `
        <iframe 
          style="border-radius: 12px; width: 280px; height: 80px;" 
          src="https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG?utm_source=generator" 
          frameBorder="0" 
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      `
    }
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)" }}
    >
      {isClient && (
        <div className="fixed bottom-4 left-4 z-0 opacity-90">
          <div id="spotify-container"></div>
        </div>
      )}

      <EnvelopeSequence />
    </div>
  )
}
