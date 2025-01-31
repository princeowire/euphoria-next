'use client'
import React, { useState } from "react";

const SizePicker = () => {
  const [selectedSize, setSelectedSize] = useState("L"); // default selected size

  const handleSizeClick = (size) => {
    setSelectedSize(size); // set the clicked size as the selected size
  };

  return (
    <div className="py-2 flex gap-4 items-center">
      <span
        onClick={() => handleSizeClick("XS")}
        className={`p-1 min-w-8 h-8 rounded-md flex items-center justify-center border border-off-gray ${selectedSize === "XS" ? "bg-[#092234] text-white" : ""}`}
      >
        XS
      </span>
      
      <span
        onClick={() => handleSizeClick("S")}
        className={`p-1 min-w-8 h-8 rounded-md flex items-center justify-center border border-off-gray ${selectedSize === "S" ? "bg-[#092234] text-white" : ""}`}
      >
        S
      </span>

      <span
        onClick={() => handleSizeClick("M")}
        className={`p-1 min-w-8 h-8 rounded-md flex items-center justify-center border border-off-gray ${selectedSize === "M" ? "bg-[#092234] text-white" : ""}`}
      >
        M
      </span>

      <span
        onClick={() => handleSizeClick("L")}
        className={`p-1 min-w-8 h-8 rounded-md flex items-center justify-center border border-off-gray ${selectedSize === "L" ? "bg-[#092234] text-white" : ""}`}
      >
        L
      </span>

      <span
        onClick={() => handleSizeClick("XL")}
        className={`p-1 min-w-8 h-8 rounded-md flex items-center justify-center border border-off-gray ${selectedSize === "XL" ? "bg-[#092234] text-white" : ""}`}
      >
        XL
      </span>
    </div>
  );
};

export default SizePicker;
