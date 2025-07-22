import React from 'react';

const MegaMenu = ({ category }) => {
  const getMenuContent = () => {
    switch (category) {
      case 'Women':
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Quick Links */}
                <div className="col-span-2">
                  <div className="space-y-4">
                    <div className="font-bold text-lg text-black">New</div>
                    <div className="font-bold text-lg text-black">Best Seller</div>
                    <div className="font-bold text-lg text-red-500">Outlet</div>
                  </div>
                </div>

                {/* T-shirts & Bras */}
                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">T-shirts & Bras</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Bras</li>
                    <li className="hover:text-black cursor-pointer">Cotton T-shirts & Crop tops</li>
                    <li className="hover:text-black cursor-pointer">Dry Tech T-shirts</li>
                    <li className="hover:text-black cursor-pointer">Compression T-shirts</li>
                    <li className="hover:text-black cursor-pointer">Tank tops</li>
                  </ul>
                </div>

                {/* Shorts */}
                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Shorts</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Training shorts</li>
                    <li className="hover:text-black cursor-pointer">Muay Thai Shorts</li>
                    <li className="hover:text-black cursor-pointer">Compression shorts</li>
                    <li className="hover:text-black cursor-pointer">Fightshort & Vale Tudo</li>
                  </ul>

                  <h3 className="font-bold text-black mb-4 mt-8">Shoes</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Boxing Shoes</li>
                    <li className="hover:text-black cursor-pointer">Wrestling shoes</li>
                    <li className="hover:text-black cursor-pointer">Slides</li>
                  </ul>
                </div>

                {/* Sweatshirts & Others */}
                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Sweatshirts & Jackets</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Zip Jacket</li>
                    <li className="hover:text-black cursor-pointer">Hooded Sweatshirt</li>
                  </ul>

                  <h3 className="font-bold text-black mb-4 mt-8">Pants</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Jogging</li>
                    <li className="hover:text-black cursor-pointer">Leggings</li>
                  </ul>

                  <h3 className="font-bold text-black mb-4 mt-8">Accessories</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Skipping Ropes</li>
                    <li className="hover:text-black cursor-pointer">Socks</li>
                    <li className="hover:text-black cursor-pointer">Hats & Caps</li>
                  </ul>
                </div>

                {/* Tote bag */}
                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Tote bag, backpack and sports bag</h3>
                </div>

                {/* Look of the moment */}
                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Look of the moment</h3>
                  <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4720779/pexels-photo-4720779.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Featured look"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Men':
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-2">
                  <div className="space-y-4">
                    <div className="font-bold text-lg text-black">New</div>
                    <div className="font-bold text-lg text-black">Best Seller</div>
                    <div className="font-bold text-lg text-red-500">Outlet</div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">T-shirts & Tanks</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Cotton T-shirts</li>
                    <li className="hover:text-black cursor-pointer">Dry Tech T-shirts</li>
                    <li className="hover:text-black cursor-pointer">Compression T-shirts</li>
                    <li className="hover:text-black cursor-pointer">Tank tops</li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Shorts & Pants</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Training shorts</li>
                    <li className="hover:text-black cursor-pointer">Muay Thai Shorts</li>
                    <li className="hover:text-black cursor-pointer">Board Shorts</li>
                    <li className="hover:text-black cursor-pointer">Jogging Pants</li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Hoodies & Jackets</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Hooded Sweatshirt</li>
                    <li className="hover:text-black cursor-pointer">Zip Hoodie</li>
                    <li className="hover:text-black cursor-pointer">Training Jacket</li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Equipment</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Boxing Gloves</li>
                    <li className="hover:text-black cursor-pointer">MMA Gloves</li>
                    <li className="hover:text-black cursor-pointer">Shin Guards</li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h3 className="font-bold text-black mb-4">Featured</h3>
                  <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4720776/pexels-photo-4720776.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Featured look"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Equipment':
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">Boxing</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Boxing Gloves</li>
                    <li className="hover:text-black cursor-pointer">Heavy Bags</li>
                    <li className="hover:text-black cursor-pointer">Speed Bags</li>
                    <li className="hover:text-black cursor-pointer">Hand Wraps</li>
                    <li className="hover:text-black cursor-pointer">Mouth Guards</li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">MMA</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">MMA Gloves</li>
                    <li className="hover:text-black cursor-pointer">Grappling Dummy</li>
                    <li className="hover:text-black cursor-pointer">Shin Guards</li>
                    <li className="hover:text-black cursor-pointer">Rash Guards</li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">Training</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Jump Ropes</li>
                    <li className="hover:text-black cursor-pointer">Medicine Balls</li>
                    <li className="hover:text-black cursor-pointer">Resistance Bands</li>
                    <li className="hover:text-black cursor-pointer">Training Mats</li>
                  </ul>
                </div>

                <div className="col-span-3">
                  <h3 className="font-bold text-black mb-4">New Arrivals</h3>
                  <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.pexels.com/photos/4164760/pexels-photo-4164760.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="New equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-black mb-4">Category 1</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Item 1</li>
                    <li className="hover:text-black cursor-pointer">Item 2</li>
                    <li className="hover:text-black cursor-pointer">Item 3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-4">Category 2</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Item 1</li>
                    <li className="hover:text-black cursor-pointer">Item 2</li>
                    <li className="hover:text-black cursor-pointer">Item 3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-4">Category 3</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer">Item 1</li>
                    <li className="hover:text-black cursor-pointer">Item 2</li>
                    <li className="hover:text-black cursor-pointer">Item 3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-4">Featured</h3>
                  <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4164701/pexels-photo-4164701.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Featured item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="animate-fadeIn">
      {getMenuContent()}
    </div>
  );
};

export default MegaMenu;