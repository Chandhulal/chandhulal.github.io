import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Specialization from './components/Specialization'
import ParallaxText from './components/ParallaxText'
import Products from './components/Products'
import WhyBlueIce from './components/WhyBlueIce'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpiritsHouse from './components/SpiritsHouse'

function App() {
  const [showSpiritsHouse, setShowSpiritsHouse] = useState(false)

  const handleSpiritsHouseClick = (e) => {
    e.preventDefault()
    setShowSpiritsHouse(true)
  }

  const handleBackToHome = () => {
    setShowSpiritsHouse(false)
  }

  const handleHomeClick = (e) => {
    if (showSpiritsHouse) {
      e.preventDefault()
      setShowSpiritsHouse(false)
    }
  }

  if (showSpiritsHouse) {
    return (
      <div className="min-h-screen">
        <Navigation onSpiritsHouseClick={handleSpiritsHouseClick} onHomeClick={handleHomeClick} isSpiritsHouse={true} />
        <SpiritsHouse onBack={handleBackToHome} />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation onSpiritsHouseClick={handleSpiritsHouseClick} onHomeClick={handleHomeClick} isSpiritsHouse={false} />
      <Hero />
      <Specialization />
      <ParallaxText />
      <Products />
      <WhyBlueIce />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

