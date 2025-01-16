'use client';
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "../../public/assets/search.png"
import cart from "../../public/assets/cart.png";
import logo from "../../public/assets/Logo.webp";
import profileIcon from "../../public/assets/profile icon.png";
import { usePathname } from "next/navigation";

export const UserNav = () => {
  const [carts, setCarts] = useState(0)
  const [menu, setMenu] = useState(false);

  const location = usePathname();

  // let hamburger = () => {
  //   addEventListener("click", () => {
  //     console.log(menu);
  //     menu.target.classList.toggle("show");
  //   });

  // };

  return (
    <div className="relative">
      <div className="flex justify-between px-8 max-sm:px-1 max-sm:py-2 py-4 w-full">
        <a href="/">
          <Image src={logo} alt="" className="" />
        </a>

        {menu && (
          <div className="absolute z-20 w-full p-10 bg-off-black top-0 left-0">
            <div className="hidden max-md:flex flex-col justify-center items-center gap-3 px-3">
              {location === "/shop" ? (
                <p className="w-11 flex items-center justify-center">
                  <a href="/shop" className="text-black font-bold text-[20px]">
                    Shop
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="/shop" className="text-off-gray font-bold text-1xl">
                    Shop
                  </a>
                </p>
              )}

              {location === "/products" ? (
                <p className="w-16 flex items-center justify-center">
                  <a
                    href="/products"
                    className="text-black font-bold text-[20px]"
                  >
                    Product
                  </a>
                </p>
              ) : (
                <p className="w-16 flex items-center justify-center">
                  <a
                    href="/products"
                    className="text-off-gray font-bold text-1xl"
                  >
                    Product
                  </a>
                </p>
              )}

              {location === "/men" ? (
                <p className="w-11 flex items-center justify-center">
                  <a href="" className="text-black font-bold text-[20px]">
                    Men
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="" className="text-off-gray font-bold text-1xl">
                    Men
                  </a>
                </p>
              )}

              {location === "/women" ? (
                <p className="w-11 flex items-center justify-center">
                  <a href="" className="text-black font-bold text-[20px]">
                    Women
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="" className="text-off-gray font-bold text-1xl">
                    Women
                  </a>
                </p>
              )}
            </div>

            <div className="nav-profile flex justify-center items-center gap-2">
              <a href="/profile">
                <Image src={profileIcon} alt="" />
              </a>
              <div className="relative">
                <a href="/cart">
                  <Image src={cart} alt="" />
                </a>
                <p className="h-6 w-6 flex items-center justify-center absolute top-0 left-8 rounded-full bg-red-600 text-white font-semibold text-lg">
                  {carts}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="link flex max-md:hidden justify-center items-center gap-3 px-3">
          {location === "/shop" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="/shop" className="text-black font-bold text-[20px]">
                Shop
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="/shop" className="text-off-gray font-bold text-1xl">
                Shop
              </a>
            </p>
          )}

          {location === "/products" ? (
            <p className="w-16 flex items-center justify-center">
              <a
                href="/products"
                className="text-black font-bold text-[20px]"
              >
                Product
              </a>
            </p>
          ) : (
            <p className="w-16 flex items-center justify-center">
              <a
                href="/products"
                className="text-off-gray font-bold text-1xl"
              >
                Product
              </a>
            </p>
          )}

          {location === "/men" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="" className="text-black font-bold text-[20px]">
                Men
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="" className="text-off-gray font-bold text-1xl">
                Men
              </a>
            </p>
          )}

          {location === "/women" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="" className="text-black font-bold text-[20px]">
                Women
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="" className="text-off-gray font-bold text-1xl">
                Women
              </a>
            </p>
          )}
        </div>

        <div className=" max-sm:hidden border border-off-gray flex rounded-md align-middle items-center justify-center px-4 bg-off-white">
          <div className="flex items-center justify-center gap-2">
            <Image src={searchIcon} alt="" />
            <input
              className="bg-off-white outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        <div className="nav-profile flex gap-2 max-sm:hidden">
          <a href="/profile">
            <Image src={profileIcon} alt="" />
          </a>
          <div className="relative">
            <a href="/cart">
              <Image src={cart} alt="" />
            </a>
            <p className="h-6 w-6 flex items-center justify-center absolute top-0 left-8 rounded-full bg-red-600 text-white font-semibold text-lg">
              {carts}
            </p>
          </div>
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="hidden ham-ico cursor-pointer max-md:flex flex-col justify-center items-center z-50"
        >
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black my-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>
    </div>
  );
};
