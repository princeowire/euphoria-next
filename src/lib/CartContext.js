'use client';

import { createContext, useContext, useState } from 'react';

// Create a Context
const CartContext = createContext();

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);

// Cart Provider to wrap the app
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
