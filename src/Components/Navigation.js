

// "use client";

// import React, { useState } from "react";
// import {
//   Search,
//   User,
//   Heart,
//   ShoppingBag,
//   Globe,
//   Menu,
//   Plus,
//   Minus,
// } from "lucide-react";
// import MegaMenu from "./MegaMenu";
// import Image from "next/image";
// import CartDrawer from "./CartDrawer";

// const Navigation = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [favOpen, setFavOpen] = useState(false);
//   const dummyCart = [
//     {
//       title: "Venum contender 1.5",
//       subtitle: "Boxing Gloves - Gray",
//       price: "44.99",
//       quantity: 1,
//       image: "/images/men.jpg",
//       size: "10 oz",
//       onQtyChange: (val) => console.log("Qty change", val),
//       onRemove: () => console.log("Remove from cart"),
//     },
//   ];
//   const dummyFav = [
//     {
//       title: "Venum contender 1.5",
//       subtitle: "Boxing Gloves - Purple",
//       price: "49.99",
//       image: "/images/women.jpg",
//       onRemove: () => console.log("Remove from fav"),
//     },
//   ];

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

//   const toggleAccordion = (name) => {
//     setExpandedItem((prev) => (prev === name ? null : name));
//   };

//   return (
//     <nav className="bg-white border-b shadow-sm relative">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/images/logo.avif"
//               alt="VENUM Logo"
//               width={120}
//               height={60}
//               priority
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex flex-1 justify-center space-x-6">
//             {menuItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setActiveMenu(item.name)}
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
//                       ${
//                         item.highlight
//                           ? "bg-red-500 group-hover:w-full"
//                           : "bg-black group-hover:w-full"
//                       }`}
//                   />
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-3">
//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <Menu
//                 className="w-6 h-6 text-black cursor-pointer"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               />
//             </div>

//             {/* Desktop icons */}
//             <div className="hidden lg:flex items-center space-x-3">
//               <Search className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//               <User className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//               <Heart
//                 onClick={() => setFavOpen(true)}
//                 className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
//               />
//               <ShoppingBag
//                 onClick={() => setCartOpen(true)}
//                 className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
//               />
//               <div className="flex items-center space-x-1">
//                 <Globe className="w-4 h-4 text-black" />
//                 <span className="text-xs font-semibold underline cursor-pointer text-black">
//                   En
//                 </span>
//               </div>
//             </div>
//             <CartDrawer
//               isOpen={cartOpen}
//               onClose={() => setCartOpen(false)}
//               title="My cart"
//               type="cart"
//               items={dummyCart}
//             />
//             <CartDrawer
//               isOpen={favOpen}
//               onClose={() => setFavOpen(false)}
//               title="My favorites"
//               type="favorite"
//               items={dummyFav}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu (desktop only) */}
//       {activeMenu && (
//         <div
//           className="absolute top-full left-0 w-full z-50 hidden lg:block"
//           onMouseEnter={() => setActiveMenu(activeMenu)}
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <MegaMenu category={activeMenu} />
//         </div>
//       )}

//       {/* Mobile Accordion Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden px-4 py-4 bg-white border-t shadow-md space-y-2">
//           {menuItems.map((item) => (
//             <div key={item.name}>
//               <button
//                 onClick={() => toggleAccordion(item.name)}
//                 className={`w-full flex justify-between items-center py-3 text-left text-[17px] font-semibold border-b ${
//                   item.highlight ? "text-red-500" : "text-black"
//                 }`}
//               >
//                 {item.name}
//                 {expandedItem === item.name ? (
//                   <Minus className="w-5 h-5" />
//                 ) : (
//                   <Plus className="w-5 h-5" />
//                 )}
//               </button>

//               {expandedItem === item.name && (
//                 <div className="pl-5 py-2 text-[15px] text-gray-600 space-y-1">
//                   {/* Placeholder for submenu items */}
//                   <a href="#" className="block py-1">
//                     Sub-item 1
//                   </a>
//                   <a href="#" className="block py-1">
//                     Sub-item 2
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
// "use client";

