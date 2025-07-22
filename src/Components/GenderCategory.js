"use client";
import Image from "next/image";
import SkewedButton from "./ui/SkewedButton";

const genderData = [
  {
    title: "Selection for him",
    image: "/images/men.jpg",
    buttons: [
      { text: "Lifestyle", link: "/men/lifestyle" },
      { text: "Training", link: "/men/training" },
      { text: "Equipment", link: "/men/equipment" },
    ],
  },
  {
    title: "Selection for her",
    image: "/images/women.jpg",
    buttons: [
      { text: "Lifestyle", link: "/women/lifestyle" },
      { text: "Training", link: "/women/training" },
      { text: "Equipment", link: "/women/equipment" },
    ],
  },
];

export default function GenderSelection() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-900 px-10 mb-8">Men and Women</h1>
      <div className="w-full flex flex-col md:flex-row gap-2 p-10">
        {genderData.map((section, idx) => (
          <div key={idx} className="flex-1 relative  overflow-hidden shadow-lg">
            <div className="relative w-full min-h-screen">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-6  left-4 right-0 z-20 flex flex-col">
                <h2 className="text-white text-2xl font-semibold mb-4">
                  {section.title}
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {section.buttons.map((btn, i) => (
                    <SkewedButton key={i} text={btn.text} link={btn.link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
