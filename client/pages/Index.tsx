export default function Index() {
  return (
    <div className="min-h-screen bg-design-offwhite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-8 lg:py-0 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-6 w-full lg:w-auto lg:max-w-xl order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-design-black leading-tight">
              Auto Layout
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-design-black leading-relaxed max-w-md">
              Create layouts, frames, and components for more flexible and responsive designs.
            </p>
            <button className="flex items-center gap-2 bg-design-black text-design-offwhite px-4 py-2 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              Start
              <span className="text-xl font-normal">→</span>
            </button>
          </div>

          {/* Right Visuals */}
          <div className="w-full lg:w-auto lg:flex-1 max-w-lg lg:max-w-none order-1 lg:order-2">
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 h-full">
              {/* Top Rectangle */}
              <div className="relative w-64 md:w-80 lg:w-96 h-48 md:h-56 lg:h-64">
                <div className="w-full h-full bg-design-blue border-2 border-design-black rounded-sm">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 bg-gray-300 border border-design-black"></div>
                </div>
              </div>

              {/* Purple Striped Bar */}
              <div className="relative w-64 md:w-80 lg:w-96 h-12 md:h-14 lg:h-16 bg-design-purple overflow-hidden">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 387 74" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="stripe1" patternUnits="userSpaceOnUse" width="20" height="74" patternTransform="rotate(-45)">
                      <rect width="3" height="74" fill="#202020"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#stripe1)"/>
                  <rect x="40%" y="45%" width="20%" height="10%" fill="white" rx="2"/>
                  <rect x="42%" y="47%" width="16%" height="6%" fill="#202020" rx="1"/>
                </svg>
              </div>

              {/* Circle with Hole */}
              <div className="relative w-40 md:w-48 lg:w-56 h-40 md:h-48 lg:h-56">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 254 254"
                >
                  <circle 
                    cx="127" 
                    cy="127" 
                    r="125" 
                    fill="#C7F8FB" 
                    stroke="#202020" 
                    strokeWidth="3"
                  />
                  <circle 
                    cx="127" 
                    cy="127" 
                    r="22" 
                    fill="#F3FFE3" 
                    stroke="#202020" 
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Bottom Purple Striped Bar */}
              <div className="relative w-64 md:w-80 lg:w-96 h-12 md:h-14 lg:h-16 bg-design-purple overflow-hidden">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 387 74" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="stripe2" patternUnits="userSpaceOnUse" width="20" height="74" patternTransform="rotate(-45)">
                      <rect width="3" height="74" fill="#202020"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#stripe2)"/>
                  <rect x="40%" y="45%" width="20%" height="10%" fill="white" rx="2"/>
                  <rect x="42%" y="47%" width="16%" height="6%" fill="#202020" rx="1"/>
                </svg>
              </div>

              {/* Bottom Pink Square */}
              <div className="relative w-64 md:w-80 lg:w-96 h-64 md:h-72 lg:h-80">
                <div className="w-full h-full bg-design-pink border-2 border-design-black">
                  {/* Rotated inner square */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-32 md:w-36 lg:w-40 h-32 md:h-36 lg:h-40 bg-design-pink border border-design-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
