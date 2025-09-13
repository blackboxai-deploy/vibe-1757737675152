'use client'

import { useEffect, useState } from 'react'

export function SunflowerAnimation() {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 100)
    }, 100) // Update every 100ms for smooth progression

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sunflower-container">
      {/* Ground/Soil */}
      <div className="soil"></div>
      
      {/* Seed (Phase 1: 0-15%) */}
      <div className={`seed ${animationPhase >= 0 ? 'visible' : ''}`}></div>
      
      {/* Stem (Phase 2: 15-35%) */}
      <div className={`stem ${animationPhase >= 15 ? 'growing' : ''}`}>
        <div className="stem-segment segment-1"></div>
        <div className="stem-segment segment-2"></div>
        <div className="stem-segment segment-3"></div>
        <div className="stem-segment segment-4"></div>
        <div className="stem-segment segment-5"></div>
      </div>
      
      {/* Leaves (Phase 3: 35-55%) */}
      <div className={`leaves ${animationPhase >= 35 ? 'sprouting' : ''}`}>
        <div className="leaf leaf-left-1"></div>
        <div className="leaf leaf-right-1"></div>
        <div className="leaf leaf-left-2"></div>
        <div className="leaf leaf-right-2"></div>
      </div>
      
      {/* Bud (Phase 4: 55-75%) */}
      <div className={`bud ${animationPhase >= 55 ? 'forming' : ''}`}></div>
      
      {/* Petals (Phase 5: 75-90%) */}
      <div className={`petals ${animationPhase >= 75 ? 'blooming' : ''}`}>
        {Array.from({ length: 13 }, (_, i) => (
          <div key={i} className={`petal petal-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Center (Phase 6: 90-100%) */}
      <div className={`flower-center ${animationPhase >= 90 ? 'complete' : ''}`}>
        <div className="center-core"></div>
        <div className="spiral-pattern">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className={`spiral-dot dot-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className={`sunflower-glow ${animationPhase >= 75 ? 'glowing' : ''}`}></div>
    </div>
  )
}