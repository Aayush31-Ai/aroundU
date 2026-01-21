import React from "react";
import { Star, MapPin, Briefcase, DollarSign, CheckCircle, Clock } from "lucide-react";

const ProviderCard = ({ provider, onViewProfile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header with Image and Status */}
      <div className="relative">
        <img
          src={provider.profileImage}
          alt={provider.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {provider.verified && (
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Verified
            </div>
          )}
          <div
            className={`${
              provider.availability === "Available" ? "bg-green-500" : "bg-gray-500"
            } text-white px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {provider.availability === "Available" ? "🟢 Online" : "🔴 Offline"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Provider Name & Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
          <p className="text-sm text-blue-600 font-semibold">
            {provider.serviceCategory}
          </p>
        </div>

        {/* Primary Service */}
        <div className="mb-3">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Primary:</span> {provider.primaryService}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(provider.rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-gray-900">{provider.rating}</span>
          <span className="text-xs text-gray-600">
            ({provider.reviews?.length || 0})
          </span>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Completed Jobs */}
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600">Jobs</span>
            </div>
            <p className="text-lg font-bold text-gray-900">
              {provider.completedJobs}
            </p>
          </div>

          {/* Today's Earnings */}
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Today</span>
            </div>
            <p className="text-lg font-bold text-gray-900">
              ₹{provider.todayEarnings}
            </p>
          </div>

          {/* Location */}
          <div className="bg-red-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="text-xs text-gray-600">City</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{provider.city}</p>
          </div>

          {/* Capacity */}
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-gray-600">Slots</span>
            </div>
            <p className="text-lg font-bold text-gray-900">
              {provider.remainingCapacity}/{provider.maxJobsPerDay}
            </p>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
              style={{
                width: `${(provider.remainingCapacity / provider.maxJobsPerDay) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            {provider.remainingCapacity} slots available
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onViewProfile}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            View Profile
          </button>
          <button className="flex-1 bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
