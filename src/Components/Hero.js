// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// export default function SummerSale({ buttons }) {
//   const buttonBase =
//     'relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[160px] text-center';

//   const innerBg =
//     'absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0';

//   const innerText =
//     'relative block py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-base font-semibold z-10';

//   return (
//     <div className="relative w-full h-screen bg-black text-white">
//       {/* Background Image */}
//       <Image
//         src="/images/summer-sales-banner.jpg"
//         alt="Summer Sale Background"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         priority
//       />

//       {/* Dynamic Buttons */}
//       <div className="absolute inset-0 flex flex-col justify-end items-start px-6 md:px-20 pb-10 z-10">
//         <div className="flex flex-wrap gap-4">
//           {buttons.map((btn, index) =>
//             btn.href ? (
//               <Link key={index} href={btn.href} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </Link>
//             ) : (
//               <button key={index} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function SummerSale({ buttons }) {
//   const buttonBase =
//     "relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[160px] text-center";

//   const innerBg =
//     "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";

//   const innerText =
//     "relative block py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-base font-semibold z-10";

//   return (
//     <div className="relative w-full h-screen bg-black text-white">
//       {/* Background Image */}
//       <Image
//         src="/images/summer-sales-banner.jpg"
//         alt="Summer Sale Background"
//         fill
//         className="object-cover object-center"
//         priority
//       />

//       {/* ✅ Small Screens: Centered 2x2 Grid */}
//       <div className="absolute inset-0 flex justify-center items-center sm:hidden px-6 z-10">
//         <div className="grid grid-cols-2 gap-4">
//           {buttons.map((btn, index) =>
//             btn.href ? (
//               <Link key={index} href={btn.href} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </Link>
//             ) : (
//               <button key={index} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </button>
//             )
//           )}
//         </div>
//       </div>

//       {/* ✅ sm & above: Bottom-Left Flex */}
//       <div className="hidden sm:flex absolute inset-0 flex-col justify-end items-start px-6 md:px-20 pb-10 z-10">
//         <div className="flex flex-wrap gap-4">
//           {buttons.map((btn, index) =>
//             btn.href ? (
//               <Link key={index} href={btn.href} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </Link>
//             ) : (
//               <button key={index} className={buttonBase}>
//                 <span className={innerBg}></span>
//                 <span className={innerText}>{btn.text}</span>
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SummerSale({ buttons }) {
  // Responsive button base classes
  const buttonBase =
    "relative group overflow-hidden  border border-white transform skew-x-[-12deg] w-[120px] sm:w-[140px] md:w-[160px] text-center";

  const innerBg =
    "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";

  const innerText =
    "relative block py-2 sm:py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-sm sm:text-base font-semibold z-10";
        
        // Responsive height classes donot remove it 
        //NEW: max-[400px]:h-[200px] h-[250px] sm:min-h-[400px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[800px]
        //OLD: h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen
  return (
    <div className="relative w-full max-[400px]:h-[200px] h-[250px] sm:min-h-[400px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[800px] bg-black text-white overflow-hidden">
      {/* Background Image with proper aspect ratio handling */}
      <div className="absolute inset-0">
        <Image
          src="/images/summer-sales-banner.jpg"
          alt="Summer Sale Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* ✅ Small Screens: Centered 2x2 Grid */}
      <div className="absolute inset-0 flex justify-center items-center sm:hidden px-4 z-10">
        <div className="grid grid-cols-2 gap-3">
          {buttons.map((btn, index) =>
            btn.href ? (
              <Link key={index} href={btn.href} className={buttonBase}>
                <span className={innerBg}></span>
                <span className={innerText}>{btn.text}</span>
              </Link>
            ) : (
              <Link href={`/collection/${btn.slug}`} key={index}>
                <button  className={buttonBase}>
                  <span className={innerBg}></span>
                  <span className={innerText}>{btn.text}</span>
                </button>
              </Link>
            )
          )}
        </div>
      </div>

      {/* ✅ sm & above: Bottom-Left Flex */}
      <div className="hidden sm:flex absolute inset-0 flex-col justify-end items-start px-6 md:px-12 lg:px-20 pb-8 sm:pb-10 z-10">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {buttons.map((btn, index) =>
            btn.href ? (
              <Link key={index} href={btn.href} className={buttonBase}>
                <span className={innerBg}></span>
                <span className={innerText}>{btn.text}</span>
              </Link>
            ) : (
              <Link href={`/collection/${btn.slug}`} key={index}>
                <button className={buttonBase}>
                  <span className={innerBg}></span>
                  <span className={innerText}>{btn.text}</span>
                </button>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
