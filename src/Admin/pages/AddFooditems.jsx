import React, { useEffect, useState } from 'react'
import AdminSlidebar from '../component/AdminSlidebar'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { AddFoodItemsAPI, AddPopularDishesAPI, CategoriesAPI, getallCategoriesAPI, getallFoodItemsAPI, getallPopDishesAPI } from '../../service/allApi';

function AddFooditems() {
  //modal1 for add food items
  const [modalStatus, setmodalStatus] = useState(false)
  //modal2 for Categories and popular dish
  const [modal2Status, setmodal2Status] = useState(false)
  //state foe search
  const [Search,setSearch]=useState("")
  //state for store categories
  const [categories, setcategories] = useState({
    id: "",
    Name: "",
    icon: ""
  })
  //state for store food items
  const [addFoods,setaddFoods]=useState({
    FName:"",
    price:"",
    image:"",
    category:"",
    description:"",
    preparationTime:""
  })
  //state for store popular dishes
  const [PopDishes,setPopDishees]=useState({
    DName:"",
    Dimage:"",
    DpreparationTime:"",
    Ddescription:"",
    Dprice:"",
    Dcategory:""
  })
  //state for store categories
  const [gettAllcategories, setgetAllcategories] = useState([])
  //state for store Food items
  const [gettAllFooditem, setgetAllFooditme] = useState([])
  //state for store Food items
  const [gettAllPopDishes, setgetAllPopdishes] = useState([])
  console.log(gettAllcategories);
  console.log(gettAllFooditem);
  console.log(addFoods);
  console.log(Search);
  console.log(PopDishes);
  console.log(gettAllPopDishes);
  console.log(categories);
  //useEffect for get categories
  useEffect(()=>{
    getallcate()
    getallFoods()
    PopDishe()
  },[])

  //add categories function
  const Addcategary = async () => {
    try {
      const result = await CategoriesAPI(categories)
      if (result.status > 199 || result.status < 300) {
        console.log(result);
        alert("Categories Details Add Success")

      }
      else {
        alert("Something Went worng")
      }


    } catch (error) {
      console.log(error);

    }
  }

   //add FoodItems function
  const AddFoodItems = async () => {
    try {
      const result = await AddFoodItemsAPI(addFoods)
      if (result.status > 199 || result.status < 300) {
        console.log(result);
        alert("Add FoodItems Details Add Success")

      }
      else {
        alert("Something Went worng is Add FoodItems details")
      }


    } catch (error) {
      console.log(error);

    }
  }

   //add Popular Dishes function
  const AddPopDishes = async () => {
    try {
      const result = await AddPopularDishesAPI(PopDishes)
      if (result.status > 199 || result.status < 300) {
        console.log(result);
        alert("Add Popular Dishes Details Add Success")

      }
      else {
        alert("Something Went worng is Add Popular Dishes details")
      }


    } catch (error) {
      console.log(error);

    }
  }

  //get all categories function

  const getallcate = async () => {
    try {

      const result = await getallCategoriesAPI()

      if (result.status > 199 || result.status < 300) {
        console.log(result);
        setgetAllcategories(result.data)

      }
      else {
        alert("Something Went worng")
      }

    } catch (error) {
      console.log(error);


    }

  }

   //get all Food items function

  const getallFoods = async () => {
    try {

      const result = await getallFoodItemsAPI()

      if (result.status > 199 || result.status < 300) {
        console.log(result);
        setgetAllFooditme(result.data)

      }
      else {
        alert("Something Went worng")
      }

    } catch (error) {
      console.log(error);


    }

  }

   //get all Food items function

  const PopDishe = async () => {
    try {

      const result = await getallPopDishesAPI()

      if (result.status > 199 || result.status < 300) {
        console.log(result);
        setgetAllPopdishes(result.data)

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

          <div className='bg-white mt-10 p-5 rounded-xl shadow-md shadow-gray-200'>
            <h1 className='text-2xl font-bold w-full'>Categories and Popular Dishes</h1>

            <div className='flex gap-5  '>
              <div className='flex flex-col w-full'>
                <h2 className='mt-5 text-gray-600 font-bold'>Categories</h2>
                <div className='flex justify-center items-center w-full mt-5 border-r border-l'>
                  <table className='w-full '>
                    <thead className=''>
                      <tr className='border-b border-gray-400 hover:bg-gray-100'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     { gettAllcategories&&gettAllcategories.map((cate)=>(<tr key={cate.id} className='border-b border-gray-400 hover:bg-gray-100 mt-2'>
                        <td className='h-10 text-center align-center'>{cate.id}</td>
                        <td className='h-10 text-center align-middle'>{cate.Name}</td>
                        <td className='h-10 text-center align-middle'>{cate.icon}</td>
                        <td className='h-10 text-center align-middle '>
                          <button className='p-2 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'><MdOutlineModeEdit className='text-1xl' /></button>
                          <button className='p-2 rounded-xl bg-red-500 text-white'><RiDeleteBinLine className='text-1xl' /></button>
                        </td>
                      </tr>
                    )) }
                    </tbody>
                  </table>

                </div>
                
              </div>
              <div className='flex flex-col w-full'>
                <h2 className='mt-5 text-gray-600 font-bold'>Popular Dishes</h2>
                <div className='flex justify-center items-center w-full mt-5 border-l border-r'>
                  <table className='w-full '>
                    <thead className=''>
                      <tr className='border-b border-gray-400 hover:bg-gray-100'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gettAllPopDishes&&gettAllPopDishes.map((dishe)=>(<tr className='border-b border-gray-400 hover:bg-gray-100'>
                        <td className='h-10 text-center align-center p-2'><img style={{width:"50px",height:"50px"}} className='rounded-2xl' src={dishe.Dimage} alt="" /></td>
                        <td className='h-10 text-center text-sm align-middle p-2'>{dishe.DName}</td>
                        <td className='h-10 text-center text-sm align-middle p-2'></td>
                        <td className='h-10 text-center text-sm align-middle p-2'>{dishe.Dprice}</td>
                        <td className='h-10 text-center align-middle p-2 '>
                          <button className='p-2 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'><MdOutlineModeEdit className='text-1xl' /></button>
                          <button className='p-2 rounded-xl bg-red-500 text-white'><RiDeleteBinLine className='text-1xl' /></button>
                        </td>
                      </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-content items-center bg-white shadow-md shadow-gray-200 mt-10 rounded-xl p-6 '>
            <input onChange={(e)=>setSearch(e.target.value)} className='bg-gray-100 w-full p-5 rounded-xl' type="text" placeholder=' 🔍 Seach Food Items .....' />
          </div>

          <div className='bg-white mt-10 p-5 rounded-xl shadow-md shadow-gray-200'>
            <h1 className='text-2xl font-bold'>All Food Items <span>({gettAllFooditem.length})</span></h1>

            <div className='flex justify-center items-center w-full mt-10 '>
              <table className='w-full '>
                <thead className=''>
                  <tr className='border-b border-gray-400 hover:bg-gray-100'>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Categories</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {gettAllFooditem && gettAllFooditem.filter(foods=> foods?.FName?.toLowerCase().includes(Search.toLowerCase())).map((items)=>(<tr className='border-b border-gray-400 hover:bg-gray-100'>
                    <td className='h-20 text-center align-center'><img style={{width:"60px",height:"60px"}} className='rounded-xl' src={items.image} alt="" /></td>
                    <td className='h-20 text-center align-middle'>{items.FName}</td>
                    <td className='h-20 text-center align-middle'>{items.category}</td>
                    <td className='h-20 text-center align-middle'>{items.price}</td>
                    <td className='h-20 text-center align-middle '>
                      <button className='p-2 rounded-xl text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white ms-1 me-3'><MdOutlineModeEdit className='text-xl' /></button>
                      <button className='p-2 rounded-xl bg-red-500 text-white'><RiDeleteBinLine className='text-xl' /></button>
                    </td>
                  </tr>))
                  }
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
                  <input onChange={(e) => setaddFoods({ ...addFoods, FName: e.target.value })} className='h-12 rounded-xl border border-gray-300 p-5' type="text" placeholder='e.g : Normal Pizza' />
                </div>
                <div className='flex  justify-between  p-3  gap-2'>
                  <div className='flex flex-col w-full'>
                    <label className='font-bold text-gray-600' htmlFor="">Price ($)</label>
                    <input onChange={(e) => setaddFoods({ ...addFoods, price: e.target.value })} className='h-12 rounded-xl border border-gray-300 p-5' type="text" placeholder='10.10' />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label className='font-bold text-gray-600' htmlFor="">Categories</label>
                    <select onChange={(e) => setaddFoods({ ...addFoods, category: e.target.value })} className='h-12 rounded-xl border border-gray-300 text-gray-500 font-bold p-3' name="" id=""> 
                        <option  selected >Selecte Category</option>
                       {gettAllcategories&& gettAllcategories.map((categoray)=>(<>
                        <option key={categoray.id} value={categoray.id}>{categoray.icon} {categoray.Name}</option>
                        </>)) }
                    </select>
                  </div>
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Image URL</label>
                  <input onChange={(e) => setaddFoods({ ...addFoods, image: e.target.value })} className='h-12 rounded-xl border border-gray-300 p-5' type="text" placeholder='http//....' />
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Preparation Time</label>
                  <input onChange={(e) => setaddFoods({ ...addFoods, preparationTime: e.target.value })} className='h-12 rounded-xl border border-gray-300 p-5' type="text" placeholder='20-25 m' />
                </div>
                <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Description</label>
                  <textarea onChange={(e) => setaddFoods({ ...addFoods, description: e.target.value })} className='rounded-xl border border-gray-300 p-5' name="" id="" cols="3" rows="3" placeholder='Describe dish ... '></textarea>
                </div>
                <div className='flex justify-end p-3 gap-2'>
                  <button onClick={() => setmodalStatus(!modalStatus)} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-3 text-lg rounded-2xl'>Cancel</button>
                  <button onClick={AddFoodItems} className='bg-orange-600 text-white p-3 text-lg rounded-2xl'>Add Items</button>
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
                  <h3>Add New Categories List && Popular Dishes</h3>
                  <IoCloseSharp onClick={() => setmodal2Status(!modal2Status)} className='text-2xl cursor-pointer' />

                </div>

                <div className='flex flex-col gap-3'>
                  <div className='  p-3 '>
                    <h2 className='text-gray-600 text-xl font-bold'>Categories List</h2>
                    <div className='flex  justify-center  p-3 gap-3 '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600 ' htmlFor="cid">Cate ID</label>
                        <input onChange={(e) => setcategories({ ...categories, id: e.target.value })} id='cid' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : Id/Name' />
                      </div>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="ci"> Cate Icon</label>
                        <input onChange={(e) => setcategories({ ...categories, icon: e.target.value })} id='ci' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : 🍕' />
                      </div>
                    </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cn">Cate Name</label>
                        <input onChange={(e) => setcategories({ ...categories, Name: e.target.value })} id='cn' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : Pizza' />
                      </div>
                    </div>

                  </div>
                  <div className='border-b'></div>
                  <div className='  p-3'>
                    <h2 className='text-gray-600 text-xl font-bold'>Popular Dishes</h2>
                    <div className='flex  justify-center  p-3 gap-3 '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cid">Name</label>
                        <input onChange={(e) => setPopDishees({ ...PopDishes, DName: e.target.value })} id='cid' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : Name' />
                      </div>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="ci">Price($)</label>
                        <input onChange={(e) => setPopDishees({ ...PopDishes, Dprice: e.target.value })} id='ci' className='h-12 rounded-xl border border-gray-300 p-3 ' type="text" placeholder='    e.g : $ 12.1' />
                      </div>
                    </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        <label className='font-bold text-gray-600' htmlFor="cn">Image URL</label>
                        <input onChange={(e) => setPopDishees({ ...PopDishes, Dimage: e.target.value })} id='cn' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : http//...' />
                      </div>
                    </div>
                    <div className='flex  justify-between  p-3  gap-2'>
                  <div className='flex flex-col w-full'>
                   <label className='font-bold text-gray-600' htmlFor="cn">Preparation Time</label>
                        <input onChange={(e) => setPopDishees({ ...PopDishes, DpreparationTime: e.target.value })} id='cn' className='h-12 rounded-xl border border-gray-300 p-3' type="text" placeholder='    e.g : 20-25 min' />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label className='font-bold text-gray-600' htmlFor="">Categories</label>
                    <select onChange={(e) => setPopDishees({ ...PopDishes, Dcategory: e.target.value })} className='h-12 rounded-xl border border-gray-300 text-gray-500 font-bold p-3' name="" id=""> 
                        <option  selected >Selecte Category</option>
                       {gettAllcategories&& gettAllcategories.map((categoray)=>(<>
                        <option key={categoray.id} value={categoray.id}>{categoray.icon} {categoray.Name}</option>
                        </>)) }
                    </select>
                  </div>
                </div>
                    <div className='flex  justify-center  p-3  '>
                      <div className='flex flex-col w-full'>
                        
                      </div>
                    </div>
                    <div className='flex flex-col justify-center  p-3'>
                  <label className='font-bold text-gray-600' htmlFor="">Description</label>
                  <textarea onChange={(e) => setPopDishees({ ...PopDishes, Ddescription: e.target.value })} className='rounded-xl border border-gray-300 p-5' name="" id="" cols="3" rows="3" placeholder='Describe dish ... '></textarea>
                </div>

                  </div>

                </div>
                <div className='flex justify-end p-3 gap-2'>
                  <button onClick={() => setmodal2Status(!modal2Status)} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-3 text-lg rounded-2xl'>Cancel</button>
                  <button onClick={AddPopDishes}  className='bg-orange-600 text-white p-3 text-lg rounded-2xl'>Add Dishes</button>
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