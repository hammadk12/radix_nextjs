import React from 'react'
import { Link } from '@radix-ui/themes'
import { HoverCard } from '@radix-ui/react-hover-card'

const Navbar = () => {
  return (
    <div className='p-3 alt-font '>
        <div className='flex justify-between md:mx-20 font-bold text-2xl z-10 mt-6'>
        <Link href='/' underline='hover'><p className='ml-[40px] md:ml-0 text text-[#e3defffe]'>HTrain</p></Link>
        </div>
    </div>
  )
}

export default Navbar