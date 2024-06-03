import React from 'react'
import { Grid, Select, Button, Card, Flex, Link } from '@radix-ui/themes'


const InfoSection = () => {


  return (
    <div className=' mx-10 md:mx-20 lg:mx-[200px] shadow-xl mb-[200px]'>
      <Card>
      <Grid
        className='grid md:grid-flow-row w-full text-center md:gap-x-32 p-12 gap-y-10 md:gap-y-20'
        columns={{ sm: '1fr', md: '1fr 1fr' }}
        rows={{ lg: '1fr 1fr 1fr'}}
      >
        <div className=''>
          <h2 className='text-3xl lg:text-5xl primary-font mb-10'>Everything in <span className='font-extrabold text-[#8668ffcc]'>one</span> place.</h2>
          <Flex justify='center'>
          <Select.Root size="3" disabled >
            <Select.Trigger color='violet' variant='solid' className='px-2 font-semibold' placeholder='Select Experience Level' />
          </Select.Root> 
         </Flex>
        </div>
        <div className='md:flex justify-center items-center'>
          <h3 className='text-2xl md:text-4xl pb-16 lg:pb-24 border-b '>Choose your experience level, your goal, and tell us what you like. It’s as simple as that.</h3>
        </div>
        <div>
          <h2 className='text-3xl lg:text-5xl primary-font mb-10 mt-6'>Get started in <span className='font-extrabold text-[#8668ffcc]'>minutes</span>.</h2>
          <Select.Root size="3" disabled>
            <Select.Trigger color='violet' variant='solid' placeholder='Select Goal' className='font-semibold'/>
          </Select.Root> 
        </div>
        <div className='md:flex justify-center items-center '>
          <h3 className='text-2xl md:text-4xl mb-6 pb-16 lg:pb-24 border-b'>After HTrain processes your goals, you’ll receive a custom plan just for you.</h3>
        </div>
        <div>
          <h2 className='text-3xl lg:text-5xl mb-6 primary-font'><span className='font-extrabold text-[#8668ffcc]'>Reach</span> your goals.</h2>
          <Link href='/start'>
          <Button variant='solid' color='violet' className='cursor-pointer px-10 py-5 rounded-md font-extrabold text-white mt-5 md:mt-2'>Get Started</Button>
          </Link>
        </div>
        <div className='md:flex justify-center items-center'>
          <h3 className='text-2xl md:text-4xl'>Track your progress, reach your goals, and achieve what you always wanted. </h3>
        </div>
      </Grid>
      </Card>
      </div>
  )
}

export default InfoSection
