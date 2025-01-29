"use client";
import { useCart } from "@/app/CartContext";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) {
      toast.error("Error: Product data is missing.");
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <button
      className="w-36 bg-eu-purple text-white px-3 py-1 rounded-md"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
