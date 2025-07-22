'use client';

import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/4720773/pexels-photo-4720773.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
          alt="Combat sports background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              SELECTED ITEMS
            </h1>
            <p className="text-xl mb-8 font-medium tracking-wide">
              FROM JUNE 25 TO JULY 22, 2025
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              SHOP NOW
            </button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4720779/pexels-photo-4720779.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Featured athlete"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-sm">UP TO</p>
                <p className="text-2xl font-bold">50% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-red-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rounded-full opacity-20 animate-bounce"></div>
    </div>
  );
};

export default Hero;