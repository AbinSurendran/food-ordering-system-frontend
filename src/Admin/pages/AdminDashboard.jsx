import React from 'react'
import AdminSlidebar from '../component/AdminSlidebar'

function AdminDashboard() {
  return (
    <>
      <div className='grid grid-cols-5'>

        <div className='col-span-1'>
          <AdminSlidebar/>
        </div>
        <div className='col-span-4 p-5'>
          dashboard
        </div>

      </div>

    </>
  )
}

export default AdminDashboard