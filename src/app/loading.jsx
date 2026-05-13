import { BiCompass } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Outer Spinning Ring */}
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-100 border-t-[#14A0B5]"></div>

        {/* Inner Pulsing Icon */}
        <div className="absolute text-[#14A0B5]">
          <BiCompass className="h-8 w-8 animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-5 animate-pulse text-sm font-medium tracking-wide text-gray-500 uppercase">
        Exploring destinations...
      </p>
    </div>
  );
};

export default Loading;
