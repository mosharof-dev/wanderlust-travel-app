import Link from "next/link";
import Image from "next/image";
import { IoArrowBackSharp } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCalendarAlt, FaCheck, FaStar } from "react-icons/fa";
const DetailPage = async ({ params }) => {
  // 1. Backend Logic
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  // 2. Frontend Structure & Styling
  return (
    <main className=" container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Bar: Back Link & Action Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
        >
          <IoArrowBackSharp />
          Back to Destinations
        </Link>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <CiEdit className="w-4 h-4" />
            Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-500 rounded text-sm font-medium hover:bg-red-50 transition-colors">
            <RiDeleteBin5Line className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-75 md:h-100 mb-10">
        <Image
          src={data.imageUrl}
          alt={data.destinationName}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Destination Details */}
        <div className="flex-1">
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-500 mb-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {data.country}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            {data.destinationName}
          </h1>

          {/* Rating & Duration */}
          <div className="flex items-center gap-6 text-sm text-gray-800 font-medium pb-8 mb-8 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-green-500" />
              <span>
                4.9{" "}
                <span className="text-gray-400 font-normal ml-1">
                  (234 reviews)
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <FaCalendarAlt className="w-4 h-4" />
              {data.duration}
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {data.description}
            </p>
          </div>

          {/* Highlights Section */}
          <div>
            <h2 className="text-2xl font-medium mb-4 text-gray-900">
              Highlights
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
              Discover the magic of {data.country} with pristine beaches,
              ancient temples, and vibrant culture. Experience luxury resorts,
              tropical landscapes, and unforgettable sunsets.
            </p>
            {/* Note: In a real app, this array should come from your database */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
              {[
                "Luxury beachfront accommodation",
                "Visit Uluwatu Temple at sunset",
                "Traditional Balinese spa treatment",
                "Private beach dinner experience",
                "Sunrise trek to Mount Batur",
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[14px] text-gray-600"
                >
                  <svg
                    className="w-4 h-4 text-green-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Booking Card */}
        <div className="lg:w-90 w-full">
          <div className="border border-gray-100 bg-white rounded-lg p-6 shadow-sm sticky top-8">
            <p className="text-sm text-gray-500 mb-1">Starting from</p>
            <div className="flex flex-col mb-6">
              <span className="text-4xl font-semibold text-[#14b8a6]">
                ${data.price}
              </span>
              <span className="text-xs text-gray-400 mt-1">per person</span>
            </div>

            {/* Date Picker Input Placeholder */}
            <div className="bg-gray-50 p-3 rounded mb-6 text-sm text-gray-700 font-medium border border-gray-100">
              {data.departureDate}
            </div>

            <button className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-medium py-3 rounded transition-colors flex justify-center items-center gap-2 mb-6">
              Book Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            {/* Perks */}
            <div className="flex flex-col gap-3">
              {[
                "Free cancellation up to 7 days",
                "Travel insurance included",
                "24/7 customer support",
              ].map((perk, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs text-gray-500"
                >
                  <FaCheck className="w-4 h-4 text-green-500 shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
