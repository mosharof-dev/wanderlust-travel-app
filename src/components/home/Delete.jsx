"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";

const Delete = ({ data }) => {
  const handleDelete = async () => {
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    redirect("/destinations");
    console.log(result);
  };

  return (
    <AlertDialog>
      <Button
        className="flex items-center gap-2 px-4 py-2 border border-red-200  rounded text-sm font-medium hover:bg-red-50 hover:text-red-700 transition-colors"
        variant="danger"
      >
        <RiDeleteBin5Line className="w-4 h-4" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Travel Package</AlertDialog.Heading>
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
                Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default Delete;
