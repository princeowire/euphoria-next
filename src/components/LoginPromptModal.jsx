// components/LoginPromptModal.jsx

import React from "react";
import { useRouter } from "next/navigation";

const LoginPromptModal = ({ onClose }) => {
  const router = useRouter();

  const handleLoginClick = () => {
    // Close the modal
    onClose();

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px]">
        <h2 className="text-xl font-semibold mb-4">You Need to Log In</h2>
        <p className="mb-4">Please log in to complete the payment process.</p>
        <div className="flex justify-between">
          <button
            onClick={handleLoginClick}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Log In
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPromptModal;
