import React from "react";
import {
  SummerSalesSection,
  NewArrivalsSection,
  menMenuData,
  womenMenuData,
  kidsMenu,
  equipmentMenuData,
  customMenu,
  venumMenu,
} from "../Data/data.js";

const MegaMenu = ({ category }) => {
  const getMenuContent = () => {
    switch (category) {
      case "Summer Sales":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-2 text-center">
                {SummerSalesSection.map((cat, index) => (
                  <a href={cat.link} key={index} className="block group">
                    <h2 className="font-bold mb-2">{cat.title}</h2>
                    <div className="relative bg-gray-200 aspect-square rounded-lg overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover brightness-70 group-hover:brightness-90 transition duration-300"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      case "New":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-2 text-center">
                {NewArrivalsSection.map((cat, index) => (
                  <a href={cat.link} key={index} className="block group">
                    <h2 className="font-bold mb-2">{cat.title}</h2>
                    <div className="relative bg-gray-200 aspect-square rounded-lg overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover brightness-70 group-hover:brightness-90 transition duration-300"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );

      case "Women":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-6 gap-6">
                {/* Labels */}
                <div>
                  <div className="space-y-3">
                    {womenMenuData.labels.map((label, idx) => (
                      <div
                        key={idx}
                        className={`font-bold text-sm ${
                          label === "Outlet" ? "text-red-500" : "text-black"
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 1: T-shirts + Shoes */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[0].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {womenMenuData.categories[0].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[4].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {womenMenuData.categories[4].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 2: Shorts + Accessories */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[1].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {womenMenuData.categories[1].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[5].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {womenMenuData.categories[5].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 3: Sweatshirts + Bags */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[2].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {womenMenuData.categories[2].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[6].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {womenMenuData.categories[6].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 4: Pants only */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[3].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {womenMenuData.categories[3].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 5: Image */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {womenMenuData.categories[7].name}
                  </h3>
                  <div className="bg-gray-200 rounded-md aspect-square overflow-hidden w-full max-w-[260px]">
                    <img
                      src={womenMenuData.categories[7].image}
                      alt="Look of the moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Men":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-6 gap-6">
                {/* Labels */}
                <div>
                  <div className="space-y-3">
                    {menMenuData.labels.map((label, idx) => (
                      <div
                        key={idx}
                        className={`font-bold text-sm ${
                          label === "Outlet" ? "text-red-500" : "text-black"
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 1: T-shirts + Shoes */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[0].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {menMenuData.categories[0].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[4].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {menMenuData.categories[4].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 2: Shorts + Accessories */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[1].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {menMenuData.categories[1].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[5].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {menMenuData.categories[5].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 3: Sweatshirts + Bags */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[2].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {menMenuData.categories[2].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[6].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {menMenuData.categories[6].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 4: Pants only */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[3].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {menMenuData.categories[3].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 5: Image */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {menMenuData.categories[7].name}
                  </h3>
                  <div className="bg-gray-200 rounded-md aspect-square overflow-hidden w-full max-w-[260px]">
                    <img
                      src={menMenuData.categories[7].image}
                      alt="Look of the moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Equipment":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="grid grid-cols-5 gap-6">
                {/* Column 1: Labels */}
                <div>
                  <div className="space-y-3">
                    {equipmentMenuData.labels.map((label, idx) => (
                      <div
                        key={idx}
                        className={`font-bold text-sm ${
                          label === "Outlet" ? "text-red-500" : "text-black"
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Protectives + Boxing */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[0].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {equipmentMenuData.categories[0].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[1].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {equipmentMenuData.categories[1].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 3: MMA + BJJ */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[2].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {equipmentMenuData.categories[2].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[3].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {equipmentMenuData.categories[3].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 4: Muay Thai + Fitness */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[4].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {equipmentMenuData.categories[4].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[5].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {equipmentMenuData.categories[5].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Column 5: Punching Bags + Motorsports */}
                <div>
                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[6].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-4">
                    {equipmentMenuData.categories[6].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="font-bold text-black text-sm mb-2">
                    {equipmentMenuData.categories[7].name}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {equipmentMenuData.categories[7].subcategories.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="hover:text-black cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "Kids":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-2 text-center">
                {kidsMenu.map((cat, index) => (
                  <a href={cat.link} key={index} className="block group">
                    <h2 className="font-bold mb-2">{cat.title}</h2>
                    <div className="relative bg-gray-200 aspect-square rounded-lg overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover brightness-70 group-hover:brightness-90 transition duration-300"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      case "Custom":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-2 text-center">
                {customMenu.map((cat, index) => (
                  <a href={cat.link} key={index} className="block group">
                    <h2 className="font-bold mb-2">{cat.title}</h2>
                    <div className="relative  aspect-square rounded-lg overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover  transition duration-300"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      case "Venum x UFC":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-5xl mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-4 text-center">
                {venumMenu.map((cat, index) => (
                  <a href={cat.link} key={index} className="block group">
                    {/* Title */}
                    <h2 className="font-bold text-sm mb-2">{cat.title}</h2>

                    {/* Image with light-to-dark transition on hover */}
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover transition duration-500 ease-in-out
                         filter grayscale-[60%] brightness-[1.6] opacity-60 
                         group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );

      case "Collections":
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">
                    Signature Series
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      UFC Collection
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      ONE Championship
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Muay Thai Heritage
                    </li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">Seasonal</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      Summer Collection
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Winter Collection
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Limited Edition
                    </li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">Sport Specific</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                      Boxing Collection
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      MMA Collection
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Muay Thai Collection
                    </li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">New Arrivals</h3>
                  <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://images.pexels.com/photos/4164760/pexels-photo-4164760.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Collections featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = getMenuContent();

  if (!content) {
    return null;
  }

  return <div className="animate-fadeIn">{content}</div>;
};

export default MegaMenu;
