import React from "react";
import Image from "next/image";
import darkArrowDown from '../../public/assets/arrow down dark.svg';
import whiteArrowDown from '../../public/assets/arrow down white.svg';

export const BigSaving = () => {
  return (
    <div className="flex gap-3 flex-col">

      <div className="flex gap-3 justify-between w-full overflow-scroll">

        <div className="hawaliaan-bg w-full rounded-[14px] flex items-center max-sm:min-w-full md::min-w-[33%]">

          <div className=" max-w-44 flex p-5 mr-32 my-auto gap-4 flex-col text-white">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-2xl">Hawalian shirt</h3>
              <p className="text-xs">Dress up in summer vibe</p>
              <p>UP TO 50% OFF</p>
            </div>

            <div className="flex flex-col items-center justify-center w-fit gap-4">
              <div className="w-full">
                <Image className="mx-auto" src={whiteArrowDown} alt="White Arrow Down" />
              </div>

              <button className="border py-1 px-3 rounded-sm ">
                Shop Now
              </button>
            </div>
          </div>

        </div>

        <div className="printed-bg w-full rounded-[14px] flex items-center justify-end max-sm:min-w-full ">

          <div className=" max-w-44 flex justify-end p-5 ml-28 my-auto gap-4 flex-col text-white">
            <button className="bg-off-black p-2 rounded-md">
              Limited Stock
            </button>

            <div className="flex flex-col gap-1 text-right">
              <h3 className="font-bold text-2xl">
                Printed <p>T-shirt</p>
              </h3>
              <p className="text-xs">New Dessign Every Week</p>
              <p>UP TO 40% OFF</p>
            </div>

            <div className="flex flex-col float-right items-end justify-end gap-4">
              <div className="w-28">
                <Image className="mx-auto" src={whiteArrowDown} alt="White Arrow Down" />
              </div>

              <button className="border py-1 px-3 rounded-sm ">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="cargo-bg w-full rounded-[14px] flex items-center justify-end max-sm:min-w-full">

          <div className=" max-w-44  flex p-5 ml-32 my-auto gap-4 flex-col">
            <div className="flex flex-col gap-1 text-off-black">
              <h3 className="font-bold text-2xl">Cargo Joggers</h3>
              <p className="text-xs">Move with style & comfort</p>
              <p>UP TO 50% OFF</p>
            </div>

            <div className="flex flex-col w-fit gap-4">
              <div className="w-28">
                <Image className="mx-auto" src={darkArrowDown} alt="Dark Arrow Down" />
              </div>

              <button className="border border-off-black py-1 px-3 rounded-sm text-off-black">
                Shop Now
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-3 max-sm:flex-wrap max-sm:items-center justify-center">
        <div className="w-1/2 flex max-sm:w-full  rounded-[14px] justify-end max-sm:justify-start items-center urban-bg min ">

          <div className="max-w-44 flex p-5 right-0 mr-14 max-md:m-0 my-auto gap-6 flex-col">
            <div className="flex flex-col gap-3 text-off-black">
              <h3 className="font-bold text-3xl">Urban Shirts</h3>
              <p className="text-sm">Live in comfort</p>
              <p>FLAT 60% OFF</p>
            </div>

            <div className="flex flex-col w-fit gap-4">
              <div className="w-28">
                <Image className="mx-auto" src={darkArrowDown} alt="Dark Arrow Down" />
              </div>

              <button className="border border-off-black py-1 px-3 rounded-sm text-off-black">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="oversized-bg max-sm:w-full w-1/2 flex rounded-[14px] justify-end max-sm:justify-start items-center">

          <div className="max-w-44 flex justify-end p-5 right-0 mr-14 max-md:m-0 my-auto gap-6 flex-col">
            <div className="flex flex-col gap-3 text-off-black">
              <h3 className="font-bold text-3xl">Oversized T-Shirts</h3>
              <p className="text-sm">Street Style Icon</p>
              <p>FLAT 60% OFF</p>
            </div>

            <div className="flex flex-col w-fit gap-4">
              <div className="w-28">
                <Image className="mx-auto" src={darkArrowDown} alt="Dark Arrow Down" />
              </div>

              <button className="border border-off-black py-1 px-3 rounded-sm text-off-black">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
