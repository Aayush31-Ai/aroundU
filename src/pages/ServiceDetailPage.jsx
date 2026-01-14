import React, { useState, useEffect, useMemo } from "react";
import {
  Star,
  ShieldCheck,
  Clock,
  CheckCircle,
  MessageCircle,
  Heart,
} from "lucide-react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useServices from "@/hooks/useServices";

const ServiceDetailPage = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    dateTime: "",
    frequency: "One-time service",
  });
  const [error, setError] = useState("");

  const { services, loading } = useServices();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { providerId } = useParams();

  useMemo(() => {
    const foundData = services.find((item) => item.providerId === providerId);
    setData(foundData);
  }, [services, providerId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.dateTime.trim()) {
      toast.error("Please select a date and time");
      return;
    }

    if (!formData.frequency.trim()) {
      toast.error("Please select a frequency");
      return;
    }
    toast.success("Service booked successfully!");
    setError("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 ">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-gray-600">Loading service details...</p>
        </div>
      ) : !data ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-red-600">Service not found</p>
        </div>
      ) : (
        <>
          {/*  MAIN GRID  */}
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
            {/* left content */}
            <div className="lg:col-span-2 space-y-8">
              {/* TITLE */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {data.service.title}
                </h1>

                <div className="mt-3 flex items-center pr-6  gap-4 text-sm">

                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#2f5349] fill-[#2f5349]" />
                      {data.rating}
                    </span>

                    <span className="flex items-center gap-1 text-green-600">
                      <ShieldCheck className="w-4 h-4" />
                      Verified
                    </span>


                </div>
              </div>

              {/* IMAGE GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <img
                    src={data.service.serviceImage}
                    alt={data.service.title}
                    className="w-full h-80 object-cover  hover:scale-103 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* PROVIDER CARD */}
              <div className="bg-white rounded-xl p-5 flex items-center justify-between border">
                <div className="flex items-center gap-4">
                  <img
                    src={data.profileImage}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-sm text-gray-500">
                      Responds in &lt; 1 hr
                    </p>
                  </div>
                </div>
              </div>

              {/* ABOUT */}
              <div className="bg-white rounded-xl p-6 border">
                <h2 className="text-xl font-semibold">About the service</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {data.service.about}
                </p>
              </div>

              {/* WHAT'S INCLUDED */}
              <div className="bg-white rounded-xl p-6 border">
                <h2 className="text-xl font-semibold">What’s included</h2>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {data.service.whatIncluded.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2f5349]" />

                      <div className="text-gray-700">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <div className="sticky top-24 h-fit">
              <div className="bg-white rounded-xl border p-6 space-y-5">
                {/* PRICE */}
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-3xl font-bold">
                    ₹{data.price}{" "}
                    <span className="text-sm font-normal">/ visit</span>
                  </p>
                </div>

                {/* DATE */}
                <div>
                  <label className="text-sm font-medium">Date & Time</label>
                  <input
                    type="datetime-local"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f5349]"
                    required
                  />
                </div>

                {/* FREQUENCY */}
                <div>
                  <label className="text-sm font-medium">Frequency</label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleInputChange}
                    className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f5349]"
                    required
                  >
                    <option value="One-time service">One-time service</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={handleSubmit}
                  disabled={!formData.dateTime}
                  className="w-full bg-[#2f5349] text-white py-3 rounded-xl font-medium hover:bg-[#2f5349]/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  Book Service
                </button>

                <p className="text-xs text-gray-500 text-center">
                  You won’t be charged yet
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetailPage;
