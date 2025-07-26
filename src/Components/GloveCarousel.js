"use client";
import { useRef, useEffect } from "react";
import GloveCard from "./GloveCard";
import Link from "next/link";

const gloves = new Array(15).fill(0).map((_, i) => ({
  thumbnail: "/images/DiscoverCategory/c5.jpg",
  title: `Venum Contender ${i + 1}`,
  description: "Boxing Gloves - Forest Green",
  price: "49.99",
  images: [
    "/images/DiscoverCategory/c5.jpg",
    "/images/DiscoverCategory/c5.jpg",
    "/images/DiscoverCategory/c5.jpg",
    "/images/DiscoverCategory/c5.jpg",
  ],
}));

export default function GloveCarousel() {
  const sliderRef = useRef(null);

  const scrollByCard = (direction = "right") => {
    const scrollAmount = direction === "right" ? 380 : -380;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollByCard("right");
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 py-3 px-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          New Release
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => scrollByCard("left")}
            className="w-12 h-12 border border-gray-400 rounded-md text-xl hover:bg-gray-100"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByCard("right")}
            className="w-12 h-12 border border-gray-400 rounded-md text-xl hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
      <Link href="/collection/new-products">
        <h2 className="text-xl underline md:text-2xl font-bold text-gray-500 px-3 mb-3">
          See All
        </h2>
      </Link>

      {/* Cards Row */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {gloves.map((glove, i) => (
          <GloveCard key={i} glove={glove} />
        ))}
      </div>
    </div>
  );
}
