import navLogo from "@/assets/Wanderlast.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. Logo & Social Media */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src={navLogo}
                alt="Wanderlust"
                width={150}
                height={50}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Explore breathtaking destinations and create unforgettable
              memories with our curated travel experiences.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition-all"
              >
                <FaFacebookF className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition-all"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition-all"
              >
                <FaYoutube className="text-white w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 2. Destinations */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Destinations</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-500 transition">
                  Maldives
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-500 transition">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-500 transition">
                  Las Vegas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-500 transition">
                  Toronto
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-cyan-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-cyan-500 transition"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/my-booking"
                  className="hover:text-cyan-500 transition"
                >
                  My Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Join Our Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to get latest travel updates and offers.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-cyan-500 transition text-sm"
              />
              <button className="bg-cyan-500 text-white font-bold py-3 uppercase hover:bg-cyan-600 transition tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Wanderlust. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
