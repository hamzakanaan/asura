import React from 'react';

/**
 * HowItWorks - Section explaining the property buying/selling process
 */
const HowItWorks = () => {
  return (
    <div className="mt-16 sm:mt-24 md:mt-32 mb-8 sm:mb-12 md:mb-16 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00513B] whitespace-normal md:whitespace-nowrap text-center md:text-left">
          How its work
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-[600px] text-center md:text-left">
          the ultimate platform for buying and selling properties with ease. Whether you're searching for your
          perfect home, a high-yield investment, or looking to sell quickly at the best price, Asura connects you
          with the right buyers and sellers in just a few clicks.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
        {/* Explore Properties Card */}
        <div className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between relative w-full sm:w-[340px] md:w-[380px] h-[240px] sm:h-[280px] shadow-sm hover:shadow-md transition-all">
          <div className="absolute right-6 sm:right-8 top-6 sm:top-8">
            <img 
              src="/assets/icons/search 1 (1).png"
              alt="Explore Properties Icon"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00513B]">
              Explore<br />Properties
            </h3>
          </div>
        </div>

        {/* Connect & Negotiate Card */}
        <div className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between relative w-full sm:w-[340px] md:w-[380px] h-[240px] sm:h-[280px] shadow-sm hover:shadow-md transition-all">
          <div className="absolute right-6 sm:right-8 top-6 sm:top-8">
            <img 
              src="/assets/icons/discussion 1.png"
              alt="Connect & Negotiate Icon"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00513B]">
              Connect &<br />Negotiate
            </h3>
          </div>
        </div>

        {/* Close the Deal Card */}
        <div className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between relative w-full sm:w-[340px] md:w-[380px] h-[240px] sm:h-[280px] shadow-sm hover:shadow-md transition-all">
          <div className="absolute right-6 sm:right-8 top-6 sm:top-8">
            <img 
              src="/assets/icons/handshake 1.png"
              alt="Close Deal Icon"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00513B]">
              Close the Deal<br />Securely
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 