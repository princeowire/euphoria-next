'use client';
import React from 'react';
import { useCart } from '@/app/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <div className="w-full m-auto flex items-center justify-center h-[230px]">Your cart is empty!</div>;
  }

  return (
    <div className="px-8 py-4">
      <h2 className="text-2xl font-extrabold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.slug} className="flex justify-between items-center mb-4">
          <p>{item.name}</p>
          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item.slug, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.slug, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.slug)} className="text-red-500">Remove</button>
          </div>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
