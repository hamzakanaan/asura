import React, { useState } from 'react';
import PropertyCard from '../molecules/PropertyCard';
import { FiSliders } from 'react-icons/fi';

/**
 * PropertyList Component
 * 
 * Displays a grid of property listings with filtering and load more functionality.
 * 
 * Features:
 * - Responsive grid layout
 * - Property filtering by type
 * - Load more pagination
 * - Property card display with images and details
 * 
 * Props:
 * - properties: Array of property objects containing listing details
 * - filters: Array of available filter options
 * 
 * State:
 * - visibleProperties: Number of properties currently displayed
 * - selectedFilter: Currently active filter
 */

const PropertyList = () => {
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const properties = [
    {
      id: 1,
      image: "/assets/images/image (1).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 2,
      image: "/assets/images/image (2).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 3,
      image: "/assets/images/image (3).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 4,
      image: "/assets/images/image (4).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 5,
      image: "/assets/images/image (5).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 6,
      image: "/assets/images/image (6).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 7,
      image: "/assets/images/image (7).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 8,
      image: "/assets/images/image (8).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    },
    {
      id: 9,
      image: "/assets/images/image (6).png",
      title: "Luxury Apartment in the\nHeart of Damascus",
      location: "Abu Rummaneh, Damascus",
      price: "45k USD",
      area: "180 m²"
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00513B] text-center sm:text-left">
          New offers
        </h2>
        <p className="text-gray-600 text-center sm:text-left">
          Choose from the new offers what suits you
        </p>
      </div>

      {/* Filters */}
      <div className="relative mb-8 sm:mb-12">
        {/* Mobile Filter Button */}
        <button
          className="md:hidden w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className="text-[#969696] text-xs font-roboto">Filters</span>
          <FiSliders className="w-5 h-5 text-gray-600" />
        </button>

        {/* Filter Options */}
        <div className={`${isFilterOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-4 border-b border-gray-200 overflow-x-auto`}>
          <button className="bg-transparent text-[#969696] text-xs font-roboto font-normal leading-[27px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
            Minimum
          </button>
          <button className="bg-transparent text-[#969696] text-xs font-roboto font-normal leading-[27px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
            Maximum
          </button>
          <button className="bg-transparent text-[#969696] text-xs font-roboto font-normal leading-[27px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
            Size
          </button>
          <button className="bg-transparent text-[#969696] text-xs font-roboto font-normal leading-[27px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
            Bathrooms
          </button>
          <button className="bg-transparent text-[#969696] text-xs font-roboto font-normal leading-[27px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
            Bedrooms
          </button>
        </div>
      </div>

      {/* Property grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {properties.slice(0, visibleProperties).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>

      {/* Load more button */}
      {visibleProperties < properties.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleProperties(prev => prev + 6)}
            className="px-8 py-3 bg-white text-[#00513B] rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList; 