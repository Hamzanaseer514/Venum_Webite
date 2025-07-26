"use client";

import { useState } from "react";
import { X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

const filterOptions = {
  Size: ["S", "M", "L", "XL"],
  Color: ["Red", "Black", "White", "Blue"],
  Family: ["Boxing", "MMA", "BJJ"],
  "Product type": ["Gloves", "Shorts", "Shirts"],
  Gender: ["Men", "Women", "Unisex"],
};

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const toggleDrawer = () => setOpen(!open);

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Show Filters Button */}
      <button
        onClick={toggleDrawer}
        className="flex items-center gap-2 text-white bg-black px-4 py-2 skew-x-[-12deg] font-semibold"
      >
        <span className="skew-x-[12deg]">Show Filters</span>
        <SlidersHorizontal className="w-4 h-4 skew-x-[12deg]" />
      </button>

      {/* Drawer Overlay and Slide-in */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/20"
            onClick={toggleDrawer}
          ></div>

          {/* Sidebar Drawer (slide from left) */}
          <div className="relative w-[320px] bg-white h-full z-50 shadow-xl animate-slide-in-left">
            {/* Close Button */}
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="pt-16 px-4 pb-28 overflow-y-auto h-full text-sm text-black">
              {/* Sort Section */}
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2">Sort by</h3>
                <div className="space-y-1">
                  {[
                    "Best match",
                    "Price: Low to High",
                    "Price: High to Low",
                    "Latest Products",
                    "Popularity",
                  ].map((label, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sort"
                        className="w-3 h-3"
                        defaultChecked={label === "Latest Products"}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300 my-4" />

              {Object.entries(filterOptions).map(([section, options]) => (
                <div key={section} className="mb-3 border-b pb-2">
                  <button
                    className="w-full flex justify-between items-center text-left font-medium"
                    onClick={() => toggleSection(section)}
                  >
                    {section}
                    {expanded[section] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expanded[section] && (
                    <div className="mt-2 pl-2 space-y-1">
                      {options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2">
                          <input type="checkbox" className="w-3 h-3" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Fixed Footer Buttons */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200">
              <button className="w-full bg-black text-white py-2 text-sm font-semibold skew-x-[-12deg] mb-2">
                <span className="skew-x-[12deg]">Show results</span>
              </button>
              <button className="w-full text-xs text-gray-500 underline">
                Reset filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
