import React, { useState } from "react";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Clock,
  DollarSign,
  CheckCircle,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const ProviderProfile = ({ provider }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!provider) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>No provider data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={provider.profileImage}
                alt={provider.name}
                className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
              />
            </div>

            {/* Provider Info */}
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  {provider.name}
                </h1>
                {provider.verified && (
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                )}
              </div>

              <p className="text-xl text-blue-600 font-semibold mb-2">
                {provider.serviceCategory}
              </p>

              <p className="text-gray-600 text-lg mb-4">
                {provider.shortDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-gray-900">
                    {provider.rating}
                  </span>
                  <span className="text-gray-600">({provider.reviews?.length || 0} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">{provider.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    {provider.completedJobs} jobs completed
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full font-semibold text-white ${
                    provider.availability === "Available"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {provider.availability === "Available"
                    ? "🟢 Online Now"
                    : "🔴 Offline"}
                </span>
                <span className="text-gray-600 text-sm">
                  {provider.availabilityDescription}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            {["overview", "services", "reviews", "earnings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "border-[#447e71] text-[#447e71]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Capacity Card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-semibold">Today's Capacity</h3>
                <Briefcase className="w-6 h-6 text-[#447e71]" />
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {provider.remainingCapacity}
                  </span>
                  <span className="text-gray-600 text-sm">
                    of {provider.maxJobsPerDay}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#447e71] h-2 rounded-full transition-all"
                    style={{
                      width: `${(provider.remainingCapacity / provider.maxJobsPerDay) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                {provider.activeJobs} active job{provider.activeJobs !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Today's Earnings Card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-semibold">Today's Earnings</h3>
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ₹{provider.todayEarnings.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>↑ 12% vs yesterday</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Avg: ₹{Math.round(provider.todayEarnings / Math.max(provider.activeJobs, 1))} per job
              </p>
            </div>

            {/* Total Earnings Card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-semibold">Total Earnings</h3>
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ₹{provider.totalEarnings.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm">
                  Since {new Date(provider.joinedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-sm text-gray-600">
                Avg earnings: ₹
                {Math.round(provider.totalEarnings / Math.max(provider.completedJobs, 1))} per job
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Services Offered
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {provider.servicesOffered.map((service, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#447e71] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#447e71]" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {service === provider.primaryService && (
                          <span className="inline-block px-2 py-1 bg-[#d1e7dd] text-[#447e71] rounded text-xs font-semibold">
                            Primary Service
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Customer Reviews ({provider.reviews?.length || 0})
            </h2>
            <div className="space-y-6">
              {provider.reviews && provider.reviews.length > 0 ? (
                provider.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">
                            {review.name}
                          </h4>
                          <span className="text-gray-600 text-sm">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No reviews yet</p>
              )}
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === "earnings" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Earnings Summary */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Earnings Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700">Today's Earnings</span>
                  <span className="text-xl font-bold text-green-600">
                    ₹{provider.todayEarnings}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700">Total Earnings</span>
                  <span className="text-xl font-bold text-blue-600">
                    ₹{provider.totalEarnings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700">Jobs Completed</span>
                  <span className="text-xl font-bold text-gray-900">
                    {provider.completedJobs}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Avg per Job</span>
                  <span className="text-xl font-bold text-purple-600">
                    ₹{Math.round(provider.totalEarnings / Math.max(provider.completedJobs, 1))}
                  </span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bank Details
              </h2>
              {provider.bankDetails ? (
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <label className="text-sm text-gray-600">
                      Account Holder
                    </label>
                    <p className="text-lg font-semibold text-gray-900">
                      {provider.bankDetails.accountHolder}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <label className="text-sm text-gray-600">
                      Account Number
                    </label>
                    <p className="text-lg font-semibold text-gray-900">
                      {provider.bankDetails.accountNumber}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <label className="text-sm text-gray-600">IFSC Code</label>
                    <p className="text-lg font-semibold text-gray-900">
                      {provider.bankDetails.ifscCode}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      {provider.bankDetails.verified
                        ? "Verified"
                        : "Not Verified"}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No bank details on file</p>
              )}
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default ProviderProfile;
