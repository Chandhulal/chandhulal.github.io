import React, { useEffect, useRef } from 'react'

function ParallaxText() {
  const sectionRef = useRef(null)
  const heading1Ref = useRef(null)
  const heading2Ref = useRef(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!sectionRef.current || ticking) return

      ticking = true
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
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

        if (heading1Ref.current) {
          const translateX1 = scrollOffset * -2 * 60
          heading1Ref.current.style.transform = `translateX(${translateX1}px)`
        }

        if (heading2Ref.current) {
          const translateX2 = scrollOffset * 2 * 60
          heading2Ref.current.style.transform = `translateX(${translateX2}px)`
        }

        if (sectionRef.current) {
          const translateY = scrollOffset * 2
          sectionRef.current.style.transform = `translateY(${translateY}px)`
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="parallax-section relative overflow-hidden"
      style={{ willChange: 'transform', borderTop: 'none' }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0a0e27 0%, #0a0e27 20%, #1e3a5f 40%, #3b82f6 60%, #1e3a5f 80%, #0a0e27 100%)'
        }}
      ></div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div 
          ref={heading1Ref}
          className="outline-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4"
          style={{ willChange: 'transform' }}
        >
          <h2>Premium Bartending</h2>
        </div>
        <div 
          ref={heading2Ref}
          className="outline-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
          style={{ willChange: 'transform' }}
        >
          <h2>For Elite Events</h2>
        </div>
      </div>
    </section>
  )
}

export default ParallaxText
