import React from 'react'
import { Box, Flex } from '@radix-ui/themes'
import Link from 'next/link'

const Faq = () => {
  return (
    <div className='mb-[400px] lg:mx-[400px]'>
        <Flex justify='start' className='mx-20'>
            <Box width='50%' height='400px' className='outline'>
                <h2>Need help?</h2>
                <p>Check out these resources to get you on track.</p>
            </Box>
            
            <Box width='50%' height='400px' className='outline py-10'>
            <Flex direction='column' justify='between' gapY='5'>
            <Link href='https://github.com/dashboard' className='no-underline'>
            <svg width="80" height="60" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <svg x="5" y="4" width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 3.5L1 6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </svg>
            <span>How to get Started</span>
            </Link>
            <br></br>
            <svg width="80" height="60" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <svg x="5" y="4" width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 3.5L1 6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </svg>
            <br></br>
            <svg width="80" height="60" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <svg x="5" y="4" width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 3.5L1 6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </svg>
            </Flex>
            </Box>
           
        </Flex>
    </div>
  )
}

export default Faq
