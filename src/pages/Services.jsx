import React, { useState, useMemo, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import useServices from '@/hooks/useServices';
import ServiceCard from '@/components/service/ServiceCard';
import FilterSidebar from '@/components/service/FilterSidebar';
import MobileFilters from '@/components/service/MobileFilters';
import Pagination from '@/components/service/Pagination';
import EmptyState from '@/components/service/EmptyState';
import ServiceCardSkeleton from '@/components/service/LazyServiceCard';

const Services = () => {
  const { services, loading } = useServices();
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    setAllServices(services || []);
  }, [services]);

useEffect(()=>{
window.scrollTo({top:0,behavior:"smooth"})
},[])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allServices.map((s) => s.service.category));
    return ['All', ...Array.from(cats).sort()];
  }, [allServices]);

  // State for filters and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (allServices.length === 0) return;
    const max = Math.max(...allServices.map((s) => s.price || 0));
    if (priceRange[1] === 0 && max > 0) {
      setPriceRange([0, max]);
    }
  }, [allServices, priceRange]);

  // Get price range from all services
  const maxPrice = useMemo(() => {
    if (allServices.length === 0) return 2500;
    return Math.max(...allServices.map(s => s.price));
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = [...allServices];

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
            <FilterSidebar
              filterData={{
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
                priceRange,
                handlePriceChange,
                handleMaxPriceChange,
                maxPrice,
                sortBy,
                setSortBy,
                setCurrentPage,
                categories,
                isFilterActive,
                clearFilters,
              }}
            />
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

            <MobileFilters
              filterData={{
                showMobileFilters,
                setShowMobileFilters,
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
                categories,
                priceRange,
                handlePriceChange,
                handleMaxPriceChange,
                maxPrice,
                sortBy,
                setSortBy,
                isFilterActive,
                clearFilters,
              }}
            />

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
                  <ServiceCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {paginatedServices.map((service) => (
                    <ServiceCard key={service.providerId} service={service} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <EmptyState onClearFilters={clearFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
