"use client";

import { useState } from "react";
import Image from "next/image";

export default function CustomPage() {
  const heading = "Choose your category";
  const categories = ["Custom Gloves", "Custom Kits", "Custom FightShorts"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const imagesByCategory = {
    "Custom Gloves": ["/images/Gifs/1.gif"],
    "Custom Kits": ["/images/Gifs/2.gif"],
    "Custom FightShorts": ["/images/Gifs/3.gif"],
  };

  return (
    <div className="min-h-screen  py-16 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        {heading}
      </h1>

      {/* Categories */}
      <div className="flex items-center justify-start md:justify-between mb-10 flex-wrap gap-6">
        <div className="flex flex-wrap gap-6">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative text-lg md:text-xl font-medium pb-2 overflow-hidden group transition-all duration-300 ${
                  isActive
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-400"
                }`}
              >
                <span
                  className={`relative z-10 ${
                    !isActive
                      ? "group-hover:text-black transition-colors duration-300"
                      : ""
                  }`}
                >
                  {category}
                </span>
                {!isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`grid gap-6 ${
          imagesByCategory[activeCategory].length === 1
            ? "grid-cols-1"
            : imagesByCategory[activeCategory].length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {imagesByCategory[activeCategory].map((src, index) => (
          <div
            key={index}
            className="relative w-full   md:h-[550px] overflow-hidden rounded-xl group"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
