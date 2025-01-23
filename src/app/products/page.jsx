'use client';

import React, { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import spin from '../../../public/assets/spinner.svg';
import { useCart } from '../CartContext';
import { toast } from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Track authentication state
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "product"] {
            name,
            slug {
              current
            },
            price,
            description,
            image
          }
        `);
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  if (loading) {
    return (
      <div className="w-full m-auto flex items-center justify-center h-[230px]">
        <Image src={spin} alt="loading..." />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full m-auto flex items-center justify-center h-[230px]">
        No products available!
      </div>
    );
  }

  return (
    <div>
      <div className="px-8 py-4 gap-6 flex items-center justify-center flex-wrap">
        {products.map((product) => (
          <div
            key={product.slug.current}
            className="flex flex-col gap-2 max-sm:w-full cursor-pointer"
          >
            <Link href={`/product/${product.slug.current}`}>
              <Image
                className="w-full"
                src={urlFor(product.image).url()}
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
    </div>
  );
};

export default ProductPage;
