"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  TextArea,
  ListBox,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { RiDeleteBin5Line, RiSaveLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const AdminDashboard = () => {
  // Session 
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Loading 
  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading...</p>
        </div>
      </div>
    );
  }


  if (!user || user.role !== "admin") {
  return (
    <div className=" py-20 bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-11a4 4 0 100 8 4 4 0 000-8zm0 0V3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Access Denied!
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-2 leading-relaxed">
          This page is only accessible to <span className="font-semibold text-cyan-600">Admins</span>.
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          If you need admin privileges, please contact support.
        </p>

        {/* Contact Info */}
        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-cyan-700 font-medium">📧 Contact Us</p>
          <p className="text-cyan-600 font-semibold mt-1">
            mosharof.dev@gmail.com
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    redirect("/destinations");
    console.log(result);
  };
  return (
    <div className=" min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Add New Travel Package
        </h1>

        {/* Form Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label className="text-sm font-semibold text-gray-700">
                    Destination Name
                  </Label>
                  <Input
                    placeholder="Bali Paradise"
                    className="rounded-md bg-gray-50 border-transparent"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label className="text-sm font-semibold text-gray-700">
                  Country
                </Label>
                <Input
                  placeholder="Indonesia"
                  className="rounded-md bg-gray-50 border-transparent"
                />
                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className="text-sm font-semibold text-gray-700">
                    Category
                  </Label>
                  <Select.Trigger className="rounded-md bg-gray-50 border-transparent">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label className="text-sm font-semibold text-gray-700">
                  Price (USD)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g., 1299"
                  className="rounded-md bg-gray-50 border-transparent"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label className="text-sm font-semibold text-gray-700">
                  Duration
                </Label>
                <Input
                  placeholder="e.g., 7 Days/6 Nights"
                  className="rounded-md bg-gray-50 border-transparent"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label className="text-sm font-semibold text-gray-700">
                    Departure Date
                  </Label>
                  <Input
                    type="date"
                    className="rounded-md bg-gray-50 border-transparent"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className="text-sm font-semibold text-gray-700">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    className="rounded-md bg-gray-50 border-transparent"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className="text-sm font-semibold text-gray-700">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-md bg-gray-50 border-transparent min-h-30"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>
            {/* Buttons aligned to the right */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100 mt-6">
              <Button
                type="reset"
                variant="bordered"
                className="border-red-400 bg-red-100 text-red-500  rounded-sm px-6 hover:bg-red-50"
              >
                <RiDeleteBin5Line className="mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-cyan-500 text-white rounded-sm px-6 hover:bg-cyan-600"
              >
                <RiSaveLine className="mr-2" />
                Add Travel Package
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
