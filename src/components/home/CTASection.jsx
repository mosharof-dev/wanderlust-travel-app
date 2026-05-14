import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import ctaBg from "@/assets/CTA.png";

const CTASection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaBg}
          alt="Travel Destination Background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight drop-shadow-md">
          Ready To Start Your Journey?
        </h2>
        <p className="text-gray-200 text-sm md:text-base mb-10 max-w-2xl mx-auto drop-shadow-md">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium text-sm flex items-center gap-2 uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
        >
          BOOK YOUR TRIP TODAY
          <GoArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
