import React from 'react'
const categories=[
    "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools and equipment",
  "Sports and outdoor",
  "Animals and pets",
  "Machinery tools",
  "More category",
];
const Sidebar = () => {
  return (
    // <aside className='hidden md:block w-1/4 bg-white
    // border rounded-md'>
    //     <ul>
    //       {categories.map((cat)=>(
    //         <li key={cat}
    //         className='p-3 border-b last:border-none
    //         cursor-pointer hover:bg-gray-100'>
    //           {cat}
    //         </li>
    //       ))}
    //     </ul>
    // </aside>
    <div className='shadow-2xs rounded-lg bg-white ml-30 mr-40 rounded-b-lg'>
    <div className='flex  shadow-2xs   mt-10'>
    <div className='mx-3 font-medium text-gray-500 hidden mt-3 md:block w-1/6 h-90  rounded-md'>
      <ul>{categories.map((cat)=>(
        <li key={cat} 
        className='p-2   cursor-pointer hover:bg-gray-100'>{cat}</li>
      ))}
      </ul>
   </div> 
   <div><img src="banner.svg" alt=""
   className=' ml-10 mb-2 w-200 mt-4'/>
    </div>
    <div className=' py-3 space-y-3 p-20'>
    <div className='bg-[#E3F0FF] w-60 text-center rounded-2xl h-40'>
      <div className='flex ml-10 pt-2'>
      <img src="user.svg" alt="" className=''/>
      <p className='font-medium'>Hi,user <br/>let,s get started</p>
      </div>
      <button className='bg-blue-600 text-white px-20 mt-5 cursor-pointer rounded-lg'>join now</button>
      <br/>
      <button className='bg-white text-blue-800 mt-3 px-22 cursor-pointer rounded-lg'>Log in</button>
      </div>
    <div className='bg-[#F38332] h-25 rounded-2xl'>
      <p className='text-white px-10 pt-2 font-medium'>Get Us $10 off <br/>with a new <br/>supplier</p>
    </div>
    <div className='bg-[#55BDC3] h-25 rounded-2xl'>
      <p className='text-white  px-10 pt-2 font-medium'>Send quotes with<br/>supplier<br/>preference</p>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Sidebar
