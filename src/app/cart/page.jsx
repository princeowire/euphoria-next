'use client';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useCart } from '@/app/CartContext';
import Image from 'next/image';
import noCart from '../../../public/assets/no-cart.png';
import spin from '../../../public/assets/spinner.svg';
import deleteIco from '../../../public/assets/Delete icon.png';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}


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

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Set a fixed shipping fee
  const shippingFee = 5.00;

  // Calculate grand total
  const calculateGrandTotal = () => {
    return calculateSubtotal() + shippingFee;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full m-auto flex items-center justify-center h-[230px]">
          <Image src={spin} alt="loading..." />
        </div>
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
    <div>
        {cart.length === 0 ? (null) : (<div className='w-full bg-off-black py-4 px-16 max-sm:px-4 text-white'>
         <div className='p-4  grid grid-cols-7'>
            <p className='col-span-3'>Product Details</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p className='flex justify-center items-center'>Remove</p>
         </div>
        </div>)}
      <div className="px-16 max-sm:px-4">

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
          <ul className="py-4">
            {cart.map((item, index) => (
              <div key={index}>

                <li
                  className="grid grid-cols-7 items-center justify-between p-4 border rounded-lg"
                >
                  {/* Image & Name Section - Takes More Space */}
                  <div className="flex items-center space-x-4 col-span-3">
                    <Image
                      src={item.image ? urlFor(item.image) : "/default-image.png"}
                      alt={item.name}
                      width={80}
                      height={100}
                    />
                    {console.log("Item Image:", item.image)}
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="col-span-1">
                    ${(item.price).toFixed(2)}
                  </p>

                  {/* Quantity */}
                  <p className="col-span-1">
                 
                    <button
                      onClick={() => decreaseQuantity(item.slug.current)}
                      className="p-2"
                    >
                      -
                    </button>

                    <span className="w-6">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.slug.current)}
                      className="p-2"
                    >
                      +
                    </button>

                  </p>
                  {/* sub total */}
                  <p className="col-span-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Buttons Section */}
                  <div className="flex items-center justify-center col-span-1">
                    <button
                      onClick={() => removeFromCart(item.slug.current)}
                      className=""
                    >
                      <Image alt='delete' src={deleteIco} />
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-[#bcbdbe5a] py-5 px-16 max-sm:px-4 flex justify-between max-md:justify-center flex-wrap gap-6">
        <div className="flex flex-col gap-2 max-w-96">
          <p className="text-2xl"> Discount Codes </p>
          <p className="text-off-gray text-sm">
            Enter your coupon code if you have one
          </p>
          <div className="flex border w-fit border-off-gray rounded-[10px]">
            <input
              className="py-1 px-2 w-44 outline-none rounded-l-[10px]"
              type="text"
            />
            <button className="px-2 rounded-r-[10px] bg-eu-purple text-white text-sm">
              Apply Coupon
            </button>
          </div>

          <a href="/shop" className='mt-6'>
            <button className="border border-off-gray text-off-gray w-fit max-md:w-full text-sm py-1 px-3 rounded-[10px]">
              Countinue Shopping
            </button>
          </a>
        </div>

        <div className="min-w-[300px] flex flex-col gap-4">
          <div>
            <p>Sub Total: ${calculateSubtotal().toFixed(2)}</p>
            <p className="mt-2">Shipping fee: ${shippingFee.toFixed(2)}</p>
          </div>
          <p className="font-semibold text-xl">
            Grand Total: ${calculateGrandTotal().toFixed(2)}
          </p>

          <a href="/checkout" className="mt-4">
            <button className="bg-eu-purple max-md:w-full text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
