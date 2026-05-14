import { FaCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";
const DestinationCard = ({ data }) => {
  return (
    <div className="flex flex-col group w-full bg-gray-50 border-gray-100 shadow-lg rounded-xl ">
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100 rounded-t-xl">
        <Image
          src={data.imageUrl}
          alt={data.destinationName}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-sm font-medium text-gray-900 z-10">
          {data.rating || "4.5"} <span>★</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-2 p-4  mt-4">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <SlLocationPin />
          {data.country}
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-gray-900">
            {data.destinationName}
          </h3>
          <div className="text-right flex items-baseline gap-1">
            <span className="text-lg font-medium">${data.price}</span>
            <span className="text-xs text-gray-500">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaCalendarAlt />
          {data.duration}
        </div>

        {/* Book Now Button */}
        <Link
          href={`/destinations/${data._id}`}
          className="text-[#38bdf8] font-medium text-sm flex items-center gap-1 uppercase tracking-wide mt-2 w-fit hover:text-[#0284c7] transition-colors hover:underline"
        >
          BOOK NOW
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default DestinationCard;
