'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import spin from '../../../public/assets/spinner.svg';
import { FaS } from 'react-icons/fa6';

const Profile = () => {
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch and listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login page if no user is signed in
        router.push('/login');
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect to login after logout
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
       <div className="w-full m-auto flex items-center justify-center h-[230px]"><Image src={spin} alt='loading...' /></div>
      </div>
    );
  }

  return (
    <div className="flex max-sm:flex-col gap-16 p-16 py-4 max-md:p-4">
      {popup === true ? (
        <div className="flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-[#0000006c] ">
          <div className=" text-[50px] text-center max-w-96 bg-white z-40">
            hello world <p onClick={() => setPopup(false)}>x</p>
          </div>
        </div>
      ) : null}

      <div className="w-1/4 flex-nowrap max-md:w-full pt-8">
        <div className="flex gap-[10px]">
          <div className="w-1 rounded-full h-8 bg-purple-800"></div>
          <h2 className="text-2xl">Hello {user.displayName || "user"} </h2>
        </div>

        <p className="py-2 text-sm text-off-gray">Welcome To Your Account</p>

        <div className="flex flex-col gap-2 px-4 py-2">
          <p>My Profile</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="w-3/4 max-md:w-full pt-8 px-4">
        <h2 className="text-3xl mb-4 font-semibold">My Info</h2>

        <h3 className="text-2xl font-semibold">Contact Details</h3>

        <div className="pt-8 flex gap-8 flex-col">
          <div className=" py-1 flex items-center justify-between border-b border-gray-100">
            <span>
              <p className="text-sm text-off-gray">Your Name </p>
              <p className="text-[16px]">Jhanvi Shah</p>
            </span>

            <p onClick={() => setPopup(!popup)}>Change</p>
          </div>

          <div className=" py-1  flex items-center justify-between border-b border-gray-100">
            <span>
              <p className="text-sm text-off-gray">Email Address </p>
              <p className="text-[16px]">Jhavi@gmail.com</p>
            </span>

            <p>Change</p>
          </div>

          <div className=" py-1 flex items-center justify-between border-b border-gray-100">
            <span>
              <p className="text-sm text-off-gray">Phone Number</p>
              <p className="text-[16px]">09090909909</p>
            </span>

            <p>Change</p>
          </div>

          <div className=" py-1 flex items-center justify-between border-b border-gray-100">
            <span>
              <p className="text-sm text-off-gray">Password</p>
              <p className="text-[16px]">••••••••••••••</p>
            </span>

            <p>Change</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;
