"use client";
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "../../public/assets/search.png";
import logo from "../../public/assets/Logo.webp";

const Nologin = () => {
  return (
    <div>
      <div className="flex justify-between px-8 py-4 w-full">
        <a href="/">
          <Image src={logo} alt="" />
        </a>

        <div className="search-bar flex rounded-md border border-off-gray align-middle items-center justify-center px-4 bg-off-white">
          <div className="flex items-center justify-center gap-2">
            <Image src={searchIcon} alt="" />
            <input className="bg-off-white outline-none" placeholder="Search" type="text" />
          </div>
        </div>

        <div className="nav-profile flex gap-2">
          <a href="/login">
            <button type="submit" className="w-36 bg-eu-purple text-white p-2 rounded-md"> Log in </button>
          </a>
          <a href="/signup">
            <button type="submit" className="w-36 border p-2 border-eu-purple text-eu-purple rounded-md"> Sign in </button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Nologin;
