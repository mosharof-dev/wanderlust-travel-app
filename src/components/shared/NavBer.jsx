"use client";
import navLogo from "@/assets/Wanderlast.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBer = () => {
  const pathname = usePathname();

  // Active Link logic
  const linkStyle = (path) =>
    `font-medium transition-all ${
      pathname === path
        ? "text-[#15A1BF] border-b-2 border-[#15A1BF] pb-1"
        : "text-gray-600 hover:text-[#15A1BF]"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Wrapping with container and responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
        {/* 1. Desktop Left Links (Hidden on Mobile) */}
        {/* flex-1 logic logo-ke center-e rakhte help korbe */}
        <ul className="hidden lg:flex items-center gap-8 flex-1">
          <li>
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/destinations" className={linkStyle("/destinations")}>
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/my-booking" className={linkStyle("/my-booking")}>
              My Booking
            </Link>
          </li>
          <li>
            <Link href="/admin" className={linkStyle("/admin")}>
              Admin
            </Link>
          </li>
        </ul>

        {/* 2. Logo (Desktop-e Center, Mobile-e Left) */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src={navLogo}
              alt="Logo"
              width={120}
              height={40}
              priority
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* 3. Desktop Right Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          <Link href="/profile" className={linkStyle("/profile")}>
            Profile
          </Link>
          <Link
            href="/login"
            className={`px-6 py-2 rounded-full border  border-[#15A1BF] text-[#15A1BF] font-medium hover:bg-blue-50 transition-colors `}
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#15A1BF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* 4. Mobile Menu Button (Only Visible on Mobile) */}
        {/* justify-between er karone eta ekbare Right-e thakbe */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost  px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow-xl bg-base-100 rounded-box w-50 gap-4 font-medium"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/my-booking">My Booking</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            <div className="divider my-0"></div>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`px-6 py-2 rounded-full border border-[#15A1BF] text-[#15A1BF] font-medium hover:bg-blue-50 transition-colors `}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="bg-[#15A1BF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
