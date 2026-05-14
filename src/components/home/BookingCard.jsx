"use client";
import { authClient } from "@/lib/auth-client";
import { Input, Label, TextField } from "@heroui/react";
import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { toast } from "sonner";

const BookingCard = ({ data }) => {
  const [dateValue, setValue] = useState(null);
  //   console.log(value, "Data");
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  //   console.log(user, "user data");

  const handleBooking = async () => {
    const bookingData = {
      userId: user.id,
      name: user.name,
      image: user.image,
      email: user.email,
      destinationId: data._id,
      destinationName: data.destinationName,
      country: data.country,
      price: data.price,
      imageUrl: data.imageUrl,
      departureDate: new Date(dateValue),
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const result = await res.json();
    console.log(result);
    toast.success(`🚀 Your ${data.destinationName} package is booked!`);
  };

  return (
    <div className="border border-gray-100 bg-white rounded-lg p-6 shadow-sm sticky top-8">
      <p className="text-sm text-gray-500 mb-1">Starting from</p>
      <div className="flex flex-col mb-6">
        <span className="text-4xl font-semibold text-[#14b8a6]">
          ${data.price}
        </span>
        <span className="text-xs text-gray-400 mt-1">per person</span>
      </div>

      {/* Date Picker Input Placeholder */}
      <div className="bg-gray-50 p-3 rounded mb-6 text-sm text-gray-700 font-medium border border-gray-100">
        <TextField
          onChange={setValue}
          name="departureDate"
          type="date"
          isRequired
        >
          <Label className="text-sm font-semibold text-gray-700">
            Departure Date
          </Label>
          <Input
            type="date"
            className="rounded-md bg-gray-50 border-transparent"
          />
        </TextField>
      </div>

      <button
        onClick={handleBooking}
        className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-medium py-3 rounded transition-colors flex justify-center items-center gap-2 mb-6"
      >
        Book Now
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      {/* Perks */}
      <div className="flex flex-col gap-3">
        {[
          "Free cancellation up to 7 days",
          "Travel insurance included",
          "24/7 customer support",
        ].map((perk, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <FaCheck className="w-4 h-4 text-green-500 shrink-0" />
            {perk}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
