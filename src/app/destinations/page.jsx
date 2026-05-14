import DestinationsList from "@/components/home/DestinationsList";

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

      <DestinationsList initialData={data} />
    </section>
  );
};

export default Destinations;
