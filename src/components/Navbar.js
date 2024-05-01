import React from 'react'

const Navbar = () => {
  return (
    <div className='text-[#e3defffe] p-3'>
        <div className='flex justify-between list-none md:mx-20 font-bold text-2xl z-10 mt-6'>
          <p className='ml-11 md:ml-0 text'>HTrain</p>
          <p className='hidden md:block text'>Start Here</p>
        </div>
    </div>
  )
}

export default Navbar