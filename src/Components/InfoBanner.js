"use client";

import Image from "next/image";

export default function InfoBanner() {
  const features = [
    {
      image: "/images/icons/freedelivery.webp",
      title: "Free delivery from 49.99€",
      description: "Service available for European countries.",
    },
    {
      image: "/images/icons/securedpayment.webp",
      title: "Secured payment",
      description:
        "All payments are made through a secure server. No bank details are stored and no one has access to them.",
    },
    {
      image: "/images/icons/customerservice.webp",
      title: "Customer Service",
      description:
        "A question? A problem? We are here for you and offer several ways to contact us.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-start px-4"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl  font-bold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
