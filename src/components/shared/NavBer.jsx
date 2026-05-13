"use client";
import navLogo from "@/assets/Wanderlast.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBer = () => {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user, "user data");

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };
  // Active Link logic
  const linkStyle = (path) =>
    `font-medium transition-all ${
      pathname === path
        ? "text-[#15A1BF] border-b-2 border-[#15A1BF] pb-1"
        : "text-gray-600 hover:text-[#15A1BF]"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
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
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          {isPending ? (
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full"></div>
          ) : user ? (
            <>
              <Link
                href="/profile"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="relative w-10 h-10 rounded-full border-2 border-[#15A1BF] overflow-hidden shrink-0 shadow-sm"
                  title={user?.name || "Profile"}
                >
                  {user?.image ? (
                    <Image
                      src={user.image}
                      fill
                      alt="User Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#15A1BF] flex items-center justify-center text-white font-bold text-lg">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                <span className="font-semibold text-gray-800 text-base hidden sm:block">
                  {user?.name || "Profile"}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-2 rounded-full border border-[#15A1BF] text-[#15A1BF] font-medium hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="bg-[#15A1BF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* 4. Mobile Menu Button (Only Visible on Mobile) */}

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
            {isPending ? (
              <li className="flex justify-center py-2">
                <span className="loading loading-spinner loading-md text-[#15A1BF]"></span>
              </li>
            ) : user ? (
              <>
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 py-2"
                  >
                    <div className="relative w-10 h-10 rounded-full border-2 border-[#15A1BF] overflow-hidden shrink-0">
                      {user?.image ? (
                        <Image
                          src={user.image}
                          alt="User"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#15A1BF] flex items-center justify-center text-white font-bold text-base">
                          {user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800">
                        {user?.name || "Profile"}
                      </span>
                      <span className="text-xs text-gray-500 font-normal">
                        View Profile
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-6 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-50 transition-colors flex justify-center w-full mt-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="px-6 py-2 rounded-full border border-[#15A1BF] text-[#15A1BF] font-medium hover:bg-blue-50 transition-colors flex justify-center mt-2"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="bg-[#15A1BF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium flex justify-center mt-2"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
