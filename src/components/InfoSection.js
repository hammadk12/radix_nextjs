import React from 'react'
import { Flex, Grid } from '@radix-ui/themes'
import { Select } from '@radix-ui/themes'

const InfoSection = () => {
  return (
    <div className='mx-10 md:mx-20 lg:mx-[200px]  rounded-3xl text-[#e3defffe] outline'>
      <Grid
        className='grid md:grid-flow-row w-full h-[100vh] text-center md:gap-x-40 p-12'
        columns={{ sm: '1fr', md: '1fr 1fr' }}
        rows="1fr 1fr 1fr"
      >
        <div className='outline'>
          <h2 className='text-3xl lg:text-5xl'>Everything in <span className='font-extrabold text-[#FFFFFF]'>one</span> place.</h2>
          <Select.Root defaultValue='Select' size="2">
          <p>Select Experience Level: </p>
            <Select.Trigger color='purple' variant='solid'/>
            <Select.Content color='purple' variant='soft' position='popper' highContrast>
                <Select.Item value='Beginner'>Beginner: I know nothing/very little about the gym 🤷‍♂️</Select.Item>
                <Select.Item value='Intermediate'>Intermediate: I know a little about working out 🏋️</Select.Item>
                <Select.Item value='Advanced'>Advanced: I know how to workout 🦾</Select.Item>
            </Select.Content>
          </Select.Root> 
         
        </div>
        <div className='md:flex justify-center items-center outline'>
          <h4>Choose your experience level, your goal, and tell us what you like. It’s as simple as that.</h4>
        </div>
        <div className='outline'>
          <h2 className='text-3xl lg:text-5xl'>Get started in minutes.</h2>
        </div>
        <div className='md:flex justify-center items-center outline'>
          <h4>After HTrain processes your goals, you’ll receive a custom plan just for you.</h4>
        </div>
        <div className='outline'>
          <h2 className='text-3xl lg:text-5xl'>Reach your goals.</h2>
        </div>
        <div className='md:flex justify-center items-center outline'>
          <h4>Track your progress, reach your goals, and achieve what you always wanted.</h4>
        </div>
      </Grid>
      </div>
  )
}

export default InfoSection
