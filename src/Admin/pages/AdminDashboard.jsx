import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'
import { GiMoneyStack } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";
import { IoFastFood } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

function AdminDashboard() {
  return (
    <>
      <div className='grid grid-cols-5 min-h-screen'>

        <div className='col-span-1'>
          <AdminSlidebar/>
        </div>
        <div className='col-span-4 p-10 pt-16 lg:p-8 lg:pt-10 bg-gray-100 min-h-screen'>
          <h1 className='text-4xl font-bold text-gray-700'>Dashboard Overview</h1>
          <p className='mt-2 text-lg text-gray-500 font-medium'>Welcome back! Here's what's happening.</p>

          <div className='md:flex justify-center items-center mt-15 gap-4 hidden '>
            
            
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-green-100 p-3 rounded-xl'>
                  <GiMoneyStack className='text-4xl text-green-500' />
              </div>
              <div>
                <h2 className='text-1xl'>Total Revenue</h2>
                <p className='text-3xl font-bold'><span>$</span>71.11</p>
              </div>

            </div>
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-orange-100 p-3 rounded-xl'>
                  <IoBag className='text-4xl text-orange-500' />
              </div>
              <div>
                <h2 className='text-1xl'>Total Order</h2>
                <p className='text-3xl font-bold'>5</p>
              </div>

            </div>
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-gray-100 p-3 rounded-xl'>
                  <GoHistory className='text-4xl ' />
              </div>
              <div>
                <h2 className='text-1xl'>Pending Orders</h2>
                <p className='text-3xl font-bold'>1</p>
              </div>

            </div>
            

          </div>
          <div className='flex justify-center items-center mt-6 gap-4'>
            
            
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-green-100 p-3 rounded-xl'>
                  <TfiPackage className='text-4xl text-green-500' />
              </div>
              <div>
                <h2 className='text-1xl'>Completed Orders</h2>
                <p className='text-3xl font-bold'>5</p>
              </div>

            </div>
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-orange-100 p-3 rounded-xl'>
                  <IoFastFood className='text-4xl text-orange-500' />
              </div>
              <div>
                <h2 className='text-1xl'>Food Items</h2>
                <p className='text-3xl font-bold'>10</p>
              </div>

            </div>
            <div style={{width:"350px",height:"100px"}} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
              <div className='flex justify-center items-center bg-gray-100 p-3 rounded-xl'>
                  <LuUsers className='text-4xl ' />
              </div>
              <div>
                <h2 className='text-1xl'>Total Customers</h2>
                <p className='text-3xl font-bold'>1</p>
              </div>

            </div>
            

          </div>

          <div className='w-full shadow shadow-gray-200 rounded-xl p-5 bg-white mt-15'>
            <h1 className='text-3xl font-bold text-gray-700'>Recent Order</h1>
            <div className='flex flex-col justify-center items-center gap-3 p-2 mt-5'>
              <div className='w-full h-25 shadow-md rounded-xl border border-gray-200'>
                  <div className='flex justify-between items-center p-5'>
                    <div className='gap-1'>
                      <h1 className='text-xl font-bold'>ORD001</h1>
                      <h3 className='text-gray-500 font-bold'>John Doe</h3>
                    </div>
                    <div className='gap-1'>
                      <p className='text-xl font-bold'><span>$</span>22.1</p>
                      <p className='text-gray-500 font-bold'>pending</p>
                    </div>
                  </div>
              </div>
              <div className='w-full h-25 shadow-md rounded-xl border border-gray-200'>
                  <div className='flex justify-between items-center p-5'>
                    <div className='gap-1'>
                      <h1 className='text-xl font-bold'>ORD001</h1>
                      <h3 className='text-gray-500 font-bold'>John Doe</h3>
                    </div>
                    <div className='gap-1'>
                      <p className='text-xl font-bold'><span>$</span>22.1</p>
                      <p className='text-gray-500 font-bold'>pending</p>
                    </div>
                  </div>
              </div>
              <div className='w-full h-25 shadow-md rounded-xl border border-gray-200'>
                  <div className='flex justify-between items-center p-5'>
                    <div className='gap-1'>
                      <h1 className='text-xl font-bold'>ORD001</h1>
                      <h3 className='text-gray-500 font-bold'>John Doe</h3>
                    </div>
                    <div className='gap-1'>
                      <p className='text-xl font-bold'><span>$</span>22.1</p>
                      <p className='text-gray-500 font-bold'>pending</p>
                    </div>
                  </div>
              </div>
              <div className='w-full h-25 shadow-md rounded-xl border border-gray-200'>
                  <div className='flex justify-between items-center p-5'>
                    <div className='gap-1'>
                      <h1 className='text-xl font-bold'>ORD001</h1>
                      <h3 className='text-gray-500 font-bold'>John Doe</h3>
                    </div>
                    <div className='gap-1'>
                      <p className='text-xl font-bold'><span>$</span>22.1</p>
                      <p className='text-gray-500 font-bold'>pending</p>
                    </div>
                  </div>
              </div>
              <div className='w-full h-25 shadow-md rounded-xl border border-gray-200'>
                  <div className='flex justify-between items-center p-5'>
                    <div className='gap-1'>
                      <h1 className='text-xl font-bold'>ORD001</h1>
                      <h3 className='text-gray-500 font-bold'>John Doe</h3>
                    </div>
                    <div className='gap-1'>
                      <p className='text-xl font-bold'><span>$</span>22.1</p>
                      <p className='text-gray-500 font-bold'>pending</p>
                    </div>
                  </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default AdminDashboard