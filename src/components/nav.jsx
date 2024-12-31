'use client';
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "../../public/assets/search.png" 
import cart from "../../public/assets/cart.png";
import like from "../../public/assets/like.png";
import logo from "../../public/assets/Logo.webp";
import profileIcon from "../../public/assets/profile icon.png";

export const Nav = () => {
  const [carts, setCarts] = useState(0)

  let hamburger = () => {
    addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  };

  return (
    <div>
      <div className="flex justify-between px-8 py-4 w-full">
        <a href="/">
          <Image src={logo} alt="" />
        </a>

        <div className="link flex justify-center items-center gap-3 px-3">

          <a href="" className="text-black font-bold text-1xl">
            Shop
          </a>

          <a href="" className="text-black font-bold text-1xl">
            Men
          </a>

          <a href="" className="text-black font-bold text-1xl">
            Women
          </a>

          <a href="" className="text-black font-bold text-1xl">
            Combos
          </a>

          <a href="" className="text-black font-bold text-1xl">
            Joggers
          </a>
        </div>

        <div className="search-bar flex rounded-md align-middle items-center justify-center px-4 bg-off-white">
          <div className="flex items-center justify-center gap-2">
            <Image src={searchIcon} alt="" />
            <input className="bg-off-white" placeholder="Search" type="text" />
          </div>
        </div>

        <div className="nav-profile flex gap-2">
          <a href="">
            <Image src={like} alt="" />
          </a>
          {/* <div>
			<button className="bg-yellow-300 text-white rounded-xl p-4" onClick={() => {
        setCarts(carts + 1)
      }}>Add to cart</button>
			</div> */}
          <a href="">
            <Image src={profileIcon} alt="" />
          </a>
          <div className="relative">
            <a href="">
              <Image src={cart} alt="" />
            </a>
            <p className="h-6 w-6 flex items-center justify-center absolute top-0 left-8 rounded-full bg-red-600 text-white font-semibold text-lg">{carts}</p>
          </div>
        </div>

        <div onClick={hamburger} className="hidden ham-ico cursor-pointer max-md:flex flex-col justify-center items-center">
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black my-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>
    </div>
  );
};
