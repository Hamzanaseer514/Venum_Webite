"use client";
import { useRef, useEffect } from "react";
import GloveCard from "./GloveCard";

const gloves = new Array(15).fill(0).map((_, i) => ({
  image: "/images/DiscoverCategory/c5.jpg",
  title: `Venum Contender ${i + 1}`,
  subtitle: "Boxing Gloves - Forest Green",
  price: "49.99€",
  variants: [
    { img: "/images/DiscoverCategory/c5.jpg", selected: true },
    { img: "/images/DiscoverCategory/c5.jpg" },
    { img: "/images/DiscoverCategory/c5.jpg" },
    { img: "/images/DiscoverCategory/c5.jpg" },
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
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Featured Gloves
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
