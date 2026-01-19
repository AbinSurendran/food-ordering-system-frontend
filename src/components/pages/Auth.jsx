import React from 'react'

function Auth({ Register }) {
  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='md:flex justify-center items-center h-screen bg-orange-500 hidden'>
          <div>
            <div className='flex justify-center items-center  text-white text-9xl font-bold '>🍕</div>
            < div className='flex justify-center items-center text-white text-6xl font-bold mt-10'>TastyBites</div >
            < div className='flex justify-center items-center text-white text-2xl font-bold mt-3'>Delicious food delivered to your doorstep</div >

          </div>

        </div>
        <div className='flex justify-center items-center h-screen '>
          <div className='p-10'>
            {Register ? <div>
              <h1 className='text-4xl text-center font-bold mb-4 text-gray-700'>Create Account</h1>
              <p className='text-2xl text-center  mb-3 text-gray-500'>Join us and start ordering delicious food</p>
            </div> :
              <div>
                <h1 className='text-4xl text-center font-bold mb-4 text-gray-700'>
                  Welcome Back
                </h1>
                <p className='text-2xl text-center  mb-3 text-gray-500'>Sign in to continue ordering</p>
              </div>}
            <div className='flex flex-col justify-center items-center gap-8 mt-10'>
              {Register && <input type="text" placeholder='Full Name' className='border border-gray-300 p-3 rounded-2xl  w-120' />}
              <input type="email" placeholder='Email Address' className='border border-gray-300 p-3 rounded-2xl w-120' />
              <input type="password" placeholder='Password' className='border border-gray-300 p-3 rounded-2xl w-120' />
              {Register ? <button className='bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 transition w-120'>Sign Up</button> :
                <button className='bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 transition w-120'>Login</button>}
            </div>
            <div className='mt-8 flex justify-center items-center text-2xl '>
              {Register ? <p className='text-gray-600'>Already have an account? <a href="/login" className='text-orange-500 font-bold'>Login</a></p> :

                <p className='text-gray-600'>Don't have an account? <a href="/signup" className='text-orange-500 font-bold'>Sign Up</a></p>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Auth