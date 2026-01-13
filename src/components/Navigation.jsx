import React from 'react'

function Navigation({ onSpiritsHouseClick, onHomeClick, isSpiritsHouse = false }) {
  return (
    <header 
      className="relative w-full"
      style={{
        padding: '1rem 2rem 0 2rem',
        backgroundColor: isSpiritsHouse ? '#000000' : 'transparent'
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <nav className="flex items-center justify-between py-2 md:py-3 pb-0">
          {!isSpiritsHouse && (
            <div className="flex items-center">
              <img 
                src="/new_logo.PNG" 
                alt="Logo"
                className="h-12 md:h-16 lg:h-20"
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          
          {isSpiritsHouse && <div></div>}
          
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
            <a 
              href="#home" 
              onClick={onHomeClick}
              className="text-white text-sm md:text-base font-semibold tracking-wide uppercase transition-opacity hover:opacity-80 relative" 
              style={{ opacity: 1 }}
            >
              Home
              {!isSpiritsHouse && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>}
            </a>
            <a href="#alchemy" className="text-white text-sm md:text-base font-semibold tracking-wide uppercase transition-opacity hover:opacity-80">
              Alchemy
            </a>
            <a 
              href="#spirits" 
              onClick={onSpiritsHouseClick}
              className="text-white text-sm md:text-base font-semibold tracking-wide uppercase transition-opacity hover:opacity-80 relative"
              style={{ opacity: 1 }}
            >
              Spirits House
              {isSpiritsHouse && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>}
            </a>
          </div>
          
          {!isSpiritsHouse && (
            <div className="flex items-center">
              <a 
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 text-white text-sm md:text-base font-bold tracking-wide uppercase transition-all hover:opacity-90"
                style={{
                  border: '1px solid white',
                  borderRadius: '4px',
                  backgroundColor: '#6d28d9'
                }}
              >
                CONTACT US
              </a>
            </div>
          )}
          
          {isSpiritsHouse && <div></div>}
        </nav>
      </div>
    </header>
  )
}

export default Navigation

