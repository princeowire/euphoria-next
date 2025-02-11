"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/app/CartContext";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import PaystackButton from "@/components/payment";
import { toast } from "react-hot-toast";
import OrderSucessful from "@/components/order-sucessful";
import { useRouter } from "next/navigation"; // Use useRouter from next/navigation

const builder = imageUrlBuilder(client);

const redirectToLogin = () => {
  // Save the current page URL to localStorage
  localStorage.setItem('redirectAfterLogin', window.location.pathname);
  router.push('/login');
};

function urlFor(source) {
  return builder.image(source).url();
}

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [orderSuccess, setOrderSuccess] = useState(false); // State to track order success message
  const shippingFee = 5.0;
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const grandTotal = subtotal + shippingFee;

  const [isClient, setIsClient] = useState(false); // Track if component is rendered on client

  const router = useRouter(); // Now this will use the correct useRouter for the App Router

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePaymentSuccess = (response) => {
    toast.success(`Order Placed Successfully! Reference: ${response.reference}`);
    try {
      const newOrder = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
        cartItems: cart,
        totalAmount: grandTotal,
        paymentReference: response.reference,
        status: "Paid",
        createdAt: new Date().toISOString(),
      };

      // Save order to local storage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      clearCart();

      // Show success message and hide after 5 seconds
      setOrderSuccess(true);
      setTimeout(() => {
        setOrderSuccess(false);
        if (isClient) {
          router.push("/"); // Redirect after 5 seconds
        }
      }, 5000); // Hide after 5 seconds
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("An error occurred while processing your order.");
    }
  };

  useEffect(() => {
    // Set client-side rendering flag to true after the first render
    setIsClient(true);

    // Fetch orders from local storage
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="px-4 sm:px-8 py-8 max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {orderSuccess && (
        <div className="fixed top-0 left-0">
          <OrderSucessful />
        </div>
      )}

      <div className="flex flex-wrap gap-[1%]">
        <form className="rounded-lg w-[49%] max-md:w-full">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          {["name", "email", "address", "city", "zip"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
          ))}
        </form>

        <div className="border p-4 rounded-lg w-[49%] max-md:w-full mt-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex py-2 border-b">
                <div className="flex gap-2 w-full">
                  <Image
                    src={item.image ? urlFor(item.image) : "/default-image.png"}
                    alt={item.name || "Product Image"}
                    width={50}
                    height={60}
                  />
                  <p className="flex gap-4 justify-between w-full">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <p className="mt-4">Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping Fee: ${shippingFee.toFixed(2)}</p>
          <p className="font-bold text-lg mt-6">Total: ${grandTotal.toFixed(2)}</p>
        </div>
      </div>

      <PaystackButton
        email={formData.email}
        name={formData.name}
        amount={grandTotal}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CheckoutPage;
