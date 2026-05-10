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
import React from "react";
import { RiDeleteBin5Line, RiSaveLine } from "react-icons/ri";

const AdminDashboard = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);
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
