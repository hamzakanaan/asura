import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar';

function BuyerRegister() {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#ECECEC] pt-[109px] sm:pt-[109px] md:pt-[109px]">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="w-full max-w-[1320px] h-auto min-h-[646px] mx-auto mt-8 sm:mt-16 md:mt-32 mb-4 sm:mb-6 md:mb-8">
          <div className="h-full bg-white rounded-[21px] shadow-lg p-4 sm:p-8 md:p-12">
            {/* Icon and Title */}
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <img 
                src="/assets/icons/buyer-register-icon.svg" 
                alt="" 
                className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] mb-4 sm:mb-6"
              />
              <h1 
                className="font-roboto font-bold text-[20px] sm:text-[24px] md:text-[26px] text-[#04473A] text-center whitespace-nowrap px-4"
                style={{ 
                  width: 'auto',
                  maxWidth: '337px',
                  height: 'auto',
                  minHeight: '30px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  margin: '0 auto'
                }}
              >
                Create account | Asura
              </h1>
              <p 
                className="font-roboto font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#696969] text-center px-4"
                style={{ 
                  width: 'auto',
                  maxWidth: '257px',
                  height: 'auto',
                  minHeight: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  margin: '8px auto 0'
                }}
              >
                Manage inquiries and offers in one place.
              </p>
            </div>

            {/* Registration Form */}
            <form className="max-w-[800px] mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 md:px-0">
                <div className="flex justify-center md:justify-start">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full md:w-[376px] h-[48px] px-4 rounded-[21px] bg-[#ECECEC] border-none focus:ring-0 font-roboto text-[14px] placeholder-[#667085]"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center justify-center md:justify-start mt-6 px-4 sm:px-6 md:px-0">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-[17px] h-[17px] rounded-[6px] border-[#D0D5DD] text-[#04473A] focus:ring-0 bg-[#ECECEC]"
                />
                <span className="ml-2 font-roboto text-[12px] text-[#696969]">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#FF8800]">
                    terms and conditions
                  </Link>
                </span>
              </div>

              {/* Create Account Button */}
              <div className="flex justify-center mt-8 px-4 sm:px-6 md:px-0">
                <button
                  type="submit"
                  className="w-full md:w-[785px] h-[48px] rounded-[21px] bg-white"
                  style={{ border: '1px solid #04473A' }}
                >
                  <span 
                    className="font-roboto font-normal text-[12px] text-[#04473A]"
                    style={{ 
                      width: '82px',
                      height: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                    Create account
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerRegister; 