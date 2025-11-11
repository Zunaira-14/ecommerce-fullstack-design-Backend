// export default function ProductCard({ product }) {
//   return (
//     // <div className="bg-amber-900 shadow-2xl">
//     <div className="bg-white size-40 space-x-7 shadow rounded-lg p-4 flex flex-col items-center text-center hover:scale-105 transition">
//       <img src={product.image} alt={product.name} className="h-24 w-24 object-contain mb-2" />
//       <h3 className="font-semibold">{product.name}</h3>
//       <p className="text-gray-500">{product.price}</p>
//       <span className="text-red-500 text-sm">{product.discount}</span>
//       {/* <img src="b1.svg" alt="" /> */}
//     </div>
//     // </div>
//   );
// }

import React from "react";

export default function DealsSection() {
  const products = [
    {
      name: "Smart Watch",
      price: "$199",
      discount: "-25%",
      image: "w.svg",
    },
    {
      name: "Laptops",
      price: "$899",
      discount: "-15%",
      image: "/public/image/tech/7.svg",
    },
    {
      name: "Cameras",
      price: "$350",
      discount:"-40%",
      image:"/public/image/tech/6.svg",
    },
    {
      name: "Headphones",
      price: "$99",
      discount: "-20%",
      image: "/public/image/tech/5.svg",
    },
    {
      name: "Smartphones",
      price: "$499",
      discount: "-30%",
      image: "/public/image/tech/4.svg",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      {/* ✅ Main Wrapper with shadow and rounded */}
      <div className="bg-white shadow-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Side: Deals and Offers Box */}
          <div className=" text-white rounded-lg p-6 flex flex-col justify-between items-start">
            <div>
              <h2 className="text-2xl text-black font-bold">Deals and offers</h2>
              <p className="text-gray-500 mt-1 text-2xl">Hygiene equipments</p>
            </div>

            {/* Timer */}
            <div className="flex space-x-3 mt-4 ">
              {[
                { value: "04", label: "Days" },
                { value: "13", label: "Hour" },
                { value: "34", label: "Min" },
                { value: "56", label: "Sec" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-600  text-gray-100 rounded-md w-12 h-12 flex flex-col items-center justify-center font-bold text-sm"
                >
                  <span>{item.value}</span>
                  <span className="text-[10px] text-gray-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* <button className="mt-5 bg-white text-blue-600 font-medium px-5 py-2 rounded-md hover:bg-blue-100 transition">
              View All Deals
            </button> */}
          </div>

          {/* Right Side: Product Cards */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border shadow-sm rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-20 object-contain mb-2"
                />
                <h3 className="font-semibold text-gray-800 text-sm">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs">{product.price}</p>
                <span className="text-red-500 text-xs font-semibold mt-1">
                  {product.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
