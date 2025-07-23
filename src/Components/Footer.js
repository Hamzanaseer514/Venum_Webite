// "use client";
// import React, { useState } from "react";
// import {
//   Clock,
//   Phone,
//   Mail,
//   Instagram,
//   Facebook,
//   Youtube,
//   MessageCircle,
// } from "lucide-react";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     console.log("Subscribing email:", email);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-black text-gray-300">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
//           {/* Venum Logo */}
//           <div className="lg:col-span-1 flex items-start">
//             <div className="space-x-2 mb-4">
//               <img
//                 src="/images/logowhite.webp"
//                 alt="Venum Logo"
//                 className="w-40 h-40 object-contain filter invert"
//               />
//             </div>
//           </div>

//           {/* My Account & About Us */}
//           <div className="lg:col-span-1">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               My account
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Login
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Registration
//                 </a>
//               </li>
//             </ul>
//             <h3 className="text-white text-lg font-semibold mt-8 mb-4">
//               About us
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Venum Team
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div className="lg:col-span-0.5">
//             <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Sales Agreement
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Return policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="lg:col-span-1">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Contact us
//             </h3>
//             <p className="text-gray-400 mb-4">
//               Need advice? Information?
//               <br />
//               Contact us.
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-start gap-3">
//                 <Clock className="w-4 h-4 text-gray-400 mt-1" />
//                 <div className="text-sm text-gray-400">
//                   <div>Mon-Fri: 9:00 a.m. - 7:00 p.m.</div>
//                   <div>Sat: 9:00 a.m. - 7:00 p.m.</div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm text-gray-400">+44 20 3966 3629</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm text-gray-400">
//                   help-euro@venum.com
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter - More Width */}
//           <div className="lg:col-span-2">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Venum Newsletter
//             </h3>
//             <p className="text-gray-400 text-sm mb-6">
//               Subscribe to receive exclusive offers and promotions on every
//               order from Venum.
//             </p>
//             <form
//               onSubmit={handleSubscribe}
//               className="flex items-center border-b border-white max-w-md w-full"
//             >
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="My e-mail..."
//                 required
//                 className="flex-1 px-2 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
//               />

//               {/* Custom Skewed Button */}
//               <button
//                 type="submit"
//                 className="relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[120px] text-center ml-4"
//               >
//                 <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0"></span>
//                 <span className="relative block py-2 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-sm font-semibold z-10">
//                   Subscribe
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
//           <div>Copyright © 2025 - Venum.com</div>
//           <div className="flex items-center gap-4">
//             <span className="text-white text-sm">Follow Venum</span>
//             <div className="flex gap-3">
//               <a href="#" className="hover:text-white">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-white">
//                 <Youtube className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import React, { useState } from "react";
import {
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
          {/* Venum Logo */}
          <div className="col-span-2 xs:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 flex items-start">
            <div className="mb-4">
              <img
                src="/images/logowhite.webp"
                alt="Venum Logo"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain filter invert"
              />
            </div>
          </div>

          {/* My Account & About Us */}
          <div className="col-span-1 xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              My account
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Registration
                </a>
              </li>
            </ul>
            <h3 className="text-white text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">
              About us
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Venum Team
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1 xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Help</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Sales Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Return policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 xs:col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact us
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
              Need advice? Information?
              <br />
              Contact us.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-1" />
                <div className="text-xs sm:text-sm text-gray-400">
                  <div>Mon-Fri: 9:00 a.m. - 7:00 p.m.</div>
                  <div>Sat: 9:00 a.m. - 7:00 p.m.</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-xs sm:text-sm text-gray-400">+44 20 3966 3629</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-xs sm:text-sm text-gray-400">
                  help-euro@venum.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter - More Width */}
          <div className="col-span-2 xs:col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2 xl:col-span-2 mt-4 sm:mt-0">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Venum Newsletter
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md">
              Subscribe to receive exclusive offers and promotions on every
              order from Venum.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center border-b border-white max-w-md w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="My e-mail..."
                required
                className="flex-1 px-2 py-1 sm:py-2 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
              />

              {/* Custom Skewed Button */}
              <button
                type="submit"
                className="relative group overflow-hidden border border-white transform skew-x-[-12deg] w-[90px] sm:w-[120px] text-center ml-2 sm:ml-4"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative block py-1 sm:py-2 text-white group-hover:text-black transform skew-x-[12deg] transition-colors duration-300 text-xs sm:text-sm font-semibold z-10">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-3 sm:gap-4">
          <div className="text-center sm:text-left">Copyright © 2025 - Venum.com</div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-white text-xs sm:text-sm">Follow Venum</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
