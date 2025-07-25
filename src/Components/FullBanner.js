"use client";

import React from "react";

const FullBanner = ({ 
  backgroundImage, 
  buttonText = "Discover",
  minHeight = "max-[400px]:h-[200px] h-[250px] sm:min-h-[400px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[700px]"
}) => {
  const buttonBase =
    "relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[120px] sm:w-[160px] text-center";
  const innerBg =
    "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";
  const innerText =
    "relative block py-2 sm:py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-sm sm:text-base font-semibold z-10";

  return (
    <div className="relative w-full">
      <div 
        className={`relative w-full ${minHeight} bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 lg:left-12">
          <button className={buttonBase}>
            <span className={innerBg}></span>
            <span className={innerText}>{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullBanner;