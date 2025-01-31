"use client";
import React from "react";
import { useState } from "react";

const ColorPicker = () => {
  const [color, SetColor] = useState(3);

  const handleColor = (colored) => {
    SetColor(colored);
  };

  return (
    <div className="py-2 flex items-center gap-3">
      <div
        onClick={() => handleColor(1)}
        className={`w-fit rounded-full ${color === 1 ? "border border-[#3C4242]" : ""}`}
        // className='w-fit border border-red-500'
      >
        <div className="p-[2px] w-fit">
          <div className="w-4 h-4 rounded-full bg-[#3C4242]"></div>
        </div>
      </div>

      <div
        onClick={() => handleColor(2)}
        className={`w-fit rounded-full ${color === 2 ? "border border-[#EDD146]" : ""}`}
        // className='w-fit border border-red-500'
      >
        <div className="p-[2px] w-fit">
          <div className="w-4 h-4 rounded-full bg-[#EDD146]"></div>
        </div>
      </div>

      <div
        onClick={() => handleColor(3)}
        className={`w-fit rounded-full ${color === 3 ? "border border-[#EB84B0]" : ""}`}
        // className='w-fit border border-red-500'
      >
        <div className="p-[2px] w-fit">
          <div className="w-4 h-4 rounded-full bg-[#EB84B0]"></div>
        </div>
      </div>

      <div
        onClick={() => handleColor(4)}
        className={`w-fit rounded-full ${color === 4 ? "border border-[#9C1F35]" : ""}`}
        // className='w-fit border border-red-500'
      >
        <div className="p-[2px] w-fit">
          <div className="w-4 h-4 rounded-full bg-[#9C1F35]"></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
