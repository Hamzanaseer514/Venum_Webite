"use client";

import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, Globe } from "lucide-react";
import MegaMenu from "./MegaMenu";
import Image from "next/image";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: "Summer Sales", href: "#", highlight: true },
    { name: "New", href: "#" },
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Kids", href: "#" },
    { name: "Equipment", href: "#" },
    { name: "Collections", href: "#" },
    { name: "Custom", href: "#" },
    { name: "Venum x UFC", href: "#" },
  ];

  return (
    <nav className="bg-white border-b shadow-sm relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.avif" // Make sure this path is correct
              alt="VENUM Logo"
              width={120}
              height={60}
              priority
            />
          </div>

          {/* Center: Menu Items */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className={`text-lg relative pb-1 transition-colors duration-200 ${
                    item.highlight
                      ? "text-red-500" 
                      : "text-black" 
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300
          ${
            item.highlight
              ? "bg-red-500 group-hover:w-full"
              : "bg-black group-hover:w-full"
          }
        `}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
            <User className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
            <Heart className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-black" />
              <span className="text-sm text-black">En</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 w-full z-50"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <MegaMenu category={activeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
