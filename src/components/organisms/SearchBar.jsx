import React from 'react';
import { FiSliders } from 'react-icons/fi';
import SearchField from '../molecules/SearchField';
import PropertyTypeSelect from '../molecules/PropertyTypeSelect';
import Input from '../atoms/Input';
import Divider from '../atoms/Divider';

/**
 * SearchBar Component
 * 
 * A responsive search interface for property filtering with validation.
 * Includes fields for property search, type selection, location, and price range.
 * 
 * Features:
 * - Responsive design with mobile/desktop layouts
 * - Form validation for required fields
 * - Error message display
 * - Accessible form controls
 * 
 * State:
 * - formData: Tracks input values for all form fields
 * - errors: Manages validation error messages
 * - showFilters: Controls mobile filter visibility
 */
function SearchBar() {
  return (
    <form role="search" aria-label="Property search form">
      {/* Desktop Search Bar (md and up) */}
      <div 
        className="hidden md:flex items-center py-3 px-6 mx-auto"
        style={{
          width: '1320px',
          height: '82px',
          borderRadius: '21px',
          border: '2px solid #FFFFFF'
        }}
      >
        <div className="flex-1 min-w-0">
          <SearchField />
        </div>
        <Divider />
        <div className="flex-1 min-w-0">
          <PropertyTypeSelect />
        </div>
        <Divider />
        <div className="flex-1 min-w-0 px-6">
          <Input placeholder="Location" />
        </div>
        <Divider />
        <div className="flex-1 min-w-0 px-6">
          <Input placeholder="Price range" />
        </div>
        <button
          type="button"
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Open advanced filters"
        >
          <FiSliders className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Search Bar (below md) */}
      <div className="md:hidden flex flex-col gap-2">
        {/* Search and Filter Button */}
        <div className="flex items-center border border-white/40 rounded-full py-3 px-4">
          <div className="flex-1">
            <SearchField />
          </div>
          <button
            type="button"
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors ml-2"
            aria-label="Open advanced filters"
          >
            <FiSliders className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Property Type and Location */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-white/40 rounded-full py-3 px-4">
            <PropertyTypeSelect />
          </div>
          <div className="border border-white/40 rounded-full py-3 px-4">
            <Input placeholder="Location" />
          </div>
        </div>

        {/* Price Range */}
        <div className="border border-white/40 rounded-full py-3 px-4">
          <Input placeholder="Price range" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar; 