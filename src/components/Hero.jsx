import React, { useState, memo } from 'react';
import SearchBar from './organisms/SearchBar';

// Memoize the SearchBar component to prevent unnecessary re-renders
const MemoizedSearchBar = memo(SearchBar);

/**
 * Hero Component
 * 
 * Main banner section of the website featuring a background image,
 * watermark logo, and main heading text.
 * 
 * Features:
 * - Responsive background image
 * - Animated watermark logo
 * - Loading states for images
 * - Gradient overlay for better text visibility
 * 
 * Props: None
 * 
 * State:
 * - isImageLoaded: Tracks main background image loading
 * - isWatermarkLoaded: Tracks watermark image loading
 */
function Hero() {
  // State to manage image loading
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isWatermarkLoaded, setIsWatermarkLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Logo Watermark with positioning and effects */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className={`absolute right-[5%] sm:right-[10%] md:right-[15%] bottom-0 w-[150px] sm:w-[250px] md:w-[350px] lg:w-[500px] opacity-[0.6] transition-opacity duration-300 ${
          isWatermarkLoaded ? 'opacity-[0.6]' : 'opacity-0'
        }`}>
          <img 
            src="/assets/images/Layer_1.png" 
            alt="Asura Watermark Logo"
            className="w-full h-full"
            style={{ 
              filter: 'brightness(500%) contrast(200%) saturate(500%) hue-rotate(195deg)',
              mixBlendMode: 'plus-lighter'
            }}
            onLoad={() => setIsWatermarkLoaded(true)}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>

      {/* Hero Background Image Section */}
      <div className="absolute inset-0">
        {/* Background Image with loading transition */}
        <div className={`w-full h-full transition-opacity duration-300 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <img
            src="/assets/images/Mask group.png"
            alt="Modern Luxury House - Hero Background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center'
            }}
            onLoad={() => setIsImageLoaded(true)}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Loading Skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00513B]/30 to-[#00513B]/60"></div>
      </div>
      
      {/* Hero Content Section */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h1 className="font-roboto text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-black leading-none text-white"
                  style={{ letterSpacing: '0%' }}>
                Seamless Buying.
                <br />
                Profitable Selling.
              </h1>
            </div>
            {/* Search Bar Integration */}
            <MemoizedSearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero); 