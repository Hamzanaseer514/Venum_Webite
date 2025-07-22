"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySlider({
  heading,
  categories = [],
  products = [],
  defaultCategory = "",
  height = "500px",
}) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const scrollRef = useRef(null);

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      if (scrollLeft <= 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <div className="mb-7 px-8">
          {heading && (
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{heading}</h1>
          )}

          <div className="flex items-center justify-between">
            {/* Category buttons (only if available) */}
            {categories.length > 0 ? (
              <div className="flex space-x-8">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative text-xl font-medium pb-2 overflow-hidden group transition-all duration-300 ${
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
            ) : (
              <div /> // empty div to preserve layout spacing
            )}

            {/* Scroll buttons - always visible */}
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                className="w-14 h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={scrollRight}
                className="w-14 h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scroll-smooth hide-scrollbar pb-6 px-8"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[420px] max-w-[360px] flex-shrink-0 group cursor-pointer border border-gray-200 overflow-hidden shadow-xl"
            >
              <div className="relative" style={{ height }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0  bg-opacity-80 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
