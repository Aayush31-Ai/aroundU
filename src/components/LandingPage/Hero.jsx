import { Search, X } from "lucide-react";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router";
import Fuse from "fuse.js";
import useServices from "@/hooks/useServices";

const Hero = React.memo(() => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { services, loading } = useServices();

  // Memoize fuse instance and options
  const fuseOptions = useMemo(() => ({
    keys: [
      { name: "service.title", weight: 0.4 },
      { name: "service.category", weight: 0.3 },
      { name: "name", weight: 0.2 },
      { name: "location.city", weight: 0.1 },
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  }), []);

  const fuse = useMemo(() => new Fuse(services, fuseOptions), [services, fuseOptions]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = fuse.search(searchQuery);
      setSearchResults(results.slice(0, 4)); // Show top 8 results
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery, services]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Memoize callbacks
  const handleServiceClick = useCallback((providerId) => {
    navigate(`/services/${providerId}`);
    setSearchQuery("");
    setShowResults(false);
  }, [navigate]);

  const handleQuickSearch = useCallback((category) => {
    navigate("/services", { state: { category } });
  }, [navigate]);

  return (
<section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-y-visible min-h-[80vh] flex items-center">


  <div className="hidden lg:block absolute right-[-250px] top-[-150px] w-[600px] h-[600px]
    bg-gradient-to-bl from-[#7bbfae]/15 via-[#5da897]/10 to-transparent
    rounded-[40%_60%_70%_30%/40%_40%_60%_60%] z-0 blur-3xl"
    style={{ animation: "float 20s ease-in-out infinite" }}>
  </div>

  {/* Medium Blob - Bottom Left with Animation */}
  <div className="hidden lg:block absolute left-[-180px] bottom-[-100px] w-[500px] h-[500px]
    bg-gradient-to-tr from-[#2f5349]/12 via-[#4a6f60]/8 to-transparent
    rounded-[55%_45%_35%_65%/60%_30%_70%_40%] z-0 blur-3xl"
    style={{ animation: "float 25s ease-in-out infinite reverse" }}>
  </div>

  {/* Center Accent Blob */}
  <div className="hidden lg:block absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]
    bg-gradient-to-br from-[#ffc800]/8 via-[#f5c542]/5 to-transparent
    rounded-[65%_35%_45%_55%/55%_45%_55%_45%] z-0 blur-3xl"
    style={{ animation: "pulse 15s ease-in-out infinite" }}>
  </div>

  {/* Top Left Small Accent Blob */}
  <div className="hidden lg:block absolute left-[5%] top-[15%] w-[250px] h-[250px]
    bg-gradient-to-br from-[#7bbfae]/10 to-transparent
    rounded-[60%_40%_50%_50%/50%_60%_40%_60%] z-0 blur-2xl"
    style={{ animation: "float 18s ease-in-out infinite 2s" }}>
  </div>

  {/* Right Middle Floating Blob */}
  <div className="hidden lg:block absolute right-[8%] top-[60%] w-[300px] h-[300px]
    bg-gradient-to-tl from-[#ffc800]/10 to-transparent
    rounded-[50%_50%_60%_40%/60%_40%_50%_50%] z-0 blur-2xl"
    style={{ animation: "float 22s ease-in-out infinite 4s" }}>
  </div>

  {/* Decorative Dots Pattern - Hidden on mobile */}
  <div className="hidden lg:block absolute left-[10%] bottom-[20%] w-[150px] h-[150px] z-0 opacity-20">
    <div className="grid grid-cols-6 gap-3">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-[#2f5349] rounded-full"></div>
      ))}
    </div>
  </div>

  {/* Floating Circles with Animation - Hidden on mobile */}
  <div className="hidden lg:block absolute right-[15%] top-[25%] w-[80px] h-[80px] z-0
    border-4 border-[#7bbfae]/20 rounded-full"
    style={{ animation: "spin 30s linear infinite" }}>
  </div>

  <div className="hidden lg:block absolute left-[20%] top-[35%] w-[50px] h-[50px] z-0
    border-3 border-[#ffc800]/25 rounded-full"
    style={{ animation: "spin 20s linear infinite reverse" }}>
  </div>

  {/* Small Accent Dots */}
  <div className="hidden md:block absolute left-[45%] top-[20%] w-3 h-3 bg-[#7bbfae]/30 rounded-full z-0 animate-pulse"></div>
  <div className="hidden md:block absolute right-[30%] bottom-[30%] w-2 h-2 bg-[#ffc800]/40 rounded-full z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
  <div className="hidden md:block absolute left-[35%] bottom-[25%] w-2.5 h-2.5 bg-[#2f5349]/25 rounded-full z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

  {/* Gradient Overlay for Depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent z-[1] pointer-events-none"></div>

  {/* ===== MAIN CONTENT ===== */}
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20 lg:py-24">
    
    {/* Main Headline */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 sm:mb-8">
      Find Local Services
      <br />
      <span className="bg-gradient-to-r from-[#2f5349] via-[#5da897] to-[#7bbfae] bg-clip-text text-transparent
        animate-[gradient_3s_ease-in-out_infinite]">
        Around You
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 font-light px-2">
      Connect with verified professionals for home services, repairs, learning, 
      and daily needs.
    </p>

    {/* Premium Search Bar */}
  <div className="max-w-3xl mx-auto mb-8 sm:mb-12 px-4 relative z-50" ref={searchRef}>
  <div className="flex items-center bg-white justify-between h-12 md:h-16 border-2 overflow-hidden border-[#0d7a5f] rounded-full shadow-md hover:shadow-lg focus-within:ring-4 focus-within:ring-[#0d7a5f]/10 transition-all">
    
    <div className="flex-1 flex items-center">
      <input
        type="text"
        placeholder="Search for plumbing, cleaning, tutoring..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => searchQuery.length > 1 && setShowResults(true)}
        className="w-full pl-5 sm:pl-8 pr-2 py-2 sm:py-3 outline-none text-sm sm:text-base lg:text-lg text-gray-700 bg-transparent placeholder:text-gray-400"
      />
      {searchQuery && (
        <button
          onClick={() => {
            setSearchQuery("");
            setShowResults(false);
          }}
          className="mr-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}
    </div>

    <button 
      onClick={() => searchQuery && navigate("/services", { state: { searchQuery } })}
      className="bg-[#0d7a5f] text-white h-12 md:h-16 flex justify-center items-center transition-all duration-300 active:bg-[#0f493a] hover:bg-[#0f493a] w-12 md:w-20"
    >
      <Search className="md:h-7 md:w-7 w-5 h-5" />
    </button>
  </div>

  {/* Search Results Dropdown */}
  {showResults && searchResults.length > 0 && (
    <div className="absolute top-full mt-2 w-[90%]  bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
      {searchResults.map(({ item }) => (
        <button
          key={item.providerId}
          onClick={() => handleServiceClick(item.providerId)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
        >
          <img
            src={item.service.serviceImage}
            alt={item.service.title}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
            loading="lazy"
          />
          <div className="flex-1 text-left">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.service.title}</h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                {item.service.category}
              </span>
              <span>•</span>
              <span>{item.name}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm sm:text-base font-bold text-[#2f5349]">₹{item.price}</div>
            <div className="text-xs text-gray-500">⭐ {item.rating}</div>
          </div>
        </button>
      ))}
    </div>
  )}

  {showResults && searchQuery.length > 1 && searchResults.length === 0 && (
    <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 text-center z-50">
      <p className="text-gray-500">No services found for "{searchQuery}"</p>
      <button
        onClick={() => navigate("/services")}
        className="mt-3 text-[#2f5349] hover:underline font-medium"
      >
        Browse all services
      </button>
    </div>
  )}
</div>

      {/* Premium Quick Links */}
      <div className="mt-16 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
        <span className="text-gray-700 font-medium text-xs sm:text-sm">Popular services:</span>
        {['Plumbing', 'Cleaning', 'Electrical', 'Tutor', 'Carpentry'].map((service) => (
          <button
            key={service}
            onClick={() => handleQuickSearch(service)}
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium
              hover:border-[#2f5349] hover:text-[#2f5349] hover:bg-white hover:shadow-md transition-all duration-200"
          >
            {service}
          </button>
        ))}
      </div>
  </div>

  {/* Custom Keyframes */}
  <style>{`
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
      }
      33% {
        transform: translate(30px, -30px) rotate(5deg);
      }
      66% {
        transform: translate(-20px, 20px) rotate(-5deg);
      }
    }
    
    @keyframes gradient {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `}</style>

</section>

  );
});

export default Hero;
