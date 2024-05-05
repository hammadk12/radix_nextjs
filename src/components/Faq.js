import React from 'react'
import { Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { Card } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const Faq = () => {
  return (
    <div className='mb-[400px] mx-[40px] lg:mx-[400px]'>
        <Card size='5'>
        <div className='md:float-left md:pl-6 md:py-8 lg:text-4xl'>
            <h2>Need Help?</h2>
            <p className='text-2xl'>Check out these resources to <br></br>get you on track.</p>
        </div>
        <Flex>
            
            <Flex direction='column' justify='between' className='md:pl-20 lg:pl-[250px]'>

            <Flex direction='row' py='8'>
            <Link href='#' className='no-underline '>
            <ArrowRightIcon  className='md:ml-6' />
            <span className='ml-5 text-2xl lg:text-3xl'>How to Get Started</span>
            </Link>
            </Flex>

            <Flex direction='row' py='8'>
            <Link href='#' className='no-underline '>
            <ArrowRightIcon className='md:ml-6'/>
            <span className='ml-5 text-2xl lg:text-3xl'>Contact Us</span>
            </Link>
            </Flex>

            <Flex direction='row' py='8'>
            <Link href='#' className='no-underline '>
            <ArrowRightIcon className='md:ml-6'/>
            <span className='ml-5 text-2xl lg:text-3xl'>About HTrain</span>
            </Link>
            </Flex>

            </Flex>
            
           
        </Flex>

        </Card>
    </div>
  )
}

export default Faq

