'use client'
import react from "react"
import Image from "next/image";
import { Slider } from "@/components/sliider"
import { BigSaving } from "@/components/big-saving";
import { MiniStoreMen } from "@/components/mini-store-men";
import { MiniStoreWmen } from "@/components/mini-store-wmen";
import { Feedback } from "@/components/feedback";
import Limelights from "@/components/limelight";

import slideTwo from '../../../public/assets/yellow.webp';
import purple from '../../../public/assets/purple.webp';
import knittedJoggers from '../../../public/assets/knitted-joggers.png';
import fullSleeve from '../../../public/assets/full-sleeve.png';
import activeTshirt from '../../../public/assets/active T-shirts.png';
import urbanShirt from '../../../public/assets/urban Shirt.png';
import leave from '../../../public/assets/leave.webp';
import models from '../../../public/assets/models.webp';
import nikeLogo from '../../../public/assets/nike logo.png';
import hAndm from '../../../public/assets/h and m.png';
import levis from '../../../public/assets/levis.png';
import usPolo from '../../../public/assets/us polo.png';
import pumaLogo from '../../../public/assets/puma.png';


export default function Shop() {
  return(
    <div>

      <Slider />

      <section className='px-16 pb-8 pt-16 max-md:p-4 max-md:justify-center max-md:flex-wrap flex justify-between gap-4 checking'>

        <div className='relative flex items-center'>

          <Image  src={slideTwo} className='w-full' alt="" />

          <div className='absolute p-8 flex my-auto flex-col gap-8 max-sm:gap-3 text-white'>
            <p className='font-semibold text-xl'>Low Price</p>
            <div>
              <h3 className='font-bold text-3xl max-[400px]:'>High Coziness</h3>
              <p className='font-thin text-sm'>Up to 50% OFF</p>
            </div>

            <div className='w-fit'>
              <a href="/products">Explore items</a>
              <hr />
            </div>
          </div>

        </div>

        <div className='relative flex items-center'>

          <Image  src={purple} className='w-full' alt="" />

          <div className='absolute p-8 flex my-auto flex-col gap-8 max-sm:gap-3 text-white'>
            <p className='font-semibold text-xl'>Beyoung Presents</p>
            <div>
              <h3 className='font-bold text-3xl max-w-64'>Summer Style</h3>
              <p className='font-thin text-sm'>Up to 50% OFF</p>
            </div>

            <div className='w-fit'>
              <a href="/products">Explore items</a>
              <hr />
            </div>
          </div>

        </div>

      </section>

      <section className='px-16 max-md:p-6 max-sm:p-4 py-4 flex flex-col gap-4'>

        <div className='flex items-center gap-2 py-4'>
          <div className='w-1 rounded-full h-5 bg-purple-800 text-2xl'></div>
          <h3 className='font-bold text-2xl'>New Arrival</h3>
        </div>

        <div className='flex w-full items-center justify-center gap-4'>

          {/* <img src={leftArrow} alt="" className='max-md:hidden' /> */}

          <div className='flex max-md:p-4 max-sm:p-0 max-md:justify-center flex-wrap justify-between w-full items-center gap-4'>
            <div className='flex-grow flex-shrink-0 basis-52'>
              <div className=''><Image className='w-full' src={knittedJoggers} alt="" /></div>
              <p className='pt-3 font-semibold'>Knitted Joggers</p>
            </div>

            <div className='flex-grow flex-shrink-0 basis-52'>
              <div className=''><Image className='w-full' src={fullSleeve} alt="" /></div>
              <p className='pt-3 font-semibold'>Full Sleeve</p>
            </div>

            <div className='flex-grow flex-shrink-0 basis-52'>
              <div className=''><Image className='w-full' src={activeTshirt} alt="" /></div>
              <p className='pt-3 font-semibold'>Active T-shirt</p>
            </div>

            <div className='flex-grow flex-shrink-0 basis-52'>
              <div className=''><Image className='w-full' src={urbanShirt} alt="" /></div>
              <p className='pt-3 font-semibold'>Urban Shirt</p>
            </div>
          </div>

          {/* <img src={rightArrow} alt="" className='max-md:hidden' /> */}

        </div>

        <div className='flex items-center gap-2 py-4'>
          <div className='w-1 rounded-full h-6 bg-purple-800'></div>
          <h3 className='font-bold text-2xl'>Big Saving Zone</h3>
        </div>

        <div>
          <BigSaving />
        </div>

      </section>

      <section className='px-16 py-8 max-md:p-6 max-sm:p-4'>

        <div className='flex max-md:flex-wrap py-4'>

          <div className='relative'>

            <Image className="max-sm:w-full" src={leave} alt="" />

            <div className="absolute flex flex-col gap-3 text-white top-0 p-14 max-md:p-4 my-auto">
              <h3 className='text-4xl font-bold'>WE MADE YOUR EVERYDAY FASHION BETTER!</h3>
              <p className='max-w-96 text-lg max-lg:hidden'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
              <button className='w-fit rounded-xl bg-off-white px-7 py-2 border border-white'><a href="/products">Shop Now</a></button>
            </div>

          </div>

          <div className='max-md:hidden'><Image src={models} alt="" /></div>

        </div>

        <MiniStoreMen className='pb-4' />
        <MiniStoreWmen />

      </section>

      <section className="px-16 py-4 max-md:p-4">
        <div className='rounded-lg text-off-white flex gap-2 flex-col items-center text-white justify-center bg-off-black p-5'>

          <h1 className='text-5xl font-extrabold'>Top Brand Deal</h1>
          <p>Up To <b className='text-contrast-yellow'>60%</b> off on brands</p>

          <div className='pt-8 flex gap-2 items-center overflow-scroll'>
            <Image className='w-36' src={nikeLogo} alt="" />
            <Image className='w-36' src={hAndm} alt="" />
            <Image className='w-36' src={levis} alt="" />
            <Image className='w-36' src={usPolo} alt="" />
            <Image className='w-36' src={pumaLogo} alt="" />
          </div>

        </div>
      </section>

      <section className="px-16 py-4 max-md:p-4">
        <Limelights />
        <Feedback />
      </section>
    </div>
  )
}