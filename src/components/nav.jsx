'use client';
import React, { useState, useEffect } from 'react';
import { UserNav } from './user-nav';
const Nav = () => {

  return (
    <div className="bg-white border-b border-gray-300 flex items-center justify-center">
       <UserNav /> 
    </div>
  );
};

export default Nav;
