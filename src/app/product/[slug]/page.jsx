import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

import Navigation from '@/components/arrow-nav';
import AddToCartButton from '@/components/add-to-cart';
import StarRating from '@/components/five-star';
import SizePicker from '@/components/size-picker';
import ColorPicker from '@/components/color-picker';

import videoPreview from '../../../../public/assets/video peview.png';
import securePayment from '../../../../public/assets/secure payment.png';
import truck from '../../../../public/assets/truck.png';
import messageIco from '../../../../public/assets/message icon.png';
import sizeFit from '../../../../public/assets/Size & Fit.png';
import shippingReturns from '../../../../public/assets/Free Shipping & Returns.png';
import arrowRight from '../../../../public/assets/Arrow right.png';

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"] { "slug": slug.current }`);
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetail({ params }) {
  const { slug } = params;

  // Fetch current product details
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) {
    return (
    <div className="w-full m-auto flex items-center justify-center h-[230px]">
      No products available!
    </div>
    )
  }

  // Fetch similar products based on category
  const similarProducts = await client.fetch(
    `*[_type == "product" && category._ref == $category && slug.current != $slug] | order(_createdAt desc)`,
    { category: product.category._ref, slug }
  );

  // Randomly pick 4 products
  const randomProducts = similarProducts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className='pt-8'>
      <div className="px-16 max-sm:px-4 flex flex-wrap gap-16 max-sm:gap-8">
        <div className="product-image">
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={382}
              height={470}
              loading="lazy"
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 w-72 h-96 flex items-center justify-center">
              No Image Available
            </div>
          )}
        </div>

        <div className='w-[50%] max-sm:w-full flex flex-col gap-2'>
          <Navigation />
          <h1 className="text-2xl font-bold">{product.name}</h1>
          
          <div className='flex'>
            <StarRating /> 
            <div className='flex items-center justify-center px-4 gap-2'> <Image alt='comments' src={messageIco} /> <p>120 comments</p> </div>
          </div>

          <div className='py-2'>
            <span className='flex items-center gap-2'>
              <h2 className="text-xl font-semibold">Select Size</h2>
              <p className='flex items-center justify-center gap-2 text-off-gray'>Size Guide <Image alt='arrow' src={arrowRight} /> </p>
            </span>

            <span>
              <SizePicker />
            </span>
          </div>

          <div>
            <span className='flex items-center gap-2'>
              <h2 className="text-xl font-semibold">Colors Available</h2>
            </span>

            <span>
              <ColorPicker />
            </span>
          </div>

          <div></div>

          <div className="flex items-center gap-4">
            <AddToCartButton  product={product}  />
            <p className="text-center text-gray-700 border border-black w-24 rounded-md">${product.price}</p>
          </div>

          <hr className='mt-4' />

          <div className='py-4 flex flex-wrap'>
            <span className='flex p-1 gap-[20px] flex-shrink-0 flex-grow basis-52'> <Image className='w-[24px] h-[24px]' src={securePayment} alt='securePayment' /> <p>Secure Payment</p> </span>
            <span className='flex p-1 gap-[20px] flex-shrink-0 flex-grow basis-52'> <Image className='w-[24px] h-[24px]' src={sizeFit} alt='securePayment' /> <p>Size & Fit </p> </span>
            <span className='flex p-1 gap-[20px] flex-shrink-0 flex-grow basis-52 pt-5'> <Image className='w-[24px] h-[24px]' src={truck} alt='securePayment' /> <p>Free Shiping</p> </span>
            <span className='flex p-1 gap-[20px] flex-shrink-0 flex-grow basis-52 pt-5'> <Image className='w-[24px] h-[24px]' src={shippingReturns} alt='securePayment' /> <p>Free Shipping & Returns </p> </span>
          </div>
        </div>
      </div>

      <div className="py-8 px-16 max-sm:p-4 mt-4 flex max-md:flex-wrap justify-center">
        {product.detailedDescription && (
          <div className="">
            <h2 className="text-xl font-bold flex pb-4">
              <div className="w-1 rounded-full h-6 bg-purple-800 mr-1"></div> Product Description
            </h2>
            <p className="pl-[8px] text-base text-gray-700">{product.detailedDescription}</p>
          </div>
        )}

        <div className="w-full p-2">
          <Image src={videoPreview} alt="video preview" />
        </div>
      </div>

      <div className="my-8 px-16 max-sm:p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center "><div className="w-1 rounded-full h-6 bg-purple-800 mr-1"></div> Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomProducts.map((similarProduct) => (
            <Link href={`/product/${similarProduct.slug.current}`} key={similarProduct._id} className="bg-white border rounded-lg p-4">
              {similarProduct.image && (
                <Image
                  src={urlFor(similarProduct.image).url()}
                  alt={similarProduct.name}
                  className="w-full object-cover"
                  width={282}
                  height={350}
                  loading="lazy"
                />
              )}
              
              <h3 className="text-lg font-semibold mt-2">{similarProduct.name}</h3>
              <p className="text-gray-700">${similarProduct.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
