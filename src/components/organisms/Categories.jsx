import React from 'react';

/**
 * Categories Component
 * 
 * Displays a grid of property categories with images and hover effects.
 * 
 * Features:
 * - Responsive grid layout
 * - Image loading states
 * - Hover effects on category cards
 * - Accessible category links
 * 
 * State:
 * - loadedImages: Tracks which category images have finished loading
 */
function Categories() {
  const categories = [
    {
      id: 1,
      title: "Residential",
      image: "/assets/images/modern-new-flat-apartment-real-estate-concept-outdoor-residential-home-facilities.png",
      className: "col-span-2 row-span-1"
    },
    {
      id: 2,
      title: "Villa",
      image: "/assets/images/luxury-house-with-pool.png",
      className: "col-span-2 row-span-2 md:col-start-3 md:row-start-1"
    },
    {
      id: 3,
      title: "Apartment",
      image: "/assets/images/modern-living-room-interior-design.png",
      className: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Commercial",
      image: "/assets/images/commercial-facility-modern-r-d-building.png",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-16 bg-[#ECECEC]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-baseline gap-6">
              <h2 className="text-5xl md:text-6xl font-bold text-[#00513B]">Categories</h2>
              <span className="text-gray-600 text-base">Turning Properties into Possibilities</span>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {categories.map(category => (
              <div 
                key={category.id}
                className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${category.className}`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(4, 71, 58, 0) 0%, #04473A 118.1%)'
                }} />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-medium">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories; 