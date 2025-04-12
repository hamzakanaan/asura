import React from 'react';

function BuyingGuide() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start gap-12 mb-16">
            <h2 className="text-[2.5rem] font-bold text-[#00513B] whitespace-nowrap">How its work</h2>
            <p className="text-gray-600 mt-2">
              the ultimate platform for buying and selling properties with ease. Whether you're searching for your 
              perfect home, a high-yield investment, or looking to sell quickly at the best price, Asura connects you 
              with the right buyers and sellers in just a few clicks.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="flex justify-end mb-6">
                  <img src="/search 1.svg" alt="Search" className="w-24 h-24" />
                </div>
                <h3 className="text-lg font-bold text-[#00513B]">
                  Explore<br />Properties
                </h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="flex justify-end mb-6">
                  <img src="/discussion 1.svg" alt="Discussion" className="w-24 h-24" />
                </div>
                <h3 className="text-lg font-bold text-[#00513B]">
                  Connect &<br />Negotiate
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="flex justify-end mb-6">
                  <img src="/handshake 1.svg" alt="Handshake" className="w-24 h-24" />
                </div>
                <h3 className="text-lg font-bold text-[#00513B]">
                  Close the Deal<br />Securely
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyingGuide; 