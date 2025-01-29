'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import signInLadies from '../../../public/assets/password.webp';
import { auth } from '@/lib/firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const Forgot = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Reset link sent! Please check your email.');
      setError(''); // Clear any previous error
    } catch (err) {
      console.error(err);
      setMessage('');
      setError('Failed to send reset link. Please check the email address.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 max-md:hidden h-full">
        <Image src={signInLadies} className="w-full h-full object-cover" alt="logo" />
      </div>
      <div className="w-1/2 px-16 max-md:w-full max-sm:p-4 py-8 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-extrabold">Reset Password</h2>
          <p  className="text-xs mt-2">Enter your email and we'll send you a link to reset your password.</p>
        </div>
        <form onSubmit={handlePasswordReset} className="flex flex-col gap-4">
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

          {message && <p className="text-green-500 text-sm">{message}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col gap-2">
            <button type="submit" className="w-36 bg-eu-purple text-white p-2 rounded-md">
              Send Reset Link
            </button>
            <a href="/login" className="text-xs mt-2">
              Back to login page? Click here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;