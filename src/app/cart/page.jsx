'use client';

import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useCart } from '@/app/CartContext';
import Image from 'next/image';
import noCart from '../../../public/assets/no-cart.png';
import spin from '../../../public/assets/spinner.svg';

const CartPage = () => {
  const [user, setUser] = useState(null); // Track the logged-in user
  const [loading, setLoading] = useState(true); // Track the loading state
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Loading is complete once we know the auth state
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [auth]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full m-auto flex items-center justify-center h-[230px]"><Image src={spin} alt='loading...' /></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <p className="text-xl mb-4">You need to log in to view your cart.</p>
        <button className="px-6 bg-blue-500 text-white py-2 rounded-md">
          <a href="/login">Go to Login</a>
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      {cart.length === 0 ? (
        <div className="w-full m-auto flex flex-col items-center justify-center p-5">
          <Image src={noCart} alt="no items" />

          <div className="text-center py-6">
            <h3 className="p-2 text-2xl">Your cart is empty and sad :(</h3>
            <p className="text-sm text-gray-500">
              Add something to make it happy!
            </p>
          </div>

          <button className="px-6 bg-eu-purple text-white py-1 rounded-md">
            <a href="/products">Continue Shopping</a>
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image?.url || '/default-image.png'}
                  alt={item.name}
                  width={80}
                  height={100}
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => increaseQuantity(item.slug.current)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => decreaseQuantity(item.slug.current)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  -
                </button>

                <button
                  onClick={() => removeFromCart(item.slug.current)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
