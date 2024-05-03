import { Flex, Button } from '@radix-ui/themes'
import React from 'react'

const Hero = () => {
  return (
    <div className='p-10 mb-[280px] mt-[120px] md:mb-[260px] m-10 md:mx-20 lg:mb-[240px] lg:mx-[400px] lg:mt-[80px]'>
        <div className='text-[#e3defffe] text-left m-auto'>
            <p className='text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold mb-[-2px] '>Evolve your workouts. Make progress. Reap the rewards.</p>
            <p className='text-xl md:text-2xl lg:text-3xl'>HTrain takes the guesswork out of your training. Build a routine that works for you.</p>
            <Flex justify="left" className='md:justify-center'>
              <Button variant='solid' color='purple' className='px-10 py-5 rounded-md font-extrabold text-white mb-8'>Explore</Button>
            </Flex>
        </div>
    </div>
  )
}

export default Hero
