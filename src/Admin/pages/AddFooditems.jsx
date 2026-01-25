import React, { useState } from 'react'
import AdminSlidebar from '../component/AdminSlidebar'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { CategoriesAPI } from '../../service/allApi';

function AddFooditems() {
  //modal1 for add food items
  const [modalStatus, setmodalStatus] = useState(false)
  //modal2 for Categories and popular dish
  const [modal2Status, setmodal2Status] = useState(false)
  //state for store categories
const [categories,setcategories]=useState({
  id: "", 
  Name: "", 
  icon: ""
})
  const [change, setchange] = useState({
    name1: ""
  })
  console.log(change);
  console.log(categories);

  //add categories function
    const Addcategary=async()=>{
      try {
        const result=await CategoriesAPI(categories)
        if (result.status > 199 || result.status < 300) {
                console.log(result);
                alert("Movies Details Add Success")

            }
            else {
                alert("Something Went worng")
            }
        
        
      } catch (error) {
        console.log(error);
        
      }
    }
  
  return (
    <>
      <div className='grid grid-cols-5 min-h-screen'>

        <div className='col-span-1'>
          <AdminSlidebar />
        </div>
        <div className='col-span-4 p-10 pt-16 lg:p-8 lg:pt-10 bg-gray-100 '>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-4xl font-bold text-gray-700'>Food Management</h1>
              <p className='mt-2 text-lg text-gray-500 font-medium'>Add, edit, or remove menu items.</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <button onClick={() => setmodal2Status(!modal2Status)} className='bg-orange-600 text-white p-3 rounded-2xl font-bold'>+ categories</button>
              <button onClick={() => setmodalStatus(!modalStatus)} className='bg-orange-600 text-white p-3 rounded-2xl font-bold'>+ Add Food Items</button>
            </div>
          </div>

          <div className='flex justify-content items-center bg-white shadow-md shadow-gray-200 mt-10 rounded-xl p-6 '>
            <input className='bg-gray-100 w-full p-2 rounded-xl' type="text" placeholder=' 🔍 Seach Food Items .....' />
          </div>

          <div className='bg-white mt-10 p-5 rounded-xl shadow-md shadow-gray-200'>
            <h1 className='text-2xl font-bold'>All Food Items <span>(1)</span></h1>

            <div className='flex justify-center items-center w-full mt-10'>
              <table className='w-full '>
                <thead className=''>
                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                    <th className='h-12 align-middle'>Image</th>
                    <th>Name</th>
                    <th>Categories</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                    <td className='h-20 text-center align-center'>img</td>
                    <td className='h-20 text-center align-middle'>img</td>
                    <td className='h-20 text-center align-middle'>img</td>
                    <td className='h-20 text-center align-middle'>img</td>
                    <td className='h-20 text-center align-middle '>
                      <button className='p-3 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'><MdOutlineModeEdit className='text-2xl' /></button>
                      <button className='p-3 rounded-xl bg-red-500 text-white'><RiDeleteBinLine className='text-2xl' /></button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>





        </div>

      </div>


      {/* add food items modal */}
      {modalStatus &&
        <div className='relative z-10 overflow-y-auto '>
          <div className='fixed inset-0 bg-gray-500/75 overflow-y-auto '>
            <div className='flex justify-center items-center min-h-screen py-8'>
              <div className='bg-white rounded-2xl md:w-160 w-100 p-5  '>
                <div className='bg-white text-black font-bold text-2xl rounded-xl flex justify-between items-center p-5 '>
                  <h3>Add New Food Items</h3>
                  <IoCloseSharp onClick={() => setmodalStatus(!modalStatus)} className='text-2xl cursor-pointer' />

                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Name</label>
                  <input className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : Normal Pizza' />
                </div>
                <div className='flex  justify-between  p-3  gap-2'>
                  <div className='flex flex-col w-full'>
                    <label className='font-bold text-gray-600' htmlFor="">Price ($)</label>
                    <input className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    10.10' />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label className='font-bold text-gray-600' htmlFor="">Categories</label>
                    <select onChange={(e) => setchange({ ...change, name1: e.target.value })} className='h-12 rounded-xl border border-gray-300 text-gray-500 font-bold p-3' name="" id="">
                      <option selected value="Selecte Category" disabled>Selecte Category</option>
                      <option value="1">1🍣</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Image URL</label>
                  <input className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    http//....' />
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Preparation Time</label>
                  <input className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    20-25 m' />
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Description</label>
                  <textarea className='rounded-xl border border-gray-300 p-2' name="" id="" cols="10" rows="10" placeholder='     Describe dish ... '></textarea>
                </div>
                <div className='flex justify-end p-3 gap-2'>
                  <button onClick={() => setmodalStatus(!modalStatus)} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-3 text-lg rounded-2xl'>Cancel</button>
                  <button className='bg-orange-600 text-white p-3 text-lg rounded-2xl'>Add Items</button>
                </div>
              </div>
            </div>
          </div>
        </div>}



      {/* add food categories */}
      {modal2Status &&
        <div className='relative z-10 overflow-y-auto '>
          <div className='fixed inset-0 bg-gray-500/75 overflow-y-auto '>
            <div className='flex justify-center items-center min-h-screen py-8'>
              <div className='bg-white rounded-2xl md:w-160 w-100 p-5  '>
                <div className='bg-white text-black font-bold text-2xl rounded-xl flex justify-between items-center p-5 '>
                  <h3>Add Categories List && Popular Dishes</h3>
                  <IoCloseSharp onClick={() => setmodal2Status(!modal2Status)} className='text-2xl cursor-pointer' />

                </div>

              <div className='flex flex-col gap-3'>
                  <div className='  p-3 '>
                    <h2 className='text-gray-600 text-xl font-bold'>Categories List</h2>
                    <div className='flex  justify-center  p-3 gap-3 '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cid">Cate ID</label>
                        <input onChange={(e)=>setcategories({...categories,id:e.target.value})} id='cid' className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : Id/Name' />
                      </div>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="ci"> Cate Icon</label>
                        <input onChange={(e)=>setcategories({...categories,Name:e.target.value})} id='ci' className='h-12 rounded-xl border border-gray-300 ' type="text" placeholder='    e.g : 🍕' />
                      </div>
                    </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cn">Cate Name</label>
                        <input onChange={(e)=>setcategories({...categories,icon:e.target.value})} id='cn' className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : Pizza' />
                      </div>
                    </div>
  
                  </div>
                  <div className='border-b'></div>
                  <div className='  p-3'>
                    <h2 className='text-gray-600 text-xl font-bold'>Popular Dishes</h2>
                    <div className='flex  justify-center  p-3 gap-3 '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cid">Name</label>
                        <input id='cid' className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : Name' />
                      </div>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="ci">Price($)</label>
                        <input id='ci' className='h-12 rounded-xl border border-gray-300 ' type="text" placeholder='    e.g : $ 12.1' />
                      </div>
                    </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cn">Image URL</label>
                        <input id='cn' className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : http//...' />
                      </div>
                    </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cn">Preparation Time</label>
                        <input id='cn' className='h-12 rounded-xl border border-gray-300' type="text" placeholder='    e.g : 20-25 min' />
                      </div>
                    </div>
  
                  </div>
  
              </div>
                <div className='flex justify-end p-3 gap-2'>
                  <button onClick={() => setmodal2Status(!modal2Status)} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-3 text-lg rounded-2xl'>Cancel</button>
                  {/* <button className='bg-orange-600 text-white p-3 text-lg rounded-2xl'>Add Dishes</button> */}
                  <button onClick={Addcategary} className='bg-orange-600 text-white p-3 text-lg rounded-2xl'>Add Cate</button>
                </div>
              </div>
            </div>
          </div>
        </div>}




    </>
  )
}

export default AddFooditems