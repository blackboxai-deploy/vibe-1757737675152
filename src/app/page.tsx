'use client'

import { SunflowerAnimation } from '@/components/SunflowerAnimation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Subtle ambient particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        
        {/* Main sunflower animation */}
        <SunflowerAnimation />
        
        {/* Subtle title */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-lg font-light opacity-30 tracking-widest">
            FLORECIENDO
          </h1>
        </div>
      </div>
    </main>
  )
}