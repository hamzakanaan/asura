import React from 'react';

const PropertyCard = ({ property }) => {
  const {
    image,
    title,
    location,
    price,
    area
  } = property;

  return (
    <div className="relative rounded-[20px] overflow-hidden cursor-pointer">
      {/* Property Image with Gradient Overlay */}
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#00513B] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-white text-xl font-medium whitespace-pre-line">
              {title}
            </h3>
            <span className="text-white text-2xl font-medium ml-2">
              {price}
            </span>
          </div>
          <div className="flex justify-between items-center border-t border-white/20 pt-3">
            <span className="text-white text-sm">{location}</span>
            <span className="text-white text-sm">{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 