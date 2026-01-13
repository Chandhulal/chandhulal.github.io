import React, { useEffect, useState, useRef } from 'react'

function SpiritsHouse({ onBack }) {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const wskyImageRef = useRef(null)
  const roseImageRef = useRef(null)
  const aliceImageRef = useRef(null)
  const cucImageRef = useRef(null)
  const passImageRef = useRef(null)
  const neelanImageRef = useRef(null)
  const mayaImageRef = useRef(null)
  const mangoImageRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!sectionRef.current || !titleRef.current || !imageRef.current || !wskyImageRef.current || !roseImageRef.current || !aliceImageRef.current || !cucImageRef.current || !passImageRef.current || !neelanImageRef.current || !mayaImageRef.current || ticking) return

      ticking = true
      requestAnimationFrame(() => {
        if (!sectionRef.current || !titleRef.current || !imageRef.current || !wskyImageRef.current || !roseImageRef.current || !aliceImageRef.current || !cucImageRef.current || !passImageRef.current || !neelanImageRef.current || !mayaImageRef.current) {
          ticking = false
          return
        }

        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionTop = rect.top
        const sectionBottom = rect.bottom
        const sectionHeight = rect.height

        if (sectionBottom < 0 || sectionTop > windowHeight) {
          ticking = false
          return
        }

        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
        const scrollOffset = (scrollProgress - 0.5) * 2

        if (titleRef.current) {
          titleRef.current.style.transform = `translateY(0)`
          titleRef.current.style.opacity = 1
        }

        // Image motion from bottom
        if (imageRef.current) {
          const imageTranslateY = (1 - scrollProgress) * 300
          imageRef.current.style.transform = `translateY(${imageTranslateY}px)`
          imageRef.current.style.opacity = scrollProgress > 0.1 ? 1 : 0
        }

        // Wsky image motion from bottom
        if (wskyImageRef.current) {
          const wskyTranslateY = (1 - scrollProgress) * 300
          wskyImageRef.current.style.transform = `translateY(${wskyTranslateY}px)`
          wskyImageRef.current.style.opacity = scrollProgress > 0.2 ? 1 : 0
        }

        // Rose image motion from bottom
        if (roseImageRef.current) {
          const roseTranslateY = (1 - scrollProgress) * 300
          roseImageRef.current.style.transform = `translateY(${roseTranslateY}px)`
          roseImageRef.current.style.opacity = scrollProgress > 0.3 ? 1 : 0
        }

        // Alice image motion from bottom
        if (aliceImageRef.current) {
          const aliceTranslateY = (1 - scrollProgress) * 300
          aliceImageRef.current.style.transform = `translateY(${aliceTranslateY}px)`
          aliceImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        // Cuc image motion from bottom (follows Alice)
        if (cucImageRef.current) {
          const cucTranslateY = (1 - scrollProgress) * 300
          cucImageRef.current.style.transform = `translateY(${cucTranslateY}px)`
          cucImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        // Pass image motion from bottom (follows Alice)
        if (passImageRef.current) {
          const passTranslateY = (1 - scrollProgress) * 300
          passImageRef.current.style.transform = `translateY(${passTranslateY}px)`
          passImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        // Neelan image motion from bottom (follows Alice)
        if (neelanImageRef.current) {
          const neelanTranslateY = (1 - scrollProgress) * 300
          neelanImageRef.current.style.transform = `translateY(${neelanTranslateY}px)`
          neelanImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        // Maya image motion from bottom (follows Alice)
        if (mayaImageRef.current) {
          const mayaTranslateY = (1 - scrollProgress) * 300
          mayaImageRef.current.style.transform = `translateY(${mayaTranslateY}px)`
          mayaImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        // Mango image motion from bottom (follows Alice)
        if (mangoImageRef.current) {
          const mangoTranslateY = (1 - scrollProgress) * 300
          mangoImageRef.current.style.transform = `translateY(${mangoTranslateY}px)`
          mangoImageRef.current.style.opacity = scrollProgress > 0.4 ? 1 : 0
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
      <div className="w-full flex items-center justify-center gap-4 md:gap-8" style={{ minHeight: '100vh', padding: '2rem 2rem 0 2rem' }}>
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="/spirits-house-image-2.png" 
            alt="Spirits House" 
            className="w-full h-full object-contain transition-all duration-1000 ease-out"
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100vh',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'floatUpDown 3s ease-in-out infinite' : 'none'
            }}
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="/spirits-house-right.png" 
            alt="Spirits House Right" 
            className="w-full h-full object-contain transition-all duration-1000 ease-out"
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100vh',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.2s'
            }}
          />
        </div>
      </div>

      {/* Signature Drinks Section */}
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-12 md:pt-16 pb-16 md:pb-20"
        style={{ willChange: 'transform' }}
      >
        <h2 
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center mb-0"
          style={{
            color: 'transparent',
            WebkitTextStroke: '0.5px #ffffff',
            textStroke: '0.5px #ffffff',
            opacity: 1,
            letterSpacing: '0.05em',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          SIGNATURE DRINKS
        </h2>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={imageRef}
            src="/eduky.png" 
            alt="Edukkey Gold" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={wskyImageRef}
            src="/wsky.png" 
            alt="Wsky" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={roseImageRef}
            src="/rose.png" 
            alt="Rose" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={aliceImageRef}
            src="/alice.png" 
            alt="Alice" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={cucImageRef}
            src="/cuc.png" 
            alt="Cuc" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={passImageRef}
            src="/pass.png" 
            alt="Pass" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={neelanImageRef}
            src="/neelan.png" 
            alt="Neelan" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <img 
            ref={mayaImageRef}
            src="/maya.png" 
            alt="Maya" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <img 
            ref={mangoImageRef}
            src="/mango.png" 
            alt="Mango" 
            className="h-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ 
              maxWidth: '60%',
              opacity: 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SpiritsHouse
