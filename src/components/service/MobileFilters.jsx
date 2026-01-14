import React from 'react';
import { Search, X } from 'lucide-react';

const MobileFilters = ({
filterData
}) => {
  if (!filterData.showMobileFilters) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#1f2f2a]">Filters</h2>
            <button
              onClick={() => filterData.setShowMobileFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Search */}
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

          {/* Mobile Category */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Category
            </label>
            <div className="space-y-2">
              {filterData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    filterData.setSelectedCategory(cat);
                    filterData.setShowMobileFilters(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition text-sm font-medium ${
                    filterData.selectedCategory === cat
                      ? 'bg-[#2f5349] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Price */}
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
          </div>

          {/* Mobile Sort */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Sort By
            </label>
            <select
              value={filterData.sortBy}
              onChange={(e) => filterData.setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20 text-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {filterData.isFilterActive && (
            <button
              onClick={() => {
                filterData.clearFilters();
                filterData.setShowMobileFilters(false);
              }}
              className="w-full bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-300 transition"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;