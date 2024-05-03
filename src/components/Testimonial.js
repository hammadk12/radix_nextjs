import React from 'react'
import { Grid } from '@radix-ui/themes'

const Testimonial = () => {
  return (
    <div className='mx-10'>
      <div>
        <h2>More than 1 million users have become their best self. What is stopping you?</h2>
        <h4>Our goal at HTrain is to help people achieve and maintain their fitness goals. We break the stigma of all the fitness industry BS. We want to help YOU and get straight to the point. Train hard, recover harder, watch the success come to you.</h4>
        <p>Start Now.</p>
      </div>
      <div>
        <Grid
          className='grid md:grid-flow-col w-full text-center'
          columns={{ sm: '1fr' }}
          rows='1fr'
        >
          <div className='outline'>
            <h6>HTrain helped gain 20lbs of muscle. I love that the application is straight-forward, no BS, and helps people grow.</h6>
          </div>
          <div className='outline'> 
            <h6>I lost 50 lbs from using HTrain!!! I love this application and couldn’t have lost the weight without it. I also retained muscle and didn’t end up being skinny-fat.</h6>
          </div>
          <div className='outline'>
            <h6>Best fitness app period, I have never seen a app create a custom plan, show me how to achieve my goals, and motivate me to succeed. </h6>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Testimonial