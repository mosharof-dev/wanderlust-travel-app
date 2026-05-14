import Image from "next/image";
import { BiHash, BiXCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { LiaCalendarDaySolid } from "react-icons/lia";
import BookingDelete from "./BookingDelete";

const MyBookingCard = ({ booking }) => {
  const { _id, destinationName, price, imageUrl, departureDate, status } =
    booking;

  const formattedDate = new Date(departureDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const shortId = _id.slice(-6);

  const isConfirmed = status === "confirmed" || !status;

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-xl p-4 shadow-sm w-full">
      {/* Image */}
      <div className="w-full md:w-72 h-52 shrink-0">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={400}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-1 w-full py-1">
        {/* Status Badge */}
        <span
          className={`inline-flex w-max items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
            isConfirmed
              ? "bg-green-50 text-green-600"
              : "bg-orange-50 text-orange-500"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isConfirmed ? "bg-green-500" : "bg-orange-500"
            }`}
          />
          {isConfirmed ? "Confirmed" : "Pending"}
        </span>

        {/* Destination Name */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {destinationName}
        </h2>

        {/* Date & ID */}
        <div className="flex flex-col gap-2 mb-4">
          <span className="flex items-center gap-2 text-gray-500 text-sm">
            <LiaCalendarDaySolid size={16} />
            Departure: {formattedDate}
          </span>
          <span className="flex items-center gap-2 text-gray-500 text-sm">
            <BiHash size={16} />
            Booking ID: {shortId}
          </span>
        </div>

        {/* Price & Action Buttons (Bottom Row) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-auto gap-4">
          <p className="text-teal-500 font-bold text-2xl">${price}</p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Cancel & View Buttons */}
            {/* Cancel Button */}
            <BookingDelete data={booking} />

            {/* View Button */}
            <button className="flex-1 sm:flex-none flex justify-center items-center gap-1.5 px-6 py-2 text-sm font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600 transition cursor-pointer">
              <BsEye size={16} />
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
