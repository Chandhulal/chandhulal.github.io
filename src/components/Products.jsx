import React from 'react'

const mainProducts = [
  {
    id: 1,
    title: 'Premium Glassware',
    description: 'Complete collection of premium glassware including cocktail glasses, mocktail glasses, bar glasses, wine glasses, short glasses, beer glasses, champagne flutes, and all essential barware sets for your home bar or establishment.',
  },
  {
    id: 2,
    title: 'Premium Bartending Tools',
    description: 'Professional bartending tools and accessories including shakers, strainers, jiggers, mixing equipment, gloves, straws, dried garnishes, and all related items for the perfect bar setup.',
  },
]

function Products() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0a0e27] -mt-px">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0a0e27 0%, #1e3a5f 15%, #3b82f6 30%, #60a5fa 50%, #3b82f6 70%, #1e3a5f 85%, #1a0f2e 100%)'
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Bar Equipment
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              We also offer premium glassware and professional bartending tools for your home bar or establishment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-12">
            {mainProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-300/60 hover:border-blue-400/80"
              >
                <div className="p-8 md:p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold">
                    <span className="text-sm md:text-base">Available for Purchase</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