// import React, { useState } from "react";
// import {
//   Search,
//   User,
//   Heart,
//   ShoppingBag,
//   Globe,
//   Menu,
//   Plus,
//   Minus,
// } from "lucide-react";
// import MegaMenu from "./MegaMenu";
// import Image from "next/image";
// import CartDrawer from "./CartDrawer";
// import Link from "next/link";

// const Navigation = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [favOpen, setFavOpen] = useState(false);
//   const dummyCart = [
//     {
//       title: "Venum contender 1.5",
//       subtitle: "Boxing Gloves - Gray",
//       price: "44.99",
//       quantity: 1,
//       image: "/images/men.jpg",
//       size: "10 oz",
//       onQtyChange: (val) => console.log("Qty change", val),
//       onRemove: () => console.log("Remove from cart"),
//     },
//   ];
//   const dummyFav = [
//     {
//       title: "Venum contender 1.5",
//       subtitle: "Boxing Gloves - Purple",
//       price: "49.99",
//       image: "/images/women.jpg",
//       onRemove: () => console.log("Remove from fav"),
//     },
//   ];

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

//   const toggleAccordion = (name) => {
//     setExpandedItem((prev) => (prev === name ? null : name));
//   };

//   return (
//     <nav className="bg-white border-b shadow-sm relative">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/images/logo.avif"
//               alt="VENUM Logo"
//               width={120}
//               height={60}
//               priority
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex flex-1 justify-center space-x-6">
//             {menuItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setActiveMenu(item.name)}
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
//                       ${
//                         item.highlight
//                           ? "bg-red-500 group-hover:w-full"
//                           : "bg-black group-hover:w-full"
//                       }`}
//                   />
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-3">
//             {/* Mobile icons that appear next to hamburger */}
//             <div className="flex lg:hidden items-center space-x-3">
//               <Link href={"/account/login"}><User className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" /></Link>
//               <Heart
//                 onClick={() => setFavOpen(true)}
//                 className="w-5 h-5 text-black hover:text-red-500 cursor-pointer"
//               />
//               <ShoppingBag
//                 onClick={() => setCartOpen(true)}
//                 className="w-5 h-5 text-black hover:text-red-500 cursor-pointer"
//               />
              
//               {/* Mobile menu button */}
//               <Menu
//                 className="w-6 h-6 text-black cursor-pointer"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               />
//             </div>

//             {/* Desktop icons */}
//             <div className="hidden lg:flex items-center space-x-3">
//               <Search className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
//               <Link href={"/account/login"}><User className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" /></Link>
//               <Heart
//                 onClick={() => setFavOpen(true)}
//                 className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
//               />
//               <ShoppingBag
//                 onClick={() => setCartOpen(true)}
//                 className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
//               />
//               <div className="flex items-center space-x-1">
//                 <Globe className="w-4 h-4 text-black" />
//                 <span className="text-xs font-semibold underline cursor-pointer text-black">
//                   En
//                 </span>
//               </div>
//             </div>
//             <CartDrawer
//               isOpen={cartOpen}
//               onClose={() => setCartOpen(false)}
//               title="My cart"
//               type="cart"
//               items={dummyCart}
//             />
//             <CartDrawer
//               isOpen={favOpen}
//               onClose={() => setFavOpen(false)}
//               title="My favorites"
//               type="favorite"
//               items={dummyFav}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu (desktop only) */}
//       {activeMenu && (
//         <div
//           className="absolute top-full left-0 w-full z-50 hidden lg:block"
//           onMouseEnter={() => setActiveMenu(activeMenu)}
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <MegaMenu category={activeMenu} />
//         </div>
//       )}

