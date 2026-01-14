import React from 'react';

const EmptyState = ({ onClearFilters }) => {
  return (
    <div className="text-center py-16">
      <div className="mb-4 text-6xl">🔍</div>
      <h3 className="text-2xl font-bold text-gray-700 mb-2">
        No services found
      </h3>
      <p className="text-gray-600 mb-6">
        Try adjusting your filters or search term
      </p>
      <button
        onClick={onClearFilters}
        className="bg-[#2f5349] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#244038] transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EmptyState;