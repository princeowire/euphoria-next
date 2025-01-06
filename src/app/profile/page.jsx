'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

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
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-lg mb-6">Welcome, {user.displayName || 'User'}!</p>
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
