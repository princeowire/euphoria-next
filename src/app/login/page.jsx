'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { auth, googleProvider } from '@/lib/firebase/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'; // Import the router for navigation
import signInLadies from '../../../public/assets/sign-in ladies.webp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // Store the token in cookies
      setCookie('authToken', idToken, { maxAge: 3600, path: '/' }); // Expires in 1 hour

      // Get the redirect URL from localStorage or fallback to home page
      const redirectTo = localStorage.getItem('redirectAfterLogin') || '/';
      localStorage.removeItem('redirectAfterLogin'); // Remove the redirect URL after use

      // Redirect to the page they were trying to access
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      setError('Failed to log in. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      // Store the token in cookies
      setCookie('authToken', idToken, { maxAge: 3600, path: '/' });

      // Get the redirect URL from localStorage or fallback to home page
      const redirectTo = localStorage.getItem('redirectAfterLogin') || '/';
      localStorage.removeItem('redirectAfterLogin'); // Remove the redirect URL after use

      // Redirect to the page they were trying to access
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      setError('Google Sign-In failed. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full max-md:hidden">
        <Image src={signInLadies} className="w-full h-full object-cover" alt="logo" />
      </div>

      <div className="w-1/2 max-md:w-full px-16 max-sm:p-4 py-8">
        <div>
          <h2 className="text-2xl font-extrabold">Sign in Page</h2>
        </div>
        <div className="flex flex-col gap-4 mt-5 mb-5">
          <button
            onClick={handleGoogleSignIn}
            className="text-purple-400 border border-black p-2 flex items-center justify-center gap-3 w-full rounded-[5px]"
          >
            <FcGoogle />
            Continue With Google
          </button>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-center">
            <hr className="w-full mx-3" />
            <p className="text-center text-gray-400">OR</p>
            <hr className="w-full mx-3" />
          </div>
          <label htmlFor="email" className="flex flex-col">
            <p>Email:</p>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="p-2 border border-black outline-none rounded-[5px]"
              type="email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            <p>Password:</p>
            <div className="p-2 border border-black outline-none rounded-[5px] flex items-center justify-between">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? 'text' : 'password'}
                className="w-full outline-none"
              />
              <div onClick={() => setVisible(!visible)}>
                {visible ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
              </div>
            </div>
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-end w-full justify-end">
            <a href="/forgot" className="text-xs">
              Forget Your Password?
            </a>
          </div>
          <div className="flex flex-col">
            <button type="submit" className="w-36 bg-eu-purple text-white p-2 rounded-md">
              Sign in
            </button>
            <a href="/signup" className="text-xs mt-2">
              Don't have an account? Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
