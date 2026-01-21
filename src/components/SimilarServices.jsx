import { Star, ArrowRight } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router"; // Fixed import based on v6/v7

const SimilarServices = ({ similarServices }) => {
  const navigate = useNavigate();

  const handleCardClick = (providerId, e) => {
    e.preventDefault();

    navigate(`/services/${providerId}`);
  };

  if (!similarServices?.length) return null;

  return (
    <div className="pt-8 border-t border-gray-200">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Similar services nearby</h2>
        {/* Optional: View All Link */}
        <Link to="/services" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#2f5349] hover:underline">
           View all <ArrowRight size={16} />
        </Link>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
    <div className="flex gap-5 pb-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
  {similarServices.map((item) => (
    <button
      key={item.providerId}
      onClick={(e) => handleCardClick(item.providerId, e)}
      className="
        snap-start
        w-[260px] flex-shrink-0
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm
        overflow-hidden
        lg:hover:shadow-xl
        transition-shadow
        cursor-pointer
        text-left
      "
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={item.service?.serviceImage}
          className="w-full h-full object-cover lg:hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold line-clamp-2">
          {item.service?.title}
        </h3>
        <p className="mt-2 font-extrabold text-[#2f5349]">
          ₹{item.price}
        </p>
      </div>
    </button>
  ))}
</div>

    </div>
  );
};

export default SimilarServices;