// "use client";

// import React from "react";

// const SkewedBackgroundComponent = () => {
//   const buttons = [{ text: "Dsicover" }];

//   const buttonBase =
//     "relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[160px] text-center";
//   const innerBg =
//     "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";
//   const innerText =
//     "relative block py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-base font-semibold z-10";

//   return (
//     <div
//       className="relative min-h-[500px] bg-contain bg-center mx-10 mt-10 bg-no-repeat"
//       style={{ backgroundImage: "url('/images/banner.jpg')" }}
//     >
//       <div className="absolute bottom-6 left-36 z-10">
//         {buttons.map((btn, index) => (
//           <button key={index} className={buttonBase}>
//             <span className={innerBg}></span>
//             <span className={innerText}>{btn.text}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkewedBackgroundComponent;
// "use client";

// import React from "react";

// const SkewedBackgroundComponent = () => {
//   const buttons = [{ text: "Discover" }]; // Fixed typo in "Discover"

//   const buttonBase =
//     "relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[120px] sm:w-[160px] text-center";
//   const innerBg =
//     "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";
//   const innerText =
//     "relative block py-2 sm:py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-sm sm:text-base font-semibold z-10";

//   return (
//     <div
//       className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-contain bg-center mx-4 sm:mx-6 md:mx-20 mt-6 sm:mt-8 md:mt-10 bg-no-repeat"
//       style={{ backgroundImage: "url('/images/banner.jpg')" }}
//     >
//       <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 md:left-36 z-10">
//         {buttons.map((btn, index) => (
//           <button key={index} className={buttonBase}>
//             <span className={innerBg}></span>
//             <span className={innerText}>{btn.text}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkewedBackgroundComponent;
"use client";

import React from "react";

const SkewedBackgroundComponent = () => {
  const buttons = [{ text: "Discover" }];

  const buttonBase =
    "relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[120px] sm:w-[160px] text-center";
  const innerBg =
    "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";
  const innerText =
    "relative block py-2 sm:py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-sm sm:text-base font-semibold z-10";

  return (
    <div className="relative mx-4 sm:mx-6 md:mx-20 mt-6 sm:mt-8 md:mt-10">
      <div 
        className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[550px] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 md:left-36">
          {buttons.map((btn, index) => (
            <button key={index} className={buttonBase}>
              <span className={innerBg}></span>
              <span className={innerText}>{btn.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkewedBackgroundComponent;
