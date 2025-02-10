'use client';
import React, { useState, useEffect } from 'react';

import { auth } from '@/lib/firebase/firebase';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, updateProfile, updateEmail } from 'firebase/auth';

import MiniProfile from '@/components/mini-profile';
import Orders from '@/components/order';
import Image from 'next/image';
import logOutIcon from '../../../public/assets/logout-icon.png';


const Profile = () => {
  const [user, setUser] = useState(null);
  const [tab, SetTab] = useState('profile')
  const router = useRouter();

  // Fetch and listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login'); // Redirect to login if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login'); // Redirect to login page
      } catch (err) {
        console.error('Error logging out:', err);
      }
    };
  


  return (
    <div className="flex max-[789px]:flex-wrap gap-4 p-16 py-4 max-md:p-4">

      {/* Sidebar */}
      <div className="w-1/4 max-md:w-full pt-8">
        <div className="flex gap-2">
          <div className="w-1 rounded-full h-8 bg-purple-800"></div>
          <h2 className="text-2xl truncate">Hello {user?.displayName || "User"}</h2>
        </div>
        <p className="py-2 text-sm text-gray-500">Welcome To Your Account</p>

        <div className="flex flex-col max-md:items-center max-md:flex-row  gap-2 px-2 py-2">
          <div className='flex gap-1 items-center justify-start relative'>{tab === 'profile' ? (<div className="w-1 max-md:w-full max-md:absolute max-md:h-1 -bottom-1 rounded-full h-5 bg-purple-800"></div>) : (<div className="w-1 max-md:w-full max-md:absolute max-md:h-1 -bottom-1 rounded-full h-5"></div>)}<p onClick={() => SetTab('profile') } className='cursor-pointer'>My Profile</p></div>
          <div className='flex gap-1 items-center justify-start relative'> {tab === 'orders' ? (<div className="w-1 max-md:w-full max-md:absolute max-md:h-1 -bottom-1 rounded-full h-5 bg-purple-800"></div>) : (<div className="w-1 max-md:w-full max-md:absolute max-md:h-1 -bottom-1 rounded-full h-5"></div>)} <p onClick={() => SetTab('orders') } className='cursor-pointer'>My Orders</p></div>
          <div
            onClick={handleLogout}
            className='flex items-center justify-start gap-2 pl-2 pt-3 max-md:p-2'
            >
            <Image src={logOutIcon} alt='logout' className='w-4 h-4' />
            Log Out
          </div>
        </div>
      </div>

      <div className='w-full'>
        {tab === 'profile' ? (<><MiniProfile /></>) : (null) }
        {tab === 'orders' ? (<><Orders /></>) : (null) }
      </div>

    </div>
  );
};

export default Profile;
