"use client";
import React, { useEffect } from "react";

const PaystackButton = ({ email, amount, onSuccess, clearCart, name }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!email) {
      alert("Please enter your email before proceeding to payment.");
      return;
    }

    if (!name) {
      alert("Please enter your name before proceeding to payment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_6107d1f839ef7f6ce2b4eedd4c5ce71112246459", // Replace with your actual Paystack public key
      email,
      amount: amount * 100, // Paystack uses kobo, so multiply by 100
      currency: "NGN",
      callback: function (response) {
        alert("Payment Successful! Reference: " + response.reference);
        console.log("Payment successful", response);

        // Empty the cart after payment
        if (clearCart) {
          clearCart(); // Clear the cart by calling the passed function
        }

        // Call the function passed as a prop (onSuccess)
        if (onSuccess) {
          onSuccess(response); // Call the function passed as a prop
        }
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <button
      className="w-full mt-6 bg-green-600 text-white py-2 rounded"
      onClick={handlePayment}
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackButton;
