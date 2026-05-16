"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  TextArea,
  ListBox,
} from "@heroui/react";

import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line, RiSaveLine } from "react-icons/ri";

const EditModal = ({ data }) => {
  const { _id } = data;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());
    // console.log("Form data:", data);
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <CiEdit className="w-4 h-4" />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          {/* FIX APPLIED HERE: Added max-h-[90vh] and overflow-y-auto */}
          <Modal.Dialog className="max-w-2xl w-full bg-white p-0 overflow-y-auto max-h-[90vh] shadow-2xl rounded-md relative">
            <Modal.CloseTrigger className="absolute right-5 top-5 text-gray-400 hover:text-gray-700 transition-colors z-10" />

            <div className="px-8 pt-8 pb-6">
              <h2 className="text-2xl font-normal text-gray-900 mb-1">
                Update Travel Package
              </h2>
              <p className="text-sm text-gray-500">
                Make changes to the travel package details below
              </p>
            </div>

            {/* Form Body */}
            <div className="px-8 pb-8">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Destination Name */}
                <div className="w-full">
                  <TextField
                    name="destinationName"
                    defaultValue={data.destinationName}
                    isRequired
                  >
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {/* Country */}
                  <TextField
                    name="country"
                    defaultValue={data.country}
                    isRequired
                  >
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
                      defaultValue={data.category}
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
                  <TextField
                    defaultValue={data.price}
                    name="price"
                    type="number"
                    className="w-full"
                    isRequired
                  >
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
                  <TextField
                    name="duration"
                    defaultValue={data.duration}
                    className="w-full"
                    isRequired
                  >
                    <Label className="text-sm font-semibold text-gray-700">
                      Duration
                    </Label>
                    <Input
                      placeholder="e.g., 7 Days/6 Nights"
                      className="rounded-md bg-gray-50 border-transparent"
                    />
                    <FieldError />
                  </TextField>
                </div>

                {/* Departure Date */}
                <div>
                  <TextField
                    name="departureDate"
                    defaultValue={data.departureDate}
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
                    <FieldError />
                  </TextField>
                </div>

                {/* Image URL */}
                <div>
                  <TextField
                    name="imageUrl"
                    defaultValue={data.imageUrl}
                    className="w-full"
                    isRequired
                  >
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
                <div className="">
                  <TextField
                    name="description"
                    defaultValue={data.description}
                    className="w-full"
                    isRequired
                  >
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

                {/* Footer Buttons aligned to the right */}
                <div className="flex justify-end gap-4 pt-6 mt-4">
                  <Button
                    type="reset"
                    className="flex items-center gap-2 border border-red-400 text-red-500 bg-transparent rounded-sm px-6 py-2 text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                    Cancel
                  </Button>
                  <Button
                    slot="close"
                    type="submit"
                    className="flex items-center gap-2 bg-[#17a2b8] text-white rounded-sm px-6 py-2 text-sm font-medium hover:bg-[#138496] transition-colors"
                  >
                    <RiSaveLine className="text-lg" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
