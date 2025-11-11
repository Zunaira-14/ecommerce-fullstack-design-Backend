import React from "react";

export default function CategoryCard() {
  const categories = [
    {
      title: "Home and Outdoor",
      button: "Source now",
      bgClass: "",
      svg: "/pic.svg", // yahan SVG ka path
      items: [
        { title: "", price: "From USD 19", img: "" },
        { title: "Kitchen mixer", price: "From USD 100", img: "/image/interior/5.svg" },
        { title: "Blenders", price: "From USD 39", img: "/images/blender.png" },
        { title: "Home appliance", price: "From USD 19", img: "/images/home-appliance.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
        { title: "Coffee maker", price: "From USD 10", img: "/images/coffee.png" },
      ],
    },
    {
      title: "Consumer electronics and gadgets",
      button: "Source now",
      bgClass: " from-blue-50 to-white",
      svg: "/pic3.svg", // yahan SVG ka path
      items: [
        { title: "Smart watches", price: "From USD 19", img: "/images/watch-small.png" },
        { title: "Cameras", price: "From USD 89", img: "/images/camera-small.png" },
        { title: "Headphones", price: "From USD 10", img: "/images/headphone-small.png" },
        { title: "Gaming set", price: "From USD 35", img: "/images/gaming.png" },
        { title: "Laptops & PC", price: "From USD 340", img: "/images/laptop-small.png" },
        { title: "Smartphones", price: "From USD 19", img: "/images/phone-small.png" },
        { title: "Electric kettle", price: "From USD 240", img: "/images/kettle.png" },
      ],
    },
  ];

  return (
    <section className="space-y-6 px-4 sm:px-8 md:px-16">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-xl  overflow-hidden relative"
        >
          <div className="grid grid-cols-4 md:grid-cols-5 gap-0">
            {/* Left title block */}
            <div
              className={`${cat.bgClass} relative col-span-1 p-6 flex flex-col justify-center items-start`}
            >
              {/* Background SVG */}
              <img
                src={cat.svg}
                alt="background"
                className="absolute  right-0 top-0  w-full h-full object-contain "
              />

              {/* Text on top */}
              <h4 className="text-lg font-bold leading-tight z-10 relative">
                {cat.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h4>
              <button className="mt-4 bg-white border px-4 py-2 cursor-pointer rounded shadow-sm text-sm hover:bg-gray-50 z-10 relative">
                {cat.button}
              </button>
            </div>

            {/* Right items grid */}
            <div className="col-span-3 md:col-span-4 p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {cat.items.map((it, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex flex-col items-start gap-2 border rounded p-3 hover:shadow-md transition"
                  >
                    <div className="h-16 w-full flex items-center justify-center">
                      <img src={it.img} alt={it.title} className="max-h-12 object-contain" />
                    </div>
                    <div className="text-sm text-gray-700">{it.title}</div>
                    <div className="text-xs text-gray-400">{it.price}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
