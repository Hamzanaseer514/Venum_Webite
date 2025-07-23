"use client";

import React from "react";
import { X, Trash2, Lock } from "lucide-react";
import Image from "next/image";

const RightDrawer = ({ isOpen, onClose, title, items = [], type }) => {
  const subtotal = items
    .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
          <style>{`
            html, body {
              overflow: hidden;
               padding-right: 15px; /* Scrollbar width compensation */
            }
          `}</style>
        </>
      )}

      <div
        className={`fixed top-0 -right-3 w-full max-w-md h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-base font-bold">
            {title} ({items.length})
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 overflow-y-auto space-y-6 h-[calc(100%-200px)]">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 border-b pb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="object-cover rounded-sm"
              />
              <div className="flex flex-col justify-between text-sm flex-1">
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.subtitle}</p>
                  <p className="mt-1 font-medium">{item.price} €</p>
                  <p className="mt-1 text-gray-500 font-medium">
                    Size: {item.size}
                  </p>
                </div>

                {type === "cart" && (
                  <div className="flex items-center justify-between mt-2 border px-3 py-1 w-full text-sm">
                    <button
                      onClick={() => item.onQtyChange(-1)}
                      className="px-3 font-bold text-lg"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => item.onQtyChange(1)}
                      className="px-3 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              <button onClick={item.onRemove}>
                <Trash2 className="w-4 h-4 text-gray-600 hover:text-black" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t space-y-4">
          {type === "cart" ? (
            <>
              <p className="text-sm font-bold">Subtotal: {subtotal} €</p>

              <button
                type="submit"
                className="relative group overflow-hidden border border-black transform skew-x-[-12deg] w-full text-center"
              >
                <span className="absolute inset-0 w-0 bg-black transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative block py-2 px-4 text-black group-hover:text-white transform skew-x-[12deg] transition-colors duration-300 text-sm font-bold z-10">
                  Chekout Cart
                </span>
              </button>

              {/* Continue navigation */}
              <button
                onClick={onClose}
                className="w-full flex justify-center items-center text-sm text-gray-600 underline gap-1"
              >
                Continue navigation <Lock className="w-4 h-4" />
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-600">Saved to favorites.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RightDrawer;
