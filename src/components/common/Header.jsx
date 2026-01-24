import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FiUser } from "react-icons/fi";



function Header() {
  //state for menu toggle 
  const [toggleStatus, settoggleStatus] = useState(false)
  return (
    <>
      <div className='grid grid-cols-3 p-2  shadow-md bg-white-900 '>
        <div className='flex  items-center p-3 gap-3'>
          <div style={{ borderRadius: "50%", width: "70px", height: "70px", }} className='flex flex -col justify-center items-center  bg-orange-500  text-4xl'>🍕</div>
          <div className='text-3xl font-bold '>
            <span className=''>Tasty</span>
            <span className='text-orange-500 gradient-text'>Bites</span>
          </div >
        </div>
        <div className='flex justify-center items-center text-gray-600 '>
          <ul className='md:flex justify-center items-center  gap-10 text-xl font-bold  hidden'>
            <Link to={'/'}><li className='hover:text-orange-500 cursor-pointer'>Home</li></Link>
            <Link to={"/menu"}><li className='hover:text-orange-500 cursor-pointer '>Menu</li></Link>
            <Link to={'/about'}><li className='hover:text-orange-500 cursor-pointer '>About</li></Link>
            <Link to={'/contact'}><li className='hover:text-orange-500 cursor-pointer '>Contact</li></Link>
          </ul>
        </div>
        <div className='flex  justify-end items-center text-gray-600 gap-5 mx-5 '>
          <div className='md:flex justify-center items-center rounded-xl  p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer hidden '>
            <CiSearch style={{ width: "30px", height: "30px" }} />
          </div>
          <div className='md:flex justify-center items-center rounded-xl text-gray-500 p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer hidden '>
            <Link to={'/signup'}><FiUser style={{ width: "30px", height: "30px" }} /></Link>
          </div>
          <div className='flex justify-center items-center rounded-xl  p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer  '>
            <PiShoppingCartThin style={{ width: "30px", height: "30px" }} />
          </div>
          <div className='md:hidden flex justify-center items-center  rounded-xl p-2 gap-2 hover:bg-orange-500 hover:text-white font-blod cursor-pointer  '>
            <AiOutlineMenu onClick={()=>settoggleStatus(!toggleStatus)} style={{ width: "30px", height: "30px" }} />
          </div>

        </div>

      </div>
      
        <div className={toggleStatus?'md:hidden flex flex-col':' md:hidden  w-full  justify-center gap-8 mt-3 mb-3 p-5 text-gray-600 hidden '}>
          <div className='flex flex-col w-full gap-5 mt-3 mb-3 p-5 text-gray-600 '>
            <Link to={'/'}><span onClick={()=>settoggleStatus(!toggleStatus)} className=' text-xl font-bold hover:text-orange-500 cursor-pointer p-3 '>Home</span></Link>
            <Link to={"/menu"}><span onClick={()=>settoggleStatus(!toggleStatus)} className=' text-xl font-bold hover:text-orange-500 cursor-pointer p-3'>Menu</span></Link>
            <Link to={'/about'}><span onClick={()=>settoggleStatus(!toggleStatus)} className=' text-xl font-bold hover:text-orange-500 cursor-pointer p-3'>About</span></Link>
            <Link to={'contact'}><span onClick={()=>settoggleStatus(!toggleStatus)} className=' text-xl font-bold hover:text-orange-500 cursor-pointer p-3'>Contact</span></Link> 
          </div>  
        </div>

    </>
  )
}

export default Header