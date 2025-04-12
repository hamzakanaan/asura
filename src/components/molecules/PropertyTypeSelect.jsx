import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Input from '../atoms/Input';

function PropertyTypeSelect() {
  return (
    <div className="flex-1 min-w-0 px-6 relative">
      <div className="flex items-center">
        <Input
          value="Property Type"
          readOnly
          className="cursor-default"
        />
        <div className="cursor-pointer">
          <select className="absolute inset-0 opacity-0 cursor-pointer w-full">
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
          <FiChevronDown className="text-white w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
}

export default PropertyTypeSelect; 