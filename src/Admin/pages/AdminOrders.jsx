import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'

function AdminOrders() {
  return (
    <>
          <div className='grid grid-cols-5'>

        <div className='col-span-1'>
          <AdminSlidebar/>
        </div>
        <div className='col-span-4 p-5'>
          order
        </div>

      </div>
    </>
  )
}

export default AdminOrders