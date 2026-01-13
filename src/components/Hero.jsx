import React, { useState, useEffect } from 'react'

const heroSlides = [
  {
    id: 1,
    title: 'BLUE ICE',
    subtitle: 'Professional Bartending Company',
    description: 'Stylish bar setups and exceptional drink experiences for events across India. Handcrafted cocktails, curated mocktails, and professional bartenders creating unforgettable celebrations.',
    image: '/logo.png'
  },
  {
    id: 2,
    title: 'PREMIUM EXPERIENCES',
    subtitle: 'Luxury Event Services',
    description: 'Elevate your celebrations with our premium bartending services. From intimate gatherings to grand celebrations, we deliver excellence in every pour.',
    image: '/premium-experiences.png'
  },
  {
    id: 3,
    title: 'SIGNATURE COCKTAILS',
    subtitle: 'Crafted to Perfection',
    description: 'Our expert mixologists create unique, handcrafted cocktails using premium spirits and fresh ingredients, tailored specifically for your event.',
    image: '/tequila-shot.png'
  }
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pb-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
      </div>
      
      <div className="relative z-10 w-full h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              pointerEvents: index === currentSlide ? 'auto' : 'none'
            }}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-0 pb-20 h-full flex items-center">
              <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8 w-full">
                <div className="max-w-2xl lg:flex-1">
                  <h2 className="company-name text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-wider">
                    {slide.id === 2 ? (
                      <>
                        <span style={{ color: '#FFD700' }}>PREMIUM</span>
                        <span className="text-white"> EXPERIENCES</span>
                      </>
                    ) : slide.id === 3 ? (
                      <>
                        <span style={{ color: '#FFD700' }}>SIGNATURE</span>
                        <span className="text-white"> COCKTAILS</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h2>
                  <p 
                    className="text-sm md:text-base text-gray-300 mb-6 font-light tracking-wide"
                    style={{
                      fontFamily: "'Dancing Script', 'Great Vibes', 'Brush Script MT', cursive",
                      fontSize: '1.5rem',
                      fontWeight: 400
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-gray-300 mb-8 font-light tracking-wide max-w-xl">
                    {slide.description}
                  </p>
                </div>
                
                <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end">
                  <div className="logo-container" style={{ marginTop: '-4rem' }}>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="logo-image"
                      style={{ maxWidth: '500px', width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white rounded-full"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white rounded-full"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8 md:w-10' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
