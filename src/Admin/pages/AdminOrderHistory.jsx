import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'

function AdminOrderHistory() {
    return (
        <>
            <div className='grid grid-cols-5'>

                <div className='col-span-1'>
                    <AdminSlidebar />
                </div>
                <div className='col-span-4 p-10 pt-16 lg:p-8 lg:pt-10 bg-gray-100 min-h-screen'>
                          <h1 className='text-4xl font-bold text-gray-700'>Order History</h1>
                          <p className='mt-2 text-lg text-gray-500 font-medium'>View all past orders and analytics</p>
                
                          <div className='md:flex justify-center items-center mt-15 gap-4 hidden '>
                
                
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                             
                              <div>
                                <h2 className='text-1xl'>Total Orders</h2>
                                <p className='text-3xl font-bold'>1</p>
                              </div>
                
                            </div>
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                             
                              <div>
                                <h2 className='text-1xl'>Completed</h2>
                                <p className='text-3xl font-bold text-green-600'>5</p>
                              </div>
                
                            </div>
                            <div style={{ width: "400px", height: "100px" }} className=' shadow-2xl shadow-gray-200 rounded-xl bg-white p-6 flex gap-5'>
                              
                              <div>
                                <h2 className='text-1xl'>Revenue</h2>
                                <p className='text-3xl font-bold text-green-600'><span>$</span>1</p>
                              </div>
                
                            </div>
                           
                
                
                          </div>
                
                          <div className='flex justify-content items-center bg-white shadow-md shadow-gray-200 mt-10 rounded-xl p-6 '>
                            <select onChange={(e) => setchange({ ...change, name1: e.target.value })}  className='h-12 rounded-xl border border-gray-300 text-gray-500 font-bold p-3 w-full' name="" id="">
                              <option selected value="Selecte Category" disabled>All Status</option>
                              <option value="1">pending</option>
                              <option value="2">comfired</option>
                              <option value="3">ready</option>
                              <option value="4">delivered</option>
                              <option value="4">delivered</option>
                            </select>
                          </div>
                
                
                          <div className='w-full shadow shadow-gray-200 rounded-xl p-5 bg-white mt-15'>
                            <h1 className='text-3xl font-bold text-gray-700'>Active Orders (2)</h1>
                            <div className='flex justify-center items-center w-full mt-10'>
                              <table className='w-full '>
                                <thead className='text-gray-600'>
                                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                                    <th>Image</th>
                                    <th>Customer</th>
                                    <th>Items</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                                    <td className='h-20 text-center align-center text-gray-800 font-bold'>ORD001</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>John Doe</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>2 items</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>34.97</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>Status</td>
                                    <td className='h-20 text-center align-middle text-gray-600'>18:30</td>
                                    <td className='h-20 text-center align-middle text-gray-600 '>
                                      <button className='p-2 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'>e</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                
                            </div>
                
                          </div>
                        </div>

            </div></>
    )
}

export default AdminOrderHistory