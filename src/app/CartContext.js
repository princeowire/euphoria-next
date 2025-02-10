'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, doc, getDoc, setDoc } from "@/lib/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  // ✅ Load cart from localStorage and Firebase if logged in
  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth here
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        await fetchCart(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    return () => unsubscribe();
  }, []);

  // ✅ Fetch Cart from Firestore if user is logged in
  const fetchCart = async (uid) => {
    if (!uid) return;
  
    try {
      const cartRef = doc(db, "carts", uid);
      const cartSnap = await getDoc(cartRef);
      
      if (cartSnap.exists()) {
        setCart(cartSnap.data().items);
        localStorage.setItem('cart', JSON.stringify(cartSnap.data().items));
      }
    } catch (error) {
      console.error("Unexpected error while fetching cart:", error);
    }
  };

  // ✅ Save Cart to Firestore if user is logged in, otherwise just localStorage
  const saveCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);

    if (userId) {
      const cartRef = doc(db, "carts", userId);
      setDoc(cartRef, { items: updatedCart }, { merge: true }).catch(error => 
        console.error("Error saving cart to Firestore:", error)
      );
    }
  };

  // ✅ Add to Cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.slug.current === item.slug.current);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(cartItem =>
        cartItem.slug.current === item.slug.current
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    saveCart(updatedCart);
  };

  // ✅ Remove from Cart
  const removeFromCart = (slug) => {
    const updatedCart = cart.filter(item => item.slug.current !== slug);
    saveCart(updatedCart);
  };

  // ✅ Increase Quantity
  const increaseQuantity = (slug) => {
    const updatedCart = cart.map(item =>
      item.slug.current === slug
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    saveCart(updatedCart);
  };

  // ✅ Decrease Quantity
  const decreaseQuantity = (slug) => {
    const updatedCart = cart.map(item =>
      item.slug.current === slug
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    saveCart(updatedCart);
  };

  // ✅ Get Total Items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Clear Cart
  const clearCart = async () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));

    if (userId) {
      try {
        const cartRef = doc(db, "carts", userId);
        await setDoc(cartRef, { items: [] }, { merge: true });
      } catch (error) {
        console.error("Error clearing cart from Firestore:", error);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
