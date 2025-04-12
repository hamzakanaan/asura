import React from 'react';
import PropertyList from '../components/organisms/PropertyList';
import SearchBar from '../components/organisms/SearchBar';

function Properties() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Properties</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      <PropertyList />
    </div>
  );
}

export default Properties; 