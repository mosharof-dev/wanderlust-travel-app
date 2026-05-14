"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: `"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."`,
      name: "Michael Chen",
      location: "Singapore",
      image: person1,
    },
    {
      id: 2,
      quote: `"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"`,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: person2,
    },
    {
      id: 3,
      quote: `"An incredible journey through Japan. The blend of modern cities and traditional temples was organized flawlessly. The best trip of my life!"`,
      name: "David Smith",
      location: "London, UK",
      image: person1, // reusing image for demo
    },
    {
      id: 4,
      quote: `"Exploring the ruins of Machu Picchu was a dream come true. The logistics were handled perfectly, allowing us to just enjoy the adventure."`,
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      image: person2, // reusing image for demo
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3 tracking-tight">
            What Travelers Say
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Real experiences from our happy travelers
          </p>
        </div>
        
        {/* Buttons Desktop */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
              activeIndex === 0 
                ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
            }`}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <IoIosArrowRoundBack className="w-8 h-8" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
              activeIndex >= testimonials.length - (swiperInstance?.params?.slidesPerView || 1)
                ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
            }`}
            disabled={activeIndex >= testimonials.length - (swiperInstance?.params?.slidesPerView || 1)}
            aria-label="Next testimonial"
          >
            <IoIosArrowRoundForward className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Swiper slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 32 },
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full cursor-grab active:cursor-grabbing pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col sm:flex-row bg-white border border-gray-100 shadow-sm overflow-hidden h-full">
                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <p className="text-gray-900 font-medium text-lg md:text-xl leading-snug mb-8">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
                      <p className="text-[#38bdf8] font-medium text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-gray-400 text-xs ml-6 mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="sm:w-[40%] h-64 sm:h-auto relative shrink-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Buttons Mobile */}
      <div className="flex md:hidden gap-4 mt-8 justify-center">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
            activeIndex === 0 
              ? "border-gray-200 text-gray-300 cursor-not-allowed" 
              : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
          }`}
          disabled={activeIndex === 0}
        >
          <IoIosArrowRoundBack className="w-8 h-8" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
            activeIndex >= testimonials.length - 1
              ? "border-gray-200 text-gray-300 cursor-not-allowed" 
              : "border-gray-300 text-gray-600 hover:border-[#38bdf8] hover:text-[#38bdf8]"
          }`}
          disabled={activeIndex >= testimonials.length - 1}
        >
          <IoIosArrowRoundForward className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
