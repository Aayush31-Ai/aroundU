import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MostBookedServices = () => {
  const data = [
    {
      id: 1,
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Home Services",
      rating: 4.8,
      bookings: 2340,
      icon: "🔧"
    },
    {
      id: 2,
      title: "Electrical Work",
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Home Services",
      rating: 4.9,
      bookings: 2100,
      icon: "⚡"
    },
    {
      id: 3,
      title: "House Cleaning",
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Home Services",
      rating: 4.7,
      bookings: 3450,
      icon: "🧹"
    },
    {
      id: 4,
      title: "Carpentry",
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Home Services",
      rating: 4.8,
      bookings: 1890,
      icon: "🪛"
    },
    {
      id: 5,
      title: "Tutoring",
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Education",
      rating: 4.9,
      bookings: 2560,
      icon: "📚"
    },
    {
      id: 6,
      title: "Painting",
      title: "Plumbing",
      image: "/choose.jpg",
      domain: "Home Services",
      rating: 4.6,
      bookings: 1720,
      icon: "🎨"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Most Booked Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Discover the most popular services in your area
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {data.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  {/* Image Container */}
                  <div>
                    <img src={service.image} alt={service.title} />
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="mb-2 sm:mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        {service.domain}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>

                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-[#2f5349] sm:w-4 sm:h-4" />
                        <span className="font-semibold text-gray-900">{service.rating}</span>
                      </div>
                      <span className="text-gray-500">({service.bookings})</span>
                    </div>

                    {/*  Button */}
                    <button className="relative group w-full overflow-hidden rounded-xl bg-linear-to-br from-[#2f5349] via-[#3a695d] to-[#5da897] p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[#2f5349]/30">
                      <div className="relative bg-linear-to-r from-[#2f5349] to-[#468275] px-6 sm:px-8 py-3 rounded-[11px] transition-all duration-300 group-hover:bg-opacity-90 flex items-center justify-center gap-2">
                        <span className="text-white font-bold tracking-wide text-xs sm:text-sm uppercase">
                          Book Now
                        </span>
                      </div>
                    </button>


                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Hidden on small screens */}
          <button className="swiper-button-prev-custom hidden md:block absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white hover:bg-gray-100 text-gray-900 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button className="swiper-button-next-custom hidden md:block absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white hover:bg-gray-100 text-gray-900 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6 sm:mt-8"></div>
        </div>
      </div>
    </section>
  )
}

export default MostBookedServices