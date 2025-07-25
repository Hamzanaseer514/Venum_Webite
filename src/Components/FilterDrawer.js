"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

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

      {/* Overlay and Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/20 bg-opacity-50"
            onClick={toggleDrawer}
          ></div>

          {/* Sidebar Drawer */}
          <div className="relative w-[400px] bg-white h-full z-50 p-4">
            {/* Close Button */}
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Filter Content */}
            <div className="mt-4 space-y-4 text-sm text-black">
              {/* Sort by section */}
              <div>
                <h3 className="text-base font-semibold mb-2">Sort by</h3>
                <div className="space-y-1">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="w-3 h-3" />
                    Best match
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="w-3 h-3" />
                    Price: Low to High
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="w-3 h-3" />
                    Price: High to Low
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      defaultChecked
                      className="w-3 h-3"
                    />
                    Latest Products
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="w-3 h-3" />
                    Popularity
                  </label>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Filter sections */}
              {["Size", "Color", "Family", "Product type", "Gender"].map(
                (section) => (
                  <div key={section} className="border-b py-1">
                    <button className="w-full flex justify-between items-center text-left font-medium text-sm">
                      {section}
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Footer Buttons */}
            <div className="mt-6 space-y-2">
              <button className="w-full bg-black text-white py-2 text-sm font-semibold skew-x-[-12deg]">
                <span className="skew-x-[12deg]">Show results</span>
              </button>
              <button className="w-full text-xs text-gray-500 underline">
                Reset filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
