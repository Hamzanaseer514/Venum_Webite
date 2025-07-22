'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SummerSale({ buttons }) {
  const buttonBase =
    'relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[160px] text-center';

  const innerBg =
    'absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0';

  const innerText =
    'relative block py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-base font-semibold z-10';

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Background Image */}
      <Image
        src="/images/summer-sales-banner.jpg"
        alt="Summer Sale Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      {/* Dynamic Buttons */}
      <div className="absolute inset-0 flex flex-col justify-end items-start px-6 md:px-20 pb-10 z-10">
        <div className="flex flex-wrap gap-4">
          {buttons.map((btn, index) =>
            btn.href ? (
              <Link key={index} href={btn.href} className={buttonBase}>
                <span className={innerBg}></span>
                <span className={innerText}>{btn.text}</span>
              </Link>
            ) : (
              <button key={index} className={buttonBase}>
                <span className={innerBg}></span>
                <span className={innerText}>{btn.text}</span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
