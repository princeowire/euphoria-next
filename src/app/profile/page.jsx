'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import spin from '../../../public/assets/spinner.svg';

const Profile = () => {
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
    <div className="flex gap-4 p-16 py-4 max-md:p-4">
      <div>
        <div className='flex gap-[10px]'>
            <div className='w-1 rounded-full h-6 bg-purple-800'></div>
            <h2>Hello {user.displayName || 'user'} </h2>
        </div>

        <p className='py-2 text-[10px] text-off-gray'>Welcome To Your Account</p>

        <div> 
          <p>My Profile</p>
        </div>
        
      </div>

      <div className="bg-white rounded shadow-md w-96">
        <h2 className="text-1xl font-bold mb-4">My Info</h2>

        <div>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
