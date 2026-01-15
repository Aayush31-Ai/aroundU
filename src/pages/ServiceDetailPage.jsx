import React, { useEffect, useMemo, useState } from "react";
import {
  Star,
  ShieldCheck,
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useServices from "@/hooks/useServices";
import SimilarServices from "@/components/SimilarServices";
import SEO from "@/components/Common/SEO";

const ServiceDetailPage = () => {
  const { providerId } = useParams();
  const { services, loading } = useServices();

  const [data, setData] = useState(null);
  const [showMobileBooking, setShowMobileBooking] = useState(false);
  const [formData, setFormData] = useState({
    dateTime: "",
    frequency: "One-time",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setFormData({
      dateTime: "",
      frequency: "One-time",
    });
    setShowMobileBooking(false);
  }, [providerId]);

  useEffect(() => {
    if (!services?.length) return;
    setData(services.find((s) => s.providerId === providerId));
  }, [services, providerId]);

  const similarServices = useMemo(() => {
    if (!data) return [];
    return services
      .filter(
        (s) =>
          s.providerId !== data.providerId &&
          s.service.category === data.service.category
      )
      .slice(0, 6);
  }, [data, services]);

  const submitBooking = () => {
    if (!formData.dateTime) {
      toast.error("Please select date & time");
      return;
    }
    toast.success("Service booked successfully!");
    setShowMobileBooking(false);
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Loading service…
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-500">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-28 lg:pb-12">
      <SEO 
        title={data.service.title}
        description={data.service.about?.substring(0, 160)}
        image={data.service.serviceImage}
        keywords={`${data.service.category}, ${data.service.title}, ${data.name}, local professional`}
      />
      <div className="max-w-7xl mx-auto px-4 py-4 lg:py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-8 space-y-8 min-w-0">

          {/* TITLE */}
          <div>
            <span className="inline-block bg-[#2f5349]/10 text-[#2f5349] text-xs font-bold px-3 py-1 rounded-full mb-3">
              {data.service.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {data.service.title}
            </h1>

            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-[#2f5349] font-semibold">
                <Star className="w-4 h-4 fill-current" />
                {data.rating}
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <ShieldCheck className="w-4 h-4" />
                Verified
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-white border">
            <img
              src={data.service.serviceImage}
              alt={data.service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* PROVIDER */}
          <div className="bg-white rounded-xl p-5 border flex items-center gap-4">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{data.name}</p>
              <p className="text-sm text-gray-500 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 1 hr
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Nearby
                </span>
              </p>
            </div>
          </div>

          {/* ABOUT */}
          <div className="bg-white rounded-xl p-6 border">
            <h2 className="text-xl font-bold mb-3">About the service</h2>
            <p className="text-gray-600 leading-relaxed">
              {data.service.about}
            </p>
          </div>

          {/* INCLUDED */}
          <div className="bg-white rounded-xl p-6 border">
            <h2 className="text-xl font-bold mb-4">What’s included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.service.whatIncluded.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2f5349]" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SimilarServices similarServices={similarServices} />
        </div>

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-24 bg-white rounded-xl border p-6 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-3xl font-bold text-[#2f5349]">
                ₹{data.price} <span className="text-sm">/ visit</span>
              </p>
            </div>

            <div>
              <label className="text-sm font-bold flex items-center gap-2">
                <Calendar size={16} /> Date & Time
              </label>
              <input
                type="datetime-local"
                className="mt-2 w-full border rounded-lg px-3 py-2"
                value={formData.dateTime}
                onChange={(e) =>
                  setFormData({ ...formData, dateTime: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-bold">Frequency</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["One-time", "Weekly", "Monthly"].map((f) => (
                  <button
                    key={f}
                    onClick={() =>
                      setFormData({ ...formData, frequency: f })
                    }
                    className={`py-2 rounded-lg text-sm font-semibold border ${
                      formData.frequency === f
                        ? "bg-[#2f5349] text-white border-[#2f5349]"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={submitBooking}
              className="w-full bg-[#2f5349] text-white py-3 rounded-xl font-bold"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t p-4 flex items-center justify-between z-50">
        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="text-xl font-bold text-[#2f5349]">
            ₹{data.price}
          </p>
        </div>
        <button
          onClick={() => setShowMobileBooking(true)}
          className="bg-[#2f5349] text-white px-6 py-3 rounded-xl font-bold"
        >
          Book Now
        </button>
      </div>

      {/* ================= MOBILE MODAL ================= */}
      {showMobileBooking && (
        <div className="fixed inset-0 bg-black/40 z-[60] flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold">Book Service</h3>

            <input
              type="datetime-local"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.dateTime}
              onChange={(e) =>
                setFormData({ ...formData, dateTime: e.target.value })
              }
            />

            <div className="grid grid-cols-3 gap-2">
              {["One-time", "Weekly", "Monthly"].map((f) => (
                <button
                  key={f}
                  onClick={() =>
                    setFormData({ ...formData, frequency: f })
                  }
                  className={`py-2 rounded-lg text-sm font-semibold border ${
                    formData.frequency === f
                      ? "bg-[#2f5349] text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <button
              onClick={submitBooking}
              className="w-full bg-[#2f5349] text-white py-3 rounded-xl font-bold"
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setShowMobileBooking(false)}
              className="w-full text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
