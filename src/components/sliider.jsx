import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import slideOne  from '../../public/assets/hero-section-one.webp';
import slideTwo from '../../public/assets/yellow.webp';


export const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide className='relative'>
        <Image src={slideOne} className='w-full h-lvh max-sm:h-[500px] object-cover' alt="" />
        <div className='absolute bottom-20 max-sm:bottom-8 p-16 max-md:p-4 text-white flex flex-col gap-4'>
          <p className='text-2xl'>T-shirt / Tops</p>
          <p className='text-8xl font-extrabold max-w-screen-md max-sm:text-3xl'>Summer Value Pack</p>
          <p className="text-2xl">Cool / Colorful / Comfy</p>

          <button className='rounded-md bg-white text-blue-950 font-bold px-8 py-2 w-fit'><a href="/products">Shop Now</a></button>
        </div>
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <Image src={slideTwo} className='w-full h-lvh max-sm:h-[500px] object-cover' alt="" />
        <div className='absolute bottom-20 max-sm:bottom-8 pl-16 p-16 max-md:p-4 text-white flex flex-col gap-4'>
          <p className='text-2xl'>Sweater / Hoodie</p>
          <p className='text-8xl font-extrabold max-w-screen-md max-sm:text-3xl'>Winter Value Pack</p>
          <p className="text-2xl">Cool / Colorful / Comfy</p>

          <button className='rounded-md bg-white text-blue-950 font-bold px-8 py-2 w-fit'><a href="/products">Shop Now</a></button>
        </div>
    </SwiperSlide>

  </Swiper>
  )
}
