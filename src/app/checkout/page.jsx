"use client";
import React, { useState } from "react";
import { useCart } from "@/app/CartContext";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import PaystackButton from "@/components/payment";
// import { db, collection, addDoc } from "@/lib/firebase/firebase"; 
import { db, collection, addDoc } from "@/lib/firebase/firebase";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const shippingFee = 5.0;
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    alert("Order Placed Successfully!");
  };

  const handlePaymentSuccess = async (response) => {
    console.log("Payment Successful!", response);
    alert("Order Placed Successfully! Payment Reference: " + response.reference);

    try {
      // Save order in Firestore
      const orderRef = collection(db, "orders");
      await addDoc(orderRef, {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
        cartItems: cart,
        totalAmount: grandTotal,
        paymentReference: response.reference,
        status: "Paid",
        createdAt: new Date(),
      });

      console.log("Order saved in Firestore!");

      // Clear the cart after successful payment
      clearCart();
    } catch (error) {
      console.error("Error saving order:", error);
      alert("An error occurred while processing your order.");
    }
  };

  return (
    <div className="px-16 max-sm:px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex gap-3 w-full">
        {/* Billing Details */}
        <form className=" p-4 rounded-lg w-4/6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border w-full p-2 rounded mb-3"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="bg-gray-200 p-2 rounded-md">
              <label className="flex items-center gap-2"><input type="radio" name="same"/> <p>same as biling</p></label>
              <hr className="bg-black"/>
              <label className="flex items-center gap-2"><input type="radio" name="same"/> <p>Use a diffrent address</p> </label>
            </div>
          </div>
        </form>

        {/* Order Summary */}
        <div className="border p-4 rounded-lg w-2/6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image ? urlFor(item.image) : "/default-image.png"}
                    alt={item.name || "Product Image"}
                    width={50}
                    height={60}
                  />
                  <div>
                    <p className="font-medium text-sm">
                      {item.name} × {item.quantity}
                    </p>
                  </div>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
          <p className="mt-4">Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping Fee: ${shippingFee.toFixed(2)}</p>
          <p className="font-bold text-lg mt-6">
            Total: ${grandTotal.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        className="w-full mt-6 bg-eu-purple text-white py-2 rounded"
        onClick={handleCheckout}
      >
        Place Order
      </button>

      <PaystackButton
        email={formData.email}
        amount={grandTotal}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CheckoutPage;
