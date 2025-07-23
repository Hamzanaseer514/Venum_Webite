// "use client";

// import React, { useState } from "react";
// import { Search, User, Heart, ShoppingBag, Globe } from "lucide-react";
// import MegaMenu from "./MegaMenu";
// import Image from "next/image";

// const Navigation = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const menuItems = [
//     { name: "Summer Sales", href: "#", highlight: true },
//     { name: "New", href: "#" },
//     { name: "Men", href: "#" },
//     { name: "Women", href: "#" },
//     { name: "Kids", href: "#" },
//     { name: "Equipment", href: "#" },
//     { name: "Collections", href: "#" },
//     { name: "Custom", href: "#" },
//     { name: "Venum x UFC", href: "#" },
//   ];

//   return (
//     <nav className="bg-white border-b shadow-sm relative">
//       <div className="max-w-8xl mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between h-12">
//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/images/logo.avif" // Make sure this path is correct
//               alt="VENUM Logo"
//               width={120}
//               height={60}
//               priority
//             />
//           </div>

//           {/* Center: Menu Items */}
//           <div className="hidden lg:flex flex-1 justify-center space-x-6">
//             {menuItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setActiveMenu(item.name)}
//                 // onMouseLeave={() => setActiveMenu(null)}
//               >
//                 <a
//                   href={item.href}
//                   className={`text-sm relative pb-1 transition-colors duration-200 ${
//                     item.highlight ? "text-red-500" : "text-black"
//                   }`}
//                 >
//                   {item.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300
//           ${
//             item.highlight
//               ? "bg-red-500 group-hover:w-full"
//               : "bg-black group-hover:w-full"
//           }
//         `}
//                   />
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-3">
//             <Search className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//             <User className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//             <Heart className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//             <ShoppingBag className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//             <div className="flex items-center space-x-1">
//               <Globe className="w-4 h-4 text-black" />
//               <span className="text-xs font-semibold underline cursor-pointer text-black">En</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu */}
//       {activeMenu && (
//         <div
//           className="absolute top-full left-0 w-full z-50"
//           onMouseEnter={() => setActiveMenu(activeMenu)}
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <MegaMenu category={activeMenu} />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Globe,
  Menu,
  Plus,
  Minus,
} from "lucide-react";
import MegaMenu from "./MegaMenu";
import Image from "next/image";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

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

  const toggleAccordion = (name) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="bg-white border-b shadow-sm relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.avif"
              alt="VENUM Logo"
              width={120}
              height={60}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
              >
                <a
                  href={item.href}
                  className={`text-sm relative pb-1 transition-colors duration-200 ${
                    item.highlight ? "text-red-500" : "text-black"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300
                      ${
                        item.highlight
                          ? "bg-red-500 group-hover:w-full"
                          : "bg-black group-hover:w-full"
                      }`}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Menu
                className="w-6 h-6 text-black cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>

            {/* Desktop icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Search className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
              <User className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
              <Heart className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
              <ShoppingBag className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-black" />
                <span className="text-xs font-semibold underline cursor-pointer text-black">
                  En
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu (desktop only) */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 w-full z-50 hidden lg:block"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <MegaMenu category={activeMenu} />
        </div>
      )}

      {/* Mobile Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 py-4 bg-white border-t shadow-md space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => toggleAccordion(item.name)}
                className={`w-full flex justify-between items-center py-3 text-left text-[17px] font-semibold border-b ${
                  item.highlight ? "text-red-500" : "text-black"
                }`}
              >
                {item.name}
                {expandedItem === item.name ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              {expandedItem === item.name && (
                <div className="pl-5 py-2 text-[15px] text-gray-600 space-y-1">
                  {/* Placeholder for submenu items */}
                  <a href="#" className="block py-1">Sub-item 1</a>
                  <a href="#" className="block py-1">Sub-item 2</a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
