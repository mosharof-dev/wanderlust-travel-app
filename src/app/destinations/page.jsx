import DestinationCard from "@/components/home/DestinationCard";

const Destinations = async () => {
  // Fetch data
  const res = await fetch("http://localhost:5000/destinations", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-3 tracking-tight">
          Explore All Destinations
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 border-y border-gray-200 py-4 mb-6">
        <div className="flex-1 md:border-r border-gray-200 pr-4">
          <select className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none">
            <option>CATEGORY</option>
            <option>Cultural</option>
            <option>Beach</option>
          </select>
        </div>
        <div className="flex-1 md:border-r border-gray-200 pr-4">
          <select className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none">
            <option>PRICE RANGE</option>
            <option>Low to High</option>
          </select>
        </div>
        <div className="flex-1">
          <select className="w-full bg-transparent focus:outline-none text-gray-500 text-sm uppercase tracking-wide cursor-pointer appearance-none">
            <option>SORT BY</option>
            <option>Popularity</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-500 text-sm mb-8">
        Showing {data?.length || 0} destinations
      </p>

      {/* Responsive Grid Layout */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {data?.map((destination) => (
          <DestinationCard key={destination._id} data={destination} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
