import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'
import { FiUser } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdBlockFlipped } from "react-icons/md";

function AdminUsers() {
    return (
        <>
            <div className='grid grid-cols-5'>

                <div className='col-span-1'>
                    <AdminSlidebar />
                </div>
                <div className='col-span-4 p-10 pt-16 lg:p-8 lg:pt-10 bg-gray-100 min-h-screen'>
                          <h1 className='text-4xl font-bold text-gray-700'>User Management</h1>
                          <p className='mt-2 text-lg text-gray-500 font-medium'>View and manage registered users</p>
                
                          <div className='md:flex justify-center items-center mt-15 gap-4 hidden'>
                
                
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                              <div className='flex justify-center items-center bg-gray-100 p-3 rounded-xl'>
                                <FiUser className='text-4xl text-gray-500' />
                              </div>
                              <div>
                                <h2 className='text-1xl'>Total Users</h2>
                                <p className='text-3xl font-bold'>1</p>
                              </div>
                
                            </div>
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                              <div className='flex justify-center items-center bg-green-100 p-3 rounded-xl'>
                                <MdOutlineAdminPanelSettings className='text-4xl text-green-500' />
                              </div>
                              <div>
                                <h2 className='text-1xl'>Active</h2>
                                <p className='text-3xl font-bold'>5</p>
                              </div>
                
                            </div>
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                              <div className='flex justify-center items-center bg-red-100 p-3 rounded-xl'>
                                <MdBlockFlipped className='text-4xl text-red-500' />
                              </div>
                              <div>
                                <h2 className='text-1xl'>Blocked</h2>
                                <p className='text-3xl font-bold'>1</p>
                              </div>
                
                            </div>
                            
                          </div>
                
                         
                
                
                          <div className='w-full shadow shadow-gray-200 rounded-xl p-5 bg-white mt-15'>
                            <h1 className='text-3xl font-bold text-gray-700'>Active Orders (2)</h1>
                            <div className='flex justify-center items-center w-full mt-10'>
                              <table className='w-full '>
                                <thead className='text-gray-600'>
                                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Orders</th>
                                    <th>Total Spent</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                                    <td className='h-20 text-center align-center text-gray-800 font-bold'>John Doe</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>user</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>2</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>34.97</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>Status</td>
                                    <td className='h-20 text-center align-middle text-gray-600 '>
                                      <button className='p-2 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'>e</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                
                            </div>
                
                          </div>
                        </div>

            </div>
        </>
    )
}

export default AdminUsers