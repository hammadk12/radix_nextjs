import React from 'react'
import { Grid } from '@radix-ui/themes'
import { Card } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'

const Testimonial = () => {
  return (
    <div className='mx-10 mb-[200px] lg:mx-[400px]'>
      <div className='text-left mb-14'>
        <h2 className='mb-10 md:text-3xl lg:text-5xl'>More than 1 million users have become their best self. What is stopping you?</h2>
        <h4 className='mb-6 lg:text-xl'>Our goal at HTrain is to help people achieve and maintain their fitness goals. We break the stigma of all the fitness industry BS. We want to help YOU and get straight to the point. Train hard, recover harder, watch the success come to you.</h4>
        <p className='text-lg md:text-xl '>Start Now.</p>
      </div>
      <div>
        <Card size='5' className=' md:h-[650px] md:text-sm lg:h-[450px] font-medium' >
        <Grid
          className='grid w-full gap-y-10 gap-x-6 md:h-[550px] lg:h-[350px]'
          columns={{
            sm: '1fr',
            md: 'repeat(3, 1fr)',
          }}
          rows={{
            sm: 'repeat(3, 1fr)',
            md: '1fr',
          }}
        >
          <Card className='bg-[#853ff916]'>
          <div className='lg:mt-[40px] p-2'>
            <h2>HTrain helped gain 20lbs of muscle.</h2>
            <p> I love that the application is straight-forward, no BS, and helps people grow.</p>
            <div className='flex items-center gap-x-1'>
            <p>- Ariana B.</p>
              <StarIcon />
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
          </div>
          </Card>

          <Card className='bg-[#853ff916]'>
          <div className='lg:mt-[40px] p-2'> 
            <h2>I lost 50 lbs from using HTrain!!!</h2>
            <p className='text-xs'>I love this application and couldn’t have lost the weight without it. I retained muscle and regained my confidence.</p>
            <div className='flex items-center gap-x-1'>
            <p>- Micheal P.</p>
              <StarIcon />
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
          </div>
          </Card>

          <Card className='bg-[#853ff916]'>
          <div className='lg:mt-[40px] p-2'>
            <h2>Best fitness app period.</h2>
            <p className='text-xs'>I have never seen a app create a custom plan, show me how to achieve my goals, and motivate me to succeed. </p>
            <div className='flex items-center gap-x-1'>
            <p>- Chris B.</p>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          </Card>

        </Grid>
        </Card>
      </div>
    </div>
  )
}

export default Testimonial