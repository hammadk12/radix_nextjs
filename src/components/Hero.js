import { Flex, Button } from '@radix-ui/themes'
import React from 'react'

const Hero = () => {
  return (
    <div className='p-10 mb-[300px] md:mb-[340px] lg:mb-[280px] card-bg m-10 md:m-20 lg:mx-[400px] rounded-3xl'>
        <div className='text-[#FAF0E6] text-center m-auto'>
            <p className='text-4xl md:text-6xl lg:text-7xl lg:leading-[80px] font-semibold'>Become the <span className='font-extrabold'>best</span> version of <br></br>yourself with HTrain.</p>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>Stop guessing in the gym. Find what <br></br> works for you here. <span className='font-extrabold'>No BS.</span></p>
            <Flex justify="center">
              <Button variant='solid' color='violet' className='px-6 py-3 rounded-md font-bold md:hidden'>Start Here</Button>
            </Flex>
        </div>
    </div>
  )
}

export default Hero