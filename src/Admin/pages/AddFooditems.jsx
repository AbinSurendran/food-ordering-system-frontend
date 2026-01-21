import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'

function AddFooditems() {
  return (
    <>
            <div className='grid grid-cols-5'>

        <div className='col-span-1'>
          <AdminSlidebar/>
        </div>
        <div className='col-span-4 p-5'>
          add food
        </div>

      </div>
    </>
  )
}

export default AddFooditems