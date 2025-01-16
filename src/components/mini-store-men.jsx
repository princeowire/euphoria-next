import Image from 'next/image';
import React from 'react';
import menOne from "../../public/assets/male one.png";
import menTwo from "../../public/assets/male two.png";
import menThree from "../../public/assets/male three.png";
import menFour from "../../public/assets/male four.png";
import menFive from "../../public/assets/male five.png";
import menSix from "../../public/assets/male six.png";
import menSeven from "../../public/assets/male seven.png";
import menEight from "../../public/assets/male eight.png";
import rightArrow from "../../public/assets/Arrow right.png";

export const MiniStoreMen = () => {
  return (
    <div>

      <div className='pt-5'>
        <div className='flex items-center gap-2 py-4'>
          <div className='w-1 rounded-full h-6 bg-purple-800'></div>
          <h3 className='font-bold text-2xl'>Category For Men </h3>
        </div>

        <div className='py-6 flex flex-col gap-6'>

          <div className='flex flex-wrap gap-8 max-sm:justify-normal '>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-48'>
              <Image className='w-full' src={menOne} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Shirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-48'>
              <Image className='w-full' src={menTwo} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Printed T-Shirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-48'>
              <Image className='w-full' src={menThree} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Plain T-Shirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-48'>
              <Image className='w-full' src={menFour} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>polo T-shirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

          </div>

          <div className='flex gap-8 justify-between max-sm:hidden items-center overflow-scroll'>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-52'>
              <Image className='w-full' src={menFive} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Hoodie & Sweetshirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-52'>
              <Image className='w-full' src={menSix} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Jeans</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-52'>
              <Image className='w-full' src={menSeven} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Active Wear</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 flex-grow flex-shrink-0 basis-52'>
              <Image className='w-full' src={menEight} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Boxers</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/products"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  )
}