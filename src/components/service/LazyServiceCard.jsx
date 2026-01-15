import ServiceCard from "./ServiceCard";

export const LazyServiceCard = ServiceCard;

// Skeleton loading component with shimmer effect
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
    <div className="h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
    <div className="p-4 sm:p-5 space-y-3">
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer w-3/4" />
      <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer w-1/2" />
      <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-shimmer" />
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

export default ServiceCardSkeleton;