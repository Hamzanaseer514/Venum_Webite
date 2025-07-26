// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function CategorySlider({
//   heading,
//   categories = [],
//   products = [],
//   defaultCategory = "",
//   height = "500px",
// }) {
//   const [activeCategory, setActiveCategory] = useState(defaultCategory);
//   const scrollRef = useRef(null);

//   const filteredProducts = activeCategory
//     ? products.filter((product) => product.category === activeCategory)
//     : products;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         if (scrollLeft + clientWidth >= scrollWidth - 5) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//         }
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [activeCategory]);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       const { scrollLeft } = scrollRef.current;
//       if (scrollLeft <= 0) {
//         scrollRef.current.scrollTo({
//           left: scrollRef.current.scrollWidth,
//           behavior: "smooth",
//         });
//       } else {
//         scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
//       }
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       if (scrollLeft + clientWidth >= scrollWidth - 5) {
//         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="py-16">
//         <div className="mb-7 px-8">
//           {heading && (
//             <h1 className="text-5xl font-bold text-gray-900 mb-8">{heading}</h1>
//           )}

//           <div className="flex items-center justify-between">
//             {/* Category buttons (only if available) */}
//             {categories.length > 0 ? (
//               <div className="flex space-x-8">
//                 {categories.map((category) => {
//                   const isActive = activeCategory === category;
//                   return (
//                     <button
//                       key={category}
//                       onClick={() => setActiveCategory(category)}
//                       className={`relative text-xl font-medium pb-2 overflow-hidden group transition-all duration-300 ${
//                         isActive
//                           ? "text-gray-900 border-b-2 border-gray-900"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       <span
//                         className={`relative z-10 ${
//                           !isActive
//                             ? "group-hover:text-black transition-colors duration-300"
//                             : ""
//                         }`}
//                       >
//                         {category}
//                       </span>
//                       {!isActive && (
//                         <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div /> // empty div to preserve layout spacing
//             )}

//             {/* Scroll buttons - always visible */}
//             <div className="flex space-x-2">
//               <button
//                 onClick={scrollLeft}
//                 className="w-14 h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-600" />
//               </button>
//               <button
//                 onClick={scrollRight}
//                 className="w-14 h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex gap-2 overflow-x-auto scroll-smooth hide-scrollbar pb-6 px-8"
//         >
//           {filteredProducts.map((product, index) => (
//             <div
//               key={index}
//               className="min-w-[420px] max-w-[360px] flex-shrink-0 group cursor-pointer border border-gray-200 overflow-hidden shadow-xl"
//             >
//               <div className="relative" style={{ height }}>
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0  bg-opacity-80 p-4">
//                   <h3 className="text-white text-xl font-semibold">
//                     {product.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
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
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  // Adjust scroll amount based on screen size
  const getScrollAmount = () => {
    if (windowWidth < 640) return 280; // mobile
    if (windowWidth < 1024) return 320; // tablet
    return 400; // desktop
  };

  // Get responsive card height
  const getResponsiveHeight = () => {
    // If height is a number (like 500), convert it to px string
    const baseHeight = typeof height === "number" ? `${height}px` : height;
    
    // Calculate responsive height based on screen size
    if (windowWidth < 640) return "300px"; // mobile
    if (windowWidth < 1024) return "400px"; // tablet
    return baseHeight; // desktop (use provided height)
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategory, windowWidth]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      if (scrollLeft <= 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
      }
    }
  };

  // Calculate responsive card width
  const getCardWidthClasses = () => {
    return "min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] max-w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px]";
  };

  return (
    <div className="bg-white">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="mb-4 sm:mb-5 md:mb-7 px-4 sm:px-6 md:px-8">
          {heading && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">{heading}</h1>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            {/* Category buttons (only if available) */}
            {categories.length > 0 ? (
              <div className="flex flex-wrap gap-4 sm:gap-0 sm:space-x-4 md:space-x-8 mb-4 sm:mb-0 overflow-x-auto hide-scrollbar">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative text-base sm:text-lg md:text-xl font-medium pb-2 overflow-hidden group transition-all duration-300 whitespace-nowrap ${
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
            <div className="flex space-x-2 self-end sm:self-auto">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scroll-smooth hide-scrollbar pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`${getCardWidthClasses()} flex-shrink-0 group cursor-pointer border border-gray-200 overflow-hidden shadow-xl rounded-sm`}
            >
              <div 
                className="relative" 
                style={{ height: getResponsiveHeight() }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 p-3 sm:p-4">
                  <h3 className="text-white text-lg sm:text-xl font-semibold truncate">
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

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function CategorySlider({
//   heading,
//   categories = [],
//   products = [],
//   defaultCategory = "",
//   height = "500px",
// }) {
//   const [activeCategory, setActiveCategory] = useState(defaultCategory);
//   const scrollRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1024
//   );

//   const filteredProducts = activeCategory
//     ? products.filter((product) => product.category === activeCategory)
//     : products;

//   // Update window width on resize and initial load
//   useEffect(() => {
//     // Set initial width immediately
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);
//     }

//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//       window.addEventListener("orientationchange", handleResize);
//       return () => {
//         window.removeEventListener("resize", handleResize);
//         window.removeEventListener("orientationchange", handleResize);
//       };
//     }
//   }, []);

//   // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         if (scrollLeft + clientWidth >= scrollWidth - 5) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           const scrollAmount = windowWidth < 640 ? 220 : windowWidth < 1024 ? 300 : 380;
//           scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         }
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [activeCategory, windowWidth]);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       const { scrollLeft } = scrollRef.current;
//       const scrollAmount = windowWidth < 640 ? 220 : windowWidth < 1024 ? 300 : 380;
      
//       if (scrollLeft <= 0) {
//         scrollRef.current.scrollTo({
//           left: scrollRef.current.scrollWidth,
//           behavior: "smooth",
//         });
//       } else {
//         scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       }
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const scrollAmount = windowWidth < 640 ? 220 : windowWidth < 1024 ? 300 : 380;
      
//       if (scrollLeft + clientWidth >= scrollWidth - 5) {
//         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="py-6 sm:py-8 md:py-12">
//         <div className="mb-3 sm:mb-4 md:mb-6 px-3 sm:px-5 md:px-8">
//           {heading && (
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">{heading}</h1>
//           )}

//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
//             {/* Category buttons (only if available) */}
//             {categories.length > 0 ? (
//               <div className="flex flex-wrap gap-3 sm:gap-0 sm:space-x-4 md:space-x-6 mb-3 sm:mb-0 overflow-x-auto hide-scrollbar">
//                 {categories.map((category) => {
//                   const isActive = activeCategory === category;
//                   return (
//                     <button
//                       key={category}
//                       onClick={() => setActiveCategory(category)}
//                       className={`relative text-sm sm:text-base md:text-lg font-medium pb-1 sm:pb-2 overflow-hidden group transition-all duration-300 whitespace-nowrap ${
//                         isActive
//                           ? "text-gray-900 border-b-2 border-gray-900"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       <span
//                         className={`relative z-10 ${
//                           !isActive
//                             ? "group-hover:text-black transition-colors duration-300"
//                             : ""
//                         }`}
//                       >
//                         {category}
//                       </span>
//                       {!isActive && (
//                         <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div /> // empty div to preserve layout spacing
//             )}

//             {/* Scroll buttons - always visible */}
//             <div className="flex space-x-2 self-end sm:self-auto">
//               <button
//                 onClick={scrollLeft}
//                 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
//                 aria-label="Scroll left"
//               >
//                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
//               </button>
//               <button
//                 onClick={scrollRight}
//                 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
//                 aria-label="Scroll right"
//               >
//                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Card container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scroll-smooth hide-scrollbar pb-3 sm:pb-4 md:pb-6 px-3 sm:px-5 md:px-8"
//         >
//           {filteredProducts.map((product, index) => (
//             <div
//               key={index}
//               className="w-[220px] sm:w-[300px] md:w-[350px] lg:w-[380px] flex-shrink-0 group cursor-pointer border border-gray-200 overflow-hidden shadow-md sm:shadow-lg rounded-sm"
//             >
//               <div 
//                 className="relative"
//                 style={{ 
//                   height: windowWidth < 640 ? "260px" : 
//                           windowWidth < 1024 ? "350px" : 
//                           windowWidth < 1280 ? "400px" : "450px" 
//                 }}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   loading={index < 2 ? "eager" : "lazy"}
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 sm:p-3 md:p-4">
//                   <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
//                     {product.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
