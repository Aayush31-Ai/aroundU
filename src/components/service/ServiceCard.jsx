import React, { useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";


const ServiceCard = React.memo(({ service }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();

  const goToDetail = () => navigate(`/services/${service.providerId}`);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
      onClick={goToDetail}
    >
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
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
            <Star fill="#2f5349" size={20} className='text-[#2f5349]'/>
            <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToDetail();
            }}
            className="bg-[#2f5349] text-white cursor-pointer px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#244038] transition"
          >
            View Details
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background-size: 1000px 100%;
        }
      `}</style>
    </div>
  );
});

export default ServiceCard;