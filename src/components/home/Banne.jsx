import bannerBg from "@/assets/Banner.png";

const Banner = () => {
  return (
    <div
      className="w-full min-h-150 lg:h-187 bg-cover bg-center flex flex-col justify-between items-center py-10 px-4 relative"
      style={{ backgroundImage: `url(${bannerBg.src})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex-1"></div>
      {/* Main Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 flex-1 w-full mt-12">
        <h1 className="text-white text-5xl md:text-[80px] font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-white text-lg md:text-2xl max-w-3xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <button className="uppercase bg-cyan-500 text-white px-10 py-4 font-semibold text-sm hover:bg-cyan-600 transition">
            Explore Now
          </button>

          <button className="uppercase bg-white/30 text-white px-10 py-4 font-semibold text-sm hover:bg-white/40 backdrop-blur-sm transition">
            View Destination
          </button>
        </div>
      </div>
      {/* Bottom Search Bar t */}
      <div className="relative z-10 w-full container px-4 sm:px-6 lg:px-8  mt-12">
        <div className="bg-white/20 backdrop-blur-md flex flex-col lg:flex-row items-center border border-white/20 shadow-lg">
          <div className="flex flex-col lg:flex-row w-full lg:flex-1 h-full items-center">
            {/* Location */}
            <div className="flex-1 w-full flex flex-col justify-center px-8 py-5 lg:h-24 text-left">
              <span className="text-white/90 text-sm font-medium mb-1">
                Location
              </span>
              <span className="text-white font-bold text-base tracking-wide">
                Address, City or Zip
              </span>
            </div>

            {/* Separator */}
            <div className="hidden lg:block w-1 h-25 bg-white/40"></div>
            <div className="block lg:hidden w-full h-px bg-white/20"></div>

            {/* Date/Duration */}
            <div className="flex-1 w-full flex flex-col justify-center px-8 py-5 lg:h-24 text-left">
              <span className="text-white/90 text-sm font-medium mb-1">
                Date/Duration
              </span>
              <span className="text-white font-bold text-base tracking-wide">
                Anytime/3 Days
              </span>
            </div>

            {/* Separator */}
            <div className="hidden lg:block w-1 h-25 bg-white/40"></div>
            <div className="block lg:hidden w-full h-px bg-white/20"></div>

            {/* Budget */}
            <div className="flex-1 w-full flex flex-col justify-center px-8 py-5 lg:h-24 text-left">
              <span className="text-white/90 text-sm font-medium mb-1">
                Budget
              </span>
              <span className="text-white font-bold text-base tracking-wide">
                $0-$3000
              </span>
            </div>

            {/* Separator */}
            <div className="hidden lg:block w-1 h-25 bg-white/40"></div>
            <div className="block lg:hidden w-full h-px bg-white/20"></div>

            {/* People */}
            <div className="flex-1 w-full flex flex-col justify-center px-8 py-5 lg:h-24 text-left">
              <span className="text-white/90 text-sm font-medium mb-1">
                People
              </span>
              <span className="text-white font-bold text-base tracking-wide">
                5-10
              </span>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 text-white font-bold text-lg px-12 py-5 lg:py-0 w-full lg:w-auto lg:h-24 hover:bg-cyan-600 transition flex items-center justify-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
