import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Reset menu state when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="absolute top-[41px] left-0 right-0 z-[100] px-4 sm:px-6 md:px-8">
      <nav 
        className="bg-white shadow-lg transition-all duration-300 hover:shadow-xl mx-auto" 
        style={{ 
          maxWidth: '1320px',
          width: '100%',
          height: '68px',
          borderRadius: '21px'
        }}
      >
        <div className="flex items-center justify-between h-full px-3 md:px-4">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] rounded-lg flex items-center justify-center">
              <img 
                src="/assets/logos/Vector.png" 
                alt="Logo" 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 transition-transform duration-300"
              />
            </div>
            <span className="flex items-center h-3 sm:h-3.5 md:h-4 lg:h-5">
              <img src="/assets/asura company logo/Vector (2).png" alt="a" className="h-full" style={{ marginRight: '-0.15rem' }} />
              <img src="/assets/asura company logo/Vector (3).png" alt="s" className="h-full" style={{ marginRight: '-0.15rem' }} />
              <img src="/assets/asura company logo/Vector (4).png" alt="ur" className="h-full" style={{ marginRight: '-0.15rem' }} />
              <img src="/assets/asura company logo/Vector (5).png" alt="a" className="h-full" />
            </span>
          </Link>
          
          <button 
            className="md:hidden p-1 hover:bg-gray-100 transition-colors rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex flex-1 justify-end mr-2">
            <div className="flex items-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 font-roboto text-[10px] sm:text-[11px] md:text-xs font-normal leading-none transition-colors duration-300 hover:scale-105 transform px-1">
                About&nbsp;us
              </Link>
              <Link to="/property" className="text-gray-600 hover:text-gray-900 font-roboto text-[10px] sm:text-[11px] md:text-xs font-normal leading-none transition-colors duration-300 hover:scale-105 transform px-1">
                Property
              </Link>
              <Link to="/buying-guide" className="text-gray-600 hover:text-gray-900 font-roboto text-[10px] sm:text-[11px] md:text-xs font-normal leading-none transition-colors duration-300 hover:scale-105 transform px-1">
                Buying&nbsp;guide
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-roboto text-[10px] sm:text-[11px] md:text-xs font-normal leading-none transition-colors duration-300 hover:scale-105 transform px-1">
                Contact&nbsp;us
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center h-full">
            <div className="h-full w-[1px] bg-[#F1F1F1]"></div>
            <Link 
              to="/seller" 
              className="font-roboto font-bold text-[10px] sm:text-[11px] md:text-xs leading-none text-[#04473A] px-4 sm:px-5 md:px-6"
              style={{
                letterSpacing: '0%'
              }}
            >
              Seller
            </Link>
            <div className="h-full w-[1px] bg-[#F1F1F1]"></div>
            <Link 
              to="/buyer" 
              className="font-roboto font-bold text-[10px] sm:text-[11px] md:text-xs leading-none text-[#04473A] px-4 sm:px-5 md:px-6"
              style={{
                letterSpacing: '0%'
              }}
            >
              Buyer
            </Link>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-2 bg-gray-50 rounded-b-lg">
            <Link to="/about" className="block text-gray-600 hover:text-gray-900 font-roboto text-sm font-normal leading-none py-1">About us</Link>
            <Link to="/property" className="block text-gray-600 hover:text-gray-900 font-roboto text-sm font-normal leading-none py-1">Property</Link>
            <Link to="/buying-guide" className="block text-gray-600 hover:text-gray-900 font-roboto text-sm font-normal leading-none py-1">Buying guide</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-gray-900 font-roboto text-sm font-normal leading-none py-1">Contact us</Link>
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
              <Link 
                to="/seller" 
                className="flex-1 text-center py-1.5 text-[#04473A] hover:text-[#04473A]/80 font-roboto text-base font-bold leading-none hover:bg-gray-100 transition-colors rounded-full"
              >
                Seller
              </Link>
              <Link 
                to="/buyer" 
                className="flex-1 text-center py-1.5 text-[#04473A] hover:text-[#04473A]/80 font-roboto text-base font-bold leading-none hover:bg-gray-100 transition-colors rounded-full"
              >
                Buyer
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; 