import React from 'react';

const PropertyCard = ({ property }) => {
  const { image, title, location, price, area } = property;

  return (
    <div className="relative overflow-hidden rounded-[20px] group cursor-pointer ring-1 ring-black/5 hover:ring-2 hover:ring-blue-400 transition-all duration-300 w-full aspect-[1.38/1]">
      {/* Image Container with Aspect Ratio */}
      <div className="relative w-full h-full">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(4, 71, 58, 0) 57.47%, #04473A 86.6%)'
        }} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Title and Price */}
          <div className="px-4 sm:px-6">
            <div className="flex justify-between items-start">
              <h3 className="text-white font-roboto text-sm sm:text-base font-bold leading-[21px] max-w-[60%]">
                {title}
              </h3>
              <span className="text-white font-roboto text-xl sm:text-[26px] font-bold leading-[21px] whitespace-nowrap">
                {price}
              </span>
            </div>
          </div>

          {/* White Line */}
          <div className="mx-auto w-[90%] sm:w-[365px] border-t border-white my-3 sm:my-4" style={{ borderColor: '#FFFFFF' }} />

          {/* Location and Area */}
          <div className="px-4 sm:px-6 pb-3 sm:pb-4">
            <div className="flex justify-between items-center">
              <p className="text-white font-roboto text-xs font-normal leading-[21px] max-w-[60%]">
                {location}
              </p>
              <p className="text-white font-roboto text-xs font-normal leading-[21px]">
                {area}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 