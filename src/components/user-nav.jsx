'use client';
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "../../public/assets/search.png"
import cart from "../../public/assets/cart.png";
import logo from "../../public/assets/Logo.webp";
import profileIcon from "../../public/assets/profile icon.png";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/CartContext";

export const UserNav = () => {
  const [menu, setMenu] = useState(false);
  const [order, setOrder] = useState([])

  const location = usePathname();

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-8 max-sm:px-1 max-sm:py-2 py-4 w-full">
        <a href="/">
          <Image src={logo} alt="" className="" />
        </a>

        {menu && (
          <div className="absolute z-20 w-full h-screen p-10 bg-white top-0 left-0">
            <div className="hidden max-md:flex flex-col justify-center items-center gap-8 px-3">
              {location === "/" ? (
                <p className="w-11 flex items-center justify-center">
                  <a href="/" className="text-black font-bold text-[20px]">
                    Shop
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="/" className="text-off-gray font-bold text-1xl">
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
                  <a href="/men" className="text-black font-bold text-[20px]">
                    Men
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="/men" className="text-off-gray font-bold text-1xl">
                    Men
                  </a>
                </p>
              )}

              {location === "/women" ? (
                <p className="w-11 flex items-center justify-center">
                  <a href="/women" className="text-black font-bold text-[20px]">
                    Women
                  </a>
                </p>
              ) : (
                <p className="w-11 flex items-center justify-center">
                  <a href="/women" className="text-off-gray font-bold text-1xl">
                    Women
                  </a>
                </p>
              )}
            </div>

            <div className="nav-profile flex justify-center items-center my-8 gap-2">
              <a href="/profile">
                <Image src={profileIcon} alt="" />
              </a>
              <div className="relative">
                <a href="/cart">
                  <Image src={cart} alt="" />
                </a>

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="link flex max-md:hidden justify-center items-center gap-5 px-3">
          {location === "/" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="/" className="text-black font-bold text-[20px]">
                Shop
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="/" className="text-off-gray font-bold text-1xl">
                Shop
              </a>
            </p>
          )}

          {location === "/products" ? (
            <p className="w-16 flex items-center justify-center">
              <a href="/products" className="text-black font-bold text-[20px]">
                Product
              </a>
            </p>
          ) : (
            <p className="w-16 flex items-center justify-center">
              <a href="/products" className="text-off-gray font-bold text-1xl">
                Product
              </a>
            </p>
          )}

          {location === "/men" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="/men" className="text-black font-bold text-[20px]">
                Men
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="/men" className="text-off-gray font-bold text-1xl">
                Men
              </a>
            </p>
          )}

          {location === "/women" ? (
            <p className="w-11 flex items-center justify-center">
              <a href="/women" className="text-black font-bold text-[20px]">
                Women
              </a>
            </p>
          ) : (
            <p className="w-11 flex items-center justify-center">
              <a href="/women" className="text-off-gray font-bold text-1xl">
                Women
              </a>
            </p>
          )}
        </div>

        <div className="h-full max-sm:hidden border border-off-gray flex rounded-md align-middle items-center justify-center px-4 bg-off-white">
          <div className="flex items-center justify-center gap-2 h-full">
            <Image src={searchIcon} alt="" />
            <input
              className="bg-off-white outline-none py-2"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        <div className="nav-profile flex gap-2 max-md:hidden">
          <a href="/profile">
            <Image src={profileIcon} alt="" />
          </a>
          <div className="relative">
            <a href="/cart">
              <Image src={cart} alt="" />
            </a>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="hidden w-7 h-6 max-md:flex flex-col justify-between items-center cursor-pointer z-50"
        >
          <div
            className={`w-full h-1 bg-black transition-transform ${menu ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-full h-1 bg-black transition-opacity ${menu ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-full h-1 bg-black transition-transform ${menu ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};
