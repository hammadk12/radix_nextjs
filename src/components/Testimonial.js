import React from 'react'
import { Grid } from '@radix-ui/themes'
import { Card } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <div className='mx-10 md:mx-20 mb-[200px] lg:mx-[200px]'>
      <div className='text-left mb-14'>
        <h2 className='mb-10 text-2xl md:text-3xl lg:text-5xl'>More than <span className='font-extrabold text-[#8668ffcc]'>1 million users</span> have become their best self. What is stopping you?</h2>
        <h4 className='mb-6 text-lg md:text-xl'>Our goal at HTrain is to help people achieve and maintain their fitness goals. We break the stigma of all the fitness industry BS. We want to help YOU and get straight to the point. Train hard, recover harder, watch the success come to you.</h4>
        <Link href='/start' className='text-lg md:text-xl font-extrabold text-[#8668ffcc]'>
        Start Now.
        </Link>
      </div>
      <div>
        <Card size='5'>
        <Grid
          className='grid md:grid-flow-row w-full text-center md:gap-x-32 gap-y-10 md:gap-y-20'
          columns={{
            sm: '1fr',
            md: 'repeat(3, 1fr)',
          }}
          rows={{
            sm: 'repeat(3, 1fr)',
            md: '1fr',
          }}
        >
          <Card size='4' className='bg-[#853ff916]'>
          <div className='lg:mt-[40px]'>
            <h2 className='primary-font mb-4'>HTrain helped me gain 20lbs of muscle.</h2>
            <p className='mb-4'> I love that the application is straight-forward, no BS, and helps people grow.</p>
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

          <Card size='4' className='bg-[#853ff916]'>
          <div className='lg:mt-[40px]'> 
            <h2 className='primary-font mb-4'>I lost 50 lbs from using HTrain!!!</h2>
            <p className='mb-4'>I love this application and couldn’t have lost the weight without it. I retained muscle and regained my confidence.</p>
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

          <Card size='4' className='bg-[#853ff916]'>
          <div className='lg:mt-[40px]'>
            <h2 className='primary-font mb-4'>Best fitness app period.</h2>
            <p className='mb-4'>I have never seen a app create a custom plan, show me how to achieve my goals, and motivate me to succeed. </p>
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