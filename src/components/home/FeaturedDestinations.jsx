"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DestinationCard from "./DestinationCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const FeaturedDestinations = ({ destinations }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = destinations?.length || 0;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3 tracking-tight">
            Featured Destinations
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <Link
          href="/destinations"
          className="text-[#38bdf8] border border-[#38bdf8] px-6 py-2 text-sm flex items-center gap-2 uppercase tracking-wide w-fit hover:bg-[#38bdf8] hover:text-white transition-colors"
        >
          ALL DESTINATIONS
          <GoArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Swiper slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 3.5, spaceBetween: 32 },
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          {destinations?.map((destination) => (
            <SwiperSlide key={destination._id}>
              <DestinationCard data={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Controls */}
      {totalSlides > 0 && (
        <div className="flex items-center gap-6 mt-12 w-full max-w-xl">
          <div className="text-gray-600 font-medium text-lg whitespace-nowrap min-w-7.5">
            {activeIndex + 1}/{totalSlides}
          </div>

          {/* Progress Bar */}
          <div className="flex-1 h-0.5 bg-gray-200 relative">
            <div
              className="absolute top-0 left-0 h-full bg-[#38bdf8] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                activeIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
              }`}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <IoIosArrowRoundBack className="w-8 h-8" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                activeIndex >=
                totalSlides - (swiperInstance?.params?.slidesPerView || 1)
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
              }`}
              disabled={
                activeIndex >=
                totalSlides - (swiperInstance?.params?.slidesPerView || 1)
              }
              aria-label="Next slide"
            >
              <IoIosArrowRoundForward className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedDestinations;
