"use client"
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 17,
    minutes: 28,
    seconds: 16
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center py-3 text-sm font-bold tracking-wider">
        <span className="mr-4">END OF SUMMER SALES</span>
        <div className="flex space-x-2">
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold min-w-[40px] text-center">
            <div className="text-lg leading-none">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-[10px] uppercase">Days</div>
          </div>
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold min-w-[40px] text-center">
            <div className="text-lg leading-none">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-[10px] uppercase">Hrs</div>
          </div>
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold min-w-[40px] text-center">
            <div className="text-lg leading-none">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-[10px] uppercase">Mins</div>
          </div>
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold min-w-[40px] text-center">
            <div className="text-lg leading-none">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-[10px] uppercase">Sec</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-center py-2 text-sm">
        <span>Free UPS delivery on orders over 49.99€ in most european countries (see conditions)</span>
        <span className="ml-2">→</span>
      </div>
    </div>
  );
};

export default Header;