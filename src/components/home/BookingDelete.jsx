"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiXCircle } from "react-icons/bi";
import { toast } from "sonner";

const BookingDelete = ({ data }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    redirect("/myBooking");
  };

  return (
    <AlertDialog>
      <Button className="flex-1 sm:flex-none flex justify-center items-center bg-red-100 gap-1.5 px-6 py-2 text-sm font-medium text-red-500 border border-red-200 rounded-md hover:bg-red-50 transition cursor-pointer">
        <BiXCircle size={16} />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                BookingDelete Travel Package
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete{" "}
                <strong>{data.destinationName}</strong> This action cannot be
                undone and will permanently remove this travel package from the
                system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button className="rounded" slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded"
                slot="close"
                variant="danger"
              >
                Booking Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingDelete;
