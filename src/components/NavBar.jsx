import React from 'react'
import {FaUser, FaHeart, FaShoppingCart , FaComment} from "react-icons/fa";

const NavBar = () => {
  return (
        <header className='w-full border-b bg-white'>
          <div className='container mx-auto flex items-center  p-4'>
            {/* logo */}
            <div>
              <img src="logo.svg" alt="" className='mx-w-2xl mx-15'/>
            </div>
            {/* {search bar} */}
            <div className='flex flex-1 max-w-2xl mx-4'>
              <input type="text" 
              placeholder='Search'
              className='border-2 w-full border-blue-500 rounded-l-md p-2  focus:outline-none'/>
              <select name="" id=""
              className="border-2 border-b-blue-500 text-sm hidden sm:block">
                <option>All catagory</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
              <button className='bg-blue-600 text-white px-4 py-2
              rounded-r-md hover:bg-blue-700 border-blue-500 '>Search</button>
            </div>  
            {/*icons*/}
            <div className='flex items-center ml-26 gap-8 text-gray-600 text-sm'>
              <div className=' cursor-pointer hover:text-blue-800'>
                <FaUser color="gray" size={28}/>
              <span className='hidden sm:block'>Profiel</span>
              </div>
              <div className=' cursor-pointer   hover:text-blue-800'>
                <FaComment color="gray"size={28}/>
              <span className='hidden sm:block'>Message</span>
              </div>
              <div className='cursor-pointer hover:text-blue-800'>
                <FaHeart color="gray" size={28} />
                <span className='hidden sm:block'>Orders</span>
              </div>
              <div className=' cursor-pointer   hover:text-blue-800'>
                <FaShoppingCart color="gray" size={28}/>
              <span className='hidden sm:block '>My Cart</span></div>
              </div>
          </div>
        </header>
  )
}

export default NavBar;
