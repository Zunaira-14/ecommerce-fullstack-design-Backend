
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Smart Watch",
    price: 199,
    discount: "-40%",
    image: "/products/watch.svg",
  },
  {
    name: "Laptop",
    price: 899,
    discount: "-20%",
    image: "/products/laptop.svg",
  },

  {
    name: "Cameras",
    price: "350",
    discount: "-40%",
    image: "/products/camera.svg",
  },
  {
    name: "Headphones",
    price: "99",
    discount: "-20%",
    image: "/products/headphone1.svg",
  },
  {
    name: "Smartphones",
    price: "499",
    discount: "-30%",
    image: "/products/phone1.svg",
  },
];

const seed = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products seeded");
  mongoose.disconnect();
};

seed();
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Product from "./models/Product.js";

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI).then(async () => {
//   await Product.deleteMany();

//   await Product.insertMany([
//     {
//       name: "Camera",
//       price: 499,
//       image: "/cloth/plant.svg",
//       category: "electronics",
//       description: "High quality camera",
//       stock: 12,
//     },
//     {
//       name: "Hair Dryer",
//       price: 99,
//       image: "/cloth/t2.svg",
//       category: "beauty",
//       description: "Powerful dryer",
//       stock: 20,
//     },
//   ]);

//   console.log("Sample data added");
//   process.exit();
// });
