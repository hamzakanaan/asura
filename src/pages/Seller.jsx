import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar';

function Seller() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#ECECEC] pt-[109px] sm:pt-[109px] md:pt-[109px]">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="w-full max-w-[1320px] h-auto md:h-[646px] mx-auto mt-8 sm:mt-16 md:mt-32 mb-8 sm:mb-16 md:mb-32 flex flex-col md:flex-row shadow-lg rounded-[21px] overflow-hidden">
          {/* Left Side - Sign In Form */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-12">
            <h2 
              className="font-roboto font-bold text-[20px] md:text-[26px] leading-none text-[#04473A]"
              style={{ 
                width: '65px',
                height: '30px',
                letterSpacing: '0%'
              }}
            >
              Seller
            </h2>
            
            <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-3 md:mb-4">
              <img 
                src="/assets/icons/seller-icon.svg" 
                alt="Sign In" 
                className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px]"
              />
            </div>

            <h3 
              className="font-roboto font-bold text-[20px] sm:text-[24px] md:text-[26px] text-[#04473A] text-center leading-[100%] whitespace-nowrap"
              style={{ 
                width: 'auto',
                maxWidth: '169px',
                height: '30px',
                letterSpacing: '0%',
                margin: '0 auto',
                whiteSpace: 'nowrap'
              }}
            >
              Sign In | Asura
            </h3>
            <p 
              className="font-roboto font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#696969] text-center leading-[100%] whitespace-nowrap"
              style={{ 
                width: 'auto',
                maxWidth: '317px',
                height: '16px',
                letterSpacing: '0%',
                margin: '8px auto 32px'
              }}
            >
              Manage inquiries and offers in one place.
            </p>

            <form className="space-y-4 mt-6 sm:mt-7 md:mt-8">
              <div className="flex justify-center px-4 sm:px-6 md:px-0">
                <input
                  type="text"
                  placeholder="User name"
                  className="w-full max-w-[450px] h-[44px] sm:h-[46px] md:h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                />
              </div>
              <div className="flex justify-center px-4 sm:px-6 md:px-0">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full max-w-[450px] h-[44px] sm:h-[46px] md:h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                />
              </div>
              <div className="flex justify-center px-4 sm:px-6 md:px-0">
                <button
                  type="submit"
                  className="w-full max-w-[450px] h-[44px] sm:h-[46px] md:h-[48px] rounded-[21px] font-roboto text-[12px] font-normal text-[#04473A] leading-[100%]"
                  style={{ border: '1px solid #04473A', letterSpacing: '0%' }}
                >
                  Sign-in
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 px-4 sm:px-6 md:px-0 space-y-3 sm:space-y-0">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-[17px] h-[17px] rounded-[6px] border-[#D0D5DD] text-[#04473A] focus:ring-0 bg-[#ECECEC]"
                  />
                  <span 
                    className="ml-2 font-roboto font-normal text-[12px] leading-[100%] text-[#696969]"
                    style={{ letterSpacing: '0%' }}
                  >
                    Remember Me
                  </span>
                </label>
                <Link 
                  to="/forgot-password"
                  className="font-roboto font-normal text-[12px] leading-[100%] text-[#04473A]"
                  style={{ letterSpacing: '0%' }}
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>

          {/* Right Side - Promotional Content */}
          <div className="w-full md:w-1/2 relative">
            <img 
              src="/assets/images/concept-keys-new-sunny-loft-apartments-with-city-view.png"
              alt=""
              className="w-full h-full object-cover min-h-[400px] md:min-h-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6] via-[#04473A]/20 to-[#04473A]/80"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-12">
              <div className="flex justify-center w-full">
                <h3 
                  className="font-roboto text-[#04473A] text-center font-bold text-[20px] sm:text-[24px] md:text-[26px] whitespace-nowrap"
                  style={{
                    width: 'auto',
                    maxWidth: '273px',
                    height: '30px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                 you don't have account ?
                </h3>
              </div>
              <div className="text-center">
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h2 
                    className="font-roboto font-bold text-[16px] sm:text-[20px] md:text-[22px] text-white text-center mx-auto"
                    style={{
                      width: 'auto',
                      maxWidth: '300px',
                      lineHeight: '120%',
                      letterSpacing: '0%'
                    }}
                  >
                    List your properties effortlessly
                    <br />
                    and reach potential buyers

                  </h2>
                </div>
                <Link
                  to="/seller/register"
                  className="inline-block w-full max-w-[450px] h-[44px] sm:h-[46px] md:h-[48px] bg-[#FF8800] text-white rounded-[21px] font-roboto text-[12px] font-semibold"
                  style={{
                    letterSpacing: '0%',
                    lineHeight: '44px'
                  }}
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller; 