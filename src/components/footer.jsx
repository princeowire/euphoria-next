import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";

export const Phooter = () => {
  return (
    <div className='bg-footer-bg px-16 py-5 max-md:p-4 text-white footer'>

      <div className='flex justify-between gap-2 flex-wrap'>
        <div>
          <b>Need Help</b>
          <p className='pt-4'>Contact Us</p>
          <p>Track Order</p>
          <p>Return & Refunds</p>
          <p>FAQ's</p>
          <p>Career</p>
        </div>

        <div>
          <b>Company</b>
          <p className='pt-4'>About Us</p>
          <p>Euphoria Blog</p>
          <p>Euphoriastan</p>
          <p>Collarboration</p>
          <p>Media</p>
        </div>

        <div>
          <b>More Info</b>
          <p className='pt-4'>Term and condition</p>
          <p>Privacy Policy</p>
          <p>shiping</p>
          <p>Sitemap</p>
        </div>

        <div>
          <b>location</b>
          <p className='pt-4'>support@euphoria.in</p>
          <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
          <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
        </div>
      </div>

      <div className='pt-6 flex justify-between flex-wrap max-md:gap-4'>

        <div className='flex gap-3'>
          <ImFacebook2 className='cursor-pointer w-10 h-10'/>
          <FaInstagramSquare className='cursor-pointer w-10 h-10'/>
          <FaSquareTwitter className='cursor-pointer w-10 h-10'/>
          <FaLinkedin className='cursor-pointer w-10 h-10'/>
        </div>

        <div className='P-4'>
          <h2>Download The app</h2>

          <div className='flex gap-4'>

            <div className='flex max-sm:flex-wrap gap-2 pt-4'>
              <FaGooglePlay className='w-12 h-12' />
              <div>
                <p>andriod app on</p>
                <h3>Google Play</h3>
              </div>
            </div>

            <div className='flex max-sm:flex-wrap gap-2 pt-4'>
              <IoIosAppstore className='w-12 h-12' />
              <div>
                <p>avaliable on the</p>
                <h3>App Store</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className='py-4 border-t border-b mt-2'>
        <h2>Popular Categories</h2>
      </div>

      <p className='text-center pt-2'>Copyright © 2023 EUphoria Folks pvt ltd. All right reserved</p>
    </div>
  )
}