import Image from "next/image";

export default function GloveCard({ glove }) {
  return (
    <div className="min-w-[380px] w-[460px]  rounded-md overflow-hidden flex flex-col text-left">

      {/* Image */}
      <div className="relative w-full h-[380px]">
        <Image
          src={glove.image}
          alt={glove.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-sm flex items-center justify-center">
          <span className="text-lg font-bold">+</span>
        </div>
      </div>

      {/* Content aligned with image */}
      <div className="pt-4 pb-5  pr-5">
        <h3 className="text-lg font-semibold mb-1">{glove.title}</h3>
        <p className="text-sm text-gray-500">{glove.subtitle}</p>
        <p className="text-lg font-bold mt-2">{glove.price}</p>

        {/* Thumbnails */}
        <div className="flex gap-1 mt-3">
          {glove.variants.map((variant, index) => (
            <div
              key={index}
              className={`w-18 h-18 border-2 rounded-md overflow-hidden ${
                variant.selected ? "border-black" : "border-gray-300"
              }`}
            >
              <Image
                src={variant.img}
                alt="thumb"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* 4+ Box */}
        <div className="mt-4 w-18 h-18 border border-black flex items-center justify-center text-sm font-medium rounded-sm">
          4+
        </div>
      </div>
    </div>
  );
}
