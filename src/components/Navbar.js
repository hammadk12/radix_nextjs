import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white p-3'>
        <div className='flex justify-between list-none md:mx-20 font-bold text-2xl z-10'>
          <p className='ml-12'>HTrain</p>
          <p className='hidden md:block'>Start Here</p>
        </div>
    </div>
  )
}

export default Navbar