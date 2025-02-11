'use client';

import React, { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity'; // Ensure urlFor is imported correctly
import Image from 'next/image';
import Link from 'next/link';
import spin from '../../../public/assets/spinner.svg';
import { useCart } from '../CartContext';
import { toast } from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Track authentication state
  const { addToCart } = useCart();

  // Fetch only Men's products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
*[_type == "product" && category->title == "men"] {
  name,
  slug {
    current
  },
  price,
  description,
  image
}

        `);
        console.log('Fetched men\'s products:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching men\'s products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Firebase auth listener to set user state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  // Show loading spinner while products are being fetched
  if (loading) {
    return (
      <div className="w-full m-auto flex items-center justify-center h-[230px]">
        <Image src={spin} alt="loading..." />
      </div>
    );
  }

  // If no products are available
  if (!products || products.length === 0) {
    return (
      <div className="w-full m-auto flex items-center justify-center h-[230px]">
        No men's products available!
      </div>
    );
  }

  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className="px-16 max-sm:p-4 py-4 gap-6 flex items-center justify-center flex-wrap">
        {products.map((product) => (
          <div
            key={product.slug.current}
            className="flex flex-col gap-2 cursor-pointer shrink-0 grow basis-[23%]"
          >
            <Link href={`/product/${product.slug.current}`}>
              <Image
                className="w-full"
                src={urlFor(product.image?.asset).url()} // Access asset for image URL
                alt={product.name}
                width={282}
                height={370}
              />
            </Link>
            <div className="flex items-center justify-between relative">
              <div>
                <p className="text-1xl font-bold truncate max-w-48">
                  {product.name}
                </p>
                <p className="text-off-gray">{product.description}</p>
              </div>
              <div>
                <p className="bg-off-white px-3 py-1 rounded-lg">
                  ${product.price}
                </p>
                <button
                  onClick={() => {
                    if (!user) {
                      toast.error('You must log in to add items to the cart.'); // Show error toast
                    } else {
                      addToCart({
                        slug: product.slug,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      });
                      toast.success(`${product.name} added to cart!`); // Show success toast
                    }
                  }}
                  className="w-36 bg-eu-purple text-white px-3 py-1 rounded-md absolute top-[-50px] right-3"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-16 max-sm:p-4 py-4 pb-8">
        <h2 className="text-xl font-bold flex pb-4">
          <div className="w-1 rounded-full h-6 bg-purple-800 mr-1"></div> Product Description
        </h2>
        <h3 className='pl-[8px] py-2 text-base font-semibold text-gray-800'>
          Reexplore Men's Clothing Collection Online at Euphoria
        </h3>
        <p className="pl-[8px] text-gray-700 text-sm">
          Men's Clothing – Are you searching for the best website to buy Men's Clothing online? Your search ends here. From trendy Casual Men's Wear Online shopping to premium quality cotton men's apparel, Euphoria has a collection of Men's Clothing covered with the latest and best designs.
        </p>
        <h3 className='pl-[8px] py-2 text-base font-semibold text-gray-800'>
          One-Stop Destination to Shop Every Clothing for Men: Euphoria
        </h3>
        <p className="pl-[8px] text-gray-700 text-sm">
          Men's clothing is gaining more popularity every day. With the increasing demand for comfort and style, Euphoria offers a wide range of stylish men's clothing, making you the winner wherever you go. Our collection includes everything from casual wear to premium men's clothing.
        </p>
        <p className="pl-[8px] pt-2 text-gray-700 text-sm">
          Our men's clothing collection will make you the trendsetter with the perfect blend of choice, quality, and elegance. 
        </p>
      </div>
    </div>
  );
};

export default Men;
