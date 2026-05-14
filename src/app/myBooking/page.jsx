import MyBookingCard from "@/components/home/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
    cache: "no-store",
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
        {bookings.map((booking) => (
          <MyBookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

// Separate component for each card

export default MyBooking;
