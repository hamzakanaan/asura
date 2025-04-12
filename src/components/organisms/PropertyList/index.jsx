import React, { useState } from 'react';
import PropertyCard from '../../molecules/PropertyCard';

const PropertyList = () => {
  const [visibleProperties, setVisibleProperties] = useState(3);

  const properties = [
    {
      id: 1,
      image: '/assets/images/property1.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    },
    {
      id: 2,
      image: '/assets/images/property2.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    },
    {
      id: 3,
      image: '/assets/images/property3.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    },
    {
      id: 4,
      image: '/assets/images/property1.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    },
    {
      id: 5,
      image: '/assets/images/property2.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    },
    {
      id: 6,
      image: '/assets/images/property3.jpg',
      title: 'Luxury Apartment in the Heart of Damascus',
      location: 'Abu Rummaneh, Damascus',
      price: '45k USD',
      area: '180 m²'
    }
  ];

  const handleLoadMore = () => {
    setVisibleProperties(prev => Math.min(prev + 3, properties.length));
  };

  return (
    <section className="bg-[#F7F7FD] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">New offers</h2>
          <p className="text-gray-600">Choose from our new offers</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <input
            type="text"
            placeholder="Minimum"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Maximum"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Size"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Bathrooms"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Bedrooms"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, visibleProperties).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProperties < properties.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-white text-[#04473A] font-roboto text-base font-normal py-4 px-8 rounded-[10px] hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyList; 