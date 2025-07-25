"use client";

import { useEffect, useRef } from "react";
import { X, Search } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <h2 className="text-xl font-semibold">What are you looking for?</h2>
        <button onClick={onClose} className="text-gray-800">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Search Input */}
      <div className="px-6 pb-8 pt-4">
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by keywords, products, collections"
            className="w-full border-b border-gray-400 py-3 pr-10 text-base focus:outline-none"
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
