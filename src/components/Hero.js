import React from 'react'

const Hero = () => {
  return (
    <div className='p-10'>
        <div className='text-[#FAF0E6] text-center mt-[100px] lg:mt-[200px] m-auto'>
            <p className='text-4xl lg:text-7xl font-bold lg:leading-[80px]'>Become the <span className='heading-text font-extrabold'>best</span> version of <br></br>yourself with HTrain.</p>
            <p className='text-xl lg:text-3xl font-semibold'>Stop guessing in the gym. Find what <br></br> works for you here. No BS.</p>
            <button className='md:hidden'>Start Here</button>
        </div>
    </div>
  )
}

export default Hero