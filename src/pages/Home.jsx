// // import React from 'react'
// // import Sidebar from '../components/Sidebar'
// // import HeroBanner from '../components/HeroBanner'
// // import ProductCard from '../components/ProductCard'
// // const Home = () => {
// //   return (
// //     <div>
      
// //       <Sidebar/>
// //       <ProductCard/>
// //         <HeroBanner/>
     
// //     </div>
// //   )
// // }

// // export default Home
// import React from "react";
// import Sidebar from "../components/Sidebar";
// import HeroBanner from "../components/HeroBanner";
// import ProductCard from "../components/ProductCard";
// import { deals } from "../pages/Data"; 

// const Home = () => {
//   return (
//     <div>
//       <Sidebar />
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//         {deals.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>
//       <HeroBanner/>
//     </div>
//   );
// };

// export default Home;
import { deals, categories } from "../pages/Data";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import HeroInquiry from "../components/HeroInquiry";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <Sidebar/>
      {/* Deals Section */}
      {/* <div>
        <h2 className="text-xl font-bold mb-4">Deals and Offers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
     </div> */}
     <ProductCard/>

      {/* Categories */}
      {/* {categories.map((cat) => (
        <div key={cat.id}>
          <h2 className="text-xl font-bold mb-4">{cat.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cat.items.map((item, idx) => (
              <CategoryCard key={idx} item={item} />
            ))}
          </div>
        </div>
      ))} */}
      <CategoryCard/>

      {/* Inquiry Hero */}
      <HeroInquiry />
    </div>
  );
}
