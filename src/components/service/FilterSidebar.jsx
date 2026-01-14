import React from 'react';
import { Search } from 'lucide-react';

const FilterSidebar = ({
  filterData
}) => {
  return (
    <div className="sticky top-18 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#1f2f2a]">Filters</h2>
        {filterData.isFilterActive && (
          <button
            onClick={filterData.clearFilters}
            className="text-sm text-[#2f5349] hover:underline font-semibold"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Search Services
        </label>
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            value={filterData.searchTerm}
            onChange={(e) => filterData.setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20"
          />
        </div>
      </div>
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Category
        </label>
        <select
          value={filterData.selectedCategory}
          onChange={(e) => filterData.setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20 text-sm bg-white"
        >
          {filterData.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Price Range: ₹{filterData.priceRange[0]} - ₹{filterData.priceRange[1]}
        </label>

        <div className="space-y-4">
          {/* Min Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-600">Min Price</span>
              <span className="text-sm font-semibold text-[#2f5349]">
                ₹{filterData.priceRange[0]}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={filterData.maxPrice}
              value={filterData.priceRange[0]}
              onChange={filterData.handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2f5349]"
            />
          </div>

          {/* Max Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-600">Max Price</span>
              <span className="text-sm font-semibold text-[#2f5349]">
                ₹{filterData.priceRange[1]}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={filterData.maxPrice}
              value={filterData.priceRange[1]}
              onChange={filterData.handleMaxPriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2f5349]"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4 pt-3 border-t border-gray-200">
          <span className="text-xs text-gray-500 font-medium">₹0</span>
          <span className="text-xs text-gray-500 font-medium">₹{filterData.maxPrice}</span>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Sort By
        </label>
        <select
          value={filterData.sortBy}
          onChange={(e) => {
            filterData.setSortBy(e.target.value);
            filterData.setCurrentPage(1);
          }}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20 text-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;