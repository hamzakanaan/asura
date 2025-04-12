import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Input from '../atoms/Input';

function SearchField() {
  return (
    <div className="flex-1 flex items-center min-w-0">
      <FiSearch className="text-white w-5 h-5 mr-3" />
      <Input placeholder="Search for property" />
    </div>
  );
}

export default SearchField; 