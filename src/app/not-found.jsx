"use client";

import Link from "next/link";
import { BiMapAlt, BiHomeAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-10">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[120px] sm:text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-gray-50">
          404
        </h1>
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#14A0B5]/10 text-[#14A0B5] sm:mb-6 sm:h-24 sm:w-24">
          <BiMapAlt className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>

        {/* Text Content */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-5xl">
          Looks like you&apos;re off the map!
        </h2>
        <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-500 sm:mb-10 sm:max-w-md sm:text-base md:text-lg">
          The destination you are looking for has been moved, deleted, or
          perhaps never existed. Let&apos;s get you back on track.
        </p>

        {/* Buttons / Links */}
        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#14A0B5] px-6 py-3 font-medium text-white shadow-md shadow-[#14A0B5]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#108293] sm:w-auto"
          >
            <BiHomeAlt className="text-lg" />
            Back to Home
          </Link>

          <Link
            href="/destinations"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition-transform hover:-translate-y-0.5 hover:bg-gray-50 sm:w-auto"
          >
            <BiMapAlt className="text-lg text-[#14A0B5]" />
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
