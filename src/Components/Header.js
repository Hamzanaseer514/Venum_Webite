"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 17,
    minutes: 28,
    seconds: 16,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBox = ({ value, label }) => (
    <div className="bg-white text-black px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[28px] text-center">
      <div className="text-base leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[8px] uppercase">{label}</div>
    </div>
  );

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center py-2 text-xs font-semibold tracking-wide">
        <span className="mr-3">END OF SUMMER SALES</span>
        <div className="flex items-center space-x-1">
          <TimerBox value={timeLeft.days} label="Days" />
          <span className="text-base">:</span>
          <TimerBox value={timeLeft.hours} label="Hrs" />
          <span className="text-base">:</span>
          <TimerBox value={timeLeft.minutes} label="Min" />
          <span className="text-base">:</span>
          <TimerBox value={timeLeft.seconds} label="Sec" />
        </div>
      </div>

      <div className="bg-black cursor-pointer hover:bg-[#2e2e2e] text-center font-semibold  tracking-wide py-2 text-xs">
        <span>
          Free UPS delivery on orders over 49.99€ in most european countries
          (see conditions)
        </span>
        <span className="ml-2">→</span>
      </div>
    </div>
  );
};

export default Header;
