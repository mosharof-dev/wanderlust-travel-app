"use client";

import { useState, useMemo } from "react";
import { HiChevronDown, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import DestinationCard from "@/components/home/DestinationCard";

const DestinationsList = ({ initialData }) => {
  const [category, setCategory] = useState("CATEGORY");
  const [priceRange, setPriceRange] = useState("PRICE RANGE");
  const [sortBy, setSortBy] = useState("SORT BY");

  const filteredData = useMemo(() => {
    let result = [...initialData];

    // Filter by Category
    if (category !== "CATEGORY") {
      result = result.filter((item) => item.category === category);
    }

    // Sort by Price Range (assuming this is actually a sort or a range filter, 
    // the UI says Low to High, so it's a sort)
    if (priceRange === "Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (priceRange === "High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    // Sort by Popularity
    if (sortBy === "Popularity") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [initialData, category, priceRange, sortBy]);

  return (
    <>
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 border-y border-gray-200 py-4 mb-6">
        <div className="flex items-center gap-2 text-gray-400 border-r border-gray-200 pr-4 hidden md:flex">
          <HiOutlineAdjustmentsHorizontal className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-widest">Filters</span>
        </div>
        <div className="flex-1 md:border-r border-gray-200 pr-4 relative">
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none pr-8"
          >
            <option value="CATEGORY">CATEGORY</option>
            <option value="Cultural">Cultural</option>
            <option value="Beach">Beach</option>
            <option value="Adventure">Adventure</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <HiChevronDown className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 md:border-r border-gray-200 pr-4 relative">
          <select 
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none pr-8"
          >
            <option value="PRICE RANGE">PRICE RANGE</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <HiChevronDown className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 relative">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none pr-8"
          >
            <option value="SORT BY">SORT BY</option>
            <option value="Popularity">Popularity</option>
            <option value="Newest">Newest</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <HiChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-500 text-sm mb-8">
        Showing {filteredData.length} destinations
      </p>

      {/* Responsive Grid Layout */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredData.map((destination) => (
            <DestinationCard key={destination._id} data={destination} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <p className="text-gray-500">No destinations found matching your criteria.</p>
        </div>
      )}
    </>
  );
};

export default DestinationsList;