//       {/* Mobile Accordion Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden px-4 py-4 bg-white border-t shadow-md space-y-2">
//           {menuItems.map((item) => (
//             <div key={item.name}>
//               <button
//                 onClick={() => toggleAccordion(item.name)}
//                 className={`w-full flex justify-between items-center py-3 text-left text-[17px] font-semibold border-b ${
//                   item.highlight ? "text-red-500" : "text-black"
//                 }`}
//               >
//                 {item.name}
//                 {expandedItem === item.name ? (
//                   <Minus className="w-5 h-5" />
//                 ) : (
//                   <Plus className="w-5 h-5" />
//                 )}
//               </button>

//               {expandedItem === item.name && (
//                 <div className="pl-5 py-2 text-[15px] text-gray-600 space-y-1">
//                   {/* Placeholder for submenu items */}
//                   <a href="#" className="block py-1">
//                     Sub-item 1
//                   </a>
//                   <a href="#" className="block py-1">
//                     Sub-item 2
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
          
//           {/* Additional icons at the end of mobile menu */}
//           <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
//             <div className="flex items-center space-x-1">
//               <Search className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
//               <span className="text-sm font-medium ml-2">Search</span>
//             </div>
            
//             <div className="flex items-center space-x-1">
//               <Globe className="w-5 h-5 text-black" />
//               <span className="text-sm font-semibold underline cursor-pointer text-black">
//                 En
//               </span>
//             </div>
//           </div>
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
import CartDrawer from "./CartDrawer";
import Link from "next/link";
import { 
  SummerSalesSection, 
  NewArrivalsSection,
  menMenuData, 
  womenMenuData, 
  equipmentMenuData, 
  collectionMenuData,
  kidsMenu,
  customMenu,
  venumMenu 
} from '../Data/data.js';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedSubItem, setExpandedSubItem] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const dummyCart = [
    {
      title: "Venum contender 1.5",
      subtitle: "Boxing Gloves - Gray",
      price: "44.99",
      quantity: 1,
      image: "/images/men.jpg",
      size: "10 oz",
      onQtyChange: (val) => console.log("Qty change", val),
      onRemove: () => console.log("Remove from cart"),
    },
  ];
  const dummyFav = [
    {
      title: "Venum contender 1.5",
      subtitle: "Boxing Gloves - Purple",
      price: "49.99",
      image: "/images/women.jpg",
      onRemove: () => console.log("Remove from fav"),
    },
  ];

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
    // Reset sub-item when main item changes
    if (expandedItem !== name) {
      setExpandedSubItem(null);
    }
  };

  const toggleSubAccordion = (name) => {
    setExpandedSubItem((prev) => (prev === name ? null : name));
  };

  const getMobileMenuData = (menuName) => {
    switch(menuName) {
      case 'Summer Sales':
        return SummerSalesSection.map(item => ({ name: item.title, subcategories: [] }));
      case 'New':
        return NewArrivalsSection.map(item => ({ name: item.title, subcategories: [] }));
      case 'Men':
        return menMenuData.categories;
      case 'Women':
        return womenMenuData.categories;
      case 'Equipment':
        return equipmentMenuData.categories;
      case 'Collections':
        return collectionMenuData.categories;
      case 'Kids':
        return kidsMenu.map(item => ({ name: item.title, subcategories: [] }));
      case 'Custom':
        return customMenu.map(item => ({ name: item.title, subcategories: [] }));
      case 'Venum x UFC':
        return venumMenu.map(item => ({ name: item.title, subcategories: [] }));
      default:
        return [];
    }
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
            {/* Mobile icons that appear next to hamburger */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link href={"/account/login"}><User className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" /></Link>
              <Heart
                onClick={() => setFavOpen(true)}
                className="w-5 h-5 text-black hover:text-red-500 cursor-pointer"
              />
              <ShoppingBag
                onClick={() => setCartOpen(true)}
                className="w-5 h-5 text-black hover:text-red-500 cursor-pointer"
              />
              
              {/* Mobile menu button */}
              <Menu
                className="w-6 h-6 text-black cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>

            {/* Desktop icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Search className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" />
              <Link href={"/account/login"}><User className="w-4 h-4 text-black hover:text-red-500 cursor-pointer" /></Link>
              <Heart
                onClick={() => setFavOpen(true)}
                className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
              />
              <ShoppingBag
                onClick={() => setCartOpen(true)}
                className="w-4 h-4 text-black hover:text-red-500 cursor-pointer"
              />
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-black" />
                <span className="text-xs font-semibold underline cursor-pointer text-black">
                  En
                </span>
              </div>
            </div>
            <CartDrawer
              isOpen={cartOpen}
              onClose={() => setCartOpen(false)}
              title="My cart"
              type="cart"
              items={dummyCart}
            />
            <CartDrawer
              isOpen={favOpen}
              onClose={() => setFavOpen(false)}
              title="My favorites"
              type="favorite"
              items={dummyFav}
            />
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
          {menuItems.map((item) => {
            const menuData = getMobileMenuData(item.name);
            
            return (
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
                    {menuData.map((category, index) => (
                      <div key={index}>
                        <button
                          onClick={() => toggleSubAccordion(`${item.name}-${category.name}`)}
                          className={`w-full flex justify-between items-center py-3 px-2 text-left font-semibold transition-all duration-300 rounded-lg border ${
                            expandedSubItem === `${item.name}-${category.name}` 
                              ? 'text-red-600 bg-red-50 border-red-200 shadow-sm' 
                              : 'text-gray-800 hover:text-red-500 hover:bg-gray-50 border-transparent hover:border-gray-200'
                          }`}
                        >
                          <span className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
                              expandedSubItem === `${item.name}-${category.name}` 
                                ? 'bg-red-500' 
                                : 'bg-gray-400'
                            }`}></div>
                            {category.name}
                          </span>
                          {category.subcategories && category.subcategories.length > 0 && (
                            <div className={`transform transition-all duration-300 ${
                              expandedSubItem === `${item.name}-${category.name}` ? 'rotate-180' : 'rotate-0'
                            }`}>
                              {expandedSubItem === `${item.name}-${category.name}` ? (
                                <Minus className="w-4 h-4 text-red-500" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </div>
                          )}
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                          expandedSubItem === `${item.name}-${category.name}` && category.subcategories 
                            ? 'max-h-screen opacity-100 mt-2' 
                            : 'max-h-0 opacity-0 mt-0'
                        }`}>
                          {category.subcategories && (
                            <div className="pl-6 py-2 space-y-2 bg-gray-50 rounded-lg border-l-2 border-red-500">
                              {category.subcategories.map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className={`transform transition-all duration-300 ease-out ${
                                    expandedSubItem === `${item.name}-${category.name}` 
                                      ? 'translate-x-0 opacity-100' 
                                      : 'translate-x-8 opacity-0'
                                  }`}
                                  style={{
                                    transitionDelay: expandedSubItem === `${item.name}-${category.name}` 
                                      ? `${subIndex * 100 + 200}ms` 
                                      : '0ms'
                                  }}
                                >
                                  <a 
                                    href="#" 
                                    className="flex items-center py-2 px-3 text-sm font-medium text-gray-800 hover:text-red-600 hover:bg-white rounded-md transition-all duration-200 hover:shadow-sm hover:translate-x-1 group"
                                  >
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-red-600 transition-colors duration-200"></div>
                                    <span className="flex-1">{subItem}</span>
                                    <div className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all duration-200 ml-2"></div>
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Additional icons at the end of mobile menu */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
            <div className="flex items-center space-x-1">
              <Search className="w-5 h-5 text-black hover:text-red-500 cursor-pointer" />
              <span className="text-sm font-medium ml-2">Search</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Globe className="w-5 h-5 text-black" />
              <span className="text-sm font-semibold underline cursor-pointer text-black">
                En
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;