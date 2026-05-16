"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BsFileCheck, BsFileImage, BsFileX } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { RiSaveLine } from "react-icons/ri";

const EditProfileModal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [imageUrl, setImageUrl] = useState(user?.image || "");
  const router = useRouter();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    // Reset to original values on cancel
    setName(user?.name || "");
    setImageUrl(user?.image || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
        image: imageUrl.trim() || null,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile.");
        return;
      }

      toast.success("Profile updated successfully!");
      setIsOpen(false);
      // Refresh the page to show updated data from server
      router.refresh();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="edit-profile-btn"
        onClick={handleOpen}
        className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-medium py-2.5 px-4 rounded transition-colors flex justify-center items-center gap-2 text-sm"
      >
        <CiEdit className="w-5 h-5" />
        Edit Profile
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Edit Profile
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Update your name and profile photo
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <BsFileX className="w-5 h-5" />
              </button>
            </div>

            {/* Preview Avatar */}
            <div className="flex justify-center pt-6 pb-2">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md flex items-center justify-center">
                {imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="text-3xl font-light text-gray-400">
                    {name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                )}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                  <FaCircleUser className="w-3.5 h-3.5" />
                  Full Name
                </label>
                <input
                  id="edit-profile-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40 focus:border-[#14b8a6] transition"
                />
              </div>

              {/* Image URL Field */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                  <BsFileImage className="w-3.5 h-3.5" />
                  Profile Photo URL
                </label>
                <input
                  id="edit-profile-image"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/your-photo.jpg"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40 focus:border-[#14b8a6] transition"
                />
                <p className="text-xs text-gray-400">
                  Paste a direct image URL to update your avatar.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="edit-profile-save"
                  disabled={isLoading}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#14b8a6] hover:bg-[#0d9488] text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <RiSaveLine className="w-5 h-5" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
