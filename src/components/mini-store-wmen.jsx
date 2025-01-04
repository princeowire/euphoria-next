import React from 'react';
import Image from 'next/image';
import rightArrow from "../../public/assets/Arrow right.png";
import womenOne from "../../public/assets/wmen one.webp";
import womenTwo from "../../public/assets/wmen two.webp";
import womenThree from "../../public/assets/wmen three.webp";
import womenFour from "../../public/assets/wmen four.png";

export const MiniStoreWmen = () => {
  return (
    <div>
      <div className='pt-5'>

        <div className='flex items-center gap-2 py-4'>
          <div className='w-1 rounded-full h-6 bg-purple-800'></div>
          <h3 className='font-bold text-2xl'>Category For Women </h3>
        </div>

        <div className='py-6 flex flex-col gap-6'>

          <div className='flex gap-2 justify-between max-sm:flex-wrap'>

            <div className='flex flex-col gap-2 max-sm:w-full'>
              <Image src={womenOne} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Hoodies & Sweatshirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/product"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 max-sm:w-full'>
              <Image src={womenTwo} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Coats & Parkas</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/product"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 max-sm:w-full'>
              <Image src={womenThree} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Teens T-Shirt</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/product"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2 max-sm:w-full'>
              <Image src={womenFour} alt="" />

              <div className='flex items-center justify-between'>

                <div>
                  <p className='text-1xl font-bold'>Boxers</p>
                  <a href="" className='text-off-gray'>Explore Now</a>
                </div>

                <a href="/product"><Image src={rightArrow} alt="" /></a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
