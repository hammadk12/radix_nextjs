import React from 'react'
import { Toast } from '@radix-ui/react-toast'
import { Button, Card, Grid } from '@radix-ui/themes'

const contact = () => {
  return (
    <div className='px-8 md:mx-[100px] lg:mx-[300px] mt-20 mb-32'> 
    <Card size='5' className='bg-[#853ff916]'>
      <h2 className='text-3xl font-bold text-center'>Contact Us</h2>
      <form 
        action='https://formspree.io/f/xrgnoqgb'
        method='POST'
        > 
        <Grid gap='4' columns='1fr 1fr' rows='auto auto auto auto'>
          <input className="p-4" type='text' name='name' placeholder='Name' required />
          <input className="p-4" type='text' name='email' placeholder='Email' required />
          <input className="p-4 col-span-2" type='text' name='subject' placeholder='Subject' required />
          <textarea className="p-4 resize-none col-span-2" name='message' placeholder='Message' cols={30} rows={10} required ></textarea>
          <Button className='p-4 mt-4 mb-8 col-span-2' type='submit'>Submit</Button>
        </Grid>
      </form>
      </Card>
    </div>
  )
}

export default contact