// Desc: Login page for the app
'use client'
import React from 'react'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import signInLadies from '../../../public/assets/sign-in ladies.webp';

const Login = () => {

const [password, setPassword] = React.useState('');
const [visible, setVisible] = React.useState(false);

  return (
    <div className='flex h-screen'>
      <div className='w-1/2 h-full'>
        <Image src={signInLadies} className='w-full h-full object-cover' alt='logo'/>
      </div>
      <div  className='w-1/2 px-16 py-8'>
        <div>
          <h2 className='text-2xl font-extrabold'>Sign in Page </h2>
        </div>
        <form action="" className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 mt-5 mb-5'>
            <button className='text-purple-400 border border-black p-2 flex items-center justify-center gap-3 w-full rounded-[5px]'><FcGoogle />Continue With Google</button>
            <button className='text-purple-400 border border-black p-2 flex items-center justify-center gap-3 w-full rounded-[5px]'><FaTwitter className='text-blue-300' />Continue With Twitter</button>
          </div>

          <div className='flex w-full items-center justify-center'>
            <hr className='w-full mx-3' />
            <p className='text-center text-gray-400'>OR</p>
            <hr className='w-full mx-3' />
          </div>

          <label htmlFor="email" className='flex flex-col'> <p>Email:</p> <input id='email' className='p-2 border border-black outline-none rounded-[5px]' type="email" /> </label>
          <label htmlFor="password" className='flex flex-col'>
            <p>Password:</p>
            <div className='p-2 border border-black outline-none rounded-[5px] flex items-center justify-between'>
              <input 
                id='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? 'text' : 'password'}
                className='w-full outline-none'
              />
              <div onClick={() => setVisible(!visible)} >
                {visible ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
              </div>
            </div>
          </label>
          <div className='flex items-end w-full justify-end'>
            <a href="" className='text-xs'>Forget Your Password?</a>
          </div>

          <div className='flex flex-col'>
            <button className='w-36 bg-eu-purple text-white p-2 rounded-md'>Sign in</button>
            <a href="/signup" className='text-xs mt-2'>Don't have an account? Sign Up</a>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Login
