"use client"

import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Globe } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: 'Summer Sales', href: '#', highlight: true },
    { name: 'New', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'Kids', href: '#' },
    { name: 'Equipment', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Custom', href: '#' },
    { name: 'Venum x UFC', href: '#' },
  ];

  return (
    <nav className="bg-white border-b shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">V</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-black tracking-wider">VENUM</span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      item.highlight 
                        ? 'text-red-500 hover:text-red-600' 
                        : 'text-gray-900 hover:text-red-500'
                    } ${activeMenu === item.name ? 'text-red-500' : ''}`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <Heart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <ShoppingBag className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">EN</span>
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