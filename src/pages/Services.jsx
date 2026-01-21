import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Search, Sliders, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Lazy import service data
const services1 = () => import('../../services1.json');
const services2 = () => import('../../services2.json');
const services3 = () => import('../../services3.json');

const LazyServiceCard = lazy(() => Promise.resolve({ default: ({ service, index }) => <ServiceCard service={service} index={index} /> }));

const ServiceCard = React.memo(({ service }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={service.service.serviceImage}
          alt={service.service.title}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
        )}
        <div className="absolute top-4 right-4 bg-[#ffc800] text-[#2f5349] px-3 py-1.5 rounded-full text-sm font-bold">
          ₹{service.price}
        </div>
        <div className="absolute top-4 left-4 bg-white text-[#2f5349] px-3 py-1.5 rounded-full text-xs font-semibold">
          {service.service.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold text-[#1f2f2a] mb-2 line-clamp-2">
          {service.service.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {service.service.about}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
          </div>
          <button className="bg-[#2f5349] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#244038] transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  // Load service data
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const loadServices = async () => {
      try {
        const [s1, s2, s3] = await Promise.all([
          import('../../services1.json'),
          import('../../services2.json'),
          import('../../services3.json'),
        ]);
        const combined = [
          ...s1.default,
          ...s2.default,
          ...s3.default,
        ];
        setAllServices(combined);
        setLoading(false);
      } catch (error) {
        console.error('Error loading services:', error);
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allServices.map(s => s.service.category));
    return ['All', ...Array.from(cats).sort()];
  }, [allServices]);

  // State for filters and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Get price range from all services
  const maxPrice = useMemo(() => {
    if (allServices.length === 0) return 2500;
    return Math.max(...allServices.map(s => s.price));
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.service.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.service.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      service => service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => a.providerId.localeCompare(b.providerId));
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, priceRange, sortBy]);

  const handlePriceChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue <= priceRange[1]) {
      setPriceRange([newValue, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= priceRange[0]) {
      setPriceRange([priceRange[0], newValue]);
    }
  };

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return filteredServices.slice(startIdx, endIdx);
  }, [filteredServices, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange([0, maxPrice]);
    setSortBy('popular');
    setCurrentPage(1);
  };

  const isFilterActive =
    searchTerm !== '' ||
    selectedCategory !== 'All' ||
    priceRange[0] !== 0 ||
    priceRange[1] !== maxPrice;

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1f2f2a] mb-2">
            Services
          </h1>
          <p className="text-gray-600 text-lg">
            Explore {filteredServices.length} services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1f2f2a]">Filters</h2>
                {isFilterActive && (
                  <button
                    onClick={clearFilters}
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition text-sm font-medium ${
                        selectedCategory === cat
                          ? 'bg-[#2f5349] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range
                </label>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600">Min: ₹{priceRange[0]}</span>
                      <span className="text-xs text-gray-600">Max: ₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[0]}
                      onChange={handlePriceChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={handleMaxPriceChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3 font-semibold text-[#2f5349] hover:bg-gray-50"
              >
                <Sliders size={20} />
                Filters
              </button>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
                <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-[#1f2f2a]">Filters</h2>
                      <button
                        onClick={() => setShowMobileFilters(false)}
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
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
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
                        {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setShowMobileFilters(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 rounded-lg transition text-sm font-medium ${
                              selectedCategory === cat
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
                        Price Range
                      </label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <span>Min: ₹{priceRange[0]}</span>
                          <span>Max: ₹{priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={maxPrice}
                          value={priceRange[0]}
                          onChange={handlePriceChange}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max={maxPrice}
                          value={priceRange[1]}
                          onChange={handleMaxPriceChange}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Mobile Sort */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Sort By
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20 text-sm"
                      >
                        <option value="popular">Most Popular</option>
                        <option value="rating">Highest Rated</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                      </select>
                    </div>

                    {isFilterActive && (
                      <button
                        onClick={() => {
                          clearFilters();
                          setShowMobileFilters(false);
                        }}
                        className="w-full bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-300 transition"
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              {loading ? (
                <p className="text-gray-600 font-medium animate-pulse">Loading services...</p>
              ) : (
                <p className="text-gray-600 font-medium">
                  Showing {paginatedServices.length} of {filteredServices.length} service
                  {filteredServices.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Services Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                    <div className="h-56 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
                    <div className="p-4 sm:p-5 space-y-3">
                      <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
                      <div className="h-3 bg-gray-300 rounded animate-pulse w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {paginatedServices.map(service => (
                    <ServiceCard key={service.providerId} service={service} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-4">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-[#2f5349] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <ChevronLeft size={20} />
                      Previous
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`w-10 h-10 rounded-lg font-semibold transition ${
                            currentPage === i + 1
                              ? 'bg-[#2f5349] text-white'
                              : 'bg-white border border-gray-300 text-[#2f5349] hover:bg-gray-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-[#2f5349] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      Next
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No services found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search term
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#2f5349] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#244038] transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
