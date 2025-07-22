"use client";
import React from "react";
import Link from "next/link";

export default function SkewedButton({ text, link, className = "" }) {
  const buttonBase =
    "relative overflow-hidden border border-white transform skew-x-[-12deg] w-[160px] text-center group";
  const innerBg =
    "absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0";
  const innerText =
    "relative block py-3 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-base font-semibold z-10";

  return (
    <Link href={link}>
      <div className={`${buttonBase} ${className}`}>
        <span className={innerBg}></span>
        <span className={innerText}>{text}</span>
      </div>
    </Link>
  );
}
