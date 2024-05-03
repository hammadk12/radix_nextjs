import React from 'react'
import { Grid } from '@radix-ui/themes'
import { Select } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'


const InfoSection = () => {
  return (
    <div className='mx-10 md:mx-20 lg:mx-[200px] rounded-3xl text-[#e3defffe] outline mb-[200px] md:p-4 alt-font'>
      <Grid
        className='grid md:grid-flow-row w-full text-center md:gap-x-32 p-12 lg:gap-y-20'
        columns={{ sm: '1fr', md: '1fr 1fr' }}
        rows="1fr 1fr 1fr"
      >
        <div className=''>
          <h2 className='text-3xl lg:text-5xl'>Everything in <span className='font-extrabold text-[#FFFFFF]'>one</span> place.</h2>
          <Select.Root defaultValue='Select' size="2">
          <p>Select Experience Level: </p>
            <Select.Trigger color='purple' variant='solid' className='bg-[#e3defffe]'/>
            <Select.Content color='purple' variant='soft' position='popper' highContrast>
                <Select.Item value='Beginner'>Beginner: I know nothing about the gym 🤷‍♂️</Select.Item>
                <Select.Item value='Intermediate'>Intermediate: I know a little bit 🏋️</Select.Item>
                <Select.Item value='Advanced'>Advanced: I know how to workout 🦾</Select.Item>
            </Select.Content>
          </Select.Root> 
         
        </div>
        <div className='md:flex justify-center items-center  '>
          <h3 className='text-4xl'>Choose your experience level, your goal, and tell us what you like. It’s as simple as that.</h3>
        </div>
        <div className=''>
          <h2 className='text-3xl lg:text-5xl'>Get started in <span className='font-extrabold text-[#FFFFFF]'>minutes</span>.</h2>
          <Select.Root defaultValue='Select' size="2">
          <p>Choose goal: </p>
            <Select.Trigger color='purple' variant='solid' className='bg-[#e3defffe]'/>
            <Select.Content color='purple' variant='soft' position='popper' highContrast>
                <Select.Item value='Weight'>Lose Weight 🏃</Select.Item>
                <Select.Item value='Muscle'>Build Muscle 💪</Select.Item>
                <Select.Item value='Improve'>Improve Workouts 📈</Select.Item>
            </Select.Content>
          </Select.Root> 
        </div>
        <div className='md:flex justify-center items-center '>
          <h3 className='text-4xl'>After HTrain processes your goals, you’ll receive a custom plan just for you.</h3>
        </div>
        <div className=''>
          <h2 className='text-3xl lg:text-5xl'><span className='font-extrabold text-[#FFFFFF]'>Reach</span> your goals.</h2>
          <Button variant='solid' color='purple' className='px-10 py-5 rounded-md font-extrabold text-white mb-8'>Learn More</Button>
        </div>
        <div className='md:flex justify-center items-center '>
          <h3 className='text-4xl'>Track your progress, reach your goals, and achieve what you always wanted.</h3>
        </div>
      </Grid>
      </div>
  )
}

export default InfoSection
