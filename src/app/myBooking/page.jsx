import MyBookingCard from "@/components/home/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const tokenResponse = await auth.api.getToken({
    headers: await headers(),
  });
  const tokenValue = typeof tokenResponse === "object" ? tokenResponse?.token : tokenResponse;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${tokenValue}`,
    },
  });

  const bookings = await res.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">My Bookings</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Booking List */}
      <div className="flex flex-col gap-4">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <MyBookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <div className="text-gray-400 mb-4 text-6xl">📭</div>
            <h2 className="text-xl font-medium text-gray-900">
              No Bookings Found
            </h2>
            <p className="text-gray-500 mt-2 text-center max-w-xs">
              You haven&apos;t booked any trips yet. Start your adventure today!
            </p>
            <Link
              href="/destinations"
              className="mt-6 px-6 py-2 bg-[#38bdf8] text-white rounded-lg font-medium hover:bg-[#0284c7] transition-colors"
            >
              Browse Destinations
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// Separate component for each card

export default MyBooking;
