import React from 'react'
import Image from 'next/image';
import limeLightOne from '../../public/assets/limelight one.webp';
import limeLightTwo from '../../public/assets/limelight two.webp';
import limeLightThree from '../../public/assets/limelight three.webp';
import limeLightFour from '../../public/assets/limelight four.webp';

const Limelights = () => {
  return (
      <div className='py-8'>

        <div className='flex items-center gap-2 py-4'>
          <div className='w-1 rounded-full h-6 bg-purple-800'></div>
          <h3 className='font-bold text-2xl'>In The LImelight </h3>
        </div>

        <div className='time-line flex gap-2 items-center justify-between overflow-scroll'>

          <div className='flex flex-col gap-2 max-sm:w-96'>
            <Image src={limeLightOne} alt="" />

            <div className='flex items-center justify-between'>

              <div>
                <p className='text-1xl font-bold truncate max-w-48'>Black Sweatshirt With Black Coloured Design </p>
                <a href="" className='text-off-gray'>Jhanvi's Brand</a>
              </div>

              <a href="/products" className='bg-off-white px-3 py-1 rounded-lg'>$37.00</a>
            </div>
          </div>

          <div className='flex flex-col gap-2 max-sm:w-96'>
            <Image src={limeLightTwo} alt="" />

            <div className='flex items-center justify-between'>

              <div>
                <p className='text-1xl font-bold truncate max-w-48'>Line Pattern Black Hoddie </p>
                <a href="" className='text-off-gray'>AS's Brand</a>
              </div>

              <a href="/products" className='bg-off-white px-3 py-1 rounded-lg'>$37.00</a>
            </div>
          </div>

          <div className='flex flex-col gap-2 max-sm:w-96'>
            <Image src={limeLightThree} alt="" />

            <div className='flex items-center justify-between'>

              <div>
                <p className='text-1xl font-bold truncate max-w-48'>Black Shorts and Mordern shirt</p>
                <a href="" className='text-off-gray'>Explore Now</a>
              </div>

              <a href="/products" className='bg-off-white px-3 py-1 rounded-lg'>$37.00</a>
            </div>
          </div>

          <div className='flex flex-col gap-2 max-sm:w-96'>
            <Image src={limeLightFour} alt="" />

            <div className='flex items-center justify-between'>

              <div>
                <p className='text-1xl font-bold truncate max-w-48'>Stylish Lavender Hoodie For Outing</p>
                <a href="" className='text-off-gray'>Explore Now</a>
              </div>

              <a href="/products" className='bg-off-white px-3 py-1 rounded-lg'>$37.00</a>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Limelights;
