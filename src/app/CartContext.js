'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, doc, getDoc, setDoc } from "@/lib/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  // ✅ Fetch user's cart when logged in
  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth here
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        await fetchCart(user.uid);
      } else {
        setUserId(null);
        setCart([]);
      }
    });

    // Check if there's a cart in localStorage on initial load
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    return () => unsubscribe();
  }, []);

  // ✅ Fetch Cart from Firestore
  const fetchCart = async (uid) => {
    if (!uid) return;
    const cartRef = doc(db, "carts", uid);
    const cartSnap = await getDoc(cartRef);
    if (cartSnap.exists()) {
      setCart(cartSnap.data().items);
      localStorage.setItem('cart', JSON.stringify(cartSnap.data().items)); // Save cart to localStorage
    } else {
      setCart([]);
      localStorage.setItem('cart', JSON.stringify([])); // Save empty cart to localStorage
    }
  };

  // ✅ Save Cart to Firestore
  const saveCartToFirestore = async (updatedCart) => {
    if (!userId) return;

    // Save cart to localStorage immediately
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Then update Firestore afterward
    const cartRef = doc(db, "carts", userId);
    await setDoc(cartRef, { items: updatedCart }, { merge: true });
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

    setCart(updatedCart);
    saveCartToFirestore(updatedCart); // First update localStorage, then Firestore
  };

  // ✅ Remove from Cart
  const removeFromCart = (slug) => {
    const updatedCart = cart.filter(item => item.slug.current !== slug);
    setCart(updatedCart);
    saveCartToFirestore(updatedCart); // First update localStorage, then Firestore
  };

  // ✅ Increase Quantity
  const increaseQuantity = (slug) => {
    const updatedCart = cart.map(item =>
      item.slug.current === slug
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    saveCartToFirestore(updatedCart); // First update localStorage, then Firestore
  };

  // ✅ Decrease Quantity
  const decreaseQuantity = (slug) => {
    const updatedCart = cart.map(item =>
      item.slug.current === slug
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    setCart(updatedCart);
    saveCartToFirestore(updatedCart); // First update localStorage, then Firestore
  };

  // ✅ Get Total Items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Clear Cart
  const clearCart = async () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([])); // Clear localStorage immediately

    if (userId) {
      const cartRef = doc(db, "carts", userId);
      await setDoc(cartRef, { items: [] }, { merge: true }); // Update Firestore afterward
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
