import React, { useState, useMemo, useEffect } from "react";
import { Sliders } from "lucide-react";
import { useLocation } from "react-router";
import useServices from "@/hooks/useServices";
import { LazyServiceCard } from "@/components/service/LazyServiceCard";
import ServiceCardSkeleton from "@/components/service/LazyServiceCard";
import FilterSidebar from "@/components/service/FilterSidebar";
import MobileFilters from "@/components/service/MobileFilters";
import Pagination from "@/components/service/Pagination";
import EmptyState from "@/components/service/EmptyState";
import SEO from "@/components/Common/SEO"; 

const Services = () => {
  const { services: allServices, loading } = useServices();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const itemsPerPage = 12;

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
  // Set category from navigation state if provided
  if (location.state?.category) {
    setSelectedCategory(location.state.category);
  }
}, [location.state?.category]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allServices.map((s) => s.service.category));
    return ["All", ...Array.from(cats).sort()];
  }, [allServices]);

  // Get price range from all services
  const maxPrice = useMemo(() => {
    if (allServices.length === 0) return 2500;
    const prices = allServices.map((s) => s.price);
    return Math.max(...prices);
  }, [allServices]);

  useEffect(() => {
    if (maxPrice > 0) {
      setPriceRange([0, maxPrice]);
    }
  }, [maxPrice]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    if (searchTerm) {
      filtered = filtered.filter((service) =>
        service.service.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (service) => service.service.category === selectedCategory
      );
    }

    filtered = filtered.filter(
      (service) =>
        service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        filtered.sort((a, b) => a.providerId.localeCompare(b.providerId));
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return filteredServices.slice(startIdx, endIdx);
  }, [filteredServices, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setPriceRange([0, maxPrice]);
    setSortBy("popular");
    setCurrentPage(1);
  };

  const isFilterActive =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== maxPrice;

  const filterData = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    selectedCategory: selectedCategory,
    setSelectedCategory: setSelectedCategory,
    categories: categories,
    priceRange: priceRange,
    handlePriceChange: handlePriceChange,
    handleMaxPriceChange: handleMaxPriceChange,
    maxPrice: maxPrice,
    sortBy: sortBy,
    setSortBy: setSortBy,
    setCurrentPage: setCurrentPage,
    isFilterActive: isFilterActive,
    clearFilters: clearFilters,
    showMobileFilters: showMobileFilters,
    setShowMobileFilters: setShowMobileFilters,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <SEO 
        title="Explore Services" 
        description="Browse our wide range of professional services including cleaning, plumbing, electrical, and more. Compare prices and book instantly."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
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
            <FilterSidebar filterData={filterData} />
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
            <MobileFilters filterData={filterData} />

            {/* Results Info */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              {loading ? (
                <p className="text-gray-600 font-medium animate-pulse">
                  Loading services...
                </p>
              ) : (
                <p className="text-gray-600 font-medium">
                  Showing {paginatedServices.length} of{" "}
                  {filteredServices.length} service
                  {filteredServices.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            {/* Services Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {Array.from({ length: 12 }).map((_, i) => (
                  <ServiceCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedServices.map((service) => (
                    <LazyServiceCard
                      key={service.providerId}
                      service={service}
                    />
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
