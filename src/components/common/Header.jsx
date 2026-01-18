import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
// import { Link } from 'react-router-dom'


function Header() {
   //state for menu toggle 
    const[toggleStatus,settoggleStatus]=useState(false)
  return (
    <>
    <div className='grid grid-cols-3 p-2  shadow-md bg-white-900'>
      <div className='flex  items-center p-3 gap-3'>
        <div style={{borderRadius:"50%",width:"80px",height:"80px",}} className='flex flex -column justify-center items-center  bg-orange-500 .gradient-hero  text-4xl'>🍕</div>
        <div className='text-3xl font-bold '>
          <span className=''>Tasty</span>
          <span className='text-orange-500 gradient-text'>Bites</span>
        </div >
      </div>
      <div className='flex justify-center items-center text-gray-600 '>
        <ul className='md:flex  gap-10 text-xl font-bold hidden'>
          <li className='hover:text-orange-500 cursor-pointer '>Home</li>
          <li className='hover:text-orange-500 cursor-pointer '>Menu</li>
          <li className='hover:text-orange-500 cursor-pointer '>About</li>
          <li className='hover:text-orange-500 cursor-pointer '>Contact</li>
        </ul>
      </div>
      <div className='flex  justify-end items-center text-gray-600 gap-5 mr-5'>
        <div  className='flex justify-center items-center rounded-xl  p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer  '>
          <CiSearch style={{width:"30px",height:"30px"}} />
        </div>
        <div  className='flex justify-center items-center rounded-xl  p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer  '>
          <IoIosContact style={{width:"30px",height:"30px"}} />
        </div>
        <div  className='flex justify-center items-center rounded-xl  p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer  '>
          <PiShoppingCartThin style={{width:"30px",height:"30px"}} />
        </div>
        
      </div>

    </div>

    </>
  )
}

export default Header