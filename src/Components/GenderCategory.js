// "use client";
// import Image from "next/image";
// import SkewedButton from "./ui/SkewedButton";

// const genderData = [
//   {
//     title: "Selection for him",
//     image: "/images/men.jpg",
//     buttons: [
//       { text: "Lifestyle", link: "/men/lifestyle" },
//       { text: "Training", link: "/men/training" },
//       { text: "Equipment", link: "/men/equipment" },
//     ],
//   },
//   {
//     title: "Selection for her",
//     image: "/images/women.jpg",
//     buttons: [
//       { text: "Lifestyle", link: "/women/lifestyle" },
//       { text: "Training", link: "/women/training" },
//       { text: "Equipment", link: "/women/equipment" },
//     ],
//   },
// ];

// export default function GenderSelection() {
//   return (
//     <div>
//       <h1 className="text-5xl font-bold text-gray-900 px-10 mb-8">Men and Women</h1>
//       <div className="w-full flex flex-col md:flex-row gap-2 p-10">
//         {genderData.map((section, idx) => (
//           <div key={idx} className="flex-1 relative  overflow-hidden shadow-lg">
//             <div className="relative w-full min-h-screen">
//               <Image
//                 src={section.image}
//                 alt={section.title}
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
//               <div className="absolute bottom-6  left-4 right-0 z-20 flex flex-col">
//                 <h2 className="text-white text-2xl font-semibold mb-4">
//                   {section.title}
//                 </h2>
//                 <div className="flex gap-2 flex-wrap">
//                   {section.buttons.map((btn, i) => (
//                     <SkewedButton key={i} text={btn.text} link={btn.link} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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
    <div className="w-full max-w-[1920px] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10 mb-4 sm:mb-6 md:mb-8">
        Men and Women
      </h1>
      
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10">
        {genderData.map((section, idx) => (
          <div key={idx} className="flex-1 relative overflow-hidden shadow-lg rounded-sm">
            <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center md:items-start px-4 sm:px-6 md:px-8">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 text-center md:text-left">
                  {section.title}
                </h2>
                
                <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-start">
                  {section.buttons.map((btn, i) => (
                    <SkewedButton 
                      key={i} 
                      text={btn.text} 
                      link={btn.link} 
                      className="w-[120px] sm:w-[140px] md:w-[160px]"
                    />
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
