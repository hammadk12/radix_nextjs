import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const current_year = new Date().getFullYear();
  
    return (
      <div>
      <div className='w-full'>
        <div className='text-center py-10 font-bold '>
          <Link href="#"  className='px-1 no-underline'>
            Privacy
          </Link>
          <span>|</span>
          <Link href="#"  className='px-1 no-underline'>
            Terms
          </Link>
          <span>|</span>
          <Link href='#' className='px-1 no-underline'>
            Contact
          </Link>
          <p>Copyright © {current_year}, HTrain. All Rights Reserved.</p>
        </div>
      </div>
      </div>
    )
}

export default Footer