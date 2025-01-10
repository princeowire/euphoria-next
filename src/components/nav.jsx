'use client';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase'; // Make sure this is the correct path
import { UserNav } from './user-nav';
import Nologin from './nouser-nav'; 
import Image from 'next/image';
import spin from '../../public/assets/spinner.svg';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // If a user exists, set isLoggedIn to true
      setLoading(false); // Stop loading once auth state is resolved
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-16 bg-gray-100">
        <p><Image src={spin} alt='loading...' /></p>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      {isLoggedIn ? <UserNav /> : <Nologin />}
    </div>
  );
};

export default Nav;
