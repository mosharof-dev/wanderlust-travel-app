import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

import { SlLocationPin } from "react-icons/sl";
import { FaCamera, FaDollarSign, FaGlobe, FaPlane, FaArrowTrendUp } from "react-icons/fa6";
import EditProfileModal from "@/components/profile/EditProfileModal";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-medium text-gray-900">Not Logged In</h2>
        <p className="text-gray-500 mt-2">Please log in to view your profile.</p>
      </div>
    );
  }

  const tokenResponse = await auth.api.getToken({
    headers: await headers(),
  });
  const tokenValue =
    typeof tokenResponse === "object" ? tokenResponse?.token : tokenResponse;

  let bookings = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    if (res.ok) {
      bookings = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
  }

  // --- Calculate Statistics ---
  const totalBookings = bookings.length;

  const uniqueCountries = new Set();
  let totalSpent = 0;
  let upcomingTrips = 0;
  const today = new Date();

  bookings.forEach((booking) => {
    if (booking.country) uniqueCountries.add(booking.country);
    if (booking.price) totalSpent += Number(booking.price);
    if (booking.departureDate && new Date(booking.departureDate) > today) {
      upcomingTrips++;
    }
  });

  const countriesVisited = uniqueCountries.size;

  // Format date if available, otherwise fallback
  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Mar 2024";

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 lg: py-10 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-500 text-sm">
          Manage your account settings and travel preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar: Profile Card */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm flex flex-col items-center">
            {/* Avatar */}
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-sm relative">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "Profile"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-light">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
              <button className="absolute bottom-0 right-2 bg-[#14b8a6] text-white p-2 rounded-full border-2 border-white hover:bg-[#0d9488] transition-colors shadow-sm">
                <FaCamera className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* User Info */}
            <h2 className="text-xl font-medium text-gray-900 mb-1">
              {user?.name || "User Name"}
            </h2>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
              <SlLocationPin className="w-3.5 h-3.5" />
              <span>San Francisco, CA</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-4"></div>

            {/* Details */}
            <div className="w-full space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Member since</span>
                <span className="font-medium text-gray-900">{joinedDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Nationality</span>
                <span className="font-medium text-gray-900">United States</span>
              </div>
            </div>

            {/* Edit Profile Modal Trigger */}
            <EditProfileModal user={user} />
          </div>
        </div>

        {/* Right Content: Statistics */}
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Travel Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stat Card 1 */}
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Bookings</p>
                <p className="text-2xl font-medium text-gray-900">
                  {totalBookings}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-500 flex items-center justify-center">
                <FaPlane className="w-4 h-4" />
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Countries Visited</p>
                <p className="text-2xl font-medium text-gray-900">
                  {countriesVisited}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                <FaGlobe className="w-4 h-4" />
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Upcoming Trips</p>
                <p className="text-2xl font-medium text-gray-900">
                  {upcomingTrips}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center">
                <FaArrowTrendUp className="w-4 h-4" />
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                <p className="text-2xl font-medium text-gray-900">
                  ${totalSpent.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-fuchsia-50 text-fuchsia-500 flex items-center justify-center">
                <FaDollarSign className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;