import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import floydMiles from '../../public/assets/floyd miles.svg';
import SavannahNguyen from '../../public/assets/Savannah Nguyen.svg';

export const Feedback = () => {
  return (
    <div>
        <div className='flex items-center gap-2 py-4'>
            <div className='w-1 rounded-full h-6 bg-purple-800'></div>
            <h3 className='font-bold text-2xl'>Feedback </h3>
        </div>

        <Swiper
          modules={[ Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='flex max-sm:hidden'
        >

            <SwiperSlide className='pb-10 max-sm:min-w-96'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>
            
            <SwiperSlide className='pb-10 max-sm:min-w-96'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={SavannahNguyen} alt="" />
                    <p className='font-bold text-2xl pt-2'>Savannah Nuguyen</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10 max-sm:min-w-96'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={SavannahNguyen} alt="" />
                    <p className='font-bold text-2xl pt-2'>Savannah Nuguyen</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10 max-sm:min-w-96'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            
            <SwiperSlide className='pb-10 max-sm:min-w-96'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

        </Swiper>

        <Swiper
          modules={[ Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='hidden sm:block'
        >

            <SwiperSlide className='pb-10'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>
            
            <SwiperSlide className='pb-10'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={SavannahNguyen} alt="" />
                    <p className='font-bold text-2xl pt-2'>Savannah Nuguyen</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={SavannahNguyen} alt="" />
                    <p className='font-bold text-2xl pt-2'>Savannah Nuguyen</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

            
            <SwiperSlide className='pb-10'>
              <div className='min-h-60 p-3 flex flex-col gap-4 border border-off-gray rounded-xl'>
 
                <div className='flex justify-between'>

                  <div>
                    <Image src={floydMiles} alt="" />
                    <p className='font-bold text-2xl pt-2'>Floyd Miles</p>
                  </div>

                  <p>five star</p>
                </div>

                <div className='text-sm text-off-black'> 
                  <p>Amet minim mollit n on deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                  <p> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

              </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}
